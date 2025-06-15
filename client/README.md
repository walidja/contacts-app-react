# Contacts List App

A simple contacts management application built with **React**, **TypeScript**, and **Vite**.

## Features

- Add, edit, and delete contacts
- Select multiple contacts for batch deletion
- View detailed contact information
- Responsive and modern UI
- Modal form for adding new contacts

## Project Structure

```
src/
  components/
    AppHeader.tsx
    AppFooter.tsx
    AddContactModal.tsx
    ContactDetails.tsx
    ContactsSide.tsx
    ContactList.tsx
    ContactItem.tsx
  App.tsx
  styles.css
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/contacts-list-vite.git
    cd contacts-list-vite
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```sh
    npm run dev
    # or
    yarn dev
    ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

- `dev` - Start the development server
- `build` - Build the app for production
- `preview` - Preview the production build
- `lint` - Run ESLint

## Linting

This project uses ESLint with recommended React and TypeScript rules. You can expand the configuration as needed. Example:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## License

MIT

---

**Made with ❤️ using React + Vite**
