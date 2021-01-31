import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScream from '../../src/screens/quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScream externalQuestion={dbExterno.questions} externalBg={dbExterno.bg} />
    </ThemeProvider>
  //    {/* <pre>
  //     {JSON.stringify(dbExterno, null, 4)}
  //   </pre> */}
  );
}

export async function getServerSideProps(context) {
  const [projectName, gitHubUser] = context.query.id.split('___');
  try {
    const dbExterno = await fetch(`https://${projectName}.${gitHubUser}.vercel.app/api/db`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respObj) => respObj);
    //     .catch((err) => {
    //       console.err(err);
    //     });
    //   console.log('dbExterno', dbExterno);
    console.log('Infos que o Next da para nós: ', context.query.id);
    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
