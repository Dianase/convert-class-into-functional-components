import './App.css';
import Counter2 from './components/Counter2';
import {useState} from 'react'

function App() {
  const [showCount, setShowCount] = useState(true)
  return (
    <div className="App">
      <button onClick={() => setShowCount(!showCount)}>Show Count</button>
      <Counter name={'matt'}/>
      <Counter2 />
    </div>
  );
}

export default App;
