# NoLimit Construction Website

A modern, responsive website built with Astro for NoLimit Construction company. This website showcases professional construction services with a clean, modern design and excellent user experience.

## Features

- 🚀 **Astro Framework** - Fast, modern static site generation
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid styling
- 📱 **Responsive Design** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Fast loading times and smooth animations
- 🔧 **TypeScript Support** - Type-safe development experience
- 📧 **Contact Form** - Ready-to-use contact form for lead generation

## Sections

- **Hero** - Eye-catching landing section with call-to-action buttons
- **Services** - Showcase of construction services offered
- **About** - Company information and statistics
- **Portfolio** - Project gallery and case studies
- **Contact** - Contact information and inquiry form
- **Navigation** - Smooth scrolling navigation with mobile menu
- **Footer** - Company links and social media

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/growthbco/nolimitcontruction.git
cd nolimitcontruction
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Astro components
│   ├── Hero.astro
│   ├── Services.astro
│   ├── About.astro
│   ├── Portfolio.astro
│   ├── Contact.astro
│   ├── Navigation.astro
│   └── Footer.astro
├── layouts/            # Layout components
│   └── Layout.astro
└── pages/              # Pages
    └── index.astro
```

## Customization

### Colors
Update the color scheme in `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### Content
Edit the component files in `src/components/` to update:
- Company information
- Services offered
- Portfolio projects
- Contact details
- Social media links

### Styling
- Global styles can be added to `src/layouts/Layout.astro`
- Component-specific styles are in each `.astro` file
- Tailwind utility classes provide most styling

## Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub repository
3. Enable GitHub Pages in repository settings
4. Set source to "Deploy from a branch" and select `gh-pages`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### Vercel
1. Import your GitHub repository to Vercel
2. Framework preset: Astro
3. Deploy automatically

## Technologies Used

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography

## License

This project is licensed under the MIT License.

## Contact

For questions about this website or NoLimit Construction services, please visit our contact page or email info@nolimitconstruction.com.
