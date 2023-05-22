import './App.css';
import { useRef } from 'react';

function UnControlledComponentWay() {
  const input = useRef();
  const file = useRef();

  const submit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    console.log(input.current.value);
    console.log(file.current.files[0]);
    const form = new FormData();
    form.append('archivo', file.current.files[0]);
    form.append('campo', input.current.value);
    fetch('/lala', { method: 'POST', body: form });
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <div>
          <span>Lalala</span>
          <input type="text" name="archivo" ref={input} />
          <input type="file" ref={file} />
        </div>
        {/*Utilizar tag button mejor que input */}
        <button type="submit" value='Enviar'>Enviar</button>
      </form>
    </div>
  );
}

export default UnControlledComponentWay;