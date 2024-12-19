
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import RepoList from './components/RepoList';

function App() {
  const [username, setUserName]=useState("")
  const [error,setError]=useState(null)
  const [repos,setRepos]=useState([])
  const [userData,setUserData]=useState("")

  const handleSearch=async()=>{
    setError("")
    setUserData(null)
    setRepos([])

    try{
      const userResponse=await axios.get(`https://api.github.com/users/${username}`)
      console.log(userResponse.data)
      setUserData(userResponse.data)

      const repoResponse=await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&page=1`)
      setRepos(repoResponse.data)
    }
    catch(err){
      setError("User not found or API Error")

    }
  }
 



  return (
    <div className="App">
      <h1>Github User Search</h1>
      <input 
       type='text'
       placeholder='Enter Github UserName'
       value={username}
       
       onChange={(e)=>setUserName(e.target.value)}/>
       <button onClick={handleSearch} >Search</button>
       {userData && <UserCard userData={userData}/>}
       {repos.length>0 && <RepoList repos={repos}/>}
    </div>
  );
}

export default App;
