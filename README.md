# Hanning Dev Portfolio

A modern, high-performance personal portfolio site built to showcase projects, experience, and cybersecurity focus.

## 🚀 Tech Stack

Built with a focus on performance, maintainability, and premium aesthetics:

*   **Core Framework**: [React](https://react.dev/) (v18+)
*   **Build Tool**: [Vite](https://vitejs.dev/) - For lightning-fast local development and optimized production builds.
*   **Routing**: [React Router DOM](https://reactrouter.com/) - Client-side routing for seamless page transitions.
*   **Styling**:
    *   **CSS Variables**: For a consistent, easily themable design system.
    *   **CSS Modules**: For scoped, component-specific styles (e.g., Navbar).
    *   **Glassmorphism**: "Bubbly" Apple-inspired aesthetic with heavy use of `backdrop-filter` and translucent gradients.
*   **Animations**: Native CSS transitions and animations (pending Framer Motion integration for complex sequences).
*   **Data Management**: JSON-based content layer (`src/data`) for easy updates without code changes.

## 🛠️ Setup & Run

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm run dev
    ```

3.  **Build by Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

*   `/src/components`: UI components (Navbar, etc.)
*   `/src/pages`: Route views (Home, Projects, About)
*   `/src/data`: Content files (projects.json, profile.json)
*   `/public/backend`: Storage for Resume, Certifications, and CV.

---
Designed by Adrian Hanning.
