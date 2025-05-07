import { Server as HTTPServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { parse } from 'url';

interface SensorData {
  timestamp: string;
  temperature: string;
  spo2: string;
  heartrate: string;
  blood_pressure: string;
}

const generateSensorData = (): SensorData => ({
  timestamp: new Date().toISOString(),
  temperature: (36 + Math.random() * 2).toFixed(1),
  spo2: (95 + Math.random() * 5).toFixed(0),
  heartrate: (60 + Math.random() * 40).toFixed(0),
  blood_pressure: `${110 + Math.floor(Math.random() * 10)}/${70 + Math.floor(Math.random() * 10)}`,
});

export const setupWebSocketOnUpgrade = (server: HTTPServer) => {
  const wss = new WebSocketServer({ noServer: true });

  server.on('upgrade', (req, socket, head) => {
    const { pathname } = parse(req.url || '');

    if (pathname === '/api/ws') {
      wss.handleUpgrade(req, socket, head, (ws) => {
        wss.emit('connection', ws, req);
      });
    } else {
      socket.destroy();
    }
  });

  wss.on('connection', (ws: WebSocket) => {
    console.log('✅ Client connected to /api/ws');

    ws.send(
      JSON.stringify({
        type: 'connection',
        message: 'Connected to real-time sensor server',
      })
    );

    const intervalId = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        const data = {
          type: 'sensor_data',
          data: generateSensorData(),
        };
        ws.send(JSON.stringify(data));
      }
    }, 5000);

    (ws as any).isAlive = true;

    ws.on('pong', () => {
      (ws as any).isAlive = true;
    });

    ws.on('close', () => {
      console.log('Client disconnected');
      clearInterval(intervalId);
    });

    ws.on('error', (error: Error) => {
      console.error('WebSocket error:', error);
      clearInterval(intervalId);
    });
  });

  // Heartbeat to keep connections alive
  const pingInterval = setInterval(() => {
    wss.clients.forEach((ws: WebSocket) => {
      if (!(ws as any).isAlive) return ws.terminate();
      (ws as any).isAlive = false;
      ws.ping();
    });
  }, 30000);

  wss.on('close', () => clearInterval(pingInterval));
};
