import styled from 'styled-components'

const Wrapper = styled.section`
margin-top: 4rem;
h2{
    text-transform: none;
}
& > h5 {
    font-weight : 700;
}

.users{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
}
.card{
    
    background : var(--white);
    border-radius : var(--borderRadius);
    box-shadow : var(--shadow-2);
    padding: 1rem;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
img{
    border-radius : var(--borderRadius);
}
.info{
    text-align: center;
    h2{
        margin-bottom : 0.25rem;
    }
}
@media (min-width: 992px){
    .users{
        display: grid;
        grid-template-columns : 1fr 1fr 1fr 1fr;
        gap: 1rem;
    }
}
  
`
export default Wrapper
