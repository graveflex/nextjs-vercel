import * as migration_20250203_213144 from './20250203_213144';
import * as migration_20250205_212459 from './20250205_212459';

export const migrations = [
  {
    up: migration_20250203_213144.up,
    down: migration_20250203_213144.down,
    name: '20250203_213144',
  },
  {
    up: migration_20250205_212459.up,
    down: migration_20250205_212459.down,
    name: '20250205_212459'
  },
];
