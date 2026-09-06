# Partner Finder Platform

A full-stack web application for publishing and discovering partner requests for apartments, studies, vacations and general activities.

## Features

- Browse partner requests
- Filter posts by category
- Create new posts
- Store posts in MongoDB
- React Router navigation
- Material UI interface
- Express REST API
- MongoDB / Mongoose persistence

## Tech Stack

### Frontend
- React
- React Router
- Material UI
- Axios

### Backend
- Node.js
- Express
- MongoDB
- Mongoose

## Run Locally

### 1. Start MongoDB

Use a local MongoDB instance, or configure a remote database with `MONGO_URI`.

### 2. Start the server

```bash
cd server
npm install
npm start
```

Create `server/.env` locally:

```env
PORT=3030
CLIENT_URL=http://localhost:3000
MONGO_URI=mongodb://127.0.0.1:27017/partner_finder
```

### 3. Start the client

```bash
cd client
npm install
npm start
```

The client runs on `http://localhost:3000` and the API on `http://localhost:3030`.

## API

- `GET /api/health`
- `GET /api/posts`
- `GET /api/posts/:id`
- `POST /api/posts`
- `DELETE /api/posts/:id`

## Project Status

This repository contains a functional MVP. Authentication and user-specific profiles are planned as future improvements.
