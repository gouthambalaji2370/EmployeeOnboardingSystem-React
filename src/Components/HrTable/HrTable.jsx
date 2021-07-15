import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import { AiFillEye } from "react-icons/ai"
import './HrTable.css'
// import '../../../node_modules/font-awesome/css/font-awesome.min.css';

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
      // cell: row =>
      //   (row.status !== "Incomplete") ? (
      //     <>
      //       <button onClick={() => props.click(row.name)}>View</button>
      //     </>
      //   ) : null
      cell : row => {
        if(row.status==="Incomplete")
        return <button className="button-group-small">Notify</button>
        else if(row.status==="Pending")
        return (<><button className="view-pending"><AiFillEye></AiFillEye></button></>)
        else if(row.status === "Completed")
        return (<><button className="button-group-small">Edit</button><button className="viewicon"><AiFillEye></AiFillEye></button></>)
        else
        return (<><button className="button-group-small">Notify</button><button className="viewicon"><AiFillEye></AiFillEye></button></>)
      },
      
    }
  ];

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
    <DataTable    
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default HrTable;