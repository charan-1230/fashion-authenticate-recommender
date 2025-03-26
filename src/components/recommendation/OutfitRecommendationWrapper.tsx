
import React, { useState } from 'react';
import OutfitRecommendation from './OutfitRecommendation';
import MarketplacePopup from './MarketplacePopup';

interface Item {
  id: string;
  name: string;
  brand: string;
  price: number;
  score: number;
  image: string;
}

interface OutfitRecommendationWrapperProps {
  items: Item[];
}

const OutfitRecommendationWrapper: React.FC<OutfitRecommendationWrapperProps> = ({ items }) => {
  const [isMarketplacePopupOpen, setIsMarketplacePopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleBuyNowClick = (item: Item) => {
    setSelectedItem(item);
    setIsMarketplacePopupOpen(true);
  };

  const closeMarketplacePopup = () => {
    setIsMarketplacePopupOpen(false);
  };

  // Mock marketplace data
  const marketplaces = [
    {
      name: 'Amazon',
      price: selectedItem?.price || 0,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png',
      url: '#',
    },
    {
      name: 'Flipkart',
      price: Math.round((selectedItem?.price || 0) * 0.95), // 5% less than Amazon
      logo: 'https://logo.clearbit.com/flipkart.com',
      url: '#',
    },
    {
      name: 'Myntra',
      price: Math.round((selectedItem?.price || 0) * 0.98), // 2% less than Amazon
      logo: 'https://logo.clearbit.com/myntra.com',
      url: '#',
    },
  ];

  return (
    <>
      <OutfitRecommendation items={items} onBuyNowClick={handleBuyNowClick} />
      
      {selectedItem && (
        <MarketplacePopup
          isOpen={isMarketplacePopupOpen}
          onClose={closeMarketplacePopup}
          productName={selectedItem.name}
          productImage={selectedItem.image}
          marketplaces={marketplaces}
        />
      )}
    </>
  );
};

export default OutfitRecommendationWrapper;
