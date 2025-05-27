# Modern Portfolio Website

A clean, responsive portfolio website built with HTML, CSS, and JavaScript. Features include animated project cards, a timeline for experiences, dark/light theme toggle, and smooth scroll animations.

## Features

- 🎨 Modern and clean design
- 🌓 Dark/Light theme toggle with local storage persistence
- 📱 Fully responsive layout
- ✨ Smooth scroll animations
- 🎴 Animated project cards with hover effects
- ⏳ Interactive timeline for experiences
- 🔍 SEO friendly
- 🚀 Fast loading and optimized performance

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript (if you want to modify the code)

### Running Locally

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Navigate to the project directory:

```bash
cd portfolio
```

3. Open `index.html` in your web browser:
   - Double-click the file
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## Customization

### Personal Information

1. Open `index.html` and replace:
   - Your name
   - Job title
   - Description
   - Contact information
   - Social media links

### Projects

Add your projects in the projects section:

```html
<div class="project-card">
  <img src="path/to/image.jpg" alt="Project Name" class="project-image" />
  <div class="project-content">
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">Project description goes here.</p>
  </div>
</div>
```

### Experience Timeline

Add your experiences in the timeline section:

```html
<div class="timeline-item">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <h3>Job Title</h3>
    <p>Company Name</p>
    <p>Duration</p>
  </div>
</div>
```

## Deployment

### GitHub Pages

1. Push your code to GitHub:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to your repository on GitHub
3. Click on "Settings"
4. Scroll down to "GitHub Pages" section
5. Select the branch you want to deploy (usually `main`)
6. Click "Save"
7. Your site will be published at `https://yourusername.github.io/portfolio`

### Netlify

1. Create a Netlify account
2. Click "New site from Git"
3. Choose your repository
4. Deploy settings:
   - Build command: leave empty
   - Publish directory: leave as is
5. Click "Deploy site"

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Google Fonts](https://fonts.google.com/) for typography
