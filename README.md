<<<<<<< HEAD
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
=======
# Patashala.dev



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

* [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
* [Add files using the command line](https://docs.gitlab.com/topics/git/add_files/#add-files-to-a-git-repository) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/TejaCEO/patashala.dev.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

* [Set up project integrations](https://gitlab.com/TejaCEO/patashala.dev/-/settings/integrations)

## Collaborate with your team

* [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
* [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
* [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
* [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
* [Set auto-merge](https://docs.gitlab.com/user/project/merge_requests/auto_merge/)

## Test and Deploy

Use the built-in continuous integration in GitLab.

* [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/)
* [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
* [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
* [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
* [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
>>>>>>> 185c013525423df51a44a4f8cfc4aaf88af70239
