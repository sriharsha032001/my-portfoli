# Portfolio Website - Ravinuthala Ramachandra Sri Harsha

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features dark mode, smooth animations, and a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional UI with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for delightful micro-interactions
- **Accessibility**: WCAG compliant with keyboard navigation, ARIA labels, and screen reader support
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, and structured data (JSON-LD)
- **Performance**: Optimized for fast load times and excellent Core Web Vitals
- **Interactive Components**: 
  - Animated hero section
  - Expandable experience timeline
  - Filterable projects grid
  - Skills cloud with hover effects
  - Contact form with validation

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sriharsha032001/my-portfoli.git
cd my-portfoli
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## 🚀 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The `base` path in `vite.config.ts` is set to `/my-portfoli/` to match the repository name. If your repository has a different name, update the `base` path accordingly.

### Vercel (Alternative)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify (Alternative)

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

## 📁 Project Structure

```
my-portfoli/
├── src/
│   ├── components/          # React components
│   │   ├── Nav.tsx          # Navigation component
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── ExperienceTimeline.tsx  # Experience timeline
│   │   ├── ProjectsGrid.tsx # Projects grid
│   │   ├── SkillsCloud.tsx  # Skills section
│   │   ├── Education.tsx    # Education section
│   │   ├── Certifications.tsx # Certifications section
│   │   ├── ContactForm.tsx  # Contact form
│   │   └── Footer.tsx       # Footer component
│   ├── utils/               # Utility functions
│   │   ├── resumeData.ts    # Resume data
│   │   └── generateResumePDF.ts # PDF generation utility
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  accent: {
    DEFAULT: '#00D9FF',  // Main accent color
    dark: '#00B8D9',
    light: '#33E0FF',
  },
}
```

### Content

Update resume content in `src/utils/resumeData.ts` or directly in component files.

### Fonts

Fonts are loaded from Google Fonts in `index.html`. You can change them by updating the font link and `tailwind.config.js`.

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific variables (if needed):

```env
VITE_CONTACT_API_URL=your_contact_api_url
VITE_ANALYTICS_ID=your_analytics_id
```

### Contact Form

The contact form currently uses a mock submission. To integrate with a real backend:

1. Create an API endpoint (e.g., `/api/contact`)
2. Update the `handleSubmit` function in `src/components/ContactForm.tsx`
3. Add environment variables for the API URL

Example integration with a serverless function:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## ♿ Accessibility

The website follows WCAG 2.1 AA guidelines:

- Semantic HTML
- ARIA labels and roles
- Keyboard navigation
- Focus indicators
- Screen reader support
- Color contrast ratios (4.5:1 minimum)
- Skip to main content link

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🧪 Testing

Run the linter:
```bash
npm run lint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ravinuthala Ramachandra Sri Harsha**

- Email: [ramachandrasriharsha1@gmail.com](mailto:ramachandrasriharsha1@gmail.com)
- LinkedIn: [linkedin.com/in/ravinuthala-ramachandra-sri-harsha-919822330](https://www.linkedin.com/in/ravinuthala-ramachandra-sri-harsha-919822330/)
- GitHub: [github.com/sriharsha032001](https://github.com/sriharsha032001)
- Portfolio: [sriharsha032001.github.io/my-portfoli](https://sriharsha032001.github.io/my-portfoli/)

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 📝 Design Rationale

### UX Decisions

1. **Single-Page Layout**: Easy navigation with smooth scrolling between sections
2. **Dark Mode**: Reduces eye strain and provides a modern look
3. **Sticky Navigation**: Always accessible navigation bar
4. **Expandable Timeline**: Reduces clutter while allowing detailed information access
5. **Filterable Projects**: Easy categorization and discovery of projects
6. **Micro-interactions**: Subtle animations enhance user engagement without being distracting

### Performance Optimizations

1. **Code Splitting**: Components are lazy-loaded where possible
2. **Image Optimization**: Images are optimized and use modern formats
3. **Font Loading**: Fonts are preloaded for faster rendering
4. **CSS Optimization**: Tailwind CSS is purged in production builds
5. **Animation Performance**: Uses GPU-accelerated transforms

### Accessibility Features

1. **Keyboard Navigation**: All interactive elements are keyboard accessible
2. **Screen Reader Support**: ARIA labels and semantic HTML
3. **Focus Indicators**: Clear focus states for keyboard users
4. **Color Contrast**: High contrast ratios for readability
5. **Reduced Motion**: Respects user's motion preferences

## 🔄 How to Iterate

### Changing Colors

1. Update `tailwind.config.js` color palette
2. Update dark mode colors if needed
3. Test in both light and dark modes

### Adding New Sections

1. Create a new component in `src/components/`
2. Add it to `App.tsx`
3. Update navigation in `Nav.tsx`
4. Add smooth scroll anchor if needed

### Modifying Animations

1. Update Framer Motion variants in components
2. Adjust timing and easing in `tailwind.config.js`
3. Test with reduced motion preferences

### Updating Content

1. Update `src/utils/resumeData.ts` for structured data
2. Update individual components for display content
3. Update `index.html` for SEO meta tags

---

**Built with ❤️ by Ravinuthala Ramachandra Sri Harsha**

