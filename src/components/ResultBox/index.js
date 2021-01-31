import React from 'react';
import { useRouter } from 'next/router';
import Widget from '../Widget';
import Button from '../Button';

export default function ResultBox({ results, name }) {
  const router = useRouter();
  const handleReturngame = () => {
    router.push('/');
  };
  return (
    <Widget>
      <Widget.Header>
        Tela de Resultado:
      </Widget.Header>

      <Widget.Content>
        <p>
          Olá
          {' '}
          <b>{name}</b>
          , você acertou
          {' '}
          {/* {results.reduce((somatoriaAtual, resultAtual) => {
              const isAcerto = resultAtual === true;
              if (isAcerto) {
                return somatoriaAtual + 1;
              }
              return somatoriaAtual;
            }, 0)} */}
          {results.filter((x) => x).length}
          {' '}
          pergunta(s)
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index + 1}`}>
              #
              {index + 1}
              {' '}
              -
              {result === true
                ? ' Acertou'
                : ' Errou'}
            </li>
          ))}
        </ul>
        <Button onClick={handleReturngame}>Play Again</Button>
      </Widget.Content>
    </Widget>
  );
}
