import React from 'react';
// import Controls from 'components/controls/controls';
import css from 'components/counters/counter.module.css';

class Counter extends React.Component {
  static defaultProps = {
    total: 0,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };

  render() {
    return (
      <div className={css.counter}>
        <h2>Please leave feedback</h2>
        <div className={css.feedback}>
          <button
            className={css.button}
            type="button"
            onClick={this.goodIncrement}
          >
            Good
          </button>
          <button
            className={css.button}
            type="button"
            onClick={this.neutralIncrement}
          >
            Neutral
          </button>
          <button
            className={css.button}
            type="button"
            onClick={this.badIncrement}
          >
            Bad
          </button>
        </div>

        <div className={css.statistics}>
          <h3 className={css.statisticsTitle}>Statistics</h3>
          <ul className={css.statisticsList}>
            <li className={css.statisticsItems}>
              <span>Good: {this.state.good}</span>
            </li>

            <li className={css.statisticsItems}>
              <span>Neutral: {this.state.neutral}</span>
            </li>

            <li className={css.statisticsItems}>
              <span>Bad: {this.state.bad}</span>
            </li>

            <li className={css.statisticsItems}>
              <span>
                Total:
                {this.countTotalFeedback()}
              </span>
            </li>

            <li className={css.statisticsItems}>
              <span>
                Positive feedback:
                {this.countPositiveFeedbackPercentage()}%
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Counter;

// class Counter extends React.Component {
//   state = {
//     value: 5,
//   };

//   handleIncrement = () => {
//     // this.setState({ value: 100 });

//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     return (
//       <div className={css.counter}>
//         <span className="Counter__value">{this.state.value}</span>
//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

// export default Counter;
