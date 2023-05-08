import React from 'react';
import css from 'components/feedbackOptions/feedBackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedbackList}>
      {options.map(option => (
        <li key={option}>
          <button
            className={css.button}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
