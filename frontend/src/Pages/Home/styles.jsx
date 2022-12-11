import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  margin: 0 auto;
  height: 100%;
  width: 1200px;

  @media (max-width: 1115px) {
    width: 70%;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 65%;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 60%;
    flex-direction: column;
  }
`;

const ContainerTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  margin-top: 2.2rem;
  text-align: center;
`;

export { Container, ContainerTitle };
