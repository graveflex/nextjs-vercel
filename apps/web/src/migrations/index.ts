import * as migration_20250120_234732 from './20250120_234732';
import * as migration_20250121_235819 from './20250121_235819';
import * as migration_20250127_221020 from './20250127_221020';
import * as migration_20250128_160031 from './20250128_160031';

export const migrations = [
  {
    up: migration_20250120_234732.up,
    down: migration_20250120_234732.down,
    name: '20250120_234732',
  },
  {
    up: migration_20250121_235819.up,
    down: migration_20250121_235819.down,
    name: '20250121_235819',
  },
  {
    up: migration_20250127_221020.up,
    down: migration_20250127_221020.down,
    name: '20250127_221020',
  },
  {
    up: migration_20250128_160031.up,
    down: migration_20250128_160031.down,
    name: '20250128_160031'
  },
];
