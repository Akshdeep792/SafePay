import styled from 'styled-components'

const Wrapper = styled.main`
  /* align-items: left; */
 .balance{
   width: 50%;
   margin-bottom:2rem;
 }
 .btn-danger {
  padding: 0.5rem;
  border-radius: var(--borderRadius);
}
.sub-sec {
  margin: 2rem 0;
  background-color: var(--purple-light);
  padding: 0.5rem;
  color: white;
  border-radius: var(--borderRadius);
}
.cards {
  /* display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 4px; 
  grid-template-areas: 
    ". . .";  */
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}
.sub-cards {
  /* flex: 1; */
  /* border: 1px solid black; */
  width: 320px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--borderRadius);
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  flex-direction: column;
  cursor: pointer;
  margin: 4px 0;
}
.sub-cards:hover {
  transform: scale(1.1);
  transition: .2s;
}
.icons {
  font-size: 9rem;
  color: var(--purple-500);
}
.info {
  font-size: 1.5rem;
  color: var(--purple-500);

}

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`
export default Wrapper