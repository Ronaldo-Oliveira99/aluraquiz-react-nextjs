import React from 'react';
import Widget from '../Widget';
import AlternativesForm from '../AlternativeForm';
import Button from '../Button';
import BackLinkArrow from '../BackLinkArrow';

export default function QuestionBox({
  question,
  totalQuestions,
  questionIndex,
  onClickConfirm,
  addResult,

}) {
  const {
    title, alternatives, image, description, answer,
  } = question;

  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>

      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>{` Pergunta ${questionIndex + 1} of ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />

      <Widget.Content>
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>

        <AlternativesForm
          onSubmit={(e) => {
            e.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onClickConfirm(isCorrect);
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1.5 * 1000);
          }}
        >
          {alternatives.map((altenative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId} // key da alternativa
                  name={questionId} // index da questão
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {altenative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>Escolher</Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}
