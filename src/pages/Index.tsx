
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import FeatureCard from '@/components/common/FeatureCard';
import AnimatedButton from '@/components/common/AnimatedButton';
import BlurImage from '@/components/common/BlurImage';
import { Smartphone, Sparkles, ShoppingBag, Shield, Scan, CameraIcon } from 'lucide-react';
import NFCAuthentication from '@/components/authentication/NFCAuthentication';
import StyleProfile from '@/components/recommendation/StyleProfile';
import OutfitRecommendation from '@/components/recommendation/OutfitRecommendation';

// Sample outfit recommendation data
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
];

const Index = () => {
  useEffect(() => {
    // Add animation classes after component mounts
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/50" />
          <BlurImage
            src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=2874&auto=format&fit=crop"
            alt="Fashion Clothing"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="page-container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Authenticate & <br />
              <span className="text-gradient">Discover Perfect Style</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Verify the authenticity of your fashion items and get personalized style recommendations powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/authenticate">
                <AnimatedButton size="lg">
                  <Scan className="mr-2 h-5 w-5" />
                  Verify Product
                </AnimatedButton>
              </Link>
              <Link to="/recommend">
                <AnimatedButton variant="outline" size="lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get Recommendations
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container bg-gray-50">
        <div className="page-container">
          <SectionHeading
            title="Cutting-Edge Authentication"
            subtitle="Verify the authenticity of your fashion items with our state-of-the-art technology."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal opacity-0">
              <NFCAuthentication />
            </div>
            
            <div className="space-y-6 reveal opacity-0">
              <h3 className="text-2xl font-semibold mb-4">Ensure Your Products Are Genuine</h3>
              <p className="text-gray-600">
                Our authentication system uses cutting-edge technology to verify your products. Simply tap your phone on the NFC tag or take a photo of a specific design element.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Shield size={20} className="text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">NFC Verification</h4>
                    <p className="text-sm text-gray-500">
                      Tap your smartphone on the NFC tag to instantly verify authenticity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CameraIcon size={20} className="text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">AI-Enhanced QR Verification</h4>
                    <p className="text-sm text-gray-500">
                      Take a photo of specific design elements for AI-powered verification.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Shield size={20} className="text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Cross-Verification</h4>
                    <p className="text-sm text-gray-500">
                      Multiple methods ensure the highest level of verification accuracy.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link to="/authenticate">
                <AnimatedButton>
                  Learn More About Authentication
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation Section */}
      <section className="section-container">
        <div className="page-container">
          <SectionHeading
            title="Personalized Style Recommendations"
            subtitle="Our AI analyzes your preferences and body measurements to suggest perfect outfits."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1 reveal opacity-0">
              <h3 className="text-2xl font-semibold mb-4">Discover Your Perfect Style</h3>
              <p className="text-gray-600">
                Our advanced AI recommendation engine analyzes your unique profile to suggest perfectly matched outfits and accessories tailored just for you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Sparkles size={20} className="text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Personalized Matching</h4>
                    <p className="text-sm text-gray-500">
                      AI analyzes your body measurements, skin tone, and style preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Sparkles size={20} className="text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Outfit Scoring</h4>
                    <p className="text-sm text-gray-500">
                      Each recommended item comes with a compatibility score.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ShoppingBag size={20} className="text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Shop Directly</h4>
                    <p className="text-sm text-gray-500">
                      Find and purchase recommended items from major retailers instantly.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link to="/recommend">
                <AnimatedButton>
                  Explore Style Recommendations
                </AnimatedButton>
              </Link>
            </div>
            
            <div className="order-1 md:order-2 reveal opacity-0">
              <StyleProfile />
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Preview */}
      <section className="section-container bg-gray-50">
        <div className="page-container">
          <div className="reveal opacity-0">
            <OutfitRecommendation items={recommendedItems} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-container relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <BlurImage
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop"
            alt="Fashion Store"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="page-container relative z-10 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Experience the Future of Fashion
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              Authenticate your products, discover perfect styles, and shop with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/authenticate">
                <AnimatedButton
                  variant="primary"
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100"
                >
                  Get Started Now
                </AnimatedButton>
              </Link>
              <Link to="/about">
                <AnimatedButton
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
