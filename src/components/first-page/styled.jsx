import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const FirstPagePart = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    height: 100svh; 
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const FirstPagePartContext = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
    h2 {
        text-align: center;
        font-family: ArmAllegrou;
        line-height: 35px;
        color: aliceblue;
        letter-spacing: 5px;
    }
    .uniqueH2 {
        font-family: DavelAghvor;
        margin-bottom: 28px;
    }
    .uniqueDiv {
        flex-direction: column;
        gap: 10px;
        margin-top: -24px;

        .uniqueH1 {
            line-height: 48px;
        }
        p {
            color: #965A00;
            font-family: ArmAllegrou;
            font-weight: 400;
            margin-top: -64px;
        }
    }
`
const GridDiv = styled(Flexible)`
    div {
        flex-direction: column;
        text-align: center;
        border-right: 2px solid #965A00;
        padding: 16px 24px;
        h2 {
            font-size: 40px;
            font-family: DavelAghvor;
        }
        p {
            color: aliceblue;
            font-size: 22px;
            line-height: 8px;
        }
    }
    .uniqueBorder {
        border: 0;
    }
`
export { FirstPagePart, FirstPagePartContext, GridDiv }