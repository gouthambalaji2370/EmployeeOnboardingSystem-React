import React, { useMemo ,useState} from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import Notifications from "../Notifications";
import UserDetailsView from "../UserDetailsView/UserDetailsView";
import { AiFillEye } from "react-icons/ai";
import Axios from 'axios';
import { BiPaperPlane } from "react-icons/bi";
import './HrTable.css'

const HrTable = props => {
  const columns = [
    {
      name: "Employee Id",
      selector: "empid",
      sortable: true,
      width : "175px"
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
      width : "225px"
      
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      width : "250px"
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
      width : "175px"
    },
    {
      name: "Created At",
      selector: "createdat",
      sortable: true,
      width : "175px"
      
    },
    {
      name: "Actions",
      width : "200px",
      cell : row => {
        if(row.status==="Incomplete")
        return <button className="button-group-small" onClick={e=>openNotification(row.empid,true)}>Notify</button>
        else if(row.status==="Pending")
        return (<><button className="view-pending" onClick={e=>openView(row)}><AiFillEye></AiFillEye></button></>)
        else if(row.status === "Completed")
        return (<><button className="button-group-small" onClick={e=>openNotification(row.empid,false)}>Edit</button><button className="viewicon" onClick={e=>openView(row)}><AiFillEye></AiFillEye></button></>)
        else
        return (<><button className="button-group-small" onClick={e=>openNotification(row.empid,true)}>Notify</button><button className="viewicon" onClick={e=>openView(row)}><AiFillEye></AiFillEye></button></>)
      },
      
    }
  ];
  const [openAlert, setOpenAlert] = useState(false);
  const [content, setContent] = useState("");
  const [rowData,setRowData]=useState({});
  const [userDetails,setUserDetails]=useState(false);
  const [rejectUser,setRejectUser]=useState(false);
  const [approveUser,setApproveUser]=useState(false);
  const [isSubmitted,setIsSubmitted]=useState(false);
  const [reason,setReason]=useState("");

  //method to submit reason
  const submitreason=()=> {
    setIsSubmitted(true);
    if(reason!==""){
      Axios.post(process.env.REACT_APP_BASE_URL+'/reject', reason)
            .then((result) => {
                console.log(result);
            });
      setRejectUser(!rejectUser);
      setReason("");
    }
    console.log(reason);
  }
  //on change method
 const handleChange = (e) => {
     setReason(e.target.value);
};

  //method to move back from reason to reject overlay
  const rejectback=()=>{
    setUserDetails(true);
    setRejectUser(false);
  }
  //close the reject reason
  const closeall=()=>{
    setRejectUser(false);
  }

  //open user details view
  const openView=(row)=>{
    console.log(row)
    setRowData(row);
    setUserDetails(!userDetails)
  }

  //close user details view
  const closeView=()=>{
    setUserDetails(!userDetails)
  }



  //open notification 
  const openNotification=(id,type)=>{
    if(type===true){
    setContent("Employee Notified")
    setOpenAlert(!openAlert);
  }
  else{
    setContent("Access Provided")
    setOpenAlert(!openAlert);
  }
  }
  
  //open approve notification
  const openApprove=(id)=>{
    setContent("Details forwarded to Greythr")
    setOpenAlert(!openAlert);
    setUserDetails(!userDetails)
  }

  //close any notification
  const closeout=()=>{
      setOpenAlert(!openAlert);
  }

  //open reject reason overlay
  const rejectview = () =>{
    setUserDetails(!userDetails)
    setRejectUser(!rejectUser);
  }
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
 
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

    //pagination based component rendering
  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div>
    <DataTable    
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
      {userDetails ? <UserDetailsView closeView={closeView} approve={openApprove} reject={rejectview} employeedetails={rowData} ></UserDetailsView>:<></>}
  {openAlert ? <Notifications onClose={closeout} Content={content}></Notifications>:<></>}
  {rejectUser ?  
  <div id="myModal" className="modal fades">
      <div className="modal-head">
        <h4 className="modal-top alert-text">Reason For Rejection</h4>
        <button type="button" className="modal-close-button" onClick={e=>closeall()}>&times;</button>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <div>
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
  );
};

export default HrTable;