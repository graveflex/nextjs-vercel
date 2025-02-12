import * as migration_20250211_174506 from './20250211_174506';
import * as migration_20250211_193439 from './20250211_193439';
import * as migration_20250211_193514 from './20250211_193514';
import * as migration_20250212_154516 from './20250212_154516';

export const migrations = [
  {
    up: migration_20250211_174506.up,
    down: migration_20250211_174506.down,
    name: '20250211_174506',
  },
  {
    up: migration_20250211_193439.up,
    down: migration_20250211_193439.down,
    name: '20250211_193439',
  },
  {
    up: migration_20250211_193514.up,
    down: migration_20250211_193514.down,
    name: '20250211_193514',
  },
  {
    up: migration_20250212_154516.up,
    down: migration_20250212_154516.down,
    name: '20250212_154516'
  },
];
