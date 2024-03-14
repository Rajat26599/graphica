import { useState } from "react"
import { Banner } from "../../common/banner/Banner"
import DemandModal from "./demandModal/DemandModal"
import { colors } from "../../constants/globalStyleVariables"
import homeBannerImg from "../../../assets/homeBannerImg.png"
import { connect, useDispatch } from "react-redux"
import { showAuthModal } from "../../../redux/actions/authActions"

const mapStateToProps = (state) => {
    return {
        isLogin: state.authReducers.isLogin
    }
}
const MyBanner = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch()

    const handleBannerPrimaryBtn = () => {
        if(props.isLogin) {
            setIsOpen(true)
        } else {
            dispatch(showAuthModal(true))
        }
    }

    return (
        <Banner 
            $backgroundColor={colors.lightPink} 
            taglineLineOne={'We Create'}
            taglineLineTwoPartOne={'Your'}
            taglineLineTwoPartTwo={'Designs'}
            taglineLineTwoPartTwoColor={'pink'}
            subtagline={'In graphica we create multipurpose creatives for you.'}
            $btnText={'Get Started'}
            onClick={() => handleBannerPrimaryBtn()}
            bannerImage={homeBannerImg}
            bannerImageWidth={'40%'}
        >
            <DemandModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </Banner>
    )
}

export default connect(mapStateToProps)(MyBanner)