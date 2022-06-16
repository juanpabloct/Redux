function incrementar(value){
    const valueNumber=+value
    return {
        type:'aumentar',
        value:valueNumber
    }
}
function disminuir(value){
    const valueNumber=+value
    return {
        type:'disminuir',
        value:valueNumber
    }
}
export {incrementar, disminuir}