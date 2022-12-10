import styled from 'styled-components';

const Container = styled.header`
  background-color: var(--bg-secondary);
  color: var(--color-primary);
  display: flex;
  flex-direction: column;
  box-shadow: 0rem 0.5rem 0.8rem var(--color-shadow);

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      li {
        margin: 0 1rem;

        a {
          color: var(--color-secondary);
          font-size: 2rem;
          font-weight: 700;

          &:hover {
            color: var(--color-secondary);
            border-bottom: 0.2rem solid var(--color-hover);
          }

          &:active {
            color: var(--color-secondary);
          }
        }
      }
    }
  }
`;

export { Container };
