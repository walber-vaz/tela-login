import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: 0.1rem solid red; */
  height: 100%;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  /* border: 0.1rem solid blue; */

  img {
    border-radius: 50%;
    border: 0.5rem solid var(--color-hover);
    width: 200px;
    height: 200px;
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
