import { Button } from "../button/Button"
import { BannerWrapper, Tagline, Subtagline, ButtonArea, ImageWrapper } from "./styles"

export const Banner = (props) => {
    return (
        <BannerWrapper $backgroundColor={props.$backgroundColor}>
            <div>
                <Tagline>
                    {props.taglineLineOne} <br /> {props.taglineLineTwoPartOne} <span style={{color:`${props.taglineLineTwoPartTwoColor}`}}>{props.taglineLineTwoPartTwo}</span>
                </Tagline>
                <Subtagline>
                    {props.subtagline}
                </Subtagline>
                <ButtonArea>
                    <Button onClick={props.onClick}>{props.$btnText}</Button>
                </ButtonArea>
                {props.children}
            </div>
            <ImageWrapper 
                width={props.bannerImageWidth} 
                src={props.bannerImage} 
                alt="Banner image"
                ></ImageWrapper>
        </BannerWrapper>
    )
}