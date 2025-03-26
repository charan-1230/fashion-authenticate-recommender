
import React, { useState } from 'react';
import { Smartphone, CheckCircle, XCircle } from 'lucide-react';
import AnimatedButton from '../common/AnimatedButton';

const NFCAuthentication = () => {
  const [status, setStatus] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('Tap to start NFC verification');

  const simulateNFCScan = () => {
    setStatus('scanning');
    setMessage('Scanning... Place your phone near the NFC tag on your product');
    
    // Simulate NFC scanning process
    setTimeout(() => {
      // Random success/failure for demo purposes
      const isSuccess = Math.random() > 0.3;
      
      if (isSuccess) {
        setStatus('success');
        setMessage('Authentication successful! This product is genuine.');
      } else {
        setStatus('error');
        setMessage('Authentication failed. This product might be counterfeit.');
      }
    }, 2500);
  };

  const resetScan = () => {
    setStatus('idle');
    setMessage('Tap to start NFC verification');
  };

  return (
    <div className="glass-card rounded-xl p-6 md:p-8 w-full max-w-md mx-auto">
      <div className="text-center">
        <div className="mx-auto w-16 h-16 flex items-center justify-center mb-6">
          {status === 'idle' && <Smartphone size={48} className="text-gray-800" />}
          {status === 'scanning' && (
            <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-gray-800 animate-spin" />
          )}
          {status === 'success' && <CheckCircle size={48} className="text-green-500" />}
          {status === 'error' && <XCircle size={48} className="text-red-500" />}
        </div>

        <h3 className="text-xl font-semibold mb-2">NFC Authentication</h3>
        <p className="text-gray-500 mb-6">{message}</p>

        {status === 'idle' ? (
          <AnimatedButton onClick={simulateNFCScan} className="w-full">
            Start Scanning
          </AnimatedButton>
        ) : status === 'scanning' ? (
          <AnimatedButton disabled variant="ghost" className="w-full">
            Scanning...
          </AnimatedButton>
        ) : (
          <AnimatedButton onClick={resetScan} variant="secondary" className="w-full">
            Scan Again
          </AnimatedButton>
        )}
      </div>
    </div>
  );
};

export default NFCAuthentication;
