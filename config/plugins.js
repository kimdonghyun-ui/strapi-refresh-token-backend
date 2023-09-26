// config/plugins.js

module.exports = ({ env }) => ({
  "users-permissions": {
    jwtSecret: "CC1EpvWL9T1Rg8cj13XBcA",
    enabled: true,
    config: {
      jwt: {
        expiresIn: "1m", //토큰 만료시간
      },
    },
  },
});
