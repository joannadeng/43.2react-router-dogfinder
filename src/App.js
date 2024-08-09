import './App.css';

import defaultProps from './defaultProps';
import DogList from './DogList';
import DogDetails from './DogDetails';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/dogs' element={<DogList dogsList={defaultProps}/>}></Route>
          <Route path='/dogs/:name' element={<DogDetails dogsList={defaultProps}/>}></Route>
          <Route path="*" element={<DogList dogs={defaultProps} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
