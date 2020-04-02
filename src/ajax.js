export function consultaAjaxDeUsuario(dados) {
    return new Promise((s,f) => {
        s({data: dados})
    });
}