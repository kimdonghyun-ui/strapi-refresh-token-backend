// config/plugins.js

module.exports = ({ env }) => ({
  plugins: {
    "users-permissions": {
      jwtSecret: process.env.JWT_SECRET || "yourSecretKeyHere",
      enabled: true,
      config: {
        jwt: {
          expiresIn: "1m",
        },
      },
    },
  },
});
