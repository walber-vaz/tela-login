import styled from 'styled-components';

const Container = styled.main`
  align-items: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 88%;
  margin: 0 auto;
  padding: 2rem 0;
  width: 1200px;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 2rem;
  }

  section {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    text-align: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export { Container };
