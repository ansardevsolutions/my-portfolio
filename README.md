# React + Vite Portfolio

This is a modern frontend-only portfolio built with React and Vite. It is designed to be deployed directly to Vercel with zero backend configuration required.

## Contact Form Setup (Web3Forms)
This project uses **Web3Forms** to handle contact form submissions directly from the frontend without needing a backend server.

1. Go to [Web3Forms](https://web3forms.com/) and click "Create Access Key"
2. Enter your email address to receive your free Access Key.
3. Create a `.env` file in the root of your project:
   ```bash
   cp .env.example .env
   ```
4. Add your Access Key to the `.env` file:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

## Deployment (Vercel)
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and import the repository.
3. In the Vercel dashboard, go to Settings > Environment Variables.
4. Add `VITE_WEB3FORMS_ACCESS_KEY` and paste your key.
5. Deploy!

---

## Technical Details

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
