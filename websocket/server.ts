import { WebSocketServer, WebSocket } from 'ws';

interface SensorData {
  timestamp: string;
  temperature: string;
  spo2: string;
  heartrate: string;
  blood_pressure: string;
}

// Sensor Simulation
const generateSensorData = (): SensorData => ({
  timestamp: new Date().toISOString(),
  temperature: (36 + Math.random() * 2).toFixed(1), // °C
  spo2: (95 + Math.random() * 5).toFixed(0),        // %
  heartrate: (60 + Math.random() * 40).toFixed(0),  // BPM
  blood_pressure: `${110 + Math.floor(Math.random() * 10)}/${70 + Math.floor(Math.random() * 10)}`, // mmHg
});

// Run WebSocket server at port 3001
const wss = new WebSocketServer({ port: 3001 });

console.log('✅ WebSocket server listening on ws://localhost:3001');

wss.on('connection', (ws: WebSocket) => {
  console.log('Client connected');

  ws.send(
    JSON.stringify({
      type: 'connection',
      message: 'Connected to real-time data server',
    })
  );

  // Send sensor data every 5 seconds
  const intervalId = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      const data = {
        type: 'sensor_data',
        data: generateSensorData(),
      };
      ws.send(JSON.stringify(data));
    }
  }, 5000);

  // Ping-pong mechanism
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

// check active connections
const pingInterval = setInterval(() => {
  wss.clients.forEach((ws: WebSocket) => {
    if (!(ws as any).isAlive) return ws.terminate();
    (ws as any).isAlive = false;
    ws.ping();
  });
}, 30000);

wss.on('close', () => clearInterval(pingInterval));
