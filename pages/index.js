import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/Container';
import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [valida, setValida] = useState(true);

  const handleChangeInput = (e) => {
    const input = e.target.value;
    if (input.length !== 0) {
      setName(input);
      setValida(false);
    } else {
      setValida(true);
    }
  };

  const { title, description, external } = db;

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h2>{title}</h2>
          </Widget.Header>
          <Widget.Content>
            <p>{description}</p>
            <Input onChange={handleChangeInput} placeholder="Digite Seu Nome" />
            <Button type="submit" disabled={valida} onClick={handleSubmit}>JOGAR</Button>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {external.map((linkExterno) => {
                const [projectName, gitHubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');
                return (
                  <li key={linkExterno}>
                    <Widget.Topic as={Link} href={`/quiz/${projectName}___${gitHubUser}`}>
                      {`${gitHubUser}/${projectName}`}
                    </Widget.Topic>

                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Ronaldo-Oliveira99" />
    </QuizBackground>
  );
}
