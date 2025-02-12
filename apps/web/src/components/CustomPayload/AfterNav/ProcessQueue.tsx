'use client';

// Styles
import styles from './index.module.css';

// ENVs
import { API_KEY } from '@mono/web/lib/constants';

export const ProcessQueue = () => {
  const runQueue = async () => {
    try {
      const searchParams = new URLSearchParams({
        key: API_KEY
      }).toString();

      await fetch(`/api/payload_actions/run_queue?${searchParams}`, {
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
    <>
      <button
        className={`btn ${styles.button}`}
        type="button"
        onClick={runQueue}
      >
        <span className="card__title">Run Queue</span>
      </button>
    </>
  );
};
