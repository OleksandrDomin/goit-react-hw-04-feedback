
import { useState } from 'react';
import Section from './conponents/section';
import Statistics from "./conponents/statistics";
import FeedbackOptions from "./conponents/feedbackOptions";
import './App.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

function handleIncrement (option) {
switch (option) {
  case 'good':
    setGood(good + 1)
    break;
  case 'neutral':
     setNeutral(neutral + 1)
    break;
  case 'bad':
 setBad(bad + 1)
    break;
  default:
    console.log(`Sorry, we are have No - ${option}.`);
  }
  };
  
 function countTotalFeedback () {
    return  good + neutral + bad
  } 
   

  function countPositiveFeedbackPercentage() {
    return ((good * 100)/countTotalFeedback()).toFixed(0)
  }

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={handleIncrement}/>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ?
            (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />)
            : ("No feedback given")
        }
        </Section>
      </>
  )
};

export default App;