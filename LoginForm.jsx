import { useState } from "react";
import axios from 'axios';

const LoginForm = () =>{
    const [userName, setUserName] = useState(' ');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        const authObject = {'Project-ID': 'a2c77fa4-c70e-4ed9-a97a-8d57b9c43f02', 'User-Name': userName, 'User-Secret': password };
        try{
          axios.get('https://api.chatengine.io/chats',{headers:authObject});
          localStorage.setItem('userMame',userName);
          localStorage.setItem('password',password);

          window.location.reload();
        }catch(error){
            setError('Ooops, Incorrect Credentials')
        }
    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className = 'input' placeholder="Enter Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className = 'input' placeholder="Enter Password" required/>
                    <div align = 'center'>
                       <button type="submit" className="button">
                          <span>Start Chatting</span>
                       </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>

        </div>
    )
}

export default LoginForm;