import styled from 'styled-components'

const Wrapper = styled.main`
 display : flex;
 align-items:center;
 justify-content:center;
 flex-direction: column;
 .webimg{
     border-radius: var(-borderRadius);
     box-shadow : var(--shadow-2);
     background: var(--purple-500);
 }
 .btns{
    display : flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
 }
 .img{
    border-radius: var(-borderRadius);
    
 }
 
`

export default Wrapper