import './styles/App.css'
import Header from './header/index'
import Bye from './Bye'

function App() {
  let name = 'Hayk';
  const surname = "Doe";
  const id = '2'
  return (
    <div className="App">
        <Header />
        hi {name}
        he's surname is {surname}
        <Bye name={name} age={Math.floor(Math.random() * 10)} gender="male"/>
   </div>
  );
}

export default App;
