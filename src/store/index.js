import { createStore } from 'redux'

let INITIAL_STATE = {
    usuario: {email: "Anônimo"},
    cliente_ativo: {},
};

export function changeUser(usuario) {
    return {
        type: "LOGIN_USUARIO",
        payload: {
            usuario
        }
    }
}

export function logoutUsuario() {
    return {
        type: "LOGOUT_USUARIO",
        payload: null
    }
}



const reducer = (state = INITIAL_STATE, actions) => {

    console.log("ACTIONS", actions);

    if (actions.type === "LOGIN_USUARIO") {
        state = {
            ...state,
            usuario: actions.payload.usuario
        }
    } else if (actions.type === "LOGOUT_USUARIO") {
        state = {
            ...state,
            usuario: {}
        }
    }

    return state;
}

let store = createStore(reducer)

export default store;