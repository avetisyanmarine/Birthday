import { Container, Flexible } from "../../GlobalStyle"
import { FirstPagePart, FirstPagePartContext, GridDiv } from "./styled"
import { useEffect, useState } from "react";
import MainPhoto from "../../assets/image/mainPhoto.jpeg"

export const FirstPage = () => {
    const date = new Date(2025, 8, 9, 0, 0, 0);

    const calculateTimeLeft = () => {
        const now = new Date();
        const diff = date - now;

        if (diff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatNumber = (num) => String(num).padStart(2, "0");

    return (
        <FirstPagePart>
            <img src={MainPhoto} />
            <Container>
                <FirstPagePartContext className="flex justify-center">
                    <div className="text-right uniquediv1">
                        <h1>Ծննդյան</h1>
                        <h1 className="uniqueH1">հրավեր</h1>
                    </div>
                    <div style={{ textShadow: "1px -2px 10px 5px rgba(0,0,0,0.5)" }} className="w-full absolute bottom-9 text-center  text-[var(--color)]">
                        <h4 className="uniqueH2">Մնացել է</h4>
                        <GridDiv>
                            <Flexible>
                                <h2>{formatNumber(timeLeft.days)}</h2>
                                <p className="">Օր</p>
                            </Flexible>
                            <Flexible>
                                <h2>{formatNumber(timeLeft.hours)}</h2>
                                <p>Ժամ</p>
                            </Flexible>
                            <Flexible>
                                <h2>{formatNumber(timeLeft.minutes)}</h2>
                                <p>Րոպե</p>
                            </Flexible>
                            <Flexible className="uniqueBorder">
                                <h2>{formatNumber(timeLeft.seconds)}</h2>
                                <p>Վայրկյան</p>
                            </Flexible>
                        </GridDiv>
                    </div>
                </FirstPagePartContext>
            </Container>
        </FirstPagePart>
    )
}
