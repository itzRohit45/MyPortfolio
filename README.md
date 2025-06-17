# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, Framer Motion, and Three.js. This portfolio includes smooth scroll animations, 3D elements, and a clean, professional design.

## Features

- **Fully Responsive**: Looks great on all devices from mobile to desktop
- **Smooth Animations**: Using Framer Motion for scroll-based animations
- **3D Elements**: Three.js integration with interactive 3D objects
- **Dark/Light Mode**: Toggle between dark and light themes
- **Accessible Design**: WCAG-friendly contrast and keyboard navigation
- **Modern UI**: Clean, minimalist design with micro-interactions
- **Contact Form**: Fully functional contact form with email integration
- **Performance Optimized**: Fast loading times and optimized assets

## Sections

1. **Hero**: Introduction with animated typewriter effect and 3D element
2. **About Me**: Personal information, skills, and competencies
3. **Projects**: Showcase of projects with filter functionality and card flip animations
4. **Experience**: Timeline of professional experience
5. **Contact**: Contact form with validation and Google Maps integration

## Tech Stack

- **Framework**: Next.js
- **Styling**: CSS Modules
- **Animations**: Framer Motion
- **3D Graphics**: Three.js
- **Icons**: React Icons
- **Form Handling**: Formspree
- **Other**: React Simple Typewriter

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory:
   ```
   cd portfolio
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

To create a production build:

```
npm run build
```

To start the production server:

```
npm start
```

## Customization

### Personal Information

Edit your personal information in the respective component files:

- Update your name, role, and description in `/components/sections/Hero.js`
- Update your bio in `/components/sections/About.js`
- Update your projects in `/components/sections/Projects.js`
- Update your experience in `/components/sections/Experience.js`
- Update your contact information in `/components/sections/Contact.js`
- Update your social links in `/components/layout/Footer.js`

### Images

Replace the placeholder images in the `/public/images/` directory with your own images.

### Colors

Update the color scheme by editing the CSS variables in `/styles/globals.css`.

### Email Setup

To set up the contact form, update the Formspree form endpoint in `/components/sections/Contact.js` with your own form ID from [Formspree](https://formspree.io/).

1. Create a free account at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID (it looks like `xgeryabz`)
3. Replace the placeholder form ID in the `action` attribute of the form in `/components/sections/Contact.js`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for the smooth animations
- Three.js for the 3D capabilities
- Formspree for the simple and effective form handling
- All the incredible open-source contributors
