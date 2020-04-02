import React from 'react'

import { logoutUsuario } from '../store'

import { connect } from 'react-redux' 

function Navbar(props) {
    return (
        <nav>
            <div className="container">
                user: {props.usuario.email}
                &nbsp;
                <button onClick={e => props.dispatch(logoutUsuario())}>Logout</button>
            </div>
            
        </nav>
    )
}
export default connect(state => {
    return {usuario: state.usuario}
})(Navbar);

// export default connect(state => {
//     return {usuario: state.usuario};
// })(Navbar);