import styled from "styled-components";

const SecondPagePart = styled.div`
    div {
        text-align: center;
    }
`
const SecondPagePartContext = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    img {
        object-fit: cover;
    }
    svg {
        cursor: pointer;
        margin: 20px 0;
    }
    h5 {
        margin: 20px 0;
    }
    @keyframes moveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
`
export { SecondPagePart, SecondPagePartContext }