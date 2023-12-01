import { useState } from "react"
import { Banner } from "../../common/banner/Banner"
import { DemandModal } from "./demandModal/DemandModal"
import { colors } from "../../constants/globalStyleVariables"
import homeBannerImg from "../../../assets/homeBannerImg.png"

export const MyBanner = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Banner
            id='home-banner'
            backgroundColor={colors.lightPink} 
            taglineLineOne={'We Create'}
            taglineLineTwoPartOne={'Your'}
            taglineLineTwoPartTwo={'Designs'}
            taglineLineTwoPartTwoColor={'pink'}
            subtagline={'In graphica we create multipurpose creatives for you.'}
            btnText={'Get Started'}
            onClick={() => setIsOpen(true)}
            bannerImage={homeBannerImg}
            bannerImageWidth={'40%'}
            >
                <DemandModal isOpen={isOpen} setIsOpen={() => setIsOpen()} />
            </Banner>
    )
}