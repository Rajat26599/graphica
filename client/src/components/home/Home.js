import { Navbar } from "../common/navbar/Navbar"
import { MyBanner } from "./myBanner/MyBanner"

import { useSelector } from 'react-redux'

export const Home = () => {

    const userData = useSelector(state => state)
    console.log('userData', userData)

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