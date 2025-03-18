# NotesApp 

## Overview
The NotesApp is a full-stack application with a front-end built using React and a back-end powered by Node.js and Express. It allows users to securely log in, create, view, and manage notes. The application follows a clean separation of concerns between the frontend and backend, enabling scalability and ease of maintenance.

---

## Features

* **User Authentication:** Users can log in with their credentials.
* **Note Management:** Users can create new notes, edit them, and delete them. Notes can be marked as important.
* **Dynamic UI:** Notes are displayed based on their importance.
* **Error Handling:** Proper error messages are shown for invalid login attempts or actions like deleting a non-existing note.

## Tech Stack

* **Frontend:** React, Bootstrap, Axios
* **Backend:** Node.js, Express, MongoDB, Mongoose, JWT for authentication
* **API:** RESTful endpoints for login and note management

## Frontend Components

* **LoginForm:** Allows users to log in.
* **NoteForm:** A form to create new notes.
* **Note:** Displays each individual note and allows toggling its importance and deleting it.
* **Notification:** Displays error messages.
* **Togglable:** A component that toggles visibility, used for forms like NoteForm.

## Backend Endpoints

* **POST /api/login:** Authenticates users and returns a JWT.
* **GET /api/notes:** Fetches all notes.
* **POST /api/notes:** Creates a new note.
* **DELETE /api/notes/:id:** Deletes a note.
* **PUT /api/notes/:id:** Updates a note's content and importance.

## Usage

### Frontend

To run the frontend locally:
1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the React app.

### Backend

To run the backend locally:
1. Clone the repository.
2. Set up MongoDB and create a `.env` file with the necessary configurations (e.g., `PORT`, `MONGODB_URI`, `SECRET`).
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the Express server.

## Project Structure

```
NOTESAPP/
├── controllers/
│   ├── login.js
│   ├── notes.js
│   └── users.js
├── dist/
├── frontend/
│   ├── dist/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── LoginForm.jsx
│       │   ├── Note.jsx
│       │   ├── NoteForm.jsx
│       │   ├── Notification.jsx
│       │   └── Toggleble.jsx
│       ├── services/
│       │   ├── login.js
│       │   └── notes.js
│       ├── App.jsx
│       ├── db.json
│       ├── index.css
│       └── main.jsx
├── models/
│   ├── note.js
│   └── user.js
├── tests/
│   ├── average.test.js
│   ├── note_api.test.js
│   ├── reverse.tests.js
│   └── test_helper.js
├── utils/
│   ├── config.js
│   ├── for_testing.js
│   ├── logger.js
│   └── middleware.js
├── env/
│   ├── .eslintinore
│   ├── .gitignore
│   ├── app.js
│   ├── eslint.config.mjs
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── .dockerignore
├── .eslintrc.cjs
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## File Structure and Purpose

### Frontend (React)
The `frontend/` directory contains the entire React application. Here, the user interface is built, which communicates with the backend API to perform CRUD operations for notes and manage user authentication.

- **frontend/dist/**: Contains the final bundled files from the Vite build process.
- **frontend/node_modules/**: Contains all the npm dependencies installed for the frontend.
- **frontend/public/**: Contains static assets (e.g., images, icons) that can be accessed publicly.
- **frontend/src/**: Contains all the source code for the React application.
  - **frontend/src/assets/**: Stores images or other static files used in the app.
  - **frontend/src/components/**: Holds reusable React components.
    - `LoginForm.jsx`: Component for user login, where users can enter their credentials.
    - `Note.jsx`: Displays a single note.
    - `NoteForm.jsx`: Allows users to create and edit notes.
    - `Notification.jsx`: Shows notifications for actions like successful login or note creation.
    - `Toggleble.jsx`: A component to toggle visibility for certain UI elements (like note details).
  - **frontend/src/services/**: Contains functions for interacting with the backend API.
    - `login.js`: Handles login-related requests, such as sending login data to the backend and handling responses.
    - `notes.js`: Handles CRUD operations related to notes (e.g., creating, editing, deleting).
  - **frontend/src/App.jsx**: The root component of the React application, which manages routing and general layout.
  - **frontend/src/db.json**: A placeholder or mock database for storing notes in development (typically replaced with a real database in production).
  - **frontend/src/index.css**: The main stylesheet for the frontend.
  - **frontend/src/main.jsx**: The entry point of the React app, where the React app is rendered into the HTML DOM.

---

### Backend (Node.js & Express)
The `backend/` is responsible for the API and the logic needed to manage users and notes. This layer interacts with the database, validates data, and sends responses to the frontend.

- **controllers/**: Contains the logic for handling requests from the frontend and interacting with the models.
  - `login.js`: Contains the login logic, including authentication and authorization processes.
  - `notes.js`: Defines the logic for creating, reading, updating, and deleting notes.
  - `users.js`: Manages user-related actions, such as registering a user or fetching user details.
- **models/**: Defines the structure of the data in the database.
  - `note.js`: Represents a note model, including fields like title, content, and date.
  - `user.js`: Represents a user model, including fields like username, email, and password.
- **utils/**: Contains utility functions and middleware used throughout the backend.
  - `config.js`: Stores configuration values like database URL, environment variables, etc.
  - `for_testing.js`: Contains helper functions for testing.
  - `logger.js`: Provides logging functionality for the backend.
  - `middleware.js`: Contains middleware functions like authentication checks or logging for requests.
- **env/**: Contains environment-specific configurations.
  - `app.js`: The main Express server setup, responsible for handling incoming requests and routing.
  - `index.js`: The entry point for the backend application, typically setting up and running the server.
  - `mongo.js`: Handles the connection to MongoDB (database).
  - `package.json`: Contains metadata about the project and lists dependencies for the backend.
  - `package-lock.json`: Contains the exact version of each installed package.
  - `eslint.config.mjs`: ESLint configuration for the backend.
  - `.gitignore`: Specifies files and folders that should be ignored by Git (e.g., node_modules).
  - `.dockerignore`: Specifies files to exclude when building the Docker image.
  - `Dockerfile`: Defines how to build a Docker image for the backend application.
- **tests/**: Contains test files to validate the functionality of the backend.
  - `average.test.js`: A test case for calculating average values (potentially a sample or utility function test).
  - `note_api.test.js`: Tests the note-related API endpoints to ensure correct functionality.
  - `reverse.tests.js`: Contains tests, possibly for utility functions or other small features.
  - `test_helper.js`: Includes helper functions to simplify writing tests.

---

## Configuration and Deployment
- **Dockerfile**: This file is used to build a Docker image for the application. It defines the backend environment and dependencies needed for deployment.
- **fly.toml**: Configuration for deploying the app on Fly.io, a platform for running applications in the cloud.
- **.eslintrc.cjs**: ESLint configuration file to ensure consistent code style.
- **vite.config.js**: Configuration for Vite, the tool used for bundling and building the frontend.

---

## High-Level Workflow
- **Frontend**: Users interact with the frontend React application. The user enters their credentials through the `LoginForm.jsx` component, which communicates with the backend via the `login.js` service. Upon successful login, the user is able to create, view, and edit notes through the `NoteForm.jsx` and `Note.jsx` components, with API calls handled by the `notes.js` service.
- **Backend**: The backend API (built with Node.js and Express) listens for HTTP requests sent by the frontend. When a user logs in, the backend validates the credentials and responds accordingly through the `login.js` controller. The notes are managed through the `notes.js` controller, with CRUD operations interacting with the MongoDB database through the `note.js` model.
- **Database**: Data is stored in a MongoDB database (or a mock DB in development) using models defined in the `models/` directory. Each note is represented as a document in the `note.js` model, and users are stored in the `user.js` model.
- **Authentication**: The backend handles user authentication, ensuring that only authorized users can access or modify notes. The login functionality is handled by the `login.js` controller, using middleware for validation and authentication.

---

# NotesApp: User Login Flow

## Overview

The NotesApp includes user authentication functionality, allowing users to securely log in and access their personalized notes. This README will guide you through the login process, explaining how the authentication mechanism is set up in both the frontend (React) and backend (Node.js & Express).

## How the Login Works

The login flow involves two main steps:

1. The user enters their credentials (username and password) in the frontend login form.
2. The credentials are sent to the backend, where they are verified. If valid, the backend responds with a token or a success message, granting the user access to the application.

## Frontend (React) Login Flow

**User Interaction**: The user enters their credentials (username and password) in the LoginForm.jsx component.

**Sending the Login Request**: The login data is sent to the backend via an API request using the login.js service.

### Code Breakdown

#### 1. LoginForm.jsx (Frontend)

```jsx
import React, { useState } from 'react';
import { loginUser } from '../services/login'; // Import the login service

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password }); // Call the login function
      if (response.success) {
        onLogin(response.token); // Pass token to the parent component (e.g., App.jsx)
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;
```

In the LoginForm.jsx component:
- The form captures the username and password.
- When the form is submitted, it calls the loginUser function from login.js (frontend service).
- If the login is successful, it passes the authentication token back to the parent component (e.g., App.jsx).

#### 2. login.js (Frontend Service)

```javascript
const loginUser = async (credentials) => {
  const response = await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();
  return data; // Return the response, which includes success status and token
};

export { loginUser };
```

In the login.js service:
- The loginUser function sends a POST request to the backend with the user credentials in JSON format.
- The response from the backend is returned, which includes a success status and the authentication token if the login is successful.

## Backend (Node.js & Express) Login Flow

**User Login Request**: When the frontend sends a POST request to the `/api/login` endpoint with the username and password, the backend verifies the credentials.

**Credential Verification**: The backend compares the received credentials with stored user data (usually in a database like MongoDB). If they match, the backend generates a JWT (JSON Web Token) and sends it back to the frontend.

### Code Breakdown

#### 1. login.js (Backend Controller)

```javascript
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Import the User model

// Login controller
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Compare the password with the stored hash
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, username: user.username }, 'your_jwt_secret', {
      expiresIn: '1h', // Token expiry time
    });

    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'An error occurred during login' });
  }
};

module.exports = { login };
```

In the backend login.js controller:
- The login function first checks if a user exists by querying the database.
- It then uses bcrypt to compare the provided password with the stored hashed password.
- If the credentials are valid, it generates a JWT token using the jsonwebtoken library.
- The token is sent back in the response.

#### 2. user.js (Backend Model)

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

In the user.js model:
- The User model defines the structure of a user, with a username and a password.
- Passwords should be hashed before storing them in the database (handled by bcrypt during user creation or registration).

#### 3. app.js (Backend Express Setup)

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./controllers/login'); // Import the login controller

const app = express();
app.use(bodyParser.json()); // Parse incoming JSON requests

// Login route
app.post('/api/login', loginRouter.login);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
```

In app.js, the `/api/login` route is set up to call the login controller, which processes the login request and returns a token if successful.

## JWT Authentication in Action

Once the user logs in, the backend generates a JWT token. This token is stored in the frontend (typically in localStorage or cookies) and is used to authenticate future API requests.

To send the token with subsequent requests, the frontend will attach it in the HTTP headers:

```javascript
const fetchNotes = async () => {
  const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage

  const response = await fetch('http://localhost:5000/api/notes', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  const data = await response.json();
  console.log(data);
};
```

## Conclusion

The login flow in NotesApp is designed to securely authenticate users using a simple and efficient mechanism with JWT. Here's a quick summary of the process:

1. The user submits their login credentials via the frontend form.
2. The credentials are verified in the backend.
3. If the credentials are valid, the backend generates a JWT token and sends it to the frontend.
4. The frontend stores the token and includes it in the header of subsequent API requests to maintain authentication.

This ensures that only authenticated users can access and manage their notes.

# NotesApp: Creating a Note - From Frontend to Backend

## Overview

In NotesApp, the process of creating a note follows a flow where the frontend (React) captures user input, sends it to the frontend service, and passes it to the backend (Node.js & Express), which then stores it in MongoDB.

This README will guide you through the process of creating a note, explaining the flow and providing code examples at each step.

## How the Note Creation Works

The note creation process involves the following key steps:

1. The user submits a note form in the frontend.
2. The note data is sent to the frontend service, which makes an API request to the backend.
3. The backend receives the data, processes it, and stores it in MongoDB.
4. The backend responds with a confirmation that the note has been successfully created.

## Frontend (React) Note Creation Flow

**User Interaction**: The user fills out a note creation form (title and content).

**Sending the Note Data**: Once the form is submitted, the data is sent to the frontend service, which then forwards it to the backend.

### Code Breakdown

#### 1. NoteForm.jsx (Frontend Component)

The NoteForm.jsx component captures the title and content of the note from the user and submits it to the frontend service.

```jsx
import React, { useState } from 'react';
import { createNote } from '../services/notes'; // Import the createNote function

const NoteForm = ({ onNoteCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newNote = { title, content };
      const response = await createNote(newNote); // Call the service function to create a note
      if (response.success) {
        onNoteCreated(response.note); // Call the parent callback function to update the state
        setTitle('');
        setContent('');
      } else {
        setError('Failed to create note');
      }
    } catch (error) {
      setError('An error occurred while creating the note');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Create Note</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default NoteForm;
```

In the NoteForm.jsx component:
- The form collects the title and content of the note from the user.
- Upon form submission, the note data is passed to the createNote function from the frontend service.

#### 2. notes.js (Frontend Service)

The createNote function in the frontend service sends the note data to the backend API.

```javascript
const createNote = async (note) => {
  const token = localStorage.getItem('authToken'); // Retrieve the stored token
  const response = await fetch('http://localhost:5000/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Attach token for authentication
    },
    body: JSON.stringify(note), // Send the note data as the request body
  });

  if (!response.ok) {
    throw new Error('Failed to create note');
  }

  const data = await response.json();
  return data; // Return the response, which includes the created note
};

export { createNote };
```

In the notes.js service:
- The createNote function sends a POST request to the backend's /api/notes route.
- The request includes the note data in JSON format and the authentication token in the Authorization header.
- If the note creation is successful, the backend returns the created note.

## Backend (Node.js & Express) Note Creation Flow

**User Request**: The frontend sends a POST request to the backend with the note data.

**Data Validation & Note Creation**: The backend receives the request, validates the data, and saves the note in MongoDB.

### Code Breakdown

#### 1. notes.js (Backend Controller)

The backend notes.js controller processes the POST request and stores the note in MongoDB.

```javascript
const Note = require('../models/note'); // Import the Note model
const jwt = require('jsonwebtoken'); // Import JWT for token verification

// Create a note controller
const createNote = async (req, res) => {
  const { title, content } = req.body;
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from the Authorization header

  if (!token) {
    return res.status(401).json({ success: false, message: 'Authorization token missing' });
  }

  try {
    // Verify the token and extract the user ID
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const userId = decoded.userId;

    // Create a new note in the database
    const newNote = new Note({
      title,
      content,
      userId, // Attach the user ID to the note
    });

    // Save the note to MongoDB
    const savedNote = await newNote.save();
    res.status(201).json({ success: true, note: savedNote }); // Return the saved note
  } catch (error) {
    res.status(500).json({ success: false, message: 'An error occurred while creating the note' });
  }
};

module.exports = { createNote };
```

In the backend notes.js controller:
- The createNote function first extracts the token from the Authorization header.
- It verifies the token using jsonwebtoken and extracts the user ID.
- A new note is created with the provided title, content, and user ID.
- The note is saved to MongoDB using the Note model, and the saved note is returned in the response.

#### 2. note.js (Backend Model)

The note.js model defines the structure of a note in MongoDB.

```javascript
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }, // User ID reference
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
```

In the note.js model:
- The schema defines the structure of the note, including the title, content, and userId fields.
- The userId references the user who created the note, ensuring each note is associated with a specific user.

#### 3. app.js (Backend Express Setup)

In the backend app.js file, the /api/notes route is set up to call the createNote controller.

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const notesRouter = require('./controllers/notes'); // Import the notes controller

const app = express();
app.use(bodyParser.json()); // Parse incoming JSON requests

// Notes routes
app.post('/api/notes', notesRouter.createNote); // Create note route

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
```

In app.js, the /api/notes route is connected to the createNote function in the notes.js controller.

## MongoDB Storage

Once the note is successfully created, it is stored in the MongoDB database. The note schema ensures the title, content, and user association are saved for future reference.

## Conclusion

The process of creating a note in NotesApp follows a structured flow from frontend to backend:

1. The user fills out the note creation form in the frontend (NoteForm.jsx).
2. The note data is sent to the frontend service (createNote function).
3. The service sends the data to the backend via the /api/notes route.
4. The backend validates the user's authentication token and saves the note to MongoDB.
5. A response with the created note is sent back to the frontend.

This ensures that notes are securely created and associated with the authenticated user. The token-based authentication ensures that only authorized users can create and manage their notes.

# Overview of Frontend-Backend Interaction in Your NotesApp

The frontend and backend of your NotesApp communicate with each other primarily through API requests. The backend, built with Express.js, exposes various endpoints for handling authentication, notes management, and user registration. The frontend, built with React, interacts with these endpoints using HTTP requests made via axios.

## Frontend

The frontend includes various components that are responsible for displaying data and sending requests to the backend.

### LoginForm.jsx

The login form allows users to authenticate. When a user submits their credentials (username and password), it sends a POST request to the backend's `/api/login` endpoint to verify the credentials.

```jsx
const handleLogin = async (event) => {
  event.preventDefault()
  try {
    const user = await loginService.login({ username, password })
    window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
    noteService.setToken(user.token)
    setUser(user)
  } catch (exception) {
    setErrorMessage(`Wrong credentials, ${exception.message}`)
  }
}
```

This `handleLogin` function uses `loginService` to send a request to the backend. The response contains a JWT token, which is stored locally on the client to authorize future requests.

### NoteForm.jsx

This component lets the user create a new note. When a user submits a new note, the frontend sends a POST request to `/api/notes` to create the note in the backend.

```jsx
const addNote = (event) => {
  event.preventDefault()

  const noteObject = { content: newNote, important: true }
  noteService.create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
}
```

The `noteService.create` function sends a POST request to the backend. The token, which was set during login, is included in the request headers to authorize the operation.

### Note.jsx

Each note can be deleted by the user. The `handleDelete` function sends a DELETE request to the backend to remove the note.

```jsx
const handleDelete = async (note) => {
  const result = window.confirm(`remove note "${note.content}"`)
  if (!result) return

  try {
    await noteService.remove(note.id)
    setNotes(notes.filter(b => b.id !== note.id))
  } catch (error) {
    console.error("Error while deletion:", error)
  }
}
```

The `noteService.remove` function sends a DELETE request to the backend's `/api/notes/:id` endpoint to delete the note.

### Notification.jsx

This component displays error or success messages, depending on the status of the user's actions. For instance, if login fails, an error message will appear, and it is handled by the `setErrorMessage` function passed down from App.

## Backend

The backend exposes a set of API routes to manage users and notes.

### Login Endpoint (/api/login)

The backend receives login requests at this endpoint. It verifies the user's credentials (username and password) and, if valid, generates a JWT token.

```js
loginRouter.post('/', async (request, response) => {
  const { username, password } = request.body
  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({ error: 'invalid username or password' })
  }

  const userForToken = { username: user.username, id: user._id }
  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 60*60 })
  response.status(200).send({ token, username: user.username, name: user.name })
})
```

The backend checks the provided credentials, and if valid, it responds with a token that is sent back to the frontend to authenticate future requests.

### Notes Endpoint (/api/notes)

The backend provides the functionality to create, retrieve, update, and delete notes.

#### GET /api/notes

Fetches all notes from the database.

```js
notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({}).populate('user', { username: 1, name: 1 })
  response.json(notes)
})
```

#### POST /api/notes

Allows users to create a new note. The request must include a valid JWT token in the header to authenticate the user.

```js
notesRouter.post('/', async (request, response) => {
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' })
  }
  const user = await User.findById(decodedToken.id)
  const note = new Note({
    content: request.body.content,
    important: request.body.important || false,
    user: user.id
  })
  const savedNote = await note.save()
  user.notes = user.notes.concat(savedNote._id)
  await user.save()
  response.status(201).json(savedNote)
})
```

#### DELETE /api/notes/:id

Deletes a note by its ID, and the request must also include a valid token for authorization.

```js
notesRouter.delete('/:id', async (request, response) => {
  const note = await Note.findByIdAndDelete(request.params.id)
  if (!note) {
    return response.status(404).json({ error: 'Note not found' })
  }
  response.status(204).end()
})
```

## Flow Between Frontend and Backend

The frontend and backend communicate over HTTP requests. For example, when the user logs in, the frontend sends a POST request to `/api/login`, and the backend responds with a token.

Once the token is received and stored on the frontend, it is sent as a Bearer token in the authorization header for any subsequent requests (like creating a note or deleting a note).

Each note that is created or updated is authenticated using the token, ensuring only authorized users can perform these actions.

## Conclusion

The interaction between the frontend and backend in your NotesApp follows the client-server model, where the frontend sends requests (using axios) to the backend's API routes to perform CRUD operations on notes. The backend authenticates and validates the requests based on the provided JWT token, ensuring security and proper user authorization.
