import * as migration_20250214_012852 from './20250214_012852';

export const migrations = [
  {
    up: migration_20250214_012852.up,
    down: migration_20250214_012852.down,
    name: '20250214_012852'
  },
];
