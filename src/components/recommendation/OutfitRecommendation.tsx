
import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import AnimatedButton from '../common/AnimatedButton';

interface Item {
  id: string;
  name: string;
  brand: string;
  price: number;
  score: number;
  image: string;
}

interface OutfitRecommendationProps {
  items: Item[];
  onBuyNowClick?: (item: Item) => void;
}

const OutfitRecommendation: React.FC<OutfitRecommendationProps> = ({ 
  items,
  onBuyNowClick = () => {} 
}) => {
  return (
    <div className="glass-card rounded-xl p-6 md:p-8 w-full mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold">Your Recommended Outfits</h3>
        <p className="text-sm text-gray-500 mt-2">Based on your style preferences and measurements</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-black text-white text-xs font-semibold rounded-full px-2 py-1 flex items-center">
                <Star size={12} className="mr-1 text-yellow-400" />
                <span>{item.score}% Match</span>
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold truncate">{item.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{item.brand}</p>
              
              <div className="flex justify-between items-center">
                <span className="font-semibold">₹{item.price}</span>
                <AnimatedButton size="sm" variant="outline" onClick={() => onBuyNowClick(item)}>
                  <ShoppingBag size={14} className="mr-1" />
                  Buy Now
                </AnimatedButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutfitRecommendation;
