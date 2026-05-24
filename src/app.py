import os
import json
import httpx
import redis

from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()

# Redis connection
r = redis.Redis(
    host="localhost",
    port=6379,
    decode_responses=True
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CACHE_EXPIRY = 300  # 5 minutes


@app.get("/")
async def home():
    return {"message": "Weather API Running"}

@app.get("/weather/{city}")
async def current_weather(city: str):

    cache_key = f"weather:{city.lower()}"

    cached_data = r.get(cache_key)

    if cached_data:
        return {
            "source": "redis_cache",
            "data": json.loads(cached_data)
        }

    # 2. CALL WEATHER API
    current_weather_url = (
        f"{os.getenv('CURRENT_WEATHER_ENDPOINT')}"
        f"?key={os.getenv('WEATHER_API_KEY')}"
        f"&q={city}"
    )

    async with httpx.AsyncClient() as client:
        response = await client.get(current_weather_url)

    data = response.json()

    r.setex(
        cache_key,
        CACHE_EXPIRY,
        json.dumps(data)
    )

    return {
        "source": "weather_api",
        "data": data
    }


@app.get("/forecast/{city}/{days}")
async def forecast(city: str, days: int):
    

    cache_key = f"forecast:{city.lower()}:{days}"

    cached_data = r.get(cache_key)

    if cached_data:
        return {
            "source": "redis_cache",
            "data": json.loads(cached_data)
        }

    # 2. CALL WEATHER API
    forecast_url = (
        f"{os.getenv('FORECAST_WEATHER_URL')}"
        f"?key={os.getenv('WEATHER_API_KEY')}"
        f"&q={city}"
        f"&days={days}"
        f"&alerts=yes"
        f"&aqi=yes"
    )

    async with httpx.AsyncClient() as client:
        response = await client.get(forecast_url)
    

    data = response.json()

    if "error" in data:
        return data

    # 3. STORE IN REDIS
    r.setex(
        cache_key,
        CACHE_EXPIRY,
        json.dumps(data)
    )

    return {
        "source": "weather_api",
        "data": data
    }

    
@app.get("/analytics")
def analytics():

    data = []

    for key in r.scan_iter("forecast:*"):

        value = r.get(key)

        if value:
            data.append(json.loads(value))

    return data
