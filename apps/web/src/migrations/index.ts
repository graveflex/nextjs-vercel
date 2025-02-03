import * as migration_20250203_210550 from './20250203_210550';

export const migrations = [
  {
    up: migration_20250203_210550.up,
    down: migration_20250203_210550.down,
    name: '20250203_210550'
  },
];
