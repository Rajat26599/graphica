import { colors } from "../../constants/globalStyleVariables";
import { Button } from "../button/Button"
import { BannerWrapper, Tagline, Subtagline, ButtonArea, ImageWrapper } from "./styles"
import axios from 'axios'
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        isLogin: state.authReducers.isLogin
    }
}

const Banner = (props) => {

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order
        const result = await axios.post("http://localhost:8000/payment/orders");

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Graphica",
            description: "Subsription charge",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:8000/payment/success", data);

                alert(result.data.msg);
            },
            prefill: {
                name: "Graphica",
                email: "graphica@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Graphica Corporate Office",
            },
            theme: {
                color: colors.primaryColor,
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    const onSubs = () => {
        console.log('subscribing')
        displayRazorpay()
    }

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
                </ButtonArea><br />
                {
                    props.isLogin &&
                    <Subtagline>
                        Or <button onClick={onSubs}>Subscribe</button> to enjoy our premium services.
                    </Subtagline>
                }
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

export default connect(mapStateToProps)(Banner)