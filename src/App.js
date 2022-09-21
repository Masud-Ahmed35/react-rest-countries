
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
    </div>
  );
}



/* function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))

  }, [])

  return (
    <div>
      <h1>-------All Countries Of The World--------</h1>
      <h3>Total Country: {countries.length}</h3>
      {
        countries.map(country => <DisplayCountry name={country.name.common}></DisplayCountry>)

      }
    </div>
  )
}

function DisplayCountry(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>

    </div>
  )
} */

export default App;
