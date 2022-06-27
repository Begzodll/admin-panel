import {connect} from "react-redux";

function Admin({userGoogle}){
    return(
        <div>
            {
                userGoogle ? <h1>Hello Admin</h1> : window.location.href = '/'
            }
        </div>
    )
}
export default connect(({register: {userGoogle}}) => ({userGoogle}), null)(Admin)