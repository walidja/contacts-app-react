# Contacts List App

A full-stack contacts management application built with **React**, **Vite**, and **Express.js**.

---

## Features

- Add, edit, and delete contacts
- Select multiple contacts for batch deletion
- View detailed contact information
- Responsive and modern UI
- Modal form for adding new contacts
- Persistent storage using a JSON file on the server

---

## Project Structure

```
client/
  src/
    components/
    api/
    utils/
    styles/
  index.html
  package.json
  vite.config.ts
  ...
server/
  src/
    controllers/
    model/
    routes/
    utils/
  app.js
  package.json
  ...
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

---

### 1. Clone the repository

```sh
git clone https://github.com/your-username/contacts-app-react.git
cd contacts-app-react
```

---

### 2. Install dependencies

#### Client

```sh
cd client
npm install
```

#### Server

```sh
cd ../server
npm install
```

---

### 3. Run the development servers

#### Start the backend server

```sh
npm run dev
```

By default, the backend runs on [http://localhost:4000](http://localhost:4000).

#### Start the frontend dev server

Open a new terminal, then:

```sh
cd ../client
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173).

---

### 4. Usage

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Add, edit, or delete contacts using the UI.
- All data is stored on the server in a JSON file.

---

## API Endpoints

The backend exposes the following endpoints (proxied via `/api/contacts` in development):

- `GET /contacts` — Get all contacts
- `GET /contacts/:id` — Get a contact by ID
- `POST /contacts` — Add a new contact
- `PUT /contacts/:id` — Update a contact
- `DELETE /contacts/:id` — Delete a contact
- `DELETE /contacts` — Delete multiple contacts (send array of IDs in body)

---

## Scripts

### Client

- `dev` — Start the development server
- `build` — Build the app for production
- `preview` — Preview the production build
- `lint` — Run ESLint

### Server

- `dev` — Start the backend with nodemon
- `start` — Start the backend

---

## Linting

The client uses ESLint with recommended React and TypeScript rules.

---

## License

MIT

---

**Made with ❤️ using React, Vite, and Express**
