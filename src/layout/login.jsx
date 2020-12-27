import React, { useContext, useState } from 'react'
import AuthContext from '../context/auth/authContext';
import gradifyLogo from '../assests/images/gradifylogo.png';
import LoginInput from '../components/loginInput/loginInput';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'
const Login = ({history}) => {
    const authContext = useContext(AuthContext);
    const {login} = authContext;

    const [checked, setChecked] = React.useState(true);
    
    const [adminDataState,setAdminDataState] = useState({
        email:'',
        password:''
    });



    const onChangeHanlder = (target) => {
        console.log(target.name);
        setAdminDataState({...adminDataState,[target.name]:target.value});
    }
    
    const submitHandler = async (e) =>{
        e.preventDefault();
       await login(adminDataState);
        history.push('/');
    }

    return (
       <div id="login">
            <div className="login_container">
                <div className="login_header">
                    <div className="login_header_content">

                    <h3>Welcome Back!</h3>
                    <p>
                        Sing in to continue to...
                    </p>
                    </div>
                    <div className="login_header_image">
                        <img src={gradifyLogo} alt=""/>
                    </div>
                </div>
               <div className="login-body">
                    <LoginInput 
                        labelName="Email" 
                        name="email"
                        type='email'
                        placeholder="Enter Email"
                        value={adminDataState.email}
                        change={onChangeHanlder}
                    />
                    <LoginInput 
                        labelName="Password" 
                        placeholder="Enter Password"
                        type="password"
                        name="password"
                        value={adminDataState.password}
                        change={onChangeHanlder}
                    />
                    <FormControlLabel style={{marginTop:"10px"}}
        control={
          <Checkbox
            
            
            color="primary"
          />
        }
        label="Remember me"
      />
       <Button variant="contained" color="primary" className="login-button" onClick={submitHandler}>
        login
      </Button>
               </div>
            </div>
       </div>
            
    )
}

export default withRouter(Login)
