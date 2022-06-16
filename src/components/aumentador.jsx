import { useRef } from "react";
import { connect } from "react-redux";

import { incrementar, disminuir } from "../actions/actions";
const changeValue = (state) => {
  return { value: state.reducer.value };
};

const Buttons = ({ value,  incrementar, disminuir }) => {
    console.log(value);
  const valueInput = useRef();
  return (
    <div>
      <h1>Valor:{value}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" ref={valueInput} /> 
        <button onClick={() => incrementar(valueInput.current.value)}> Llamar buton </button>
        <button
          type="submit"
          onClick={() => disminuir(valueInput.current.value)}>
            Da click para restar el valor</button>
      </form>
    </div>
  );
};

export default connect(changeValue, { incrementar, disminuir })(Buttons);
