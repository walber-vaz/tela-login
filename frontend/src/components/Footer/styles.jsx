import styled from 'styled-components';

const Container = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  /* border: 0.1rem solid red; */
  height: 6rem;
  padding: 1rem;

  p {
    font-size: 1.8rem;
  }

  svg {
    color: red;
    font-size: 2.4rem;
    margin: 0 0.4rem;
    display: inline-block;
    vertical-align: sub;
  }

  a {
    color: var(--color-primary);
    font-weight: bold;
    transition: color 0.4s ease-in-out;
    padding-bottom: 0.3rem;

    &:hover {
      color: var(--color-hover);
      border-bottom: 0.1rem solid var(--color-hover);
    }
  }
`;

export { Container };
