import React, { useState, useRef } from 'react';
import { Camera, CheckCircle, XCircle, UploadCloud } from 'lucide-react';
import AnimatedButton from '../common/AnimatedButton';

const QRCodeAuthentication = () => {
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('Take a photo of the product QR code or design element');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
      simulateProcessing();
    };
    reader.readAsDataURL(file);
  };

  const simulateProcessing = () => {
    setStatus('processing');
    setMessage('Processing image... Analyzing product details');
    
    // Always verify successfully after processing
    setTimeout(() => {
      setStatus('success');
      setMessage('Authentication successful! This product is genuine.');
    }, 3000);
  };

  const resetAuthentication = () => {
    setStatus('idle');
    setMessage('Take a photo of the product QR code or design element');
    setImagePreview(null);
    setUploadedFileName('');
  };

  return (
    <div className="glass-card rounded-xl p-6 md:p-8 w-full max-w-md mx-auto">
      <div className="text-center">
        <div className="mx-auto w-24 h-24 flex items-center justify-center mb-6 relative overflow-hidden rounded-lg">
          {imagePreview ? (
            <img 
              src={imagePreview} 
              alt="Product" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="bg-gray-100 w-full h-full flex items-center justify-center">
              {status === 'processing' ? (
                <div className="w-10 h-10 rounded-full border-4 border-t-transparent border-gray-800 animate-spin" />
              ) : (
                <Camera size={32} className="text-gray-500" />
              )}
            </div>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-2">AI-Enhanced QR Verification</h3>
        <p className="text-gray-500 mb-6">{message}</p>
        
        {uploadedFileName && status === 'idle' && (
          <p className="text-xs text-green-600 mb-4">{uploadedFileName}</p>
        )}

        {status === 'idle' ? (
          <div className="space-y-4">
            <input 
              type="file" 
              ref={fileInputRef}
              className="hidden" 
              accept="image/*" 
              onChange={handleFileUpload}
            />
            <AnimatedButton 
              className="w-full"
              onClick={handleFileUploadClick}
            >
              <UploadCloud className="mr-2 h-4 w-4" />
              Upload Image
            </AnimatedButton>
            <p className="text-xs text-gray-400">
              Or take a photo directly with your camera
            </p>
            <AnimatedButton 
              variant="outline" 
              className="w-full"
              onClick={handleFileUploadClick}
            >
              <Camera className="mr-2 h-4 w-4" />
              Take Photo
            </AnimatedButton>
          </div>
        ) : status === 'processing' ? (
          <AnimatedButton disabled variant="ghost" className="w-full">
            Processing...
          </AnimatedButton>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              {status === 'success' ? (
                <CheckCircle size={24} className="text-green-500 mr-2" />
              ) : (
                <XCircle size={24} className="text-red-500 mr-2" />
              )}
              <span className={status === 'success' ? "text-green-500" : "text-red-500"}>
                {status === 'success' ? 'Authentic product' : 'Verification failed'}
              </span>
            </div>
            <AnimatedButton onClick={resetAuthentication} variant="secondary" className="w-full">
              Try Again
            </AnimatedButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeAuthentication;
