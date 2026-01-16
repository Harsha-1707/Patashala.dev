# Patashala.dev 🎯

**Learn by Building. Build for Real.**

A project-first learning platform where developers build production-grade applications while mastering modern development practices. We're not just another tutorial platform—we focus on real-world skills that matter.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-3178C6?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)

## 🌟 What Makes Us Different

- **🎯 Project-Driven Learning**: Build real-world applications, not toy examples
- **⚡ Production-Grade Code**: Every project follows industry best practices and clean architecture
- **🚀 Skills That Matter**: Focus on technologies and patterns used by actual development teams

## 🛠️ Tech Stack

### Frontend

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: TailwindCSS 3.4 with custom animations
- **Animations**: Framer Motion 10
- **3D Graphics**: Three.js + OGL
- **Routing**: React Router v6

### Backend

- **Runtime**: Node.js with Express
- **Language**: TypeScript
- **Security**: Helmet.js, CORS
- **Validation**: Zod
- **Environment**: dotenv

### DevOps & Deployment

- **Hosting**: Firebase Hosting
- **CI/CD**: GitLab CI/CD Pipeline
- **Version Control**: Git (GitLab primary, GitHub mirror)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Harsha-1707/Patashala.dev.git
cd Patashala.dev
```

### 2. Install Dependencies

Install all dependencies for both frontend and backend:

```bash
npm run install:all
```

Or install them separately:

```bash
# Root dependencies
npm install

# Frontend dependencies
cd frontend && npm install

# Backend dependencies
cd ../backend && npm install
```

### 3. Environment Setup

Create `.env` files for both frontend and backend:

**Frontend (.env)**

```env
VITE_API_URL=http://localhost:3000/api
```

**Backend (.env)**

```env
PORT=3000
NODE_ENV=development
```

### 4. Run Development Server

Start both frontend and backend concurrently:

```bash
npm run dev
```

Or run them separately:

```bash
# Frontend only (runs on http://localhost:5173)
npm run dev:frontend

# Backend only (runs on http://localhost:3000)
npm run dev:backend
```

### 5. Build for Production

```bash
npm run build
```

This will build both frontend and backend:

- Frontend build output: `frontend/dist`
- Backend build output: `backend/dist`

## 📁 Project Structure

```
patashala.dev/
├── frontend/               # React + Vite frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── sections/      # Page sections
│   │   ├── utils/         # Utility functions
│   │   └── App.tsx        # Main app component
│   ├── public/            # Static assets
│   └── index.html         # HTML entry point
│
├── backend/               # Express backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── utils/         # Backend utilities
│   │   └── server.ts      # Server entry point
│   └── dist/              # Compiled backend code
│
├── .gitlab-ci.yml         # GitLab CI/CD pipeline
├── firebase.json          # Firebase configuration
└── package.json           # Root package configuration
```

## 🎨 Key Features

### Interactive UI Components

- ✨ Smooth animations with Framer Motion
- 🎭 3D graphics and effects using Three.js
- 📱 Fully responsive design
- 🌙 Modern, clean interface
- 🎯 Premium user experience

### Backend API

- 🔒 Security-first approach with Helmet
- ✅ Schema validation with Zod
- 📊 Logging and error handling
- ⚡ Fast and efficient endpoints

## 🚢 Deployment

The project uses GitLab CI/CD for automated deployments to Firebase Hosting.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

### Automated Deployment

Pushes to the `main` branch automatically trigger:

1. Frontend build
2. Firebase Hosting deployment
3. Cache invalidation

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🧪 Available Scripts

| Command                  | Description                                        |
| ------------------------ | -------------------------------------------------- |
| `npm run dev`            | Run both frontend and backend in development mode  |
| `npm run dev:frontend`   | Run frontend only                                  |
| `npm run dev:backend`    | Run backend only                                   |
| `npm run build`          | Build both frontend and backend for production     |
| `npm run build:frontend` | Build frontend only                                |
| `npm run build:backend`  | Build backend only                                 |
| `npm run install:all`    | Install all dependencies (root, frontend, backend) |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

For support, email contact@patashala.dev or open an issue in the repository.

## 🔗 Links

- **Live Site**: [patashala.dev](https://patashala.dev)
- **GitLab Repository**: [gitlab.com/kattaharshav/website_for_dotdev](https://gitlab.com/kattaharshav/website_for_dotdev)
- **GitHub Repository**: [github.com/Harsha-1707/Patashala.dev](https://github.com/Harsha-1707/Patashala.dev)

## 📊 Project Status

🚀 **Active Development** - This project is actively maintained and updated regularly.

---

**Built with ❤️ by the Patashala.dev team**
