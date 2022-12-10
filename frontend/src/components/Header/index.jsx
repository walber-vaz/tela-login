import { Link } from 'react-router-dom';

import { AiOutlineHome, AiOutlineUserAdd } from 'react-icons/ai';

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <header>
        <nav>
          <ul>
            <li>
              <AiOutlineHome />
              <Link to="/">Home</Link>
            </li>
            <li>
              <AiOutlineUserAdd />
              <Link to="/cadastro">Cadastro</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
