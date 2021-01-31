import React, { useState, useEffect } from 'react';
// import db from '../../db.json';
import QuizLogo from '../../components/QuizLogo';
import QuizBackground from '../../components/QuizBackground';
import QuestionBox from '../../components/QuestionBox';
import ResultBox from '../../components/ResultBox';
import LoadingBox from '../../components/LoadingBox';
import QuizContainer from '../../components/Container';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizScream({ externalQuestion, externalBg }) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0); // questao atual
  const questionIndex = currentQuestion;
  const totalQuestions = externalQuestion.length;
  const question = externalQuestion[questionIndex]; // selectedAlternativ
  const bg = externalBg;

  function addResult(result) {
    // results.push(result);
    setResults([
      ...results,
      result,
    ]);
  }
  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount

  useEffect(() => {
    setScreenState(screenStates.QUIZ);
  }, []);

  const handleConfirmQuestion = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <>
      <QuizBackground backgroundImage={bg}>
        <QuizContainer>
          <QuizLogo />

          {screenState === 'QUIZ' && (
            <QuestionBox
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
              onClickConfirm={handleConfirmQuestion}
              addResult={addResult}
            />
          )}
          {screenState === screenStates.LOADING && <LoadingBox />}
          {screenState === screenStates.RESULT && (
          <ResultBox
            results={results}
          />
          )}
        </QuizContainer>
      </QuizBackground>
    </>
  );
}
