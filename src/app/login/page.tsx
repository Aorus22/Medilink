'use client';

import { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

export default function ScanQR() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const qrRef = useRef(null);

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

      setResult(`Login successful: Welcome ${data.user.username}`);
      return data;
    } catch (err: any) {
      setError(err.message);
      console.error('Login error:', err);
      return null;
    }
  };

  useEffect(() => {
    const html5QrCode = new Html5Qrcode('qr-reader');
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    html5QrCode.start(
      { facingMode: 'environment' },
      config,
      async (decodedText) => {
        setResult(decodedText);
        const loginResult = await handleLogin(decodedText);
        if (loginResult) {
          html5QrCode.stop();
        }
      },
      (error) => {
        console.warn(`QR Code scan error: ${error}`);
      }
    ).catch((err) => {
      console.error(`Unable to start QR scanner: ${err}`);
      setError('Failed to start QR scanner');
    });

    return () => {
      html5QrCode.stop().catch((err) => {
        console.error(`Error stopping QR scanner: ${err}`);
      });
    };
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h1>QR Code Scanner</h1>
        <div id="qr-reader" style={{ width: '300px', height: '300px' }}></div>
        {result && (
          <div style={{ marginTop: '20px' }}>
            <p>Scanned Result: {result}</p>
          </div>
        )}
        {error && (
          <div style={{ marginTop: '20px', color: 'red' }}>
            <p>Error: {error}</p>
          </div>
        )}
      </div>
    </div>
  );
}