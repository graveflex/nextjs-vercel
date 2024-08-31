import * as migration_20240830_204232 from './20240830_204232';
import * as migration_20240830_235657 from './20240830_235657';

export const migrations = [
  {
    up: migration_20240830_204232.up,
    down: migration_20240830_204232.down,
    name: '20240830_204232',
  },
  {
    up: migration_20240830_235657.up,
    down: migration_20240830_235657.down,
    name: '20240830_235657'
  },
];
