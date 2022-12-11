import perfil from '../../assets/perfil-1.jpg';
import Card from '../../components/Card';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <h2>Simples Cadastro de usuários</h2>
      <main>
        <section>
          <Card perfil={perfil} />
        </section>
      </main>
    </Container>
  );
};

export default Home;
