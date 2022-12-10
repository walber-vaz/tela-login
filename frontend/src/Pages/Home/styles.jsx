import styled from 'styled-components';

const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 85%;
  margin: 0 auto;
  padding: 2rem 0;
  width: 1200px;

  span {
    font-size: 3rem;
    font-weight: 700;
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
