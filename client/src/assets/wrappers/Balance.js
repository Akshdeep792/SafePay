import styled from 'styled-components'

const Wrapper = styled.main`

.container {  
    grid-template-columns : 1fr;
    width: 100%;
  }
  .btn{
    text-align: center;
    font-size: 1.2rem;

  }
  .hide-btn{
    background: var(--purple-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    color: var(--purple-500);
    border-radius: var(--borderRadius);
    font-size: 1.2rem;
  }
  
@media (min-width: 992px) {
  .container{
    width:100%;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 10px;
    grid-auto-flow: row;
    grid-template-areas:
      ". .";
  }
}
  
`
export default Wrapper
