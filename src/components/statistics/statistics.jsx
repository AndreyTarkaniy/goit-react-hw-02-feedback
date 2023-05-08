import React from 'react';
import css from 'components/statistics/statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <ul className={css.list}>
        <li className={css.statisticsItems}>
          <span>Good: {good}</span>
        </li>

        <li className={css.statisticsItems}>
          <span>Neutral: {neutral}</span>
        </li>

        <li className={css.statisticsItems}>
          <span>Bad: {bad}</span>
        </li>

        <li className={css.statisticsItems}>
          <span>
            Total:
            {total}
          </span>
        </li>

        <li className={css.statisticsItems}>
          <span>
            Positive feedback:
            {positivePercentage}%
          </span>
        </li>
      </ul>
    </div>
  );
};
