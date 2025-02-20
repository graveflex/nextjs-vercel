import * as migration_20250220_192425 from './20250220_192425';

export const migrations = [
  {
    up: migration_20250220_192425.up,
    down: migration_20250220_192425.down,
    name: '20250220_192425'
  },
];
