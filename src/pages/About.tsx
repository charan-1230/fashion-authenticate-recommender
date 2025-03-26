
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import FeatureCard from '@/components/common/FeatureCard';
import { Smartphone, Sparkles, ShoppingBag, Shield, Users, Star, Code } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="page-container py-12 md:py-20">
        <SectionHeading
          title="About Our Platform"
          subtitle="Revolutionizing fashion with cutting-edge authentication technology and AI-driven recommendations."
        />

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 mb-6">
            Our platform combines state-of-the-art authentication technology with advanced AI recommendation systems to provide a comprehensive solution for fashion enthusiasts and brands alike.
          </p>
          <p className="text-lg text-gray-600">
            We're committed to fighting counterfeiting in the fashion industry while helping users discover their perfect style with personalized recommendations.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Core Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Shield />}
              title="NFC & QR Authentication"
              description="Cutting-edge verification technology that instantly validates product authenticity with a simple tap or scan."
            />
            <FeatureCard
              icon={<Sparkles />}
              title="AI Recommendation Engine"
              description="Deep learning algorithms that analyze your preferences and body measurements to suggest perfect outfit combinations."
            />
            <FeatureCard
              icon={<ShoppingBag />}
              title="E-Commerce Integration"
              description="Seamless connections to major retailers for real-time pricing and availability information with direct purchase links."
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-center">How It Works</h2>
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white mb-4 z-10 relative">
                  1
                </div>
                <h3 className="text-lg font-medium mb-2">Verification</h3>
                <p className="text-sm text-gray-500">Authenticate your fashion items using NFC or AI-enhanced QR code scanning.</p>
              </div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white mb-4 z-10 relative">
                  2
                </div>
                <h3 className="text-lg font-medium mb-2">Profile Creation</h3>
                <p className="text-sm text-gray-500">Create your style profile with preferences, measurements, and favorite brands.</p>
              </div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white mb-4 z-10 relative">
                  3
                </div>
                <h3 className="text-lg font-medium mb-2">AI Analysis</h3>
                <p className="text-sm text-gray-500">Our AI analyzes your profile to generate personalized style recommendations.</p>
              </div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white mb-4 z-10 relative">
                  4
                </div>
                <h3 className="text-lg font-medium mb-2">Shop Confidently</h3>
                <p className="text-sm text-gray-500">Browse recommendations and purchase items directly from trusted retailers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-8">
              We envision a future where every fashion purchase is authentic and perfectly matched to the individual's style. By combining authentication technology with personalized recommendations, we're creating a new standard for the fashion industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-sm font-medium bg-white px-4 py-2 rounded-full shadow-sm">
                <Users size={16} className="mr-2" />
                For Fashion Enthusiasts
              </div>
              <div className="flex items-center text-sm font-medium bg-white px-4 py-2 rounded-full shadow-sm">
                <Star size={16} className="mr-2" />
                For Premium Brands
              </div>
              <div className="flex items-center text-sm font-medium bg-white px-4 py-2 rounded-full shadow-sm">
                <Code size={16} className="mr-2" />
                For Retail Innovation
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
