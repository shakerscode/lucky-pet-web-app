
import './App.css';
import Header from './components/Header/Header';
import PetShop from './components/PetShop/PetShop';
import Questions from './components/Questions/Questions';
 


function App() {

  return (
    <div className="App">
      <Header></Header>
       <PetShop></PetShop>
       <Questions></Questions>
    </div>
  );
}

export default App;
