import { combineReducers, createStore } from 'redux';

const initialState={
    value:0
  }
  
const reducer =(valor=initialState, action)=>{
    console.log();
    console.log(valor);
    if (action.type==='aumentar') {
            return {...valor, value:action.value+valor.value}
    }
    else if (action.type ==='disminuir') {
        return {...valor, value:valor.value-action.value}
    }
    return valor
}

const reducers=combineReducers({reducer})
const store=createStore(reducers)

export default store