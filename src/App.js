import React from 'react';
import Form from './components/form';
import Navbar from './components/navbar';
import "materialize-css/dist/css/materialize.css";
import { Provider } from 'react-redux';
import store from './store';

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
        <Provider store={store}>
          <Navbar />
          <Panel onLogin={this.handleLogin}  />
        </Provider>
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
