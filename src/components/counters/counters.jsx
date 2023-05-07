import React from 'react';
import Controls from 'components/controls/controls';
import css from 'components/counters/counter.module.css';

class Counter extends React.Component {
  render() {
    return (
      <div className={css.counter}>
        <h2>Please leave feedback</h2>
        <div className={css.feedback}>
          <button className={css.button} type="button">
            Good
          </button>
          <button className={css.button} type="button">
            Neutral
          </button>
          <button className={css.button} type="button">
            Bad
          </button>
        </div>

        <div className={css.statistics}>
          <h3 className={css.statisticsTitle}>Statistics</h3>
          <ul className={css.statisticsList}>
            <li className={css.statisticsItems}>
              <span>Good:</span>
            </li>

            <li className={css.statisticsItems}>
              <span>Neutral:</span>
            </li>

            <li className={css.statisticsItems}>
              <span>Bad:</span>
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
