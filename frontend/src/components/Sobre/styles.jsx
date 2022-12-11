import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  text-align: center;
  padding: 2rem;
  border: 0.5rem solid red;

  h2 {
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
  }
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
`;

export { Container, Wrap };
