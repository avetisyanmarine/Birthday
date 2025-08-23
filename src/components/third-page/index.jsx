import { PhotoDiv, ThirdPagePart, ThirdPagePartCalendar, ThirdPagePartMini } from "./styled"
import { Container } from "../../GlobalStyle"



export const ThirdPage = () => {
    return (
        <ThirdPagePart className="relative">
            <Container>
                <img src="/site-images/image4.jpeg" className="w-full rounded-[30px]" alt="" />
                <ThirdPagePartMini>
                    <h3>Սիրով սպասում ենք</h3>
                    <hr />
                    <h3>Պահպանիր Օրը</h3>
                </ThirdPagePartMini>
                <ThirdPagePartCalendar>
                    {[...Array(35)].map((_, i) =>
                        i > 1 && i <= 31 ? <div className={i - 1 == 9 ? "special" : ""}>{i - 1}</div> : <div></div>
                    )}
                </ThirdPagePartCalendar>
                <img src="/half-lemon.png" alt="" className="h-[60px] absolute right-5" />
                <PhotoDiv className="grid grid-cols-2 gap-2">
                    <img src="/site-images/image2.jpeg" alt="" className="w-full h-auto rounded-[30px]" />
                    <img src="/site-images/image3.jpeg" alt="" className="w-full h-auto rounded-[30px]" />
                </PhotoDiv>
            </Container>
        </ThirdPagePart>
    )
}