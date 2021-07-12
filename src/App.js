
import './App.css';
import Cart from './Componenets/SingleCart/Cart';
import Search from './Componenets/Search/Search';
import Navbar from './Componenets/Navbar/Navbar';
import BottomNav from './Componenets/BottomNav/BottomNav';
import MenuBar from './Componenets/MenuBar/Menu';
function App() {
  return (
    <div className="App">
      <div className="">
        <Navbar />
        <MenuBar />
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
