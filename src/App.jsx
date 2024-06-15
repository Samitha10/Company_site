import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Footer from './Components/Footer';
import './App.css';
import Page from './Components/Page';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Page/>
    </div>
  )
}

export default App
