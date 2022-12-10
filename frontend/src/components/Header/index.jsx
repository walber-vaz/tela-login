import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
