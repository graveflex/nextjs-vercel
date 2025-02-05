import * as migration_20250203_213144 from './20250203_213144';
import * as migration_20250205_150522 from './20250205_150522';

export const migrations = [
  {
    up: migration_20250203_213144.up,
    down: migration_20250203_213144.down,
    name: '20250203_213144',
  },
  {
    up: migration_20250205_150522.up,
    down: migration_20250205_150522.down,
    name: '20250205_150522'
  },
];
