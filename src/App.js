
import Formulario from "./componentes/Formulario/";
import Home from "./componentes/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BuscarDrink from "./componentes/BuscarDrink/BuscarDrink";
import NossoTime from "./componentes/nossoTime/NossoTime";
import SobreNos from "./componentes/sobreNos/SobreNos";

function App() {
  return (
    <Router>
      <div className="div0">
        <Switch>
          <Route path="/contato">
            <Formulario titulo="Contato"/>
          </Route>
          <Route path="/Nosso-Time">
            <NossoTime />
          </Route>
          <Route path="/sobre">
              <SobreNos/>
          </Route>
          <Route exact path="/drinks/buscarDrink">
            <BuscarDrink />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
