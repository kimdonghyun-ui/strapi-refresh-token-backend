        // config/plugins.js
    
        module.exports = ({ env }) => ({
            'users-permissions': {
              enabled: true,
              config: {
                jwt: {
                  expiresIn: '1m',//토큰 만료시간
                },
              },
            },
          }); 