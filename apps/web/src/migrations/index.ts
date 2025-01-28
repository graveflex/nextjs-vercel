import * as migration_20250120_234732 from './20250120_234732';
import * as migration_20250121_235819 from './20250121_235819';
import * as migration_20250124_200248 from './20250124_200248';
import * as migration_20250128_194058 from './20250128_194058';

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
    up: migration_20250124_200248.up,
    down: migration_20250124_200248.down,
    name: '20250124_200248',
  },
  {
    up: migration_20250128_194058.up,
    down: migration_20250128_194058.down,
    name: '20250128_194058'
  },
];
