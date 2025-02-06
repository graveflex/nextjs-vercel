import * as migration_20250203_213144 from './20250203_213144';
import * as migration_20250205_200043 from './20250205_200043';
import * as migration_20250206_161836 from './20250206_161836';

export const migrations = [
  {
    up: migration_20250203_213144.up,
    down: migration_20250203_213144.down,
    name: '20250203_213144',
  },
  {
    up: migration_20250205_200043.up,
    down: migration_20250205_200043.down,
    name: '20250205_200043',
  },
  {
    up: migration_20250206_161836.up,
    down: migration_20250206_161836.down,
    name: '20250206_161836'
  },
];
