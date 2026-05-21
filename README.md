# Flyttivo – Flytt & Städning i Kristianstad

Modern, premium website for Flyttivo Flytt och Städ AB – a moving and cleaning company in Kristianstad, Sweden.

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit - Flyttivo website"
   git remote add origin https://github.com/YOUR_USERNAME/flyttivo.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Configure basePath (if needed):**
   - If your repository name is NOT "flyttivo", update `next.config.ts`:
   ```typescript
   basePath: '/your-repo-name',
   trailingSlash: true,
   ```

4. **Deploy:**
   - The GitHub Actions workflow will automatically build and deploy on every push to `main`
   - Check the **Actions** tab in your repository to see the deployment progress
   - Your site will be available at: `https://YOUR_USERNAME.github.io/flyttivo/`

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
```

The static files will be in the `out/` directory.

## 📁 Project Structure

- `src/app/` - Next.js App Router pages
- `src/components/` - React components (Header, Footer, Logo)
- `public/` - Static assets (images, videos, logos)

## 🎨 Tech Stack

- **Next.js 16** - React framework
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **GitHub Pages** - Hosting

## 📝 Notes

- The site uses static export for GitHub Pages compatibility
- Images are unoptimized for static export
- Video files should be optimized for web (consider converting to MP4)
