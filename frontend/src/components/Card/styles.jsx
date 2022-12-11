import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  text-align: center;
  border: 0.5rem solid red;
  padding: 2rem;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  border: 0.5rem solid blue;

  img {
    border-radius: 50%;
    border: 0.5rem solid var(--color-hover);
    width: 200px;
    height: 200px;

    @media (max-width: 1024px) {
      width: 180px;
      height: 180px;
    }

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 600px) {
      width: 100px;
      height: 100px;
    }
  }

  h3 {
    font-size: 3rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 2rem;
    font-weight: 400;
    color: #000;
  }

  a {
    color: var(--color-hover);
    text-decoration: none;
    font-weight: 600;
    font-size: 2rem;
    transition: 0.3s;

    &:hover {
      color: var(--color-hover);
    }
  }

  div {
    margin-top: 1rem;

    svg {
      margin: 0 0.4rem;
      font-size: 2.8rem;
      color: var(--bg-secondary);
      transition: color 0.4s ease-in-out;

      &:hover {
        color: var(--color-hover);
      }
    }
  }
`;
export { Container, Wrap };
