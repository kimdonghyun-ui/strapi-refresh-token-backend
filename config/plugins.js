// config/plugins.js

module.exports = ({ env }) => ({
  "users-permissions": {
    enabled: true,
    config: {
      jwtSecret: process.env.JWT_SECRET || "yourSecretKeyHere",
      jwt: {
        expiresIn: "1m", //토큰 만료시간
      },
    },
  },
});
