import './Login.css'
import $ from 'jquery';
import App from './App';
function Login() {
  
function acn(){
    $('.cards').animate({ 'margin-left': '1%'},2000);
    $('.cards').animate({ 'margin-left': '30%'},2000);
};

return(
    <div className="Login">
        <div className='cards'>
            
            <h3>Login</h3>
            <label>User name</label>
            <input></input>
            <label>Password</label>
            <input></input>
            <button>login</button>
            <button>Regsistor</button>
            <button onClick={()=>acn()}>Forgot</button>
        </div>    
    </div>
  
);}

export default Login;