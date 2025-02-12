import * as migration_20250212_204226 from './20250212_204226';

export const migrations = [
  {
    up: migration_20250212_204226.up,
    down: migration_20250212_204226.down,
    name: '20250212_204226'
  },
];
