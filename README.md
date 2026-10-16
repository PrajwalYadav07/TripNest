# TripNest

TripNest is a full-stack web application for exploring accommodation listings, discovering destinations, and managing property listings through a clean and user-friendly interface.

**Live Demo:** [tripnest-u5iu.onrender.com](https://tripnest-u5iu.onrender.com/)

## Features

- Browse and explore accommodation listings.
- Create, update, and delete property listings.
- User authentication and authorization.
- Search and category-based filtering.
- Reviews and ratings.
- Image uploads and management.
- Server-side validation and centralized error handling.
- Responsive user interface.

## Technologies Used

- **Language:** JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** EJS, Tailwind CSS, HTML, CSS
- **Authentication:** Passport.js
- **Validation:** Joi
- **Image Storage:** Cloudinary
- **Deployment:** Render

## Architecture

TripNest follows the Model-View-Controller (MVC) architecture to maintain a modular, organized, and maintainable codebase.

- **Model:** Manages application data and database interactions.
- **View:** Renders dynamic pages using EJS templates.
- **Controller:** Handles application logic and coordinates requests and responses.
- **Middleware:** Provides reusable request processing, authentication, authorization, and error handling.

## Key Implementation Highlights

- Designed a modular MVC backend with reusable middleware.
- Implemented session-based authentication and authorization using Passport.js.
- Centralized request validation using Joi schemas.
- Implemented structured error handling to improve application reliability.
- Integrated MongoDB for persistent data storage.
- Integrated Cloudinary for listing image management.

## Installation and Setup

### Prerequisites

- Node.js and npm
- MongoDB or a MongoDB Atlas account
- Cloudinary account

### 1. Clone the repository

```bash
git clone https://github.com/PrajwalYadav07/TripNest.git
cd TripNest
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add the required configuration.

```env
MONGO_URL=your_mongodb_connection_string
SECRET=your_session_secret
```

Configure any additional environment variables required by your application, including Cloudinary credentials. Use the exact variable names referenced in your source code.

### 4. Run the application

```bash
npm start
```

Use the appropriate script from `package.json` if your project uses a different startup command.

## Project Structure

```text
TripNest/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── views/
│   ├── layouts/
│   ├── includes/
│   ├── listings/
│   └── user/
├── public/
│   ├── css/
│   └── js/
├── app.js
├── cloudConfig.js
├── package.json
└── README.md
```

## Author

**Prajwal Yadav**

- GitHub: [PrajwalYadav07](https://github.com/PrajwalYadav07)
- Repository: [TripNest](https://github.com/PrajwalYadav07/TripNest)

