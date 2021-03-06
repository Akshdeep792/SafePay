import styled from 'styled-components'

const Wrapper = styled.main`
  align-items: left;
 .balance{
   width: 50%;
   margin-bottom:2rem;
 }
 .btn-danger {
  padding: 0.5rem;
  border-radius: var(--borderRadius);
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