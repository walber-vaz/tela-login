import { Container, Wrap } from './styles';

const Form = () => {
  return (
    <Container>
      <h2>Formulário</h2>
      <Wrap>
        <form>
          <label htmlFor="nome">
            Nome
            <input type="text" id="nome" name="nome" />
          </label>
          <label htmlFor="sobrenome">
            Sobrenome
            <input type="text" id="sobrenome" name="sobrenome" />
          </label>
          <label htmlFor="email">
            E-mail
            <input type="email" id="email" name="email" />
          </label>
          <label htmlFor="senha">
            Senha
            <input type="password" id="senha" name="senha" />
          </label>
          <button type="submit">Cadastrar</button>
        </form>
      </Wrap>
    </Container>
  );
};

export default Form;
