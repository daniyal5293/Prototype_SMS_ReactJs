
import './App.css';
import {Course} from "./Components/Course";
import {Marksheet} from "./Components/Marksheet";
import {Student} from "./Components/Student";
import {Teacher} from "./Components/Teacher";

function App() {
  return (
    <div className="App">

      
     {<Course />}
    {<Marksheet />}
    {<Student />}
      {<Teacher />}
    
    </div>
  );
};

export default App;
