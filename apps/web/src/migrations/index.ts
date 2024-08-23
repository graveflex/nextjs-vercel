import * as migration_20240822_174406 from './20240822_174406';
import * as migration_20240823_214409 from './20240823_214409';

export const migrations = [
  {
    up: migration_20240822_174406.up,
    down: migration_20240822_174406.down,
    name: '20240822_174406',
  },
  {
    up: migration_20240823_214409.up,
    down: migration_20240823_214409.down,
    name: '20240823_214409'
  },
];
