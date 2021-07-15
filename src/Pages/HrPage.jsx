import React ,{useState} from 'react';
import Header from '../Components/Header';
import UserDetailsView from '../Components/UserDetailsView/UserDetailsView';
import Notifications from '../Components/Notifications';
import CreateInvite from '../Components/CreateInvite';
import HrTable from '../Components/HrTable';
import styled from 'styled-components';
// import moment from 'moment';
// import { AiFillEye } from "react-icons/ai";
// import axios from 'axios'
// import { Table } from 'antd';
import { BiPaperPlane } from "react-icons/bi";
import '../Styles/HrPage.css';
import { useEffect } from 'react';
import data from '../Utils/data.js';

const Styles = styled.div`
.rdt_Table {
  font-family:arial,sans-serif; 
  border-collapse: collapse;
  width : 95%;
  overflow-x:hidden;
}
.jelNoK{
  cursor: pointer;
  height: 24px;
}
.gtywLv .jmxzRk, .gtywLv .fBJoFv, .gtywLv .jmxzRk {
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding-right: 8px;
  padding-left: 8px;
  width: 100%;
  color: rgba(0,0,0,0.54);
  font-size: 13px;
  min-height: 56px;
  background-color: #FFFFFF;
}
.jmxzRk {
   display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding-right: 8px;
  padding-left: 8px;
  width: 100%;
  color: rgba(0,0,0,0.54);
  font-size: 13px;
  min-height: 56px;
  background-color: #FFFFFF;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #FFFFFF;
}
.hcxOIW svg {
  right: 39px;
  color: inherit;
  position: absolute;
  fill: currentColor;
  width: 24px;
  height: 24px;
  display: inline-block;
  user-select: none;
  pointer-events: none;
}
.hcxOIW {
  position: relative;
  width:120px
  
}
.fuQFLU .hcxOIW,.jKztig ,.iBIgRz{
  top: 258px;
  position: absolute;
  width: 120px;
  left: 111px;
}
.rdt_TableRow{
  height : 60px;
}
.rdt_TableRow: nth-child(even) {
  background-color:#dddddd;
}
.rdt_TableCol {
  color: white;
  font-size : 16px;
}
.rdt_TableCol_Sortable{
  font-weight : bold;
}
.hkcGBu {
  overflow: hidden;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.rdt_TableHeader {
  background-color: transparent;
}
.rdt_TableHead {
  
}
.rdt_TableHeadRow {
  background-color: #346751;
}
.rdt_TableCell {
  font-weight : bold;
  font-size : 16px;
  font-family:arial,sans-serif; 
  
}
.button-view,.button-edit,.button-notify,.view{
  background-color: #346751;
  color:white;
  width:60px;
  cursor:pointer;
  border-radius:8px;
}
.jsTYsS {
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 2px solid #346751;
  padding: 0 32px 0 16px;
}

.button-group-small{
  color: white;
  border: 1px solid #ccc;
  background-color: #346751;
  border-radius: 8px;
  width:65px;
  height:35px;
}
.viewicon,.view-pending{
 border:none;
 background-color:inherit;
 float:right
}
`



export default function HrPage(props){
 
  useEffect(() => {
    console.log(data);
    // axios.get('')
    //     .then(res => {
    //         console.log(res.data);
    //        setData(res.data);
    //     })
}, [])

// const openview= ()=>{
//   console.log();
// }
// const opennotification=()=>{

// }
// const openedit=()=>{

// }

  const [userDetails,setUserDetails]=useState(false);
  const [approveUser,setApproveUser]=useState(false);
  const [invite,setInvite]=useState(false);
  const [rejectUser,setRejectUser]=useState(false);
  const [isSubmitted,setIsSubmitted]=useState(false);
  const [reason,setReason]=useState("");
  const submitreason=()=> {
    setIsSubmitted(true);
    if(reason!==""){
      setRejectUser(!rejectUser);
      setReason("");
    }
    console.log(reason);
  }
 const handleChange = (e) => {
     setReason(e.target.value);
};
  const closeview=()=>{
    setUserDetails(!userDetails)
  }
  const approveview = () =>{
    setUserDetails(!userDetails)
    setApproveUser(!approveUser);
  }
  const rejectview = () =>{
    setUserDetails(!userDetails)
    setRejectUser(!rejectUser);
  }
  const rejectback=()=>{
    setUserDetails(true);
    setRejectUser(false);

  }
  const closeall=()=>{
    setRejectUser(false);
  }
  const openform=()=>{
    setInvite(!invite)
  }
  const closeout=()=>{
    setApproveUser(!approveUser);
}
// const onChange=(pagination, filters, sorter, extra)=> {
//   console.log('params', pagination, filters, sorter, extra);
// }
    return(<div>
        <Header logout={props.logout}/>
        <div id="interface">
    <div className="heading-2">
      <h1 style={{position: "absolute",left: "122px", top: "74px"}}>HR Dashboard</h1>
      <button className="button-group" onClick={e=>openform()} >Create Invite</button>

    </div>

        {/* <Table columns={columns} dataSource={data} onChange={onChange} /> */}
        <Styles>

      <HrTable data={data} />
      </Styles>
  
  <button  onClick={closeview}>Open Details</button>
  {invite ?<CreateInvite close={openform}></CreateInvite>:<></>}
  {userDetails ? <UserDetailsView closeView={closeview} approve={approveview} reject={rejectview} employeedetails={data} ></UserDetailsView>:<></>}
  {approveUser ? <Notifications onClose={closeout} Content={"User details is Forwarded to Greythr"}></Notifications>:<></>}
  {rejectUser ?  
  <div id="myModal" className="modal fades">
      <div className="modal-head">
        <h4 className="modal-top alert-text">Reason For Rejection</h4>
        <button type="button" className="modal-close-button" onClick={e=>closeall()}>&times;</button>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <div className="formclass">
            <div className="flex-form">
              <textarea type="text" name="reason" rows="4" cols="40"  onChange={(e) => handleChange(e)} placeholder="Reason for Rejection..."></textarea>
              <button className="button-group-modal" onClick={e=>submitreason()}><BiPaperPlane></BiPaperPlane></button>
            </div>
            {isSubmitted===true && reason==="" ?<span className="invalid-feedback">
              <sup>*</sup>reason is required
            </span>:<></>}
          </div>
          <div className="modal-foot-center">
            <button type="button" className="button-group-reject" onClick={e=>rejectback()}>Back</button>
          </div>

        </div>

      </div>
    </div>:<></>}
    </div>
  </div>)
}