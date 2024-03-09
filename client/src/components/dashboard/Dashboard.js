import { NotFound } from "../common/notFound/NotFound"
import { AdminDashboard } from "./AdminDashboard"
import { DesignerDashboard } from './DesignerDashboard'
import { CustomerDashboard } from './CustomerDashboard'
import { DashboardWrapper } from "./styles"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        isLogin: state.authReducers.isLogin,
        userData: state.authReducers.userData
    }
}

const Dashboard = (props) => {

    const getDashboard = () => {
        return (
            <>
                {
                    props.userData.roles ? 
                        props.userData.roles.map((role) => {
                            switch(role) {
                                case 'admin':
                                    return <AdminDashboard />
                                case 'designer':
                                    return <DesignerDashboard />
                                case 'customer':
                                    return <CustomerDashboard />
                                default:
                                    return <p>Dashboard doesn't exist for {role} role</p>
                            }
                        })
                    : <NotFound />
                }
            </>
        )
    }

    return (
        <DashboardWrapper>
            { getDashboard() }
        </DashboardWrapper>
    )
}

export default connect(mapStateToProps)(Dashboard)