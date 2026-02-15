# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Getting Started

To launch the website locally, follow these steps:

1. **Install Dependencies** (if you haven't already):
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

3. **Open the Website**:
   Once the server starts, check the terminal for the local URL. It is typically:
   [http://localhost:5173/](http://localhost:5173/)

---

## Content Management 📁

The website is built to be easily updated without touching any complex code.

### 1. Students & Ambassadors
- Data is managed in: [students.js](file:///Users/luiselvas/Documents/site_lic/src/data/students.js)
- Ambassadors are current representatives. Add them to the `students` array:
  ```javascript
  { id: 11, name: "Name", year: 1, bio: "Bio...", email: "email@iscte-iul.pt" }
  ```
- No `lectiveYear` is needed for students; they will appear for their specific enrollment year (1, 2, or 3) regardless of which historical photo is being viewed.

### 2. New Academic Years
- **Media**: Create a folder in `src/assets/academic-years/` (e.g., `2025-2026`).
- **Structure**: Add subfolders `year-1`, `year-2`, and `year-3`, each containing a `class-photo.png`.
- **Activation**: Add the new year string (e.g., `"2025/2026"`) to the `academicYears` array in `students.js`.

### 3. Website Text & Projects
- All text and translations are in: [content.js](file:///Users/luiselvas/Documents/site_lic/src/data/content.js)
- Update the `pt` (Portuguese) and `en` (English) objects to change any text, including the Project filters and descriptions.

---


## Technical Details

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
