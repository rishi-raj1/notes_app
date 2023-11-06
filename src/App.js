import { useState } from 'react';
import './App.css';
import LeftSide from './components/LeftSide';
import Modal from './components/Modal';
import RightSide1 from './components/RightSide1';
import RightSide2 from './components/RightSide2';

function App() {

  const [show, setShow] = useState(true);
  const [ind, setInd] = useState('');

  if (localStorage.getItem('data') == null) {
    localStorage.setItem('data', JSON.stringify([]));
  }

  return (
    <>
      <div className='container'>
        <LeftSide setShow={setShow} setInd={setInd} />
        {
          show ? <RightSide1 /> : <RightSide2 ind={ind} />
        }
      </div>
    </>
  );

}

export default App;
