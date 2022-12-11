import {
  DiReact,
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiLinux,
  DiMongodb,
  DiTerminal,
  DiGo,
} from 'react-icons/di';

import { Container } from './styles';

const Card = (props) => {
  const { perfil } = props;

  return (
    <Container>
      <section>
        <div>
          <img src={perfil} alt="Foto do perfil Walber Vaz" />
          <h3>Walber Vaz</h3>
          <p>
            Estudante Web Full-Stack na
            <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">
              {' '}
              Trybe
            </a>
          </p>
          <div>
            <DiReact />
            <DiGithubBadge />
            <DiHtml5 />
            <DiJsBadge />
            <DiLinux />
            <DiMongodb />
            <DiTerminal />
            <DiGo />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Card;
