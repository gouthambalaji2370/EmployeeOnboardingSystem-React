import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import axios from 'axios'
import './EmployeeForm.css'


export default function AddressDetails(props) {
    const { register, handleSubmit, formState: { errors },clearErrors,reset  } = useForm();
    return (<div className={`${props.current === 0 ? 'tab': ' ' }`} style={{left:'10px',transform: 'translateX(250px)' }}>
        <form>
        <div class="wholefieldset1">
            <h3 id="basictag" style={{ backgroundColor: "#2F5D62", height: "50px" }}>
                <h3 id="one">Present Address</h3>
            </h3>
            <fieldset id="field1">
                <div class="row">
                    <div class="column1">
                        <div class="container">
                            <label for="presentflatname"><b>Building No/Flat Name</b></label>
                            <input type="text" placeholder="Enter Building No /Flat Name" name="presentflatname"
                                id="presentflatname" required></input>
                        </div>
                        <div class="container">
                            <label for="presentstreetname"><b>Street</b></label>
                            <input type="text" placeholder="Enter Street" name="presentstreetname"
                                id="presentstreetname" required></input>
                        </div>
                        <div class="container">
                            <label for="presentarea"><b>Area</b></label>
                            <input type="text" placeholder="Area" name="presentarea" id="presentarea" required></input>
                        </div>
                        <div class="container">
                            <label for="presentcountry"><b>Country</b></label>
                            <select name="presentcountry" class="countries" id="countryId">
                                <option value="presentcountry" class="presentcountry" id="presentcountry">Select Country</option>
                            </select>
                        </div>
                    </div>
                    <div class="column2">
                        <div class="container">
                            <label for="presentstate"><b>State</b></label>
                            <select name="presentstate" class="states" id="stateId">
                                <option value="2">Select State</option>
                            </select>
                        </div>
                        <div class="container">
                            <label for="presentcity"><b>District</b></label>
                            <select name="presentcity" class="cities" id="cityId">
                                <option value="3">Select City</option>
                            </select>
                        </div>
                        <div class="container">
                            <label for="presentmapcoordinates"><b>Map Coordinates</b></label>
                            <input type="text" placeholder="Enter Map Coordinates" name="presentmapcoordinates"
                                id="presentmapcoordinates" required style={{ width: "350px" }}></input>
                        </div>
                        <div class="container">
                            <label for="presentpincode"><b>Pincode</b></label>
                            <input type="text" placeholder="Pincode" name="presentpincode" id="presentpincode"
                                required></input>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <input type="checkbox" class="checkboxstyle" id="filladdress" name="filladdress" value="declaration" onclick="checkBox()"></input>
                    {/* <!-- <label for="declaration"><b class="b">I herbly acknowledge that the above given details are true to the best of my knowledge</b></label>
    </div> --> */}
                    <b class="acknowledgement" style={{ width: "800px", float: "left" }}>Select this Checkbox if the present and permanent addresses are
                        same</b>
                </div>
                <h3 class="sub-division">
                    <h3 id="three">Permanent Address</h3>
                </h3>
                <br></br>
                <div class="row">
                    <div class="column1">
                        <div class="container">
                            <label for="permanentflatname"><b>Building No/Flat Name</b></label>
                            <input type="text" placeholder="Enter Building No /Flat Name" name="permanentflatname"
                                id="permanentflatname" required></input>
                        </div>
                        <div class="container">
                            <label for="permanentstreetname"><b>Street</b></label>
                            <input type="text" placeholder="Enter Street" name="permanentstreetname"
                                id="permanentstreetname" required></input>
                        </div>
                        <div class="container">
                            <label for="permanentarea"><b>Area</b></label>
                            <input type="text" placeholder="Area" name="permanentarea" id="permanentarea" required></input>
                        </div>
                        <div class="container">
                            <label for="permanentcountry"><b>Country</b></label>
                            <select name="permanentcountry" class="countries" id="countryId">
                                <option value="4" class="permanentcountry" id="permanentcountry">Select Country</option>
                            </select>
                        </div>
                    </div>
                    <div class="column2">
                        <div class="container">
                            <label for="permanentcity"><b>District</b></label>
                            <select name="permanentcity" class="cities" id="cityId">
                                <option value="6">Select City</option>
                            </select>
                        </div>
                        <div class="container">
                            <label for="permanentmapcoordinates"><b>Map Coordinates</b></label>
                            <input type="text" placeholder="Enter Map Coordinates" name="permanentmapcoordinates"
                                id="permanentmapcoordinates" style={{ width: "350px" }} required></input>
                        </div>
                        <div class="container">
                            <label for="permanentpincode"><b>Pincode</b></label>
                            <input type="text" placeholder="Pincode" name="permanentpincode" id="permanentpincode"
                                required></input>
                        </div>
                    </div>

                </div>
            </fieldset>
            <div class="secondbutton">
                <button type="button" class="previousbtn" id="prevBtn" onClick={props.save}>Previous</button>
                <button type="button" class="resetbtn" id="prevBtn" onClick={props.reset}>Reset</button>
                <button type="submit" class="submitbtn" id="nextBtn" onClick={props.submit}>Submit</button>
            </div>
        </div>
        </form>
    </div>)
}
