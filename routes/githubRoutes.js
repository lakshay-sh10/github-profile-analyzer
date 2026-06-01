const express = require("express");

const router = express.Router();

const {
  analyzeProfile,
  getProfiles,
  getProfile,
  getTopFollowed
} = require("../controllers/githubController");

router.post("/analyze/:username", analyzeProfile);

router.get("/profiles", getProfiles);

router.get("/top-followed", getTopFollowed);

router.get("/profiles/:username", getProfile);

module.exports = router;