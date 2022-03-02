import React ,{useState} from 'react'

const Login = () => {
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const [allEntry, setAllEntry]=useState([]);

 const submitForm = (e) => {
  e.preventDefault();

  const newEntry = { email: email, password:password};

  setAllEntry([...allEntry,newEntry]);
  console.log(allEntry);
  setEmail("");
  setPassword("");
 }
  return (
    <div>
      <form action="" onSubmit={submitForm}>
       <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)}/>
         
       </div>
        

       <div>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" autoComplete='off' value={password}  onChange={(e) => setPassword(e.target.value)}/>

       </div>
       <button type="submit">Login</button>

      </form>
      
    </div>
  )
}

export default Login
