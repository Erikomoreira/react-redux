import React from 'react';
import { consultaAjaxDeUsuario } from './../ajax'
import { connect } from 'react-redux'
import { changeUser } from './../store'

let Form = (props) => {
    
    let handleSubmit = (event) => {
        event.preventDefault();
        // Destruturação, é equivalente as linhas a baixo 
        let { email, senha } = event.target;
        // let email = event.target.email;
        // let senha = event.target.senha;
    
        // email é um elemento HTML preciso acessar o valor através do value
        // email.value
        // senha é um elemento HTML preciso acessar o valor através do value
        // senha.value
    
        let data = {email: email.value, senha: senha.value};
        consultaAjaxDeUsuario(data).then(response => {
            console.log(response);
            
            // Props dispatch passada pelo connect
            // Recebe um objeto que vai ser carregado na actions
            // do reducer
            props.dispatch(changeUser(response.data));

            // props.onLogin(response.data);
        })
    }

    return (
        <form className="container" onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Senha</label>
                <input name="senha" />
            </div>
            <button className="btn">Entrar!</button>
        </form>
    )}

export default connect(state => state)(Form);