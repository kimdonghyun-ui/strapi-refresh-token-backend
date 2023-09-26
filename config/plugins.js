// config/plugins.js

module.exports = ({ env }) => ({
  plugins: {
    "users-permissions": {
      jwtSecret: "CC1EpvWL9T1Rg8cj13XBcA",
      enabled: true,
      config: {
        jwt: {
          expiresIn: "1m",
        },
      },
    },
  },
});
