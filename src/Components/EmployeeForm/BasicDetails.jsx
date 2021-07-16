import React,{useState} from 'react';
import { useForm } from "react-hook-form"
import AddressDetails from './AddressDetails';
import axios from 'axios';
import './EmployeeForm.css'


export default function BasicDetails(){
    const { register, handleSubmit, formState: { errors },clearErrors,reset  } = useForm();
    const [current,setCurrent]=useState(0);
    const getDetails =(data)=>{
        console.log(data)
        setCurrent(1);
    }
    const validatebasicdetails=()=>{
        setCurrent(1);

    }
    const saveformdata=()=>{
        setCurrent(0);

    }

    var step1= current===1 ?'step' :'active';
    var step2 = current===0 ?'step' :'active';
    var tab1= current === 1 ? 'tab': ' ' ;
    var tab2 = current === 0 ? 'tab': ' ' ;
    return(<div>
         <div style={{marginTop: "103px"}}>
         <div  className="class1">
            <ul className="progressbar">
                <li className={`${current===1 ?'step' :'active'}`}>Basic Details</li>
                <li className={`${current===0 ?'step' :'active'}`}>Address</li>
            </ul>
            {/* style={{ color: isRed ? 'red' : 'blue' }} */}
        </div>
        <form id="regForm"  onSubmit={handleSubmit(getDetails)} onReset={reset}>
        <div className={`${current === 1 ? 'tab': ' ' }`}>
        <div className="wholefieldset">
            <h3 id="basictag" style={{backgroundColor:'#2F5D62',height:'50px'}}>
                <h3 id="one">Basic Details</h3>
            </h3>
            <fieldset id="field1">
    
                <div className="container">
                    <label for="FirstName" id="f1"><b>First Name</b></label>
                    <input type="text" placeholder="Enter First Name" name="fname" id="fname" required></input>
                </div>
                <div className="container">
                    <label for="LastName"><b>Last Name</b></label>
                    <input type="text" placeholder="Enter Last Name" name="lname" id="lname" required></input>
                </div>
                <div className="container">
                    <label for="PhoneNumber"><b>Contact Number</b></label>
                    <input type="tel" placeholder="Enter Contact Number" name="pno" id="pno" required></input>
                </div>
    
                <div className="container">
                    <label for="EmailID"><b>Email ID</b></label>
                    <input type="text" placeholder="Enter Email ID" name="email" id="email" required></input>
                </div>
                <div className="container">
                    <label for="blood"><b>Blood Group</b></label>
                    <input type="text" placeholder="Enter Blood Group" name="blood" id="blood" required></input>
                </div>
                <div className="container">
                    <label for="aadhar"><b>Aadhar Number</b></label>
                    <input type="text" placeholder="Enter Aadhar Number" name="ano" id="ano" required></input>
                </div>
                <div className="container">
                    <label for="dob"><b>Date Of Birth</b></label>
                    <input type="date" placeholder="Enter Date Of Birth" name="dob" id="dob" required></input>
                </div>
                
                <div className="radio">
                    <label for="gender" className="genderlabel"><b>Gender</b></label>
                    <input type="radio" id="male" name="gender" value="male"></input>    
                    <p className="paragraphgender">Male</p>
                    <input type="radio" id="female" name="gender" value="female"></input>
                    <p className="paragraphgender">Female</p>
                </div>
                <div className="container">
                    <label for="sslc"><b>SSLC Score</b></label>
                    <input type="text" placeholder="Percentage or CGPA" name="sslc" id="sslc" required></input>
                </div>
                <div className="container">
                    <label for="hsc"><b>HSC Score</b></label>
                    <input type="text" placeholder="Percentage or CGPA" name="hsc" id="hsc" required></input>
                </div>
                <div className="container">
                    <label for="ug"><b>UG Score</b></label>
                    <input type="text" placeholder="Percentage or CGPA" name="ug" id="ug" required></input>
                </div>
                <div className="container">
                    <label for="fathername"><b>Father's Name</b></label>
                    <input type="text" placeholder="Enter Father's Name" name="fathername" id="fathername" required></input>
                </div>
                <div className="container">
                    <label for="mothername"><b>Mother's Name</b></label>
                    <input type="text" placeholder="Enter Mother's Name" name="mothername" id="mothername" required></input>
                </div>
                <div className="container">
                    <label for="role"><b>Designation</b></label>
                    <input type="text" placeholder="Enter Designation" name="role" id="role" required></input>
    
                 </div>
                <h3  className="sub-division">
                    <h3 id="two">Emergency Contact</h3>
                </h3>
                <div className="container">
                    <label for="ename"><b>Name</b></label>
                    <input type="text" placeholder="Name Of the Person" name="ename" id="ename" required></input>
                </div>
    
                <div className="container">
                    <label for="relation"><b>Relationship</b></label>
                    <input type="text" placeholder="Relationship" name="relation" id="relation" required></input>
                </div>
    
                <div className="container" id="present">
                    <label for="econtact"><b>Contact Number</b></label>
                    <input type="tel" placeholder="Enter Contact Number" name="econtact" id="econtact" required></input>
                </div>
        <button type="submit" className="firstbutton" id="nextBtn" onClick={e=>validatebasicdetails}>Next</button>
                
            </fieldset>
            </div>
        </div>
        <div style={{marginTop:"100px"}}>
        <AddressDetails save={saveformdata} submit={getDetails} reset={reset} current={current}></AddressDetails>
        </div>
    </form>  
    </div>
    </div>)
}