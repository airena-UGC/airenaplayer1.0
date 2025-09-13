# Airena Shoppable Player

This is a full-stack repo skeleton for a shoppable interactive video player with auto-tagging, live shopping, and RTMP→WebRTC support.

## Features
- React + Video.js based player with product overlay and checkout modal
- Auto-tagging (TensorFlow.js + COCO-SSD)
- Node.js backend with product, tag, and order APIs
- Stripe Checkout integration
- Socket.IO for real-time tag updates
- RTMP ingest → WebRTC playback (via OvenMediaEngine or Ant Media Server)

## Getting Started
1. Clone repo and install dependencies:
   ```bash
   npm install
   ```
2. Start backend:
   ```bash
   cd server && npm install && npm run dev
   ```
3. Start frontend:
   ```bash
   cd client && npm install && npm start
   ```
4. Configure `.env` files for backend with Stripe key and DB credentials.

## Deployment
- Docker + docker-compose files provided
- GitHub Actions workflow for CI/CD

## License
MIT
