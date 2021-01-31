import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import db from '../../db.json';
import QuizLogo from '../../src/components/QuizLogo';
import QuizBackground from '../../src/components/QuizBackground';
import QuestionBox from '../../src/components/QuestionBox';
import ResultBox from '../../src/components/ResultBox';
import LoadingBox from '../../src/components/LoadingBox';
import QuizContainer from '../../src/components/Container';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function Quiz() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0); // questao atual
  const questionIndex = currentQuestion;
  const totalQuestions = db.questions.length;
  const question = db.questions[questionIndex]; // selectedAlternativ
  const router = useRouter();
  const { name } = router.query;

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
      <QuizBackground backgroundImage={db.bg}>
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
            name={name}
            results={results}
          />
          )}
        </QuizContainer>
      </QuizBackground>
    </>
  );
}
