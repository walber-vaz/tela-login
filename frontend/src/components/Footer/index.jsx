import { AiFillHeart } from 'react-icons/ai';
import {
  DiReact,
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiLinux,
  DiMongodb,
} from 'react-icons/di';

import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <footer>
        <p>
          Construindo com
          <span>
            <AiFillHeart />
          </span>
          por
          <a href="https://github.com/walber-vaz"> Walber Vaz (w2k)</a>
        </p>
        <div>
          <DiReact />
          <DiGithubBadge />
          <DiHtml5 />
          <DiJsBadge />
          <DiLinux />
          <DiMongodb />
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
