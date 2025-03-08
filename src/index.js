'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  bootstrap({ strapi }) {
    const cronTasks = require('./cron-tasks');
    
    // Registra cada tarea cron
    for (const taskName in cronTasks) {
      if (Object.prototype.hasOwnProperty.call(cronTasks, taskName)) {
        const task = cronTasks[taskName];
        strapi.cron.add({
          name: taskName,
          rule: task.options.rule,
          task: task.task
        });
      }
    }
  }
};