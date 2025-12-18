# Anas | Futuristic Data Portfolio

A high-fidelity, futuristic landing page built for **Anas**, a Data Analyst and Power BI expert. This project showcases data visualization prowess using Recharts and interactive AI capabilities via the Gemini API.

## 🚀 Local Development Setup

### Prerequisites
- **Node.js**: Version 18 or higher is recommended.
- **Environment Variables**: An API Key for Gemini is required in the environment as `API_KEY`.

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Start Development Server
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173`.

## 🏗️ Build for Production

To generate a production-ready bundle:
```bash
npm run build
```
This command uses Vite to bundle the application and PostCSS to process Tailwind CSS. The output is generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## 🎨 Tailwind CSS Integration

- **Source Styles**: All custom styles, Tailwind directives, and animations live in `input.css`.
- **Configuration**: `tailwind.config.js` and `postcss.config.js` are configured to handle the build pipeline automatically.
- **Optimization**: The `dist/` directory contains minified, purged CSS. Do **not** edit files in `dist/` manually as they are overwritten on every build.

## 📁 Project Architecture

- `index.tsx`: Main entry point. Imports global styles and mounts the React app.
- `App.tsx`: Main layout structure.
- `components/`: Modular UI components (Hero, SkillMatrix, Assistant, etc.).
- `services/`: API integration services (e.g., Gemini Service).
- `constants.tsx`: Centralized data for projects, skills, and instructions.
- `input.css`: Global styles and futuristic utility classes.

## 🔒 Security Note
The contact form is configured to initiate a secure handshake via the user's local email client (Outlook/Mail) using a structured `mailto:` protocol to ensure direct and reliable delivery.
