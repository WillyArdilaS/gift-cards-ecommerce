import { Navigate} from "react-router-dom"

const PrivateRoute = ({isLogin, children}) => {
    if(!isLogin) {
        return <Navigate to="/LogIn" replace="true" />
    }

    return children;
}

export default PrivateRoute