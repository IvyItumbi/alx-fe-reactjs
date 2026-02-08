# GitHub User Search Application

A React-based web application for searching GitHub users using the GitHub API.

## Features

- Search GitHub users by username
- Display user profile information including avatar, bio, location, and repository count
- Responsive design with Tailwind CSS
- Real-time loading states and error handling

## Technologies Used

- React 19.2.0
- Vite 7.2.4
- Axios 1.7.9 for API calls
- Tailwind CSS for styling
- GitHub REST API

## Installation
```bash
npm install
```

## Running the Application
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Project Structure
```
github-user-search/
├── src/
│   ├── components/
│   │   └── Search.jsx
│   ├── services/
│   │   └── githubService.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

## Usage

1. Enter a GitHub username in the search box
2. Click "Search" button
3. View the user's profile information including:
   - Avatar
   - Name and username
   - Bio
   - Location
   - Number of public repositories
   - Follower count
   - Link to GitHub profile

## API Integration

Uses GitHub REST API endpoint: `https://api.github.com/users/{username}`

## Author

IvyItumbi - ALX Software Engineering Program

## License

This project is part of the ALX Frontend React specialization.
