
import './App.css';
import Header from './components/Header/Header';


function App() {
  // const [cat, setCat] = useState([]);
  // console.log(cat);



  // useEffect(() => {
  //   fetch('petsfakedata.json')
  //     .then(res => res.json())
  //     .then(data => setCat(data));

  // }, [])
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
