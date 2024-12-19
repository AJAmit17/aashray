'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const WeatherSection: React.FC = () => {
  const [coordinates, setCoordinates] = useState({ lat: 12.2, lon: 78.261 });
  const [locationRequested, setLocationRequested] = useState(false);
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
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

  const handleWeatherClick = () => {
    window.location.href = '/weather';
  };

  if (!isClient) {
    return null;
  }

  return (
    <section className="w-full bg-card rounded-xl shadow-md p-6">
      <div className="container mx-auto">
        {!locationRequested && (
          <div className="mb-4 text-center">
            <Button 
              onClick={requestLocation}
              variant="outline"
              className="mb-2"
            >
              Share Your Location for Local Weather
            </Button>
          </div>
        )}
        <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-lg overflow-hidden border border-border">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src={`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=m/s&zoom=8&overlay=wind&product=ecmwf&level=surface&lat=${coordinates.lat}&lon=${coordinates.lon}&detailLat=${coordinates.lat}&detailLon=${coordinates.lon}&detail=true&pressure=true&message=true`}
            frameBorder="0"
            title="Weather Map"
            allow="fullscreen"
          />
        </div>
        <div className="mt-4 text-center">
          <Button 
            onClick={handleWeatherClick}
            variant="default"
          >
            View Detailed Weather
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;
