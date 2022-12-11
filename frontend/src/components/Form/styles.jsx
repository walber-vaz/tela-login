import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: 0.1rem solid red; */
  height: 100%;

  h2 {
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1rem;
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
  /* border: 0.1rem solid blue; */

  form {
    /* border: 0.1rem solid green; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      height: 4rem;
      padding: 0 1rem;
      border: none;
      border-bottom: 0.1rem solid #ddd;
      font-size: 1.6rem;
      color: var(--color-primary);
      background-color: transparent;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-bottom: 0.1rem solid var(--color-primary);

        &::placeholder {
          color: var(--color-hover);

          &::selection {
            color: var(--color-hover);
          }
        }
      }
    }

    label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 0.5rem;
      font-size: 1.6rem;
      color: var(--color-primary);
      font-weight: 600;
    }

    button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 4rem;
      border: 0.1rem solid var(--color-primary);
      border-radius: 0.5rem;
      background-color: var(--color-primary);
      color: var(--bg-primary);
      font-size: 1.6rem;
      font-weight: 600;
      transition: all 0.4s;
      margin-top: 2rem;
      cursor: pointer;

      &:hover {
        background-color: transparent;
        color: var(--color-primary);
        border: 0.1rem solid var(--color-primary);
      }
    }
  }
`;

export { Container, Wrap };
