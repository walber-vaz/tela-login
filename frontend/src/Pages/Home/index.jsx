import perfil from '../../assets/perfil-1.jpg';
import Card from '../../components/Card';
import Sobre from '../../components/Sobre';
import { Container, ContainerTitle } from './styles';

const Home = () => {
  return (
    <>
      <ContainerTitle>Simples Cadastro de usuários</ContainerTitle>
      <Container>
        <Card perfil={perfil} />
        <Sobre />
      </Container>
    </>
  );
};

export default Home;
