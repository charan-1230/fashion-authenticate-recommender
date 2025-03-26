
import React from 'react';
import { Heart, ShoppingBag, Share2 } from 'lucide-react';
import BlurImage from '../common/BlurImage';

interface RecommendationItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  score: number;
  image: string;
}

interface OutfitRecommendationProps {
  items: RecommendationItem[];
}

const OutfitRecommendation: React.FC<OutfitRecommendationProps> = ({ items }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Recommended for You</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div 
            key={item.id}
            className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative aspect-[3/4]">
              <BlurImage
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm">
                <Heart size={16} className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="flex items-center">
                  <div className="bg-white/90 text-black text-xs font-semibold rounded-full px-2 py-0.5">
                    {item.score}% Match
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.brand}</p>
                </div>
                <span className="font-semibold text-sm">${item.price}</span>
              </div>
              
              <div className="flex space-x-2 mt-4">
                <button className="flex-1 flex items-center justify-center py-1.5 bg-black text-white text-sm rounded-md transition-colors hover:bg-gray-800">
                  <ShoppingBag size={14} className="mr-1" />
                  Buy Now
                </button>
                <button className="p-1.5 border border-gray-200 rounded-md transition-colors hover:bg-gray-50">
                  <Share2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutfitRecommendation;
