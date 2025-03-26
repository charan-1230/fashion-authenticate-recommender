
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { ExternalLink, ShoppingCart } from 'lucide-react';

interface Marketplace {
  name: string;
  price: number;
  logo: string;
  url: string;
}

interface MarketplacePopupProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productImage: string;
  marketplaces: Marketplace[];
}

const MarketplacePopup: React.FC<MarketplacePopupProps> = ({
  isOpen,
  onClose,
  productName,
  productImage,
  marketplaces,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Shop {productName}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 my-4">
          <div className="sm:col-span-2">
            <img 
              src={productImage} 
              alt={productName} 
              className="w-full h-auto rounded-md object-cover aspect-square"
            />
          </div>
          
          <div className="sm:col-span-3 space-y-4">
            <h3 className="font-medium">{productName}</h3>
            
            <div className="space-y-3">
              {marketplaces.map((marketplace, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <img 
                      src={marketplace.logo} 
                      alt={marketplace.name} 
                      className="w-8 h-8 object-contain"
                    />
                    <span>{marketplace.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">₹{marketplace.price}</span>
                    <Button size="sm" asChild>
                      <a href={marketplace.url} target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Buy
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-xs text-gray-500 mt-4">
              *Prices may vary. Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button variant="outline" size="sm" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-1" />
              View More Options
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MarketplacePopup;
