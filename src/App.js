import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Form from './Form'
import User from './User'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='users' element={<User/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
