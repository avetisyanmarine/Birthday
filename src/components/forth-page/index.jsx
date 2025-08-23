import { Container } from "../../GlobalStyle"
import { ForthPagePart, ForthPagePartContextLast } from "./styled"
import ImageSrc from "/pool.jpg"
export const ForthPage = () => {
    return (
        <ForthPagePart className="relative overflow-hidden">
            <Container>
                <div>
                    <h2 className="text-[48px] font-[family-home]">Tsaghkunq Pool</h2>
                    <h2 className="text-[32px] font-[Vrdznagir] text-[var(--dark-color)]">Հասցե՝ էջմիածին, գյուղ Ծաղկունք</h2>
                    <img className="w-full rounded-[30px] h-[250px]" loading="lazy" src={ImageSrc}  data-aos="fade-right" />
                    <h3 className="text-[28px] font-[Vrdznagir] text-[var(--dark-color)]">Ինչպե՞ս հասնել</h3>
                    <iframe  data-aos="fade-left" className="w-full rounded-[30px] h-[250px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24243.352895801523!2d44.83546099714829!3d40.57650340004458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40404881a8ebc3d9%3A0xa7ba3823f898c5ce!2z1L7VodWy1a_VuNaC1bbWhA!5e0!3m2!1shy!2sam!4v1755379976946!5m2!1shy!2sam"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </Container>
                    <img src="/bant.png" alt="bant" className="w-full" />
                <ForthPagePartContextLast>
                    <h2 className="text-[32px] font-[Vrdznagir] text-[var(--dark-color)]">Եկեք միասին կիսենք <br />ուրախությունն ու ժպիտները</h2>
                </ForthPagePartContextLast>
        </ForthPagePart>
    )
}