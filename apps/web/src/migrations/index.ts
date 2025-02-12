import * as migration_20250212_192603 from './20250212_192603';

export const migrations = [
  {
    up: migration_20250212_192603.up,
    down: migration_20250212_192603.down,
    name: '20250212_192603'
  },
];
