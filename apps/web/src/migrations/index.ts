import * as migration_20250203_213144 from './20250203_213144';
import * as migration_20250204_191314 from './20250204_191314';

export const migrations = [
  {
    up: migration_20250203_213144.up,
    down: migration_20250203_213144.down,
    name: '20250203_213144',
  },
  {
    up: migration_20250204_191314.up,
    down: migration_20250204_191314.down,
    name: '20250204_191314'
  },
];
