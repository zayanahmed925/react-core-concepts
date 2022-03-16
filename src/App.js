import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const players = [{ name: 'Tamim', position: 'Top' },
  { name: 'Shakib', position: 'middle' },
  { name: 'mushfiq', position: 'low' },
  ];

  return (
    <div className="app">
      <Counter></Counter>
      <Userload></Userload>
      {/* {
        players.map(player => <li>Name: {player.name}</li>)
      } */}
      {
        players.map(player => <Cricket name={player.name} position={player.position}></Cricket>)
      }
      {/* <Cricket name={players[0]} position="top order"></Cricket>
      <Cricket name={players[1]} position="middel"></Cricket>
      <Cricket name={players[2]} position="low"></Cricket> */}
    </div>
  )
}
function Userload() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  return (
    <div >
      <h2 >All user</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div className='container'>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(20)
  const increaseCount = () => setCount(count + 1);
  const discreaseCount = () => setCount(count - 1);
  return (
    <div className='container'>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={discreaseCount}>Discrase</button>
    </div>
  )
}

function Cricket(props) {
  // console.log(props)
  return (
    <div className='container'>
      <h3>{props.name}</h3>
      <h6>{props.position}</h6>
    </div>
  );
}
export default App;
