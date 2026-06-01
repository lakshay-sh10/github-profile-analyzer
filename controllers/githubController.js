const db = require("../config/db");
const { fetchGithubUser } = require("../services/githubService");

const analyzeProfile = async (req, res) => {
  try {
    const username = req.params.username;

    const data = await fetchGithubUser(username);

    const user = data.user;
    const repos = data.repos;

    const accountAgeYears = (
      (new Date() - new Date(user.created_at)) /
      (1000 * 60 * 60 * 24 * 365)
    ).toFixed(2);

    const ratio =
      user.following > 0
        ? (user.followers / user.following).toFixed(2)
        : user.followers;

    const popularityScore =
      user.followers * 2 +
      user.public_repos * 3 -
      user.following;

    let topRepo = "None";
    let topRepoStars = 0;

    repos.forEach((repo) => {
      if (repo.stargazers_count > topRepoStars) {
        topRepoStars = repo.stargazers_count;
        topRepo = repo.name;
      }
    });

    const sql = `
INSERT INTO profiles (
    username,
    name,
    public_repos,
    followers,
    following,
    account_age_years,
    popularity_score,
    follower_following_ratio,
    top_repo,
    top_repo_stars
)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
ON DUPLICATE KEY UPDATE
    name = VALUES(name),
    public_repos = VALUES(public_repos),
    followers = VALUES(followers),
    following = VALUES(following),
    account_age_years = VALUES(account_age_years),
    popularity_score = VALUES(popularity_score),
    follower_following_ratio = VALUES(follower_following_ratio),
    top_repo = VALUES(top_repo),
    top_repo_stars = VALUES(top_repo_stars)
`;

    db.query(
      sql,
      [
        user.login,
        user.name,
        user.public_repos,
        user.followers,
        user.following,
        accountAgeYears,
        popularityScore,
        ratio,
        topRepo,
        topRepoStars,
      ],
      (err) => {
        if (err) {
          return res.status(500).json({
            error: err.message,
          });
        }

        res.json({
          message: "Profile analyzed successfully",
        });
      }
    );
    } catch (error) {

    if (error.response?.status === 404) {
      return res.status(404).json({
        error: "GitHub user not found"
      });
    }

    res.status(500).json({
      error: error.message,
    });
  }
};

const getProfiles = (req, res) => {
  db.query(
    "SELECT * FROM profiles",
    (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(results);
    }
  );
};

const getProfile = (req, res) => {
  db.query(
    "SELECT * FROM profiles WHERE username = ?",
    [req.params.username],
    (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(results[0]);
    }
  );
};

const getTopFollowed = (req, res) => {
  db.query(
    `
    SELECT *
    FROM profiles
    ORDER BY followers DESC
    LIMIT 5
    `,
    (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(results);
    }
  );
};

module.exports = {
  analyzeProfile,
  getProfiles,
  getProfile,
  getTopFollowed,
};