# NestJS Project with MongoDB

This project is built using [NestJS](https://nestjs.com/), a progressive Node.js framework for building efficient and scalable server-side applications. It uses MongoDB as the database, with MongoDB Compass as the GUI for database management.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (LTS version)
- npm (Node Package Manager), which comes with Node.js
- MongoDB
- MongoDB Compass (optional, for easier database management)

### Installing Node.js and npm

1. Download and install Node.js from the [official website](https://nodejs.org/).
2. npm is included with Node.js installation. To verify their installation, run the following commands in your terminal:

   ```bash
   node --version
   npm --version
   ```

### Setting Up MongoDB

1.  Install MongoDB: Follow the official MongoDB installation guide for your operating system.
2.  Start MongoDB:
    - On macOS/Linux: MongoDB is typically started as a background service. You can initiate it with the `mongod` command.
    - On Windows: MongoDB installs as a service and should start automatically. If not, manually start it through the Services management console.
3.  Verify MongoDB Installation: Open a terminal or command prompt and type `mongo` to connect to the database server using the MongoDB shell. If connected, MongoDB is running correctly.

### Installing MongoDB Compass

MongoDB Compass is the official GUI for MongoDB, facilitating database management tasks. Download and install Compass from the MongoDB Compass page.

### Setting Up the Project

Follow these steps to get your development environment running:

1.  Clone the Repository

    `git clone <repository-url>`

2.  Navigate to the Project Directory

    `cd <project-directory-name>`

3.  Install Dependencies

    `npm install`

4.  Environment Configuration

    Create a `.env` file in the project root and specify your MongoDB URI and other configurations:

    `MONGODB_URI=mongodb://localhost:27017/yourDatabaseName`
    `PORT=8080`

5.  Start the Application
    `npm run start`

    For development with hot reload:

    `npm run start:dev`

6.  Accessing the Application

    The application will be available at `http://localhost:8080` or another port if you specified one differently in your `.env` file.

## Using MongoDB Compass

With MongoDB Compass installed, connect to your MongoDB database using the URI provided in your `.env` file. Compass offers a user-friendly interface to manage your databases, collections, and documents, and perform various database operations.
