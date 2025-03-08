module.exports = {
  myPingTask: {
    task: async ({ strapi }) => {
      try {
        const url = 'https://cms-strapi-proyectoparroquia.onrender.com/api/hours'; 
        const axios = require('axios');
        await axios.get(url);
        strapi.log.info('Ping enviado para mantener la instancia activa:', new Date());
      } catch (error) {
        strapi.log.error('Error al enviar el ping:', error.message);
      }
    },
    options: {
      rule: '*/12 * * * *', // Cada 12 minutos
    },
  },
};

