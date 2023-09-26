// config/plugins.js

module.exports = ({ env }) => ({
  plugins: {
    "users-permissions": {
      jwtSecret: process.env.JWT_SECRET || "yourSecretKeyHere", // 환경 변수를 사용하거나 직접 시크릿 키를 입력합니다.
    },
  },

  "users-permissions": {
    enabled: true,
    config: {
      jwt: {
        expiresIn: "1m", //토큰 만료시간
      },
    },
  },
});
