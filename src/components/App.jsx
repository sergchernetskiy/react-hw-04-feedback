import React, { Component } from 'react';
import { Box } from 'components/Box';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const arrOfStateValue = Object.values(this.state);
    return arrOfStateValue.reduce((total, value) => {
      total += value;
      return total;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const countPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Box p={[4]} bg="background">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={countPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}

export default App;
