# GitHub Profile Analyzer API

A Node.js and Express.js REST API that analyzes GitHub profiles, calculates analytics, stores results in MySQL, and exposes documented endpoints using Swagger.

## Features

* Analyze GitHub user profiles
* Store profile analytics in MySQL
* Retrieve all analyzed profiles
* Retrieve a specific analyzed profile
* Get top followed GitHub users from stored data
* Swagger/OpenAPI documentation
* Railway deployment

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub REST API
* Railway
* Swagger UI

## Live Demo

### API Base URL

https://github-profile-analyzer-production-78ad.up.railway.app

### Swagger Documentation

https://github-profile-analyzer-production-78ad.up.railway.app/api-docs/

## API Endpoints

### Analyze a GitHub Profile

POST /api/github/analyze/:username

Example:

POST /api/github/analyze/torvalds

### Get All Profiles

GET /api/github/profiles

### Get Top Followed Users

GET /api/github/top-followed

### Get Single Profile

GET /api/github/profiles/:username

Example:

GET /api/github/profiles/torvalds

## Installation

```bash
git clone https://github.com/lakshay-sh10/github-profile-analyzer.git
cd github-profile-analyzer
npm install
```

Create a .env file:

```env
DB_HOST=your_host
DB_PORT=3306
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
PORT=3000
```

Run locally:

```bash
npm start
```

## Author

Lakshay Sharma
