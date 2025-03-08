'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    // Importa las tareas cron
    const cronTasks = require('./cron-tasks');
    
    // Registra cada tarea cron
    Object.keys(cronTasks).forEach(taskName => {
      const { task, options } = cronTasks[taskName];
      strapi.cron.add(taskName, options.rule, task);
    });
  },
};