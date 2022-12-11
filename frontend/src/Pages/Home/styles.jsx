import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  height: 81%;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    width: 90%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 85%;
  }
`;

const ContainerTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  margin-top: 2.2rem;
  text-align: center;
`;

export { Container, ContainerTitle };
