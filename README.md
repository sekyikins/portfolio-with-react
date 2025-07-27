# Benjamin Kofi Sekyi - Portfolio Website

A modern, responsive portfolio website built with React, showcasing Benjamin's skills, projects, and achievements as a front-end developer from Ghana.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with beautiful layouts for all devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Modern UI**: Clean, professional design with Tailwind CSS
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Performance**: Optimized for speed and accessibility

## 🛠 Tech Stack

- **React 19** - Modern React with hooks and functional components
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   ├── Footer.js       # Footer component
│   ├── ProjectCard.js  # Project display card
│   └── CertificationCard.js # Certification display card
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── About.js        # About page
│   ├── Projects.js     # Projects showcase
│   ├── Certifications.js # Certifications page
│   └── Contact.js      # Contact form
├── data/               # Static data
│   ├── projects.js     # Project information
│   └── certifications.js # Certification data
├── assets/             # Images and static files
└── styles/             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sekyikins/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## 📱 Pages

### Home
- Hero section with typing animation
- Skills showcase
- Quick stats
- Call-to-action buttons

### About
- Personal bio and background
- Skills with progress bars
- Timeline of experience
- Personal information

### Projects
- Filterable project gallery
- Technology-based filtering
- Live demo and GitHub links
- Project statistics

### Certifications
- Certificate showcase
- Learning journey
- Achievement statistics

### Contact
- Contact form with validation
- Social media links
- Contact information
- Professional details

## 🎨 Design Features

- **Typography**: Inter font family for clean readability
- **Color Scheme**: Professional blue primary color with dark/light variants
- **Animations**: Smooth page transitions and hover effects
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized images and lazy loading

## 📊 Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

## 🔧 Customization

### Adding New Projects

Edit `src/data/projects.js`:

```javascript
{
  title: "Project Name",
  description: "Project description",
  tech: ["React", "JavaScript", "CSS"],
  liveUrl: "https://project-url.com",
  githubUrl: "https://github.com/username/project",
  image: "/assets/project-image.png"
}
```

### Adding New Certifications

Edit `src/data/certifications.js`:

```javascript
{
  title: "Certificate Title",
  issuer: "Issuing Organization",
  date: "2024-12",
  description: "Certificate description",
  image: "/assets/certificate-image.png"
}
```

## 🌐 Deployment

The site is optimized for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About Benjamin

Benjamin Kofi Sekyi is a passionate front-end developer from Kumasi, Ghana, specializing in React, JavaScript, HTML, and CSS. With experience in teaching and internships, he brings a unique perspective to web development.

He is currently pursuing a BSc. in Computer Science at Kwame Nkrumah University of Science and Technology (KNUST), Kumasi, Ghana.

### Contact
- Email: benjaminkofi.sekyi@gmail.com
- Phone: +233 55 659 0885 / +233 50 911 8087
- GitHub: [@sekyikins](https://github.com/sekyikins)
- LinkedIn: [Benjamin Sekyi](https://linkedin.com/in/benjamin-sekyi)

---

Made with ❤️ in Kumasi, Ghana
