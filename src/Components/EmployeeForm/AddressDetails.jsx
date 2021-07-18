import React, { useState, useEffect } from 'react';
import './BasicDetails.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Notifications from '../Notifications';


export default function AddressDetails(props) {
    const [country, setCountry] = useState([]);
    const [presentStateInfo, setPresentStateInfo] = useState([]);
    const [permanentStateInfo, setPermanentStateInfo] = useState([]);
    const [presentStateName, setPresentStateName] = useState("");
    const [permanentStateName, setPermanentStateName] = useState("");
    const [content, setContent] = useState("");
    const [presentCountryName, setPresentCountryName] = useState("");
    const [permanentCountryName, setPermanentCountryName] = useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const closeout = () => {
        setOpenAlert(!openAlert);
    }

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json")
            .then((result) => {
                console.log(result.data);
                setCountry(result.data.Countries);
            });
    }, [])
    const onChangeCountrypresent = (e) => {
        console.log("present country", e.target.value);
        setPresentStateInfo(country[e.target.value].States);
        setPresentCountryName(country[e.target.value].CountryName);

    }
    const onChangeCountrypermanent = (e) => {
        console.log("permanent country", e.target.value);
        setPermanentStateInfo(country[e.target.value].States);
        setPermanentCountryName(country[e.target.value].CountryName);
    }

    const onChangeStatepresent = (e) => {
        console.log("present state", e.target.value);
        setPresentStateName(presentStateInfo[e.target.value].StateName)
    }
    const onChangeStatepermanent = (e) => {
        console.log("permanent state", e.target.value);
        setPermanentStateName(permanentStateInfo[e.target.value].StateName)
    }


    const [current, setCurrent] = useState(0);
    const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm();
    function getAddressDetails(data, e) {
        console.log(e,e.nativeEvent.submitter.classList[0], typeof e.nativeEvent.submitter.classList[0] );
        data.permanentcountry = permanentCountryName;
        data.presentcountry = presentCountryName;
        data.presentstate = presentStateName;
        data.permanentstate = permanentStateName;
        console.log(data, props.BasicDetails);
        const mergedObject = {
            'basic details': props.BasicDetails,
            'address details': data,
        };
        const dats2 = JSON.stringify(mergedObject, null, 4)
        console.log(dats2);
       if(e.nativeEvent.submitter.classList[0]==="submitbtn"){
        setOpenAlert(!openAlert);
        setContent("Registration Completed")
        axios.post('http://localhost:5000/register', dats2)
            .then((result) => {
                console.log(result);
            });
       }
       else if(e.nativeEvent.submitter.classList[0]==="saveBtn"){
        setOpenAlert(!openAlert);
        setContent("Details Saved")
        axios.post('http://localhost:5000/save', dats2)
            .then((result) => {
                console.log(result);
            });
       }
        
    }

    return (
        <div>
            <form className={`${props.current === 0 ? 'tab' : 'form-set'}`} onSubmit={handleSubmit(getAddressDetails)} onReset={reset} >
                <div >
                    <div className="wholefieldset1">
                        <h3 id="basictag" style={{ backgroundColor: "#2F5D62", height: "50px" }}>
                            Present Address
                        </h3>
                        <fieldset id="field1">
                            <div className="row">

                                <div className="column1">
                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="presentflatname"><b>Building No/Flat Name</b></label>
                                        <input type="text" className="input-address"
                                            {...register('presentflatname', ({
                                                required: '*present flat name is required'
                                            }))}
                                            className={`${errors.presentflatname ? 'input-address alerts' : 'input-address'}`}
                                            placeholder="Enter Building No /Flat Name" name="presentflatname"
                                            autoFocus />
                                    </div>
                                    {errors.presentflatname && (
                                        <div className="address-form-invalid-feedback">{errors.presentflatname?.message}</div>
                                    )}

                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="presentstreetname"><b>Street</b></label>
                                        <input type="text"
                                            {...register('presentstreetname', ({
                                                required: '*present street name is required'
                                            }))}
                                            className={`${errors.presentflatname ? 'input-address alerts' : 'input-address'}`} placeholder="Enter Street" name="presentstreetname"
                                        />
                                    </div>
                                    {errors.presentstreetname && (
                                        <div className="address-form-invalid-feedback">{errors.presentstreetname?.message}</div>
                                    )}

                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="presentarea"><b>Area</b></label>
                                        <input type="text"
                                            {...register('presentarea', ({
                                                required: '*present area  is required'
                                            }))}
                                            className={`${errors.presentarea ? 'input-address alerts' : 'input-address'}`}
                                            placeholder="Area" name="presentarea" />
                                    </div>
                                    {errors.presentarea && (
                                        <div className="address-form-invalid-feedback">{errors.presentarea?.message}</div>
                                    )}


                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="presentcountry"><b>Country</b></label>
                                        <select name="presentcountry"
                                            {...register('presentcountry', ({
                                                required: '*present country is required'
                                            }))}
                                            onChange={e => onChangeCountrypresent(e)}
                                            className={`${errors.presentcountry ? 'countries alerts' : 'countries'}`} id="countryId">

                                            <option value="">Select country...</option>
                                            {country.map((data, key) => (<option key={key} value={key} >{data.CountryName}</option>))}
                                        </select>
                                    </div>
                                    {errors.presentcountry && (
                                        <div className="address-form-invalid-feedback">{errors.presentcountry?.message}</div>
                                    )}
                                </div>

                                <div className="column2">
                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="presentstate"><b>State</b></label>
                                        <select name="presentstate"
                                            {...register('presentstate', ({
                                                required: '*present state is required'
                                            }))}
                                            onChange={e => onChangeStatepresent(e)}
                                            className={`${errors.presentstate ? 'countries alerts' : 'countries'}`} id="stateId">
                                            <option value="" >Select state...</option>
                                            {presentStateInfo.map((data, key) => (<option key={key} value={key} >{data.StateName}</option>))}
                                        </select>
                                    </div>
                                    {errors.presentstate && (
                                        <div className="address-form-invalid-feedback">{errors.presentstate?.message}</div>
                                    )}


                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="presentcity"><b>District</b></label>
                                        <input type="text"  {...register('presentcity', ({
                                            required: '*present city is required'
                                        }))}
                                            className={`${errors.presentcity ? 'input-address alerts' : 'input-address'}`} placeholder="City" name="presentcity" id="presentcity"
                                        />

                                    </div>
                                    {errors.presentcity && (
                                        <div className="address-form-invalid-feedback">{errors.presentcity?.message}</div>
                                    )}



                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="presentmapcoordinates"><b>Map Coordinates</b></label>
                                        <input type="text" {...register('presentmapcoordinates', ({
                                            required: '*present map coordinates is required'
                                        }))}
                                            className={`${errors.presentmapcoordinates ? 'input-address alerts' : 'input-address'}`} placeholder="Enter Map Coordinates" id="presentmapcoordinates"
                                            name="presentmapcoordinates"
                                        />
                                    </div>
                                    {errors.presentmapcoordinates && (
                                        <div className="address-form-invalid-feedback">{errors.presentmapcoordinates?.message}</div>
                                    )}


                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="presentpincode"><b>Pincode</b></label>
                                        <input type="text" {...register('presentpincode', ({
                                            required: '*present pincode is required'
                                        }))}
                                            className={`${errors.presentpincode ? 'input-address alerts' : 'input-address'}`} placeholder="Pincode" name="presentpincode" id="presentpincode"
                                        />
                                    </div>
                                    {errors.presentpincode && (
                                        <div className="address-form-invalid-feedback">{errors.presentpincode?.message}</div>
                                    )}

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
                                Permanent Address
                            </h3>
                            <br />
                            <div className="row">

                                <div className="column1">

                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="permanentflatname"><b>Building No/Flat Name</b></label>
                                        <input type="text"  {...register('permanentflatname', ({
                                            required: '*permanent flat name is required'
                                        }))}
                                            className={`${errors.permanentflatname ? 'input-address alerts' : 'input-address'}`} placeholder="Enter Building No /Flat Name"
                                            name="permanentflatname"
                                            id="permanentflatname" />
                                    </div>
                                    {errors.permanentflatname && (
                                        <div className="address-form-invalid-feedback">{errors.permanentflatname?.message}</div>
                                    )}



                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="permanentstreetname"><b>Street</b></label>
                                        <input type="text" {...register('permanentstreetname', ({
                                            required: '*permanent street name is required'
                                        }))}
                                            className={`${errors.permanentstreetname ? 'input-address alerts' : 'input-address'}`} placeholder="Enter Street"
                                            name="permanentstreetname"
                                            id="permanentstreetname" />
                                    </div>

                                    {errors.permanentstreetname && (
                                        <div className="address-form-invalid-feedback">{errors.permanentstreetname?.message}</div>
                                    )}

                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="permanentarea"><b>Area</b></label>
                                        <input type="text" {...register('permanentarea', ({
                                            required: '*permanent area is required'
                                        }))}
                                            className={`${errors.permanentarea ? 'input-address alerts' : 'input-address'}`} placeholder="Area" name="permanentarea" id="permanentarea"
                                        />
                                    </div>
                                    {errors.permanentarea && (
                                        <div className="address-form-invalid-feedback">{errors.permanentarea?.message}</div>
                                    )}




                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="permanentcountry"><b>Country</b></label>
                                        <select name="permanentcountry"
                                            {...register('permanentcountry', ({
                                                required: '*present country is required'
                                            }))}
                                            onChange={e => onChangeCountrypermanent(e)}
                                            className={`${errors.permanentcountry ? 'countries alerts' : 'countries'}`}
                                            id="countryId"

                                        >
                                            <option value="">Select country...</option>
                                            {country.map((data, key) => (<option key={key} value={key} >{data.CountryName}</option>))}
                                        </select>

                                    </div>
                                    {errors.permanentcountry && (
                                        <div className="address-form-invalid-feedback">{errors.permanentcountry?.message}</div>
                                    )}
                                </div>

                                <div className="column2">
                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="permanentstate"><b>State</b></label>
                                        <select name="permanentstate"
                                            {...register('permanentstate', ({
                                                required: '*permanent state is required'
                                            }))}
                                            onChange={e => onChangeStatepermanent(e)}
                                            className={`${errors.permanentstate ? 'countries alerts' : 'countries'}`} id="stateId"
                                        >
                                            <option value="">Select state...</option>
                                            {permanentStateInfo.map((data, key) => (<option key={key} value={key} >{data.StateName}</option>))}
                                        </select>
                                        <br />
                                    </div>
                                    {errors.permanentstate && (
                                        <div className="address-form-invalid-feedback">{errors.permanentstate?.message}</div>
                                    )}
                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="permanentcity"><b>District</b></label>
                                        <input type="text" {...register('permanentcity', ({
                                            required: '*permanent city is required'
                                        }))}
                                            className={`${errors.permanentcity ? 'input-address alerts' : 'input-address'}`}
                                            placeholder="City"
                                            name="permanentcity"
                                            id="permanentcity"
                                        />
                                    </div>
                                    {errors.permanentcity && (
                                        <div className="address-form-invalid-feedback">{errors.permanentcity?.message}</div>
                                    )}

                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="permanentmapcoordinates"><b>Map Coordinates</b></label>
                                        <input type="text" {...register('permanentmapcoordinates', ({
                                            required: '*permanent map coordinates is required'
                                        }))}
                                            className={`${errors.permanentmapcoordinates ? 'input-address alerts' : 'input-address'}`} placeholder="Enter Map Coordinates"
                                            name="permanentmapcoordinates"
                                            id="permanentmapcoordinates"
                                        />
                                    </div>
                                    {errors.permanentmapcoordinates && (
                                        <div className="address-form-invalid-feedback">{errors.permanentmapcoordinates?.message}</div>
                                    )}



                                    <div className="employee-form-container">
                                        <label className="employee-label" htmlFor="permanentpincode"><b>Pincode</b></label>
                                        <input type="text"  {...register('permanentpincode', ({
                                            required: '*permanent pincode is required'
                                        }))}
                                            className={`${errors.permanentpincode ? 'input-address alerts' : 'input-address'}`} placeholder="Pincode" name="permanentpincode"
                                            id="permanentpincode"
                                        />
                                    </div>
                                    {errors.permanentpincode && (
                                        <div className="address-form-invalid-feedback">{errors.permanentpincode?.message}</div>
                                    )}


                                </div>

                            </div>


                        </fieldset>



                    </div>
                    <div className="secondbutton">

                        <button type="button" className="previousbtn" id="prevBtn" onClick={props.prev} >Previous</button>
                        <button type="submit" className="submitbtn" id="submitBtn" >Submit</button>
                        <button type="submit" className="saveBtn" id="saveBtn" >Save</button>

                    </div>

                </div>
            </form>
            {openAlert ? <Notifications onClose={closeout} Content={content}></Notifications> : <></>}
        </div>
    )

}

