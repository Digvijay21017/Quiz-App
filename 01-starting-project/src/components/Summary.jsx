import quizCompletImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersPerc = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersPerc = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const incorrectAnswersPerc = Math.round(
    100 - (skippedAnswersPerc + correctAnswersPerc)
  );

  return (
    <>
      <div id="summary">
        <img src={quizCompletImg} alt="Trophy Icon" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
          <p>
            <span className="number">{skippedAnswersPerc}%</span>
            <span className="text">skipped</span>
          </p>
        </div>
        <div id="summary-stats">
          <p>
            <span className="number">{correctAnswersPerc}%</span>
            <span className="text">answered correctly</span>
          </p>
        </div>
        <div id="summary-stats">
          <p>
            <span className="number">{incorrectAnswersPerc}%</span>
            <span className="text">answered incorrectly</span>
          </p>
        </div>
        <ol>
          {userAnswers.map((answer, index) => {
            let cssClass = "user-answer";
            if (answer === null) {
              cssClass += " skipped";
            } else if (answer === QUESTIONS[index].answers[0]) {
              cssClass += " correct";
            } else {
              cssClass += " wrong";
            }

            return (
              <li key={index}>
                <h3>{index + 1}</h3>
                <p className="question">{QUESTIONS[index].text}</p>
                <p className={cssClass}>{answer ?? "Skipped"}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
