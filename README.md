# Vietnamese National High School Exam Score Analysis 2024

<div align="center">
  <img src="https://raw.githubusercontent.com/truongtuanhuy268/goldenowl-interview-fe/main/public/screen-shot/logo.webp" alt="Golden Owl Logo" width="200"/>
</div>

This is a Golden Owl Intern Assignment Project that provides a comprehensive analysis and visualization of the 2024 Vietnamese National High School Exam scores. The application offers an interactive dashboard to explore and analyze student performance data across different subjects and regions.

## Features Preview

### Dashboard Overview
<div align="center">
  <img src="https://raw.githubusercontent.com/truongtuanhuy268/goldenowl-interview-fe/main/public/screen-shot/dashboard.png" alt="Dashboard View" width="800"/>
  <p>The main dashboard provides a comprehensive overview of exam statistics and performance metrics.</p>
</div>

### Detailed Reports
<div align="center">
  <img src="https://raw.githubusercontent.com/truongtuanhuy268/goldenowl-interview-fe/main/public/screen-shot/report.png" alt="Report View" width="800"/>
  <p>Access detailed reports and analytics for in-depth analysis of student performance.</p>
</div>

### Settings and Customization
<div align="center">
  <img src="https://raw.githubusercontent.com/truongtuanhuy268/goldenowl-interview-fe/main/public/screen-shot/setting.png" alt="Settings View" width="800"/>
  <p>Customize your viewing preferences and application settings.</p>
</div>

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository**
   ```bash
   git clone [<your-repository-url>](https://github.com/truongtuanhuy268/goldenowl-interview-fe.git)
   cd goldenowl-interview-fe
   ```

2. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env.local
   
   # Edit .env.local with your configuration
   # Required environment variables:
   # - NEXT_PUBLIC_BACKEND_URL: Your backend API URL
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Creates a production build
- `npm run start` - Runs the production build
- `npm run lint` - Runs ESLint to check for code issues

## Project Structure

```
frontend/
├── app/              # Next.js app directory (pages and layouts)
├── components/       # Reusable React components
├── lib/             # Utility functions and shared code
├── public/          # Static assets
└── ...
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [ShadCN](https://ui.shadcn.com/) - Component library

## Features

- Interactive dashboard for exam score analysis
- Comprehensive data visualization of student performance
- Subject-wise score distribution
- Regional performance comparison
- Dark mode support
- Responsive design for all devices
- Type-safe development with TypeScript
- Optimized performance with Turbopack

