import * as migration_20250203_213144 from './20250203_213144';
import * as migration_20250205_200043 from './20250205_200043';

export const migrations = [
  {
    up: migration_20250203_213144.up,
    down: migration_20250203_213144.down,
    name: '20250203_213144',
  },
  {
    up: migration_20250205_200043.up,
    down: migration_20250205_200043.down,
    name: '20250205_200043'
  },
];
