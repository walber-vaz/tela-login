import perfil from '../../assets/perfil-1.jpg';
import Card from '../../components/Card';

import Form from '../../components/Form';
import { Container, ContainerTitle } from '../Home/styles';

const Cadastro = () => {
  return (
    <>
      <ContainerTitle>Cadastro de usuários</ContainerTitle>
      <Container>
        <Card perfil={perfil} />
        <Form />
      </Container>
    </>
  );
};

export default Cadastro;
