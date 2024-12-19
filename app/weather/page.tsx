'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function WeatherPage() {
  const [coordinates, setCoordinates] = useState({ lat: 12.2, lon: 78.261 });
  const [locationRequested, setLocationRequested] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Try to get location on page load
    requestLocation();
  }, []);

  const requestLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
          setLocationRequested(true);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocationRequested(true);
        }
      );
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-6">Detailed Weather Information</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Main Weather Map */}
        <Card className="col-span-2">
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src={`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=m/s&zoom=8&overlay=wind&product=ecmwf&level=surface&lat=${coordinates.lat}&lon=${coordinates.lon}&detailLat=${coordinates.lat}&detailLon=${coordinates.lon}&detail=true&pressure=true&message=true`}
              frameBorder="0"
              title="Weather Map"
              allow="fullscreen"
            />
          </div>
        </Card>

        {/* Temperature Map */}
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Temperature Map</h2>
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src={`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=m/s&zoom=8&overlay=temp&product=ecmwf&level=surface&lat=${coordinates.lat}&lon=${coordinates.lon}`}
              frameBorder="0"
              title="Temperature Map"
            />
          </div>
        </Card>

        {/* Precipitation Map */}
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Precipitation Map</h2>
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src={`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=m/s&zoom=8&overlay=rain&product=ecmwf&level=surface&lat=${coordinates.lat}&lon=${coordinates.lon}`}
              frameBorder="0"
              title="Precipitation Map"
            />
          </div>
        </Card>
      </div>

      {/* Location Button */}
      <div className="mt-6 text-center">
        <Button 
          onClick={requestLocation}
          variant="outline"
        >
          Update Location
        </Button>
      </div>
    </div>
  );
}
