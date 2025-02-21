import * as migration_20250220_211105 from './20250220_211105';

export const migrations = [
  {
    up: migration_20250220_211105.up,
    down: migration_20250220_211105.down,
    name: '20250220_211105'
  },
];
