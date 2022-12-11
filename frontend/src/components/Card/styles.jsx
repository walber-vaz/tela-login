import styled from 'styled-components';

const Container = styled.section`
  display: inline-block;
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  border-radius: 1rem;
  padding: 2rem;

  img {
    border-radius: 50%;
    border: 0.3rem solid var(--color-hover);
    width: 200px;
    height: 200px;

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 600px) {
      width: 100px;
      height: 100px;
    }
  }

  div {
    margin-top: 1rem;

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
  }
`;

export { Container };
