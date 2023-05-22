import './App.css';

function UnControlledComponent() {
  const submit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target));
    console.log(Object.fromEntries(data));
  };

  return (
    <div className="App">
      <h1> Forms *** componentes no controlados</h1>
      <form onSubmit={submit}>
        <div>
          <span>Form</span>
        
          <input name="campo" />
        </div>
        <input name="campo-2" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default UnControlledComponent;