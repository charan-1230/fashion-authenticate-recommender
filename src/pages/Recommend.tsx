
import React, { useState, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import StyleProfile from '@/components/recommendation/StyleProfile';
import OutfitRecommendationWrapper from '@/components/recommendation/OutfitRecommendationWrapper';
import AnimatedButton from '@/components/common/AnimatedButton';
import { Sparkles, RefreshCw, Upload } from 'lucide-react';

// Sample recommendation data
const recommendedItems = [
  {
    id: '1',
    name: 'Slim Fit Cotton Shirt',
    brand: 'Adidas',
    price: 2499,
    score: 95,
    image: 'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=2787&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Tapered Wool Trousers',
    brand: 'Adidas',
    price: 3499,
    score: 92,
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Leather Minimal Jacket',
    brand: 'Adidas',
    price: 7999,
    score: 88,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2936&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Classic White Sneakers',
    brand: 'Adidas',
    price: 4299,
    score: 87,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2864&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Cashmere Scarf',
    brand: 'Adidas',
    price: 1999,
    score: 82,
    image: 'https://images.unsplash.com/photo-1584736286279-5d85e833eea6?q=80&w=2874&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Minimalist Watch',
    brand: 'Adidas',
    price: 5999,
    score: 79,
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=2940&auto=format&fit=crop',
  },
];

const Recommend = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'recommendations'>('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const outfitFileInputRef = useRef<HTMLInputElement>(null);
  const bodyFileInputRef = useRef<HTMLInputElement>(null);

  const handleGenerateRecommendations = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setActiveTab('recommendations');
    }, 1500);
  };

  const handleOutfitUploadClick = () => {
    if (outfitFileInputRef.current) {
      outfitFileInputRef.current.click();
    }
  };

  const handleBodyUploadClick = () => {
    if (bodyFileInputRef.current) {
      bodyFileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      // For this demo, we're just displaying the filename
      // A real implementation would upload and process the file
    }
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
                    <input 
                      type="file" 
                      ref={outfitFileInputRef} 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <div 
                      className="flex-1 border border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={handleOutfitUploadClick}
                    >
                      <Upload size={24} className="mx-auto mb-2 text-gray-400" />
                      <p className="text-sm font-medium">Upload Outfit Photo</p>
                      <p className="text-xs text-gray-500 mt-1">Get suggestions for similar styles</p>
                      {uploadedFileName && (
                        <p className="text-xs text-green-600 mt-2">{uploadedFileName}</p>
                      )}
                    </div>
                    <input 
                      type="file" 
                      ref={bodyFileInputRef} 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <div 
                      className="flex-1 border border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={handleBodyUploadClick}
                    >
                      <Upload size={24} className="mx-auto mb-2 text-gray-400" />
                      <p className="text-sm font-medium">Upload Body Photo</p>
                      <p className="text-xs text-gray-500 mt-1">For precise fit recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <OutfitRecommendationWrapper items={recommendedItems} />
                
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
