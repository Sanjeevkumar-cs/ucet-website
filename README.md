# UCET College Website

A professional, modern website for University College of Engineering & Technology (UCET) built with Next.js 16, React 19, and Tailwind CSS.

## Overview

This website showcases UCET's programs, facilities, admission process, and alumni network. It features responsive design, modern UI components, and comprehensive information architecture across 8 main pages.

## Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design with institutional color scheme (deep blue, burgundy, white)
- **Multiple Pages**: 8 comprehensive pages covering all aspects of the college
- **Interactive Components**: Forms, carousels, accordions, and filters
- **Fast Performance**: Optimized images, semantic HTML, and efficient CSS
- **Accessibility**: WCAG 2.1 compliant with proper semantic markup and ARIA labels

## Project Structure

```
/app
  /about              - College information, mission, vision, history
  /academics          - Engineering programs and curriculum details
  /admissions         - Admission process, forms, FAQs, important dates
  /alumni             - Alumni network, success stories, events
  /contact            - Contact form, department info, office hours
  /gallery            - Photo gallery with filters
  /updates            - News, announcements, and event calendar
  layout.tsx          - Root layout with Header and Footer
  page.tsx            - Home page with hero, highlights, and CTA sections
  globals.css         - Global styles and color theme

/components
  Header.tsx          - Navigation header with mobile menu
  Footer.tsx          - Footer with links, contact info, copyright

/public
  ucet-logo.png       - College logo (circular seal with lotus)
  ucet-building.jpg   - Campus building photo

/styles
  (Tailwind CSS + custom CSS in globals.css)
```

## Color Scheme

- **Primary Blue**: `#1e3a8a` (Deep Blue) - Main brand color
- **Accent Blue**: `#2563eb` (Bright Blue) - Highlights and CTAs
- **Secondary**: `#991b1b` (Burgundy) - Accents, inspired by building colors
- **Neutrals**: White, Light Gray, Dark Gray, Black

The color palette is defined using CSS custom properties in `globals.css` and can be easily customized.

## Pages

### Home Page (`/`)
- Hero section with campus building image
- Key highlights (4 cards: academics, research, campus life, innovation)
- Featured programs section
- Call-to-action buttons
- Campus statistics

### About Page (`/about`)
- Mission and vision statements
- Core values (Excellence, Integrity, Innovation, Inclusivity)
- College history and milestones
- Accreditations and recognition

### Academics Page (`/academics`)
- Four engineering programs:
  - Computer Science & Engineering
  - Mechanical Engineering
  - Electrical Engineering
  - Civil Engineering
- Program overview, highlights, and specializations
- Admission requirements
- Application process

### Admissions Page (`/admissions`)
- Important dates timeline
- Eligibility criteria
- Admission inquiry form
- Frequently asked questions (Accordion)
- Required documents
- Selection process

### Updates Page (`/updates`)
- News and announcements
- Category filter (academics, research, events, placements, partnerships, alumni)
- Upcoming events calendar
- Featured articles

### Gallery Page (`/gallery`)
- Photo grid with filter tabs (Campus, Events, Facilities, Students)
- Image modal view
- Lightbox functionality
- Campus highlights section

### Alumni Page (`/alumni`)
- Alumni network statistics
- Alumni community overview
- Success stories of 6 notable alumni
- Alumni directory search
- Upcoming alumni events

### Contact Page (`/contact`)
- Contact information cards (Address, Phone, Email, Hours)
- Contact form with validation
- Department-wise contact details
- Office hours and location information

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui
- **Images**: Next.js Image component with optimization
- **Icons**: Lucide React
- **Fonts**: Geist (sans) and Geist Mono

## Installation & Setup

1. **Clone/Download the project**
   ```bash
   git clone [repository-url]
   cd ucet-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

## Customization

### Change Colors
Edit the CSS custom properties in `/app/globals.css`:
```css
:root {
  --primary: oklch(...);      /* Primary blue */
  --secondary: oklch(...);    /* Burgundy */
  --accent: oklch(...);       /* Accent blue */
  /* ... more colors */
}
```

### Update Content
All content is editable in respective page files. Update text, images, and links as needed.

### Add New Pages
Create new directories in `/app` following the existing structure:
```bash
mkdir app/new-page
touch app/new-page/page.tsx
```

## Best Practices Implemented

✅ **Responsive Design**: Mobile-first approach with Tailwind responsive classes
✅ **Performance**: Image optimization, code splitting, lazy loading
✅ **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
✅ **SEO**: Proper metadata, Open Graph tags, structured data
✅ **Code Quality**: TypeScript for type safety, consistent formatting
✅ **Component Reusability**: Shared components for Header and Footer

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- [ ] Admin dashboard for content management
- [ ] Blog system with markdown support
- [ ] Student portal login
- [ ] Online exam scheduling
- [ ] Interactive campus map
- [ ] Multi-language support

## License

This project is created for UCET. All rights reserved.


---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
