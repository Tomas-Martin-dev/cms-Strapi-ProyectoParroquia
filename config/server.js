const axios = require('axios');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron: {
    enabled: true,
    tasks: {
      'callApiEveryTenMinutes': {
        task: async ({ strapi }) => {
          try {
            console.log('Ejecutando cron job - Hora actual:', new Date().toISOString());
            // Hacer la llamada a la API
            const response = await axios.get('https://cms-strapi-proyectoparroquia.onrender.com/api/hours');
            console.log('Respuesta de la API:', response.data);
          } catch (error) {
            console.error('Error al llamar a la API:', error.message);
          }
        },
        options: {
          rule: '*/10 * * * *', 
          tz: 'America/Mexico_City',
        },
      },
    },
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});