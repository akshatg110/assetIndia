import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import SideNav from './components/sideNav'
import CurrentTime from './components/currentTime';

function App() {
  return (
    <div className="App">
       <Header />
       <CurrentTime />
       <SideNav />
    </div>
  );
}

export default App;
