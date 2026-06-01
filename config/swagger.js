const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GitHub Profile Analyzer API",
      version: "1.0.0",
      description: "Analyze GitHub profiles and store analytics in MySQL",
    },
    servers: [
      {
        url: "https://github-profile-analyzer-production-78ad.up.railway.app",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;