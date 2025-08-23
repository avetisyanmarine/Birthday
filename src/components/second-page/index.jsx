import { SecondPagePart, SecondPagePartContext } from "./styled"
import { Container } from "../../GlobalStyle"

export const SecondPage = () => {
    const handleClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    return (
        <SecondPagePart className="relative">
            <img loading="lazy" src="/entire-lemon.png" alt="lemon" className=" absolute h-[87px] right-4 top-100" />
            <Container>
                <SecondPagePartContext>
                    <a onClick={handleClick} href="#about" className="animate-[moveUpDown_1s_ease-in-out_infinite]">
                        <svg width="49" height="31" viewBox="0 0 49 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.3118 1.38342C48.7273 3.05932 48.7273 5.7768 47.3118 7.4527L29.5775 28.428C26.7457 31.7772 22.1572 31.7758 19.3268 28.425L1.59932 7.43725C0.183689 5.76135 0.183689 3.04387 1.59932 1.36797C3.015 -0.308352 5.3102 -0.308352 6.72587 1.36797L21.8987 19.3312C23.3146 21.0071 25.6096 21.0071 27.0252 19.3312L42.1853 1.38342C43.6009 -0.292473 45.8962 -0.292473 47.3118 1.38342Z" fill="#F2DA07" />
                        </svg>
                    </a>
                    <img loading="lazy" src="/slice-lemon.png" alt="lemon" className="absolute left-1.5 top-12 w-[72px]" />
                    <div id="about" className="text-center">
                        <h2 className="text-[var(--dark-color)] text-[64px] font-['Playfair_Display',serif]" data-aos="zoom-in">Natali’s</h2>
                        <h3 className="text-[var(--color)] text-[96px] font-[family-home]" data-aos="zoom-in">7th</h3>
                        <h3 className="text-[var(--black)] text-[64px] leading-17 font-[family-home]" data-aos="zoom-in">Birthday <br /> Party</h3>
                    </div>
                    <h5 className="text-[24px]">
                        Սիրելի ընկերներ և <br />բարեկամներ, սիրով հրավիրում <br /> եմ ձեզ միասին կիսելու իմ <br />ծննդյան ուրախությունը։Ձեր <br />ներկայությամբ օրը կլինի ավելի <br /> գեղեցիկ ու հիշարժան։
                    </h5>
                    <img loading="lazy" src="/cake.png" />
                    <img src="/site-images/image1.jpeg" className="w-full rounded-[30px]" alt="" />
                    <h3 className="text-[36px]" style={{ marginTop: "20px" }} data-aos="zoom-in">Միացեք Մեզ</h3>
                    <h2 className="text-[64px] text-[var(--dark-color)]" data-aos="zoom-in">09</h2>
                    <h3 className="text-[48px] text-[var(--color)]" data-aos="zoom-in">Սեպտեմբեր</h3>
                    <h2 className="text-[64px] text-[var(--dark-color)]" data-aos="zoom-in">2025</h2>
                    <img loading="lazy" src="half-lemon.png" alt="lemon" className="absolute w-[72px] left-9 bottom-[39%]" />
                    <h3 className="text-[36px]" data-aos="zoom-in">Դուք հրավիրված եք</h3>
                    <h2 className="text-[64px] text-[var(--color)]" data-aos="zoom-in">11։00</h2>
                    <img src="/slice-lemon.png" alt="lemon" style={{ marginTop: "20px" }} className="w-[72px]" />
                </SecondPagePartContext>
            </Container>
        </SecondPagePart>
    )
}