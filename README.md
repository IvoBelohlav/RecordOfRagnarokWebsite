# Record of Ragnarok - Award-Winning Website

A visually stunning website showcasing the epic battle between Tesla and Beelzebub from Record of Ragnarok. Built with React, Vite, TailwindCSS, and GSAP animations.

![Record of Ragnarok](public/img/teslareal.jpg)

## Features

- Responsive design that works on all devices
- Smooth animations and transitions using GSAP
- Interactive elements with hover effects
- Asymmetrical grid layout for character showcase
- Smooth scrolling navigation

## Deployment Guide

You can deploy this website using several methods. Here are the most straightforward options:

### Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest platform for deploying Vite applications with zero configuration.

1. **Create a GitHub repository** (if you haven't already)
   - Push your code to a GitHub repository

2. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com/) and sign up/login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

Vercel will automatically build and deploy your site, and provide you with a URL.

### Option 2: Deploy to Netlify

Netlify is another excellent option for deploying static sites.

1. **Create a GitHub repository** (if you haven't already)
   - Push your code to a GitHub repository

2. **Deploy to Netlify**
   - Go to [Netlify](https://www.netlify.com/) and sign up/login with your GitHub account
   - Click "New site from Git"
   - Select your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Option 3: Manual Deployment

If you prefer to deploy manually to your own hosting:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Test the build locally**
   ```bash
   npm run preview
   ```

3. **Upload the contents of the `dist` folder** to your web hosting service
   - You can use FTP, SFTP, or any other method your hosting provider supports
   - Make sure to upload all files and folders inside the `dist` directory

### Option 4: GitHub Pages

You can also deploy to GitHub Pages with a few additional steps:

1. **Install the gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add these scripts to your package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Add a base path to your vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/award-winning-website/',
     // other config options...
   });
   ```

4. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## Environment Variables

This project doesn't require any environment variables for deployment.

## Post-Deployment

After deploying your site, make sure to:

1. Test all functionality on the live site
2. Check that all images and assets are loading correctly
3. Verify that the site is responsive on different devices
4. Test the navigation and smooth scrolling

## Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## License

This project is for demonstration purposes only. Record of Ragnarok and its characters are the property of their respective owners.

## Credits

- Design and Development: [Ivo Bělohlav]
- Record of Ragnarok: Created by Shinya Umemura, Takumi Fukui, and Ajichika 
