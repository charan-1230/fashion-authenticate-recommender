
import React, { useState } from 'react';
import { User, Bookmark, Heart, Tag } from 'lucide-react';
import AnimatedButton from '../common/AnimatedButton';

type StylePreference = 'casual' | 'formal' | 'streetwear' | 'vintage' | 'minimalist';

const StyleProfile = () => {
  const [preferences, setPreferences] = useState<StylePreference[]>([]);

  const togglePreference = (pref: StylePreference) => {
    if (preferences.includes(pref)) {
      setPreferences(preferences.filter(p => p !== pref));
    } else {
      setPreferences([...preferences, pref]);
    }
  };

  const stylePreferenceOptions: { value: StylePreference; label: string; icon: React.ReactNode }[] = [
    { value: 'casual', label: 'Casual', icon: <Tag size={16} /> },
    { value: 'formal', label: 'Formal', icon: <Tag size={16} /> },
    { value: 'streetwear', label: 'Streetwear', icon: <Tag size={16} /> },
    { value: 'vintage', label: 'Vintage', icon: <Tag size={16} /> },
    { value: 'minimalist', label: 'Minimalist', icon: <Tag size={16} /> },
  ];

  return (
    <div className="glass-card rounded-xl p-6 md:p-8 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
          <User size={24} />
        </div>
        <h3 className="text-xl font-semibold">Your Style Profile</h3>
        <p className="text-sm text-gray-500 mt-2">Personalize your recommendations</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select your style preferences
          </label>
          <div className="flex flex-wrap gap-2">
            {stylePreferenceOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => togglePreference(option.value)}
                className={`flex items-center px-3 py-1.5 rounded-full text-sm transition-all ${
                  preferences.includes(option.value)
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.icon}
                <span className="ml-1">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Body measurements
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Height (cm)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Weight (kg)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Favorite brands
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Add your favorite brands"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black">
              <Heart size={18} />
            </button>
          </div>
        </div>

        <AnimatedButton className="w-full">
          <Bookmark className="mr-2 h-4 w-4" />
          Save Profile
        </AnimatedButton>
      </div>
    </div>
  );
};

export default StyleProfile;
