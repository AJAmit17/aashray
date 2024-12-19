'use client';

import { useState } from 'react';

export default function DisasterForm() {
  const [formData, setFormData] = useState({
    type: '',
    location: { lat: '', lng: '' },
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/disasters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          location: [Number(formData.location.lat), Number(formData.location.lng)],
        }),
      });

      if (response.ok) {
        setFormData({ type: '', location: { lat: '', lng: '' }, description: '' });
        alert('Disaster added successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4">
      <div className="mb-4">
        <label className="block mb-2">Type:</label>
        <input
          type="text"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Latitude:</label>
        <input
          type="number"
          step="any"
          value={formData.location.lat}
          onChange={(e) => setFormData({
            ...formData,
            location: { ...formData.location, lat: e.target.value }
          })}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Longitude:</label>
        <input
          type="number"
          step="any"
          value={formData.location.lng}
          onChange={(e) => setFormData({
            ...formData,
            location: { ...formData.location, lng: e.target.value }
          })}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Description:</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Disaster
      </button>
    </form>
  );
}
