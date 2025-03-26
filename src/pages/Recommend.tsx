
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import StyleProfile from '@/components/recommendation/StyleProfile';
import OutfitRecommendation from '@/components/recommendation/OutfitRecommendation';
import AnimatedButton from '@/components/common/AnimatedButton';
import { Sparkles, RefreshCw, Upload } from 'lucide-react';

// Sample recommendation data
const recommendedItems = [
  {
    id: '1',
    name: 'Slim Fit Cotton Shirt',
    brand: 'Minimalist',
    price: 89,
    score: 95,
    image: 'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=2787&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Tapered Wool Trousers',
    brand: 'Premium Co.',
    price: 120,
    score: 92,
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Leather Minimal Jacket',
    brand: 'Artisan',
    price: 250,
    score: 88,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2936&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Classic White Sneakers',
    brand: 'Urban',
    price: 110,
    score: 87,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2864&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Cashmere Scarf',
    brand: 'Luxe',
    price: 85,
    score: 82,
    image: 'https://images.unsplash.com/photo-1584736286279-5d85e833eea6?q=80&w=2874&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Minimalist Watch',
    brand: 'Tempus',
    price: 175,
    score: 79,
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=2940&auto=format&fit=crop',
  },
];

const Recommend = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'recommendations'>('profile');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateRecommendations = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setActiveTab('recommendations');
    }, 1500);
  };

  return (
    <Layout>
      <div className="page-container py-12 md:py-20">
        <SectionHeading
          title="Style Recommendations"
          subtitle="Get personalized fashion recommendations based on your preferences and body measurements."
        />

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-lg bg-gray-100">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'profile' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                Style Profile
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'recommendations' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('recommendations')}
                disabled={isLoading}
              >
                Recommendations
              </button>
            </div>
          </div>

          <div className="animate-fade-in">
            {activeTab === 'profile' ? (
              <div className="space-y-8">
                <StyleProfile />
                
                <div className="flex justify-center">
                  <AnimatedButton 
                    onClick={handleGenerateRecommendations}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw size={16} className="mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} className="mr-2" />
                        Generate Recommendations
                      </>
                    )}
                  </AnimatedButton>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Enhance Your Recommendations</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Upload your photos for even more personalized style recommendations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 border border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <Upload size={24} className="mx-auto mb-2 text-gray-400" />
                      <p className="text-sm font-medium">Upload Outfit Photo</p>
                      <p className="text-xs text-gray-500 mt-1">Get suggestions for similar styles</p>
                    </div>
                    <div className="flex-1 border border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <Upload size={24} className="mx-auto mb-2 text-gray-400" />
                      <p className="text-sm font-medium">Upload Body Photo</p>
                      <p className="text-xs text-gray-500 mt-1">For precise fit recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <OutfitRecommendation items={recommendedItems} />
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">About Your Recommendations</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    These recommendations are generated based on your style profile and preferences. The AI considers your body measurements, style preferences, and favorite brands to create a personalized collection just for you.
                  </p>
                  <p className="text-sm text-gray-600">
                    Each item shows a match percentage that indicates how well it fits your style profile.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <AnimatedButton variant="outline" onClick={() => setActiveTab('profile')}>
                    Update Your Style Profile
                  </AnimatedButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recommend;
