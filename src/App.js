import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  constructor(){
    super();

    this.state = {
      tareas:["Sacar la ropa", "Hacer la cama", "Leer un rato"],
      valor:""
    }
  }


  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {
              this.state.tareas.map(
                (tarea,i)=>
                <li key={i}>{tarea}</li>
              )
            }

          </ul>
           <form onKeyPress={this.handleKeyPress}>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" onChange={this.ObtenerTarea.bind(this)} value={this.state.valor} />
           </form>
        </div>
      </div>
    )
  }

  ObtenerTarea(event) {
    this.setState({
      valor: event.target.value
    })
  }

  handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    event.preventDefault();
    this.setState({
      tareas: this.state.tareas.concat(this.state.valor),
      valor:""
    })
  }
}
}


export default App;
