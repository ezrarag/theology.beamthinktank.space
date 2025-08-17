'use client';

import { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

const cities = [
  { id: 1, name: 'New York', state: 'NY', country: 'USA' },
  { id: 2, name: 'Los Angeles', state: 'CA', country: 'USA' },
  { id: 3, name: 'Chicago', state: 'IL', country: 'USA' },
  { id: 4, name: 'Toronto', state: 'ON', country: 'Canada' },
  { id: 5, name: 'London', state: '', country: 'UK' },
  { id: 6, name: 'Berlin', state: '', country: 'Germany' },
  { id: 7, name: 'Mumbai', state: 'MH', country: 'India' },
  { id: 8, name: 'Tokyo', state: '', country: 'Japan' },
];

export default function CitySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Find Your Local Chapter
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Connect with fellow learners and practitioners in your area. 
            Join local study groups, events, and community gatherings.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-white border-2 border-slate-300 rounded-lg px-4 py-3 text-left shadow-sm hover:border-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-slate-400 mr-3" />
                  <span className="text-slate-900 font-medium">
                    {selectedCity.name}
                    {selectedCity.state && `, ${selectedCity.state}`}
                    {`, ${selectedCity.country}`}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {isOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-slate-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => {
                      setSelectedCity(city);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors ${
                      selectedCity.id === city.id ? 'bg-blue-50 text-blue-600' : 'text-slate-900'
                    }`}
                  >
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-slate-400 mr-3" />
                      <span>
                        {city.name}
                        {city.state && `, ${city.state}`}
                        {`, ${city.country}`}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="text-slate-600 mb-4">
              Selected: <span className="font-semibold text-blue-600">{selectedCity.name}</span>
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              View Chapter Details
            </button>
          </div>
        </div>

        {/* Chapter Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
            <p className="text-slate-600">Active Chapters</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
            <p className="text-slate-600">Active Members</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
            <p className="text-slate-600">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
}
