# Clyde Snyders Portfolio

A modern, clean portfolio website showcasing projects, achievements, and expertise in coding and robotics. Built with React, TypeScript, and Tailwind CSS with a warm editorial design aesthetic.

## Features

- **Modern Design**: Warm editorial aesthetic with terracotta brand colors and generous whitespace
- **Fully Responsive**: Beautiful on mobile, tablet, and desktop devices
- **Fast Performance**: Optimized build with minimal bundle size
- **SEO Ready**: Proper meta tags and semantic HTML
- **GitHub Pages Ready**: Easy deployment to GitHub Pages
- **Smooth Animations**: Subtle, intentional transitions and interactions
- **Clean Code**: Well-organized, maintainable component structure

## Pages

- **Home**: Hero section with introduction, stats, highlights, and call-to-action
- **Projects**: Showcase of featured and other projects with tags
- **Achievements**: Timeline of awards, competitions, and milestones
- **About**: Personal story, skills, and values
- **Contact**: Contact form and multiple ways to get in touch
- **404**: Custom error page

## Design System

### Color Palette

- **Brand**: Warm terracotta (#A85A3A) - primary actions and highlights
- **Accent**: Warm gold (#D4A574) - secondary highlights and badges
- **Background**: Warm cream (oklch(0.985 0.008 85)) - main background
- **Text**: Warm charcoal (oklch(0.16 0.018 60)) - primary text

### Typography

- **Display**: Space Grotesk (geometric, modern) - headings
- **Body**: Inter (clean, readable) - body text
- **Mono**: JetBrains Mono - code and technical elements

### Spacing & Radius

- **Radius**: 1.5rem for friendly, rounded appearance
- **Spacing**: Generous whitespace with asymmetric layouts
- **Container**: Max-width 1200px with responsive padding

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom theme
- **Routing**: Wouter (client-side routing)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The development server will start at `http://localhost:3000`.

## Project Structure

```
client/
  src/
    pages/           # Page components (Home, Projects, etc.)
    components/      # Reusable UI components
    contexts/        # React contexts (Theme, etc.)
    hooks/           # Custom React hooks
    lib/             # Utility functions
    App.tsx          # Main app component with routing
    main.tsx         # React entry point
    index.css        # Global styles and design tokens
  public/            # Static files (favicon, robots.txt)
  index.html         # HTML template
server/              # Express server (for production)
dist/                # Build output
```

## Customization

### Updating Content

Edit the content in each page component:

- `client/src/pages/Home.tsx` - Update hero text, stats, and highlights
- `client/src/pages/Projects.tsx` - Add or modify projects
- `client/src/pages/Achievements.tsx` - Update achievements timeline
- `client/src/pages/About.tsx` - Update personal story and skills
- `client/src/pages/Contact.tsx` - Update contact information

### Changing Colors

Edit the CSS variables in `client/src/index.css`:

```css
:root {
  --brand: oklch(0.58 0.16 35);        /* Primary brand color */
  --gold: oklch(0.78 0.13 80);         /* Accent color */
  --background: oklch(0.985 0.008 85); /* Background color */
  /* ... other colors ... */
}
```

### Modifying Typography

Update font imports and theme in `client/src/index.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=...");

@theme inline {
  --font-display: "Your Display Font", ...;
  --font-sans: "Your Body Font", ...;
  --font-mono: "Your Mono Font", ...;
}
```

## Deployment

### GitHub Pages

See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for detailed instructions on deploying to GitHub Pages.

Quick start:

```bash
# Build the project
pnpm build

# Copy built files to your GitHub Pages repository
cp -r dist/public/* /path/to/your-github-pages-repo/

# Commit and push
cd /path/to/your-github-pages-repo/
git add .
git commit -m "Deploy portfolio"
git push origin main
```

### Other Platforms

The built files in `dist/public/` can be deployed to any static hosting platform:

- Netlify
- Vercel
- Firebase Hosting
- AWS S3
- Any web server

## Performance

- **Gzip Size**: ~105 KB (HTML + CSS + JS combined)
- **Build Time**: ~3 seconds
- **Lighthouse Score**: 90+

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting

### Component Guidelines

- Use functional components with hooks
- Keep components small and focused
- Use Tailwind utilities for styling
- Leverage existing UI components from shadcn/ui

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback about this portfolio:

- Email: clydesnyders17@gmail.com
- GitHub: [@clydesnyders05-oss](https://github.com/clydesnyders05-oss)
- Instagram: [@c.snyders.05](https://www.instagram.com/c.snyders.05)

---

Built with ❤️ by Clyde Snyders
