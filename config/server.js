module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    // keys: env.array("APP_KEYS"),
    keys: ["CNQlc1LH5x5iuIvaQqtT6Q", "nFV87Stp88RV0NlLQYlyqA"], // 여기에 필요한 키를 설정합니다.
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
