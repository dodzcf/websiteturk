import React, { Component, } from 'react';
import axios from 'axios';
import './signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class CreateUser extends Component {

    

    constructor(props) {
        super(props)
        
        // const context = useContext(UserContext);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName= this.onChangeLastName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePassword2= this.onChangePassword2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            password:'',
            firstname:'',
            lastname:'',
            password2:'',
            fieldErrors: {},
        registerError: null
        }
    }

    onChangeUserName(e) {
        this.setState({ username: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeFirstName(e) {
        this.setState({ firstname: e.target.value })
    }
    onChangeLastName(e) {
      this.setState({ lastname: e.target.value })
    }
    onChangePassword(e) {
      this.setState({ password: e.target.value })
    }
    onChangePassword2(e) {
        this.setState({ password2: e.target.value })
      }



    onSubmit = async e => {
        e.preventDefault()

        this.setState({
            fieldErrors: {},
            registerError: null
          })
          if(this.state.password.length<6)
          {
            toast.error("Please Enter Password of more than 6 characters");
            return;
          }
          if(this.state.password!==this.state.password2)
          {
            toast.error("Password do not match",this.state.password," ",this.state.password2);
            return;
          }
        const userObject = {
            username: this.state.username,
            email: this.state.email,
            password:this.state.password,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
        };



        

        
        try {
            const response = await axios.post(
              "https://turkapi.herokuapp.com/signup",
              userObject 
            );
            if(response.data==="User with this Email already exists")
            {
                toast.warn(JSON.stringify(response.data));
            }
            if(response.data==="User with this username already exists")
            {
                toast.warn(JSON.stringify(response.data));
            }
            if(response.data==="Account Created Successfully")
            {
                toast.success("Account Created Successfully. Please check your mail to verify your account");
                const delay = ms => new Promise(res => setTimeout(res, ms));
                await delay(3000);
                // history.push ("/login");
            }
            
          } catch (error) {
            console.log(error);
          }
        
        

        // this.setState({ username: '', email: '',password:'',password2:'',firstname:'',lastname:'', })


    }


    render() {
        return (
            <div className="wrapper">
            <div className="jumbotron jlogin">
            <div className="container">
              
                <form onSubmit={this.onSubmit}>
                <h2 class=" d-flex justify-content-center">Register Your Account</h2>
                <br></br>
                    <div className="form-group">
                       <input type="name" value={this.state.username} onChange={this.onChangeUserName} className="form-control" placeholder="Enter Username" required />
                    </div>
                    <div class="input-group">
                        <input type="name" value={this.state.firstname} onChange={this.onChangeFirstName} className="form-control" placeholder="Enter First Name" required/>
                           &nbsp;
                        <span class="input-group-addon"> </span>
                        <input type="name" value={this.state.lastname} onChange={this.onChangeLastName} className="form-control" placeholder="Enter Last Name" required/>
                    </div>
            <br></br>
                    <div className="form-group">
                        <input type="email" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" placeholder="Enter Email" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" value={this.state.password} onChange={this.onChangePassword} className="form-control" placeholder="Enter Password" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" value={this.state.password2} onChange={this.onChangePassword2} className="form-control" placeholder="Confirm Password" required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Account" className="btn btn-success btn-block btlogin" />
                    </div>
                </form>
            </div>
            </div>
            <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
             />
            </div>
        )
    }
}