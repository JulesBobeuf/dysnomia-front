# Dysnomia Front

**Dysnomia Front** is the frontend interface for the [Dysnomia API](https://m1.dysnomia.studio/swagger/index.html), a university project developed as a comprehensive video game library. This application allows users to explore, search, and interact with a wide collection of video games, providing detailed information and metadata.

## About The Project

Dysnomia Front was created as part of a university project. It provides a user-friendly interface for accessing the Dysnomia API, enhancing the user experience by presenting game data in an intuitive and visually appealing way.

## Built With

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)  
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)  
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

## Getting Started

### Folder Structure

```markdown
dysnomia-front/
├── 📁 public/           # Static assets like images and icons
├── 📁 src/              # Source code for the application
│   ├── 📁 components/   # Reusable UI components
│   ├── 📁 pages/        # Page components for routing
│   ├── 📁 services/     # API calls and business logic
│   └── 📄 App.tsx       # Main application component
├── 📄 .env              # Environment variables
├── 📄 .gitignore        # Git ignore file
├── 📄 index.html        # HTML template
├── 📄 package.json      # Project metadata and dependencies
└── 📄 README.md         # Project documentation
```

### Prerequisites

Ensure you have the following installed:

```sh
node >= 16.x
npm >= 8.x
```

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/JulesBobeuf/dysnomia-front.git
   ```

2. Navigate into the project directory:

   ```sh
   cd dysnomia-front
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

### Available Scripts

```sh
npm run dev
```
Starts the development server.

```sh
npm run build
```
Builds the application for production.

```sh
npm run test
```
Runs tests.

```sh
npm run lint
```
Runs the linter.

```sh
npm run lint-fix
```
Automatically fixes linting issues.

## Usage

After installing dependencies, start the development server:

```sh
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to interact with the Dysnomia Front application.

Note: The API needs to be online. It is handled by [Axel "Elanis" Soupé](https://github.com/Elanis)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Jules Bobeuf  
[LinkedIn](https://www.linkedin.com/in/jules-bobeuf/)  
bobeuf.jules@gmail.com

Clément Mahieux  
[LinkedIn](https://www.linkedin.com/in/cl%C3%A9ment-mahieux-17b72223b/)  