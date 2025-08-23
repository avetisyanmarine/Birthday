import styled from "styled-components";

const LastFooterPagePart = styled.div`
    background: var(--color);
    color: var(--dark-color);
`
const LastFooterPagePartContext = styled.div`
    font-size: 18px;
    > p {
        margin-top: 48px;
    }
    > div {
        display: flex;
        align-items: center;
        gap: 20px;
        .unique {
            padding-left: 20px;
        }
        > div {
            img {
                padding: 11px;
                border-right: 2px solid aliceblue;
                /* border-radius: 50px; */
            }
            div {
                display: block;
            }
        }
   }
     a {
        text-decoration: none;
        cursor: pointer;
        transition: 0.2s;
    }

    a:hover {
        text-decoration: underline;
        opacity: 0.8;
    }
`
export { LastFooterPagePart, LastFooterPagePartContext }