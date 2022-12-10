import Typewriter from 'typewriter-effect';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <main>
        <Typewriter
          options={{
            strings: ['<span>Simples cadastro de usuário</span>'],
            autoStart: true,
            loop: true,
            delay: 120,
          }}
        />
      </main>
    </Container>
  );
};

export default Home;
