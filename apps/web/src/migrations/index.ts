import * as migration_20240830_204232 from './20240830_204232';
import * as migration_20240830_235657 from './20240830_235657';
import * as migration_20240905_160723 from './20240905_160723';

export const migrations = [
  {
    up: migration_20240830_204232.up,
    down: migration_20240830_204232.down,
    name: '20240830_204232',
  },
  {
    up: migration_20240830_235657.up,
    down: migration_20240830_235657.down,
    name: '20240830_235657',
  },
  {
    up: migration_20240905_160723.up,
    down: migration_20240905_160723.down,
    name: '20240905_160723'
  },
];
