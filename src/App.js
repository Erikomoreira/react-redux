import React from 'react';
import Form from './components/form';
import Navbar from './components/navbar';
import "materialize-css/dist/css/materialize.css";


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      usuario: {}
    }
  }


  handleLogin = (dados) => {
    console.log("DADOS DE LOGIN EM APP", dados);

    this.setState({
      ...this.state,
      usuario: dados
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar usuario={this.state.usuario} />
        <Panel onLogin={this.handleLogin}  />
      </div>
    );
  }
}

function Panel(props) {
  return (
    <div>
      <Form onLogin={props.onLogin} />
    </div>
  )
}

export default App;
