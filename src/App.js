/*import logo from './logo.svg';*/
import './App.css';
import Card from "./component/card";
function App() {
  return (
    <div className="App">
            
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
          <Card price="0"/>
          <Card price="9"/>
          <Card price="49"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
