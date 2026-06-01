# GitHub Profile Analyzer API

## Overview

GitHub Profile Analyzer API is a backend service built with Node.js, Express.js, and MySQL. It analyzes GitHub user profiles using the GitHub Public API and stores useful insights in a MySQL database.

## Features

* Analyze GitHub profiles by username
* Store profile insights in MySQL
* Fetch all analyzed profiles
* Fetch a single analyzed profile
* Get top followed analyzed profiles
* Calculate popularity score
* Calculate follower/following ratio
* Find the most starred repository
* Update existing profiles on re-analysis
* Handle invalid GitHub usernames gracefully

## Tech Stack

* Node.js
* Express.js
* MySQL
* Axios
* GitHub REST API

## Database Schema

Table: `profiles`

| Column                   | Type         |
| ------------------------ | ------------ |
| id                       | INT          |
| username                 | VARCHAR(100) |
| name                     | VARCHAR(255) |
| public_repos             | INT          |
| followers                | INT          |
| following                | INT          |
| account_age_years        | FLOAT        |
| popularity_score         | INT          |
| follower_following_ratio | FLOAT        |
| top_repo                 | VARCHAR(255) |
| top_repo_stars           | INT          |
| analyzed_at              | TIMESTAMP    |

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd github-profile-analyzer
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=github_analyzer
```

Start the server:

```bash
npm run dev
```

## API Endpoints

### Analyze GitHub Profile

```http
POST /api/github/analyze/:username
```

Example:

```http
POST /api/github/analyze/octocat
```

### Get All Profiles

```http
GET /api/github/profiles
```

### Get Single Profile

```http
GET /api/github/profiles/:username
```

Example:

```http
GET /api/github/profiles/octocat
```

### Get Top Followed Profiles

```http
GET /api/github/top-followed
```

## Sample Insights Stored

* Public Repositories
* Followers
* Following
* Account Age
* Popularity Score
* Follower/Following Ratio
* Most Starred Repository
* Star Count

## Author

Lakshay Sharma
