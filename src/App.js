import './App.css';

import defaultProps from './defaultProps';
import DogList from './DogList';
import DogDetails from './DogDetails';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App(props) {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/dogs' element={<DogList dogsList={props.dogs}/>}></Route>
          <Route path='/dogs/:name' element={<DogDetails dogsList={props.dogs}/>}></Route>
          <Route path="*" element={<DogList dogsList={props.dogs} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
App.defaultProps = defaultProps;

export default App;

