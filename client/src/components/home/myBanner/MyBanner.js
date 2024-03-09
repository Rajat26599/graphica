import { useState } from "react"
import { Banner } from "../../common/banner/Banner"
import { DialogModal } from "../../common/dialogModal/DialogModal"
import DemandModal from "./demandModal/DemandModal"
import { colors } from "../../constants/globalStyleVariables"
import homeBannerImg from "../../../assets/homeBannerImg.png"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        isLogin: state.authReducers.isLogin
    }
}
const MyBanner = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Banner 
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
            {
                props.isLogin ?
                    <DemandModal isOpen={isOpen} setIsOpen={setIsOpen} />
                :
                    <DialogModal 
                        isOpen={isOpen} 
                        onClose={() => setIsOpen(false)}
                        text='Login to send your design requirement.'
                        primaryBtnText='Ok'
                    />    
            }
        </Banner>
    )
}

export default connect(mapStateToProps)(MyBanner)