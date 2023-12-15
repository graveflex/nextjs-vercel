/* eslint-disable no-console */

// log settings during build
function logSettingsPlugin() {
  return {
    name: 'settings-log',
    async closeBundle() {
      // eslint-disable-next-line
      const SETTINGS = require('./index');
      console.log('Using the following settings:');
      console.table(SETTINGS);
    }
  };
}

export default logSettingsPlugin;
