/*
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
    </div>
  );
}
export default App;
 */


/*
 //---------------module 2-----------//
import logo from './logo.svg';
import './App.css';


 const number = 2323;

const person = { name: 'Rakib', job: 'Web development' };
const person1 = { name: 'Noman', job: 'Master' };

const personStyle = {
  color: 'blue',
  backgroundColor: 'orange',
  padding: '15px'
}

// function App() {
//   return (
//     <div className="App">
//       <div className="firstContainer">
//         <h1>Hallo react</h1>
//       </div>

//       <div id="seContainer">
//         <h2>Name : Sadikur rahman sani </h2>
//         <p>Id: {number}</p>
//       </div>

//       <div>
//         <h1 style={personStyle}>Person information</h1>
//         <p>Name: {person.name} {person.job}</p>
//         <p style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}>Name: {person1.name} {person1.job}</p>
//       </div>

//     </div>
//   );
// }
// export default App;
 */


/*

 //---------------module 3-----------//
 import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <Friends></Friends>
      <Friends></Friends>
      <Friends></Friends>
      <h1>Hallo new person</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Friends() {
  return (
    <div className="secondContainer">
      <h1>Hallo react mama</h1>
    </div>
  )
}

function Person() {
  return (
    <div className='person-container'>
      <h1> Person </h1>
    </div>
  )
}

export default App;
 */

/*
//---------------module 4-----------//
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <Person name="Noman" id="43234"></Person>
      <Person name="Alamin" id="34333"></Person>
      <Person name="Salman" id="24345"></Person>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ background: "orange", border: "2px solid", margin: "20px", borderRadius: "10px" }}>
      <h1>Name: {props.name}</h1>
      <p>id: {props.id}</p>
    </div>
  )
}
export default App; */


/*
//---------------module 5-----------//
import logo from './logo.svg';
import './App.css';

const products = [
  { name: "Phone", id: 1, price: 1200 },
  { name: "Laptop", id: 2, price: 1200 },
  { name: "Watch", id: 3, price: 1200 },
  { name: "Mouse", id: 4, price: 1200 }
]
function App() {
  const friends = ['Ali', 'Jakir', 'Rajiv', 'Salim', 'Rakib']
  return (
    <div className="App">
      {
        friends.map(friend => <li>{friend}</li>)
      }

      // {Display to dynamic Array }
      {
        friends.map(friend => <Person name={friend}></Person>)
      }

      // {Display to dynamic Objects }
      {
        products.map(product => <Products name={product.name} id={product.id} price={product.price}></Products>)
      }

      // { <Person name={friends[0]}></Person>
      // <Person name={friends[1]}></Person>
      // <Person name={friends[2]}></Person>
      // <Person name={friends[3]}></Person> }
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ background: "blue", padding: "20px", color: "white", margin: "20px", borderRadius: "20px" }}>
      <h1>{props.name}</h1>
      <p></p>
    </div>
  )
}


function Products(props) {
  return (
    <div style={{ background: "yellow", padding: "20px", margin: "20px", borderRadius: "20px" }}>
      <h1>Name: {props.name} </h1>
      <p>Id: {props.id}</p>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
 */


//---------------module 6-----------//

//Concept recap = jsx, component,props,dynamic display array and object


/*
 //---------------module 7 -----------//
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  //increment count

  const incrementCount = () => setCount(count + 1);

  const decrementCount = () => setCount(count - 1)

  // const incrementCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount)
  // }
  return (
    <div className="App">
      <h1>Counter:{count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}
export default App;
*/



//---------------module 8 -----------//

/* 
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  return (
    <div className="App">
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }

    </div>
  );
}

function User(props) {
  return (
    <div className="userContainer">
      <h1>Name: {props.name}</h1>
      <p>Email: {props.email}</p>
    </div>
  )
}
export default App;
  */


import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <User name="Sani" ></User>
    </div>
  );
}
function User(props) {
  console.log(props)
  return (
    <div>
      <h1>Name: {props.name}</h1>
    </div>
  )
}
export default App;
