// Styles
import styles from './index.module.css';

// Components
import { ClearCache } from '@mono/web/components/CustomPayload/AfterNav/ClearCache';
import { ProcessQueue } from '@mono/web/components/CustomPayload/AfterNav/ProcessQueue';

export const AfterNav = () => {
  return (
    <ul className={styles.links_container}>
      <li className={styles.link}>
        <ClearCache />
      </li>
      <li className={styles.link}>
        <ProcessQueue />
      </li>
    </ul>
  );
};
