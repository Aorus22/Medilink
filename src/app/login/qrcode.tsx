'use client';
import { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { toast } from 'react-toastify';

export default function QRCodeLogin() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [scanning, setScanning] = useState(true);
  const [html5QrCode, setHtml5QrCode] = useState<Html5Qrcode | null>(null);

  const handleLogin = async (qrCode: string) => {
    try {
      const response = await fetch(`/api/login?qr=${encodeURIComponent(qrCode)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to login');
      }

      toast.success('Login successful');

      return data;
    } catch (err: any) {
      toast.error(err.message);
      return null;
    }
  };

  const startScanner = () => {
    setScanning(true);
    setError('');
    setResult('');

    if (html5QrCode) {
      const config = { fps: 10, qrbox: { width: 250, height: 250 } };

      html5QrCode.start(
        { facingMode: 'environment' },
        config,
        async (decodedText) => {
          setResult(decodedText);
          const loginResult = await handleLogin(decodedText);
          if (loginResult) {
            html5QrCode.stop();
            setScanning(false);
          }
        },
        (error) => {
          console.warn(`QR Code scan error: ${error}`);
        }
      ).catch((err) => {
        console.error(`Unable to start QR scanner: ${err}`);
        setError('Failed to start QR scanner');
        setScanning(false);
      });
    }
  };

  useEffect(() => {
    const qrScanner = new Html5Qrcode('qr-reader');
    setHtml5QrCode(qrScanner);

    return () => {
      qrScanner.stop().catch((err) => {
        console.error(`Error stopping QR scanner: ${err}`);
      });
    };
  }, []);

  useEffect(() => {
    if (html5QrCode && scanning) {
      startScanner();
    }
  }, [html5QrCode]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-4 text-center">
        <p className="text-gray-600 mb-4">
          Scan the QR code from your mobile app to login securely
        </p>

        <div
          id="qr-reader"
          className="w-full max-w-sm h-64 mx-auto rounded-lg overflow-hidden border-2 border-teal-500"
        ></div>
      </div>

      {result && !error && (
        <div className="mt-4 p-3 w-full bg-green-100 text-green-700 rounded-lg">
          {result}
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 w-full bg-red-100 text-red-700 rounded-lg flex flex-col items-center">
          <p>Error: {error}</p>
          <button
            onClick={startScanner}
            className="mt-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}