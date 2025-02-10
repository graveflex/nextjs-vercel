import * as migration_20250210_222121 from './20250210_222121';

export const migrations = [
  {
    up: migration_20250210_222121.up,
    down: migration_20250210_222121.down,
    name: '20250210_222121'
  },
];
