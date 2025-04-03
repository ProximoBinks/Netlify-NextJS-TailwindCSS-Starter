# Netlify NextJS TailwindCSS Starter

A modern, production-ready starter template for building web applications with Next.js, TailwindCSS, and Netlify deployment.

## Features

- ⚡️ [Next.js](https://nextjs.org/) - React framework for production
- 🎨 [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🚀 [Netlify](https://www.netlify.com/) - Deployment and hosting platform
- 📱 Responsive design out of the box
- 🔥 Hot reloading during development
- 📦 Optimized production build

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn package manager

### Installation

1. Clone this repository:
```bash
git clone https://github.com/proximobinks/Netlify-NextJS-TailwindCSS-Starter.git
```

2. Navigate to the project directory:
```bash
cd Netlify-NextJS-TailwindCSS-Starter
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── pages/             # Next.js pages
├── public/            # Static files
├── styles/            # Global styles and TailwindCSS
├── components/        # React components
└── package.json       # Project dependencies
```

## Deployment

This starter is configured for easy deployment on Netlify:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Choose your repository
5. Configure the build settings:
   - Build command: `npm run build` or `yarn build`
   - Publish directory: `.next`
6. Click "Deploy site"

## Customization

- Edit `styles/globals.css` to modify global styles
- Update `pages/index.js` to customize the home page
- Modify `tailwind.config.js` to customize TailwindCSS settings

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.