// import React, {useState, useEffect} from 'react';  // useState basically known as 
import React, {useState} from 'react';
import './App.css';




// react Hooks using class 

// class App extends React.Component{
//   constructor (prop) {
//     super(prop);
//     this.state = {email: '', name: ''}  // set as a Object
//   }

//   handleChange = (e) => {
//     this.setState({
//       email: e.target.value
//     })
//   }

//   handleChangeName = (e) => {
//     this.setState({
//       name: e.target.value
//     })
//   }

//   render() {
//     return (
//       <div className='App'>
//         <input value={this.state.email}
//                onChange={this.handleChange}
//         />
//         <p>Email: {this.state.email} </p>
//         <br></br>
//         <input value={this.state.name}
//                onChange={this.handleChangeName}
//         />
//         <p>Name: {this.state.name} </p>
//       </div>
//     )
//   }
// }




// using hooks using function method - 1

// function App() {

//   const emailState = useState(''); // ('a@gmail.com')
//   const email = emailState[0];
//   const setEmail = emailState[1];

//   const nameState = useState(''); // ('abc')
//   const name = nameState[0];
//   const setName = nameState[1];

//   function handleChange (e) {
//     setEmail(e.target.value)
//   }

//   function handleChangeName (e) {
//     setName(e.target.value)
//   }

//   return (
//     <div className="App">
//      <input value={email}
//             onChange={handleChange}
//      />
//      <p>Email: {email}</p>


//      <input value={name}
//             onChange={handleChangeName}
//      />
//      <p>Name: {name}</p>


//     </div>
//   );
// }



// using hooks using function method - 2

// function App() {

//   const [email, setEmail] = useState(''); // ('a@gmail.com')
//   const [name, setName] = useState(''); // ('abc')

//   function handleChange (e) {
//     setEmail(e.target.value)
//   }

//   function handleChangeName (e) {
//     setName(e.target.value)
//   }

//   return (
//     <div className="App">
//      <input value={email}
//             onChange={handleChange}
//      />
//      <p>Email: {email}</p>


//      <input value={name}
//             onChange={handleChangeName}
//      />
//      <p>Name: {name}</p>


//     </div>
//   );
// }




// useEffect hooks
// function App (props) {
//   const [userId, setUserId] = useState('1');
//   const [data, setData] = useState([]);

//   useEffect (() => {
//     const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

//     fetch(url)   // like a componetDidMount
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Data', data);
//         setData(data);
//       });
//   }, [userId]);   // componetDidUpdate

  
//   useEffect(() =>{
//     document.addEventListener('mousemove', onMouseMove);

//     //optional return function
//     return () => {
//       document.removeEventListener('mousemove', onMouseMove);  // altrnative to componetWillUnMount
//     }
//   });

//   function onMouseMove(e){
//     console.log(e.clientX);
//   }


//   return (
//     <div className='App'>
//       <button onClick={() => setUserId('2')}>chage user id to 2</button>
//       {data.map((user) => (
//         <div>
//           <p>{user.title}</p>
//         </div>
//       ))}
//     </div>
//   )
// }


// custom hooks

// function LoginFrom() {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   function handelEmailChange(e) {
//     setEmail(e.target.value);
//   }

//   function handelPasswordChange(e) {
//     setPassword(e.target.value);
//   }

//     return (
//       <form>
//         <div>Email</div>
//           <div>
//                <input type='text' value={email}
//                       onChange={handelEmailChange}
//               />
//           </div><br></br>
//           <div>Name</div>
//           <div>
//                <input type='text' value={password}
//                       onChange={handelPasswordChange}
//               />
//           </div>
//           <p>
//           <strong>
//             <em>Email: </em>
//           </strong>{' '}
//           {email}
//           <strong>
//             <em> | Password: </em>
//           </strong>{' '}
//           {password}
//           </p>
//       </form>
//     )
// }


// using genric and sparad operator


function useFromInput(initialValue) {
  const [value, setValue] = useState('');   // Generic Method


  function handelChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handelChange
  }
}

function LoginFrom() {

  const email = useFromInput('');
  const password = useFromInput('');

    return (
      <form>
        <div>Email</div>
          <div>
               <input type='text' 
              //  value={email.value}
              //  onChange={email.onChange}   // instead of using ... (speard operator)
               {...email}
              />
          </div><br></br>
          <div>Name</div>
          <div>
               <input type='password' 
                      // value={password.value}
                      // onChange={password.onChange}
                      {...password}
              />
          </div>
          <p>
          <strong>
            <em>Email: </em>
          </strong>{' '}
          {email.value}
          <strong>
            <em> | Password: </em>
          </strong>{' '}
          {password.value}
          </p>
      </form>
    )
}


export default LoginFrom;
