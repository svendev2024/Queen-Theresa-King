import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const Paginator = () => {

  const [activePage, setActivePage] = useState(1);
  const items = []; 

  const handleSelect = (pageNumber) => {  
    setActivePage(pageNumber);  
    // Handle any additional logic here (like fetching data based on the page)  
  };  

  return (
    <>
    <Pagination>  
      <Pagination.First onClick={() => handleSelect(1)} />  
      <Pagination.Prev onClick={() => handleSelect(activePage - 1)} disabled={activePage === 1} />  
      {items}  
      <Pagination.Next onClick={() => handleSelect(activePage + 1)} disabled={activePage === items.length} />  
      <Pagination.Last onClick={() => handleSelect(items.length)} />  
    </Pagination> 
    </>
  )
}

export default Paginator
