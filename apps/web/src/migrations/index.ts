import * as migration_20250212_204226 from './20250212_204226';
import * as migration_20250213_162443 from './20250213_162443';
import * as migration_20250213_163908 from './20250213_163908';
import * as migration_20250214_214603 from './20250214_214603';
import * as migration_20250220_154940 from './20250220_154940';

export const migrations = [
  {
    up: migration_20250212_204226.up,
    down: migration_20250212_204226.down,
    name: '20250212_204226',
  },
  {
    up: migration_20250213_162443.up,
    down: migration_20250213_162443.down,
    name: '20250213_162443',
  },
  {
    up: migration_20250213_163908.up,
    down: migration_20250213_163908.down,
    name: '20250213_163908',
  },
  {
    up: migration_20250214_214603.up,
    down: migration_20250214_214603.down,
    name: '20250214_214603',
  },
  {
    up: migration_20250220_154940.up,
    down: migration_20250220_154940.down,
    name: '20250220_154940'
  },
];
