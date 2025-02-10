import * as migration_20250210_215234 from './20250210_215234';

export const migrations = [
  {
    up: migration_20250210_215234.up,
    down: migration_20250210_215234.down,
    name: '20250210_215234'
  },
];
