import React from "react";
import "./Styles.css";
export default function SearchCard({ data }) {
  const onClick = () => {
    console.log(data);
  };
  return (
    <div className="display-record">
      <td>  {data?.url || ""}
      {data?.url ? <br /> : ""}</td>
      <br></br>
    
      <td> {data?.product_name}</td>
   
      <br></br>
      <td>  {data?.product_price}</td>
    
      <br></br>
      <td>  {data?.availability_status}</td>
    
      <br></br>
      <td> {data?.delivery_estimation}</td>
     
      <br></br>
    </div>
  );
}
