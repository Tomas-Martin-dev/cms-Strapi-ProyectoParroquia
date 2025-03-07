'use strict';

const axios = require('axios');

module.exports = {
  '*/12 * * * *': async () => {
    try {
      const url = 'https://cms-strapi-proyectoparroquia.onrender.com/'; 
      await axios.get(url);
      console.log('Ping enviado para mantener la instancia activa:', new Date());
    } catch (error) {
      console.error('Error al enviar el ping:', error.message);
    }
  },
};