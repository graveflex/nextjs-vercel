import * as migration_20250130_202521 from './20250130_202521';
import * as migration_20250204_161111 from './20250204_161111';

export const migrations = [
  {
    up: migration_20250130_202521.up,
    down: migration_20250130_202521.down,
    name: '20250130_202521',
  },
  {
    up: migration_20250204_161111.up,
    down: migration_20250204_161111.down,
    name: '20250204_161111'
  },
];
