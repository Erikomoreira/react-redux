import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="container">
                user: {this.props.usuario.email}
                </div>
            </nav>
        )
    }
}

export default Navbar;