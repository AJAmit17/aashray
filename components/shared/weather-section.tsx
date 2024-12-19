import React from 'react';

const WeatherSection: React.FC = () => {
  return (
    <section className="w-full bg-card rounded-xl shadow-md p-6">
      <div className="container mx-auto">
        <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-lg overflow-hidden border border-border">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=m/s&zoom=8&overlay=wind&product=ecmwf&level=surface&lat=12.2&lon=78.261&detailLat=12.683&detailLon=78.261&detail=true&pressure=true&message=true"
            frameBorder="0"
            title="Weather Map"
            allow="fullscreen"
          />
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;
