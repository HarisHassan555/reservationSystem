import "./App.css";
import Home from "./components/home";
import FB from './components/fancybutton';
import Calender from "./components/calender";
import Table from "./table";


function App() {
  return (
    <div className="bg-blue-100">
      <Home />
      <Table/>
    </div>  
  );
}

export default App;
