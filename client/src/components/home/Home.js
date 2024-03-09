import Navbar from "../common/navbar/Navbar"
import { MyBanner } from "./myBanner/MyBanner"

export const Home = () => {

    return (
        <div>
            <Navbar 
                logo={'graphica'} 
                btnText={'Login / Signup'}
                />
            <MyBanner />
        </div>
    )
}