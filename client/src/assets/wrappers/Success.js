import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: flex;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--green-yellow);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  img{
      width: 200px;
      height: 200px;
      margin-bottom: 1.38rem;
  }
  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
    background: var(--green);
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--green);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`
export default Wrapper