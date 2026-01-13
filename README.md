# patashala.dev - Learn by Building Real Projects

> **Playful on the surface, serious underneath** – A production-grade full-stack platform for developers who enjoy learning by building.

![Platform Preview](https://img.shields.io/badge/Status-Production--Ready-success)
![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20TypeScript-blue)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-green)

## 🎨 Visual Identity

This platform features a **mandatory cartoonic 2D–3D hybrid visual style**:

- ✨ Illustrations with depth delivered as 2D assets
- 🎯 Bold, visible outlines on illustrated elements
- 📐 Slight perspective distortion (not orthographic)
- 🎨 Flat colors with limited stylized shading
- 🚫 **NO** photorealism, glassmorphism, or soft gradients everywhere
- 🖼️ Generous whitespace around illustrations

**The pencil mascot** is a core brand element that appears throughout the site with playful animations.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

```bash
# Install all dependencies (frontend + backend)
npm run install:all
```

### Development

Run both frontend and backend simultaneously:

```bash
npm run dev
```

Or run them separately:

```bash
# Frontend only (Vite dev server on port 5173)
npm run dev:frontend

# Backend only (Express server on port 3000)
npm run dev:backend
```

### Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api/v1
- **Health Check**: http://localhost:3000/health

## 📁 Project Structure

```
website/
├── frontend/                 # React + TypeScript + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # Reusable UI components
│   │   │   └── brand/       # Brand-specific illustrated components
│   │   ├── sections/        # Homepage sections
│   │   ├── pages/           # Page components (zero logic)
│   │   ├── assets/
│   │   │   └── illustrations/  # Cartoonic 2D-3D hybrid assets
│   │   └── styles/          # Global styles with custom fonts
│   ├── package.json
│   └── vite.config.ts
│
├── backend/                  # Node.js + Express + TypeScript backend
│   ├── src/
│   │   ├── routes/          # API routes (versioned /api/v1)
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Business logic (with DB extension points)
│   │   ├── middlewares/     # Express middleware
│   │   ├── config/          # Configuration (env validation)
│   │   └── utils/           # Utilities (logger, etc.)
│   ├── package.json
│   └── tsconfig.json
│
└── package.json              # Root scripts for both services
```

## 🎨 Tech Stack

### Frontend

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (custom brand colors)
- **Animations**: Framer Motion
- **Routing**: React Router
- **Fonts**: Inter + Outfit (Google Fonts)

### Backend

- **Runtime**: Node.js (LTS)
- **Framework**: Express
- **Language**: TypeScript
- **Validation**: Zod
- **Security**: Helmet
- **CORS**: Configured for local development
- **Dev Tools**: Nodemon + ts-node

## 🎯 Visual Design System

### Brand Colors

- **Purple**: `#6366F1` – Primary brand color
- **Teal**: `#14B8A6` – Secondary brand color
- **Orange**: `#F97316` – Accent color
- **Yellow**: `#FBBF24` – Highlight color

### Typography

- **Display Font**: Outfit (headings)
- **Body Font**: Inter (paragraphs, UI)

### Animations

- All animations use Framer Motion
- Duration under 300ms
- Organic easing curves
- Subtle bounces on mascot elements only

## 🏗️ Architecture Principles

### Frontend

- **Pages have zero logic** – pure composition
- **Sections orchestrate layout** – structured content
- **Brand components** encapsulate hybrid visuals
- **UI components** stay neutral and reusable

### Backend

- **Clear separation of concerns** – routes → controllers → services
- **Centralized error handling** – consistent error responses
- **Versioned API**: `/api/v1`
- **Extension points** for future database integration
- **No database yet** – ready for ORM/driver integration

## 🔌 API Endpoints

### Health Check

```
GET /health
```

Returns server health status and uptime.

### Platform Info

```
GET /api/v1/info
```

Returns platform metadata and version information.

## 🚢 Production Build

Build both frontend and backend:

```bash
npm run build
```

Build individually:

```bash
# Frontend only
npm run build:frontend

# Backend only
npm run build:backend
```

## 🎓 Learning Philosophy

**patashala.dev** is built on three principles:

1. **Project-Driven Learning** – Build real applications, not toy examples
2. **Production-Grade Quality** – Industry best practices and clean architecture
3. **Skills That Matter** – Technologies used by actual development teams

## 📈 Performance

- Lighthouse score target: **> 90**
- No layout shifts
- Accessible navigation
- Clean, lint-free codebase

## 🤝 Contributing

This is a learning platform built as a demonstration of production-grade development practices. Feel free to explore, learn, and adapt!

## 📝 License

MIT License - see LICENSE file for details

---

**Built with ❤️ for developers who love to learn**

_Playful on the surface, serious underneath_
