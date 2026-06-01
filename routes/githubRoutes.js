const express = require("express");

const router = express.Router();

const {
  analyzeProfile,
  getProfiles,
  getProfile,
  getTopFollowed
} = require("../controllers/githubController");

/**
 * @swagger
 * /api/github/analyze/{username}:
 *   post:
 *     summary: Analyze a GitHub profile
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profile analyzed successfully
 */

router.post("/analyze/:username", analyzeProfile);

/**
 * @swagger
 * /api/github/profiles:
 *   get:
 *     summary: Get all analyzed profiles
 *     responses:
 *       200:
 *         description: List of profiles
 */

router.get("/profiles", getProfiles);

/**
 * @swagger
 * /api/github/top-followed:
 *   get:
 *     summary: Get top followed GitHub users
 *     responses:
 *       200:
 *         description: Top users by follower count
 */

router.get("/top-followed", getTopFollowed);

/**
 * @swagger
 * /api/github/profiles/{username}:
 *   get:
 *     summary: Get a single profile
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profile data
 */

router.get("/profiles/:username", getProfile);

module.exports = router;