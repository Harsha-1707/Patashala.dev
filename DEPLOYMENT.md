# Deploying to Netlify

## Frontend Deployment

Your frontend is ready to deploy to Netlify!

### Steps:

1. **Push to GitLab** (Already done! ✅)

   ```bash
   git push origin main
   ```

2. **Connect to Netlify:**

   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitLab"
   - Select your repository: `TejaCEO/patashala.dev`

3. **Build Settings** (Auto-configured via `netlify.toml`):

   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Environment Variables:**
   In Netlify dashboard, go to Site settings → Environment variables:

   - Add: `VITE_API_URL` = `https://your-backend-url.com/api/v1`

5. **Deploy!**
   - Click "Deploy site"
   - Netlify will build and deploy automatically

### Custom Domain (Optional):

- Go to Site settings → Domain management
- Add your custom domain: `patashala.dev`

## Backend Deployment

Your backend needs to be hosted separately. Here are options:

### Option 1: Render.com (Recommended - Free tier)

1. Go to https://render.com
2. New → Web Service
3. Connect your GitLab repo
4. Settings:
   - Root Directory: `backend`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Environment: `NODE_ENV=production`, `PORT=3000`, `CORS_ORIGIN=https://your-netlify-app.netlify.app`

### Option 2: Railway.app

1. Go to https://railway.app
2. New Project → Deploy from GitLab
3. Select `backend` directory
4. Add environment variables

### Option 3: Netlify Functions (Serverless)

Convert your Express backend to Netlify Functions (requires refactoring)

---

## After Backend is Deployed:

Update the frontend environment variable in Netlify:

```
VITE_API_URL=https://your-backend-url.com/api/v1
```

Then redeploy the frontend!
