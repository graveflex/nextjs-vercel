import * as migration_20250205_162536 from './20250205_162536';
import * as migration_20250207_174141 from './20250207_174141';

export const migrations = [
  {
    up: migration_20250205_162536.up,
    down: migration_20250205_162536.down,
    name: '20250205_162536',
  },
  {
    up: migration_20250207_174141.up,
    down: migration_20250207_174141.down,
    name: '20250207_174141'
  },
];
