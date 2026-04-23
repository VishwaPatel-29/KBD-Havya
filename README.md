# 🚌 KBD-Havya - Smart Corporate Shuttle Platform

<div align="center">
  <!-- <img src="client/KBD_Havya_logo_v4.svg" alt="KBD-Havya Logo" width="680" height="280"> -->
  
  **KBD-Havya** is a smart on-demand corporate shuttle platform that dynamically routes vehicles based on real-time employee demand. 🚀
</div>

---

## 📖 Table of Contents

- [🌟 Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [⚙️ Configuration](#️-configuration)
- [🔧 Development](#-development)
- [📦 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🌟 Features

### 👥 Multi-Role System
- **👔 Employee Portal** - Book rides, track shuttles, view ride history
- **🚗 Driver Dashboard** - Manage active rides, view navigation, track earnings
- **👨‍💼 Admin Panel** - Fleet management, user management, analytics, live monitoring

### 🚀 Core Functionality
- **📍 Real-time Tracking** - Live GPS tracking with Socket.io
- **🤖 AI-Powered Routing** - Dynamic route optimization using OpenAI
- **📱 Mobile Responsive** - PWA-ready with Tailwind CSS
- **🔐 Secure Authentication** - JWT-based auth with Google OAuth support
- **💳 Payment Integration** - Stripe-ready payment system
- **📊 Analytics Dashboard** - Comprehensive analytics with Recharts
- **🔔 Push Notifications** - Firebase integration for real-time alerts

### 🛠️ Technical Features
- **⚡ Real-time Updates** - WebSocket connections for live data
- **🗺️ Google Maps Integration** - Advanced mapping and autocomplete
- **☁️ Cloud Storage** - Cloudinary for media management
- **📧 Email Services** - SendGrid for notifications
- **🔒 Security** - Helmet, rate limiting, input validation

---

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Client  │◄──►│   Express API   │◄──►│   MongoDB DB    │
│   (Vite + SPA)  │    │   (REST + WS)   │    │   (Mongoose)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Redux Store   │    │   Socket.io     │    │   Cloudinary    │
│   (RTK Query)   │    │   (Real-time)   │    │   (Media)       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## 📁 Project Structure

```
ShuttleRoute/
├── 📂 client/                     # React Frontend
│   ├── 📂 public/                  # Static assets
│   │   └── 🖼️ favicon.svg        # App favicon
│   ├── 📂 src/                     # Source code
│   │   ├── 📂 components/          # Reusable components
│   │   │   ├── 📂 Layout/         # Layout components
│   │   │   ├── 📂 common/         # Common UI components
│   │   │   └── 📂 forms/          # Form components
│   │   ├── 📂 features/           # Redux feature slices
│   │   │   ├── 📂 auth/           # Authentication state
│   │   │   ├── 📂 rides/          # Ride management
│   │   │   ├── 📂 vehicles/       # Vehicle tracking
│   │   │   ├── 📂 ui/             # UI state management
│   │   │   └── 📂 notifications/  # Notification system
│   │   ├── 📂 pages/              # Page components
│   │   │   ├── 📂 Auth/           # Login/Register pages
│   │   │   ├── 📂 Employee/       # Employee portal
│   │   │   │   ├── 📄 Dashboard.jsx
│   │   │   │   ├── 📄 BookRide.jsx
│   │   │   │   ├── 📄 TrackShuttle.jsx
│   │   │   │   ├── 📄 RideHistory.jsx
│   │   │   │   └── 📄 Profile.jsx
│   │   │   ├── 📂 Driver/         # Driver portal
│   │   │   │   ├── 📄 DriverDashboard.jsx
│   │   │   │   ├── 📄 ActiveRide.jsx
│   │   │   │   └── 📄 DriverHistory.jsx
│   │   │   ├── 📂 Admin/          # Admin portal
│   │   │   │   ├── 📄 AdminDashboard.jsx
│   │   │   │   ├── 📄 ManageUsers.jsx
│   │   │   │   ├── 📄 ManageVehicles.jsx
│   │   │   │   ├── 📄 Analytics.jsx
│   │   │   │   └── 📄 LiveMap.jsx
│   │   │   └── 📂 Landing/        # Landing page
│   │   ├── 📂 services/           # API services
│   │   │   ├── 📄 api.js          # Axios configuration
│   │   │   └── 📄 socket.js       # Socket.io client
│   │   ├── 📂 store/              # Redux store
│   │   │   └── 📄 store.js        # Store configuration
│   │   ├── 📂 utils/              # Utility functions
│   │   ├── 📄 App.jsx             # Main App component
│   │   ├── 📄 main.jsx            # Entry point
│   │   └── 📄 index.css           # Global styles
│   ├── 📄 package.json            # Client dependencies
│   ├── 📄 vite.config.js          # Vite configuration
│   ├── 📄 tailwind.config.js      # Tailwind CSS config
│   └── 📄 postcss.config.js       # PostCSS config
├── 📂 server/                     # Node.js Backend
│   ├── 📂 middleware/             # Custom middleware
│   │   ├── 📄 auth.js             # Authentication middleware
│   │   └── 📄 errorHandler.js     # Error handling
│   ├── 📂 models/                 # Mongoose models
│   │   ├── 📄 User.js             # User schema
│   │   ├── 📄 Ride.js             # Ride schema
│   │   ├── 📄 Vehicle.js          # Vehicle schema
│   │   └── 📄 Route.js            # Route schema
│   ├── 📂 routes/                 # API routes
│   │   ├── 📄 auth.js             # Authentication endpoints
│   │   ├── 📄 rides.js            # Ride management
│   │   ├── 📄 vehicles.js         # Vehicle management
│   │   ├── 📄 routes.js           # Route management
│   │   ├── 📄 admin.js            # Admin endpoints
│   │   └── 📄 ai.js               # AI-powered features
│   ├── 📂 services/               # Business logic
│   │   ├── 📄 authService.js      # Authentication logic
│   │   ├── 📄 rideService.js      # Ride management
│   │   ├── 📄 vehicleService.js   # Vehicle operations
│   │   └── 📄 aiService.js        # AI integration
│   ├── 📂 sockets/                # Socket.io handlers
│   │   └── 📄 trackingSocket.js   # Real-time tracking
│   ├── 📄 server.js               # Main server file
│   └── 📄 package.json            # Server dependencies
├── 📄 package.json                # Root package.json
├── 📄 package-lock.json           # Root lock file
└── 📄 README.md                   # This file
```

---

## 🚀 Quick Start

### 📋 Prerequisites

- **Node.js** >= 18.0.0
- **MongoDB** >= 5.0
- **npm** >= 8.0.0

### 🛠️ Installation

1. **🍴 Clone the repository**
   ```bash
   git clone https://github.com/your-username/ShuttleRoute.git
   cd ShuttleRoute
   ```

2. **📦 Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **⚙️ Environment Setup**
   ```bash
   # Copy environment files
   cp client/.env.example client/.env
   cp server/.env.example server/.env
   ```

4. **🔧 Configure Environment Variables**
   
   **Client (.env)**
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
   ```
   
   **Server (.env)**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/kbd-havya
   JWT_SECRET=your_jwt_secret
   GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
   GOOGLE_AUTH_CLIENT_SECRET=your_google_auth_client_secret
   OPENAI_API_KEY=your_openai_api_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   SENDGRID_API_KEY=your_sendgrid_api_key
   FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

5. **🚀 Start Development Server**
   ```bash
   npm run dev
   ```
   
   This will start both client and server concurrently:
   - **Client**: http://localhost:5173
   - **Server**: http://localhost:5000

---

## ⚙️ Configuration

### 🔑 Required API Keys

1. **🗺️ Google Maps API**
   - Enable: Maps JavaScript API, Places API, Geocoding API
   - Get key from: [Google Cloud Console](https://console.cloud.google.com/)

2. **🤖 OpenAI API**
   - For AI-powered route optimization
   - Get key from: [OpenAI Platform](https://platform.openai.com/)

3. **☁️ Cloudinary**
   - For image and file storage
   - Get credentials from: [Cloudinary Dashboard](https://cloudinary.com/)

4. **📧 SendGrid**
   - For email notifications
   - Get key from: [SendGrid](https://sendgrid.com/)

5. **🔥 Firebase**
   - For push notifications
   - Get config from: [Firebase Console](https://console.firebase.google.com/)

---

## 🔧 Development

### 📝 Available Scripts

```bash
# Development
npm run dev              # Start both client and server
npm run client           # Start only client
npm run server           # Start only server

# Building
npm run build            # Build for production

# Linting
npm run lint             # Run ESLint (client)
```

### 🧪 Testing

```bash
# Run tests (when implemented)
npm test                 # Run all tests
npm run test:client      # Run client tests
npm run test:server      # Run server tests
```

### 📊 Database Setup

```bash
# Using MongoDB locally
mongod --dbpath /path/to/your/db

# Using MongoDB Atlas
# Update MONGODB_URI in server/.env
```

---

## 📦 Deployment

### 🐳 Docker Deployment

```dockerfile
# Dockerfile (example)
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

### ☁️ Cloud Deployment

**Vercel (Frontend)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Heroku (Backend)**
```bash
# Install Heroku CLI
heroku create your-app-name

# Deploy
git push heroku main
```

**AWS/Google Cloud**
- Use Docker containers
- Configure environment variables
- Set up MongoDB Atlas
- Configure CDN for static assets

---

## 🤝 Contributing

We welcome contributions! 🎉

### 📋 How to Contribute

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **💻 Make your changes**
4. **✅ Test your changes**
5. **📤 Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **🚀 Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **🔃 Open a Pull Request**

### 📝 Code Style

- **ESLint** for JavaScript/JSX
- **Prettier** for formatting
- **Conventional Commits** for commit messages

##  Acknowledgments

- **🗺️ Google Maps API** - For mapping services
- **🤖 OpenAI** - For AI-powered features
- **⚛️ React Team** - For the amazing framework
- **🎨 Tailwind CSS** - For the utility-first CSS framework
- **🚀 Vercel** - For hosting services

---

##  Support

- **📧 Email**: vishwa29patel.cg@gmail.com

---

<div align="center">
  <p>🌟 If you like this project, give it a star! ⭐</p>
  <p>Made with ❤️ by Vishwa Patel</p>
</div>
