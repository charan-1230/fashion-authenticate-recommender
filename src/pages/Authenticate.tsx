
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import NFCAuthentication from '@/components/authentication/NFCAuthentication';
import QRCodeAuthentication from '@/components/authentication/QRCodeAuthentication';
import { Smartphone, CameraIcon } from 'lucide-react';

const Authenticate = () => {
  const [activeTab, setActiveTab] = useState<'nfc' | 'qr'>('nfc');

  return (
    <Layout>
      <div className="page-container py-12 md:py-20">
        <SectionHeading
          title="Authenticate Your Product"
          subtitle="Verify the authenticity of your fashion items using our cutting-edge technology."
        />

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <button
              className={`flex items-center p-4 rounded-lg transition-all ${
                activeTab === 'nfc'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('nfc')}
            >
              <Smartphone className="mr-2 h-5 w-5" />
              NFC Verification
            </button>
            <button
              className={`flex items-center p-4 rounded-lg transition-all ${
                activeTab === 'qr'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('qr')}
            >
              <CameraIcon className="mr-2 h-5 w-5" />
              QR & Image Verification
            </button>
          </div>

          <div className="animate-fade-in">
            {activeTab === 'nfc' ? <NFCAuthentication /> : <QRCodeAuthentication />}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">How Authentication Works</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-center pt-1 text-white bg-black rounded-full w-6 h-6 text-sm">
                  1
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-medium">Select Verification Method</h4>
                  <p className="text-sm text-gray-500">
                    Choose between NFC tag scanning or AI-powered image verification.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-center pt-1 text-white bg-black rounded-full w-6 h-6 text-sm">
                  2
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-medium">Scan Your Product</h4>
                  <p className="text-sm text-gray-500">
                    For NFC, tap your phone against the product's NFC tag. For QR, take a clear photo of the product or QR code.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-center pt-1 text-white bg-black rounded-full w-6 h-6 text-sm">
                  3
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-medium">Verification Process</h4>
                  <p className="text-sm text-gray-500">
                    Our system securely checks the product against our database of authentic items.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-center pt-1 text-white bg-black rounded-full w-6 h-6 text-sm">
                  4
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-medium">Get Results</h4>
                  <p className="text-sm text-gray-500">
                    Receive instant feedback on your product's authenticity with detailed information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Authenticate;
