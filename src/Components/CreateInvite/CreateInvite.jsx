import React from "react";
import axios from 'axios'
import './CreateInvite.css';


const initialState = {
    name: "",
    email: "",
    password: "",
    selectValue: "",
    nameError: "",
    emailError: "",
    passwordError: "",
    roleError: ""

};

var isSubmitted = false;
var defaultvalue = ""
var onChange1Val1 = false
var onChangeVal2 = false
var isSubmitted2 = false
export default class ValiationForm extends React.Component {
    state = initialState;
    constructor(props){
        super(props);
    }
    
    
    handleChange = event => {
        onChangeVal2 = true
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
        this.validate()

    };
    handleChange1 = (e) => {
        onChange1Val1 = true
        isSubmitted = false;
        console.log("onchnge", onChange1Val1)
        console.log('isubmitted', isSubmitted)
        this.state.selectValue = e.target.value;
        console.log("hfgdfgdf", this.state.selectValue)
    }




    validate = () => {
        let nameError = "";
        let emailError = "";
        let passwordError = "";
        let roleError = ""
        if (!this.state.name) {
            nameError = "Name Invalid";
        }
        else if (!isSubmitted2 && onChangeVal2 && this.state.name) {
            nameError = ""
            emailError = ""
            passwordError = ""
            console.log("NAME FUNCTION WORKS")
        }
        if (!this.state.selectValue || this.state.selectValue === "Select") {
            roleError = "Select The Role"
        }
        if (!isSubmitted && onChange1Val1 && !this.state.selectValue === "Select") {
            console.log("jgngjnerkjgenrjgnerkertreit0943534")
            roleError = ""
        }

        if (!this.state.email.includes("@") || !this.state.email) {
            emailError = "Invalid Email";
        }
        if (!this.state.password) {
            passwordError = "Invalid Password";
        }



        if (emailError || nameError || passwordError || roleError) {
            this.setState({ emailError, nameError, passwordError, roleError });
            return false;
        }



        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            this.handleChange1(event)
            console.log(this.state);
            axios.post('http://localhost:5000/createuser', { name:this.state.name ,email: this.state.email, role:this.state.selectValue, password: this.state.password })
            .then((result) => {
               console.log(result);
            });
            this.props.close()
            this.setState(initialState);
        }
        else {
            isSubmitted = true
            onChange1Val1 = false
            isSubmitted2 = true
            onChangeVal2 = false

        }
    };
    selectCopy = "Select"
    render() {
        return (
            <div className="create-invite-modal" >
                <div className="create-invite-modal-content" >
                    <div className="create-invite-modal-head">

                        <h4 className="modal-top alert-text" style={{ marginLeft: 12 }}>Create Invite</h4>
                        <button type="button" className="modal-close-button" onClick={this.props.close}>&times;</button>
                    </div>
                    <form className="form-class" onSubmit={this.handleSubmit}>
                        <div>
                            <div className="create-invite-container">
                                <label htmlFor="name">Name:</label>
                                <input id="username"
                                    name="name"
                                    className="create-invite-input"
                                    placeholder="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <div className="create-invite-invalid-feedback">
                                    {this.state.nameError}
                                </div>
                            </div>
                            <div className="create-invite-container">
                                <label htmlFor="name">Email:</label>
                                <input id="Email"
                                    name="email"
                                    className="create-invite-input"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                                <div className="create-invite-invalid-feedback">
                                    {this.state.emailError}
                                </div>
                            </div>
                            <div className="create-invite-container">
                                <label className="rolelabel" htmlFor="role">Role:</label>
                                <select id="role"
                                    className="create-invite-select"
                                    defaultValue={defaultvalue}
                                    onChange={this.handleChange1}
                                >
                                    <option value="Select">Select Role</option>
                                    <option value="Software Engineer">Software Engineer</option>
                                    <option value="Senior Software Engineer">Senior Software Engineer</option>
                                    <option value="Senior Software Engineer">Associate Software Engineer</option>
                                    <option value="HR">HR</option>

                                </select>
                                <div className="create-invite-invalid-feedback">
                                    {this.state.roleError}
                                </div>
                            </div>



                            <div style={{left: "-57px"}}className="create-invite-container">
                                <label htmlFor="password">Password:</label>
                                <input id="password"
                                    type="password"
                                    className="create-invite-input"
                                    name="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                <div className="create-invite-invalid-feedback">
                                    {this.state.passwordError}
                                </div>


                            </div>
                        </div>
                        <button className="create-invite-button-group margin-150-left" type="submit">Invite</button>
                    </form>
                </div>
            </div>
        );
    }
}