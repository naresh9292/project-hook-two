// import {useFormStatus} from 'react-dom'
// import './App.css';

// function App() {

//   const handleSubmit = async () => {
//     await new Promise(res=>setTimeout(res,3000));
//     console.log("submit");
    
//   }

//   function CustomerForm() {
//     const {pending} =useFormStatus();
//     console.log(pending);
    
//     return (
//       <div>
//         <input type='text' placeholder='Enter your name' /><br /><br />
//         <input type='password' placeholder='Enter your password' /><br /><br />
//       <button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>
//       </div>
//     )
//   }
//   return (
//     <div>
//       <h2>useFormStatus hook in react js</h2>
//       <form action={handleSubmit}>
//        <CustomerForm />
//       </form>
//     </div>
//   );
// }

// export default App;

//....................................practice ..........................

// import {useFormStatus} from 'react-dom'
// import './App.css';

// function App() {
//   const handleForm = async () => {
//     await new Promise(res=>setTimeout(res,3000));
//     console.log("submit");
    
//   }

//   function CustomerForm() {
//     const {pending} =useFormStatus();
//     console.log(pending);
    
//     return (
//       <div>
//           <input type='text' placeholder='Enter your name' /><br /><br />
//          <input type='password' placeholder='Enter your password' /><br /><br />
//          <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <h2>useFormStatus hook in react js</h2>
//       <form action={handleForm}>
//        <CustomerForm />
//       </form>
      
//     </div>
//   );
// }

// export default App;

//..........................................useTransition hook with state ...................



// import { useState } from 'react';
// import './App.css';

// function App() {
// const [pending,setPending] =useState(false);

// const handleButton =async () => {
//   setPending(true)
//   await new Promise(res =>setTimeout(res,3000));

//   setPending(false)
// }

//   return (
//     <div>
//       <h2>useTransition hook in react js</h2>
//       <button disabled={pending} onClick={handleButton}>Click</button>
    
//     </div>
//   );
// }

// export default App;

//.........................through useTransition ......................

// import {  useTransition } from 'react';
// import './App.css';

// function App() {
// const [pending,startTransition] =useTransition()

// const handleButton = () => {
//   startTransition(async()=> {
//      await new Promise(res =>setTimeout(res,3000));
//   })
// }


//   return (
//     <div>
//       <h2>useTransition hook in react js</h2>
//       {
//         pending ? <img style={{width:"100px"}} src='https://media.tenor.com/IfbOs_yh89AAAAAM/loading-buffering.gif' /> : null
//       }
//       <button disabled={pending} onClick={handleButton}>Click</button>
    
//     </div>
//   );
// }

// export default App;

//.....................................................................



// import { useTransition } from 'react';
// import './App.css';

// function App() {
//   const [pending,startTransition] =useTransition()

//   const handleButton = () => {
//     startTransition(async ()=> {
//       await new Promise(res=>setTimeout(res,3000));
//     })
//   }


//   return (
//     <div>
//       <h2>useTransition hook in react js</h2>
//       {
//         pending ? <img src='https://media.tenor.com/IfbOs_yh89AAAAAM/loading-buffering.gif' /> : null
//       }
//       <button disabled={pending} onClick={handleButton}>Click</button>
     
//     </div>
//   );
// }

// export default App;

//..................................... impure component ...........................


// import './App.css';

// function App() {

//   let guest = 0;           // this is outside of the component

// const Cup = () => {
//   guest = guest + 1;
//   return (
//     <h1>We have {guest} guest and we have {guest} cup of tea</h1>
//   )
// }

//   return (
//     <div>
//       <h2>Keep your component pure in react js</h2>
//       <Cup />
//       <Cup />
//       <Cup />
//       <Cup />
  
//     </div>
//   );
// }

// export default App;

//...................................pure component..................



// import './App.css';

// function App() {

// const Cup = ({guest}) => {
  
//   return (
//     <h1>We have {guest} Guest and we have {guest} cup of tea</h1>
//   )
// }

//   return (
//     <div>
//       <h2>Keep your component pure in react js</h2>
//       <Cup guest={1} />
//       <Cup guest={2} />
//       <Cup guest={3} />
//       <Cup guest={4} />
  
//     </div>
//   );
// }

// export default App;

//..................................Derived state in react js...............



// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [users,setUsers]=useState([]);
//   const [user,setUser]=useState('');

//   const handleAddUsers = () => {
//     setUsers([...users,user])
//   }

//   const total = users.length;
//   const last = users[users.length-1];
//   const unique = [...new Set(users)].length;


//   return (
//     <div>
//       <h2>Derived state  in react js</h2>
//       <h2>Total user: {total}</h2>
//       <h2>Last user: {last}</h2>
//       <h2>Unique user: {unique}</h2>
      
//       <input onChange={(event)=> setUser(event.target.value)} type='text' placeholder='Enter user name' />
//       <button onClick={handleAddUsers}>Add user</button>
//       {
//         users.map((item,index)=> (          // here curley brases ki jagah pr parenthesis aata h
//           <h4 key={index}>{item}</h4>
//         ))
//       }
  
//     </div>
//   );
// }

// export default App;

//.....................................practice..........................



// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [users,setUsers]=useState([]);
//   const [user,setUser]=useState('');

//   const handleAddUsers = () => {
//     setUsers([...users,user])
//   }
//   const total = users.length;
//   const last = users[users.length-1];
//   const unique = [...new Set(users)].length;

//   return (
//     <div>
//       <h2>Derived state  in react js</h2>

//       <h2>Total user: {total}</h2>
//       <h2>Last user: {last}</h2>
//       <h2>Unique user: {unique}</h2>

//       <input onChange={(event)=> setUser(event.target.value)} type='text' placeholder='Enter user name' />
//       <button onClick={handleAddUsers}>Add user</button>
//       {
//         users.map((item,index)=> (
//           <h4 key={index}>{item}</h4>
//         ))
//       }
     
//     </div>
//   );
// }

// export default App;

//...................................practice of useFormStatus hook ...........

// import {useFormStatus} from 'react-dom'
// import './App.css';

// function App() {
 
//   const handleSubmit =async () => {
//     await new Promise(res=>setTimeout(res,3000));
//     console.log("submit");
//   }

//   function CustomerForm() {
//      const {pending} =useFormStatus();
//   console.log(pending);
//     return (
//       <div>
//           <input type='text' placeholder='Enter your name' /><br /><br />
//         <input type='password' placeholder='Enter your password' /><br /><br />
//         <button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>
//       </div>
//     )
//   }
 

//   return (
//     <div>
//       <h2>useFormStatus hook in react js</h2>
//       <form action={handleSubmit}>
//         <CustomerForm />
//       </form>

     
//     </div>
//   );
// }

// export default App;

//......................................useTransition ..................


// import { useTransition } from 'react';
// import './App.css';

// function App() {

//   const [pending,startTransition]=useTransition();

//   const handleButton = () => {
//      startTransition(async ()=> {
//       await new Promise(res=>setTimeout(res,3000));
//      })
//   }


//   return (
//     <div>
//       <h2>useTransition hook in react js</h2>
//       <button disabled={pending} onClick={handleButton}>Click</button>
//       {
//         pending ? <img style={{width:"200px"}} src='https://media.tenor.com/IfbOs_yh89AAAAAM/loading-buffering.gif' /> : null      }
    
//     </div>
//   );
// }

// export default App;

//.............................keep your component pure.................


// import './App.css';

// function App() {
 

//   function Tea({guest}) {
  
//     return (
//       <h2>we have {guest} Guest and we have {guest} cup of tea</h2>
//     )
//   }

//   return (
//     <div>
//       <h2>keep tour component pure in react js</h2>
//        <Tea guest={1} />
//        <Tea guest={2} />
//        <Tea guest={3} />
//        <Tea guest={4} />
//     </div>
//   );
// }

// export default App;

//............................derived state...........................


import { useState } from 'react';
import './App.css';

function App() {
  const [users,setUsers]=useState([]);
  const [user,setUser]=useState();

  const handleAddUsers = () => {
    setUsers([...users,user])
  }

  const total = users.length;
  const last = users[users.length-1];
  const unique = [...new Set(users)].length;
 

  return (
    <div>
      <h2>derived state in react js</h2>

      <h2>Total user: {total}</h2>
      <h2>Last user: {last}</h2>
      <h2>Unique user: {unique}</h2>

      <input onChange={(event)=> setUser(event.target.value)} type='text' placeholder='Enter user name' />
      <button onClick={handleAddUsers}>Add user</button>
      {
        users.map((item,index)=> (
          <h4 key={index}>{item}</h4>
        ))
      }
      
    </div>
  );
}

export default App;