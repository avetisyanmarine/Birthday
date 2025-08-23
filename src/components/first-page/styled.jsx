import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";


const FirstPagePart = styled.div`
    position: relative;
    width: 100vw;
    /* height: 100vh; */
    height: 100dvh;
    transition: .5s;
    /* height: 100svh;  */
    overflow: hidden;
    > img {
        /* position: absolute; */
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* top: 0; */
        /* left: 0; */
    }
`
const FirstPagePartContext = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
    .uniquediv1 {
        margin-left: 50px;
    }
    h2 {
        text-align: center;
        line-height: 35px;
        color: aliceblue;
        letter-spacing: 5px;
    }
    .uniqueH2 {
        text-shadow: 1px -6px 5px rgba(0,0,0,0.5);
    }
    .uniqueH1 {
        line-height: 1px;
    }
    .uniqueDiv {

        p {
            color: var(--color);
            font-weight: 400;
        }
    }
`
const GridDiv = styled(Flexible)`
    text-shadow: 1px 6px 5px rgba(0,0,0,0.5);
    div {
        flex-direction: column;
        text-align: center;
        padding: 16px 20px;
        h2 {
            color: var(--color);
            font-size: 35px;
        }
        p {
            font-size: 22px;
            line-height: 8px;
        }
    }
    .uniqueBorder {
        border: 0;
    }
`
export { FirstPagePart, FirstPagePartContext, GridDiv }