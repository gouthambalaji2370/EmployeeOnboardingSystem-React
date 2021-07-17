import React from 'react';
import './BasicDetails.css';
import { useForm } from "react-hook-form"


export default function AddressDetails(props){
    return (
        <div>
    <form className={`${props.current === 0 ? 'tab': 'form-set' }`}
    // style="margin-left: 250px;" 
    >
        <div >
            <div className="wholefieldset1">
                <h3 id="basictag"  style={{backgroundColor:"#2F5D62",height:"50px" }}>
               Present Address
                </h3>
                <fieldset id="field1">
                    <div className="row">
                        
                            <div className="column1">
                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="presentflatname"><b>Building No/Flat Name</b></label>
                                    <input type="text" className="input-address" placeholder="Enter Building No /Flat Name" name="presentflatname"
                                      autoFocus />
                                </div>
                               
                                <div className="employee-form-container">
                                    <label  className="employee-label" htmlFor="presentstreetname"><b>Street</b></label>
                                    <input type="text" className="input-address" placeholder="Enter Street" name="presentstreetname"
                                       />
                                </div>

                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="presentarea"><b>Area</b></label>
                                    <input type="text" className="input-address" placeholder="Area" name="presentarea"/>
                                </div>
                            

                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="presentcountry"><b>Country</b></label>
                                    <select name="presentcountry" className="countries" id="countryId">

                                        <option value="">Select country...</option>
                                        <option></option>
                                    </select>
                                </div>
                                

                            </div>

                            <div className="column2">
                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="presentstate"><b>State</b></label>

                                    <select name="presentstate" className="countries" id="stateId">
                                        <option value="">Select state...</option>
                                        <option ></option>
                                    </select>
                                </div>
                                

                                <div className="employee-form-container">
                                    <label  className="employee-label" htmlFor="presentcity"><b>District</b></label>
                                    <input type="text"  className="input-address" placeholder="City" name="presentcity" id="presentcity"
                                        />

                                </div>
                                

                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="presentmapcoordinates"><b>Map Coordinates</b></label>
                                    <input type="text" className="input-address" placeholder="Enter Map Coordinates" id="presentmapcoordinates"
                                         id="presentmapcoordinates"
                                        // style="width: 350px;"
                                        />
                                </div>                               

                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="presentpincode"><b>Pincode</b></label>
                                    <input type="text" className="input-address" placeholder="Pincode" name="presentpincode" id="presentpincode"
                                    />
                                </div>

                                


                            </div>
                        
                    </div>
                    <div className="employee-form-container">
                        <input type="checkbox" value="" className="checkboxstyle" />

                        <b className="acknowledgement" 
                        // style="width: 800px;float: left;"
                        >Select this Checkbox if the
                            present
                            and permanent addresses are
                            same</b>
                    </div>


                    <h3 className="sub-division">
                        <h3 id="three">Permanent Address</h3>
                    </h3>
                    <br/>
                    <div className="row">
                        
                            <div className="column1">

                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="permanentflatname"><b>Building No/Flat Name</b></label>
                                    <input type="text" className="input-address" placeholder="Enter Building No /Flat Name"
                                        name="permanentflatname"
                                       
                                        id="permanentflatname" />
                                </div>

                                

                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="permanentstreetname"><b>Street</b></label>
                                    <input type="text" className="input-address" placeholder="Enter Street" name="permanentstreetname"
                                       
                                        id="permanentstreetname" />
                                </div>
                                

                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="permanentarea"><b>Area</b></label>
                                    <input type="text" className="input-address" placeholder="Area" name="permanentarea" id="permanentarea"
                                       />
                                </div>
                                



                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="permanentcountry"><b>Country</b></label>
                                    <select name="permanentcountry"  className="countries"
                                        id="countryId" 
                                        
                                        >
                                        <option value="">Select country...</option>
                                        <option></option>
                                    </select>

                                </div>
                                

                            </div>

                            <div className="column2">
                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="permanentstate"><b>State</b></label>
                                    <select name="permanentstate" className="countries" id="stateId" 
                                       >
                                        <option value="">Select state...</option>
                                        <option></option>
                                    </select>
                                    <br />



                                </div>
                                
                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="permanentcity"><b>District</b></label>
                                    <input type="text" className="input-address" placeholder="City" name="permanentcity" id="permanentcity"

                                        />
                                </div>
                                

                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="permanentmapcoordinates"><b>Map Coordinates</b></label>
                                    <input type="text" className="input-address" placeholder="Enter Map Coordinates"
                                        name="permanentmapcoordinates"
                                       
                                        id="permanentmapcoordinates" 
                                        // style="width: 350px;"
                                        />
                                </div>

                                

                                <div className="employee-form-container">
                                    <label className="employee-label" htmlFor="permanentpincode"><b>Pincode</b></label>
                                    <input type="text"  className="input-address" placeholder="Pincode" name="permanentpincode"
                                        id="permanentpincode" 
                                        />
                                </div>

                                
                            </div>
                        
                    </div>


                </fieldset>



            </div>
            <div className="secondbutton">

                <button type="button" className="previousbtn" id="prevBtn" onClick={props.prev} >Previous</button>
                <button type="button" className="submitbtn" id="nextBtn" >Submit</button>
                <button type="button" className="submitbtn" id="nextBtn" >Save</button>

            </div>

        </div>
    </form>
    </div>  
    )

}

