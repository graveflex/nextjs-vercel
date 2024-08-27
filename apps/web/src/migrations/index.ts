import * as migration_20240822_174406 from './20240822_174406';
import * as migration_20240827_163558 from './20240827_163558';

export const migrations = [
  {
    up: migration_20240822_174406.up,
    down: migration_20240822_174406.down,
    name: '20240822_174406',
  },
  {
    up: migration_20240827_163558.up,
    down: migration_20240827_163558.down,
    name: '20240827_163558'
  },
];
