'use client';

// Styles
import styles from './index.module.css';

// ENVs
import { API_KEY } from '@mono/web/lib/constants';

export const ClearCache = () => {
  const nukeCache = async () => {
    try {
      const searchParams = new URLSearchParams({
        key: API_KEY
      }).toString();

      await fetch(`/api/payload_actions/clear_cache?${searchParams}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      className={`btn ${styles.button}`}
      type="button"
      onClick={nukeCache}
    >
      <span className="card__title">Clear Cache</span>
    </button>
  );
};
