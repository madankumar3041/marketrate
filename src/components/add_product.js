import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react'
// import data from "../components/data.json"
import SearchCard from "./SearchCard/searchCard";
import "./SearchCard/Styles.css"
export function AddProduct() {
  const [isLoading, setLoading] = useState(false)
  const [responseData, setResponseData] = useState({});
  const [formData, setData] = useState({});
  const [headerData, setHeaderData] = useState({
    product_name: 'Product Name',
    product_price: 'Recommended Price',
    availability_status: 'Stock',
    delivery_estimation: "Delivery Estimated Days",
  });


  useEffect(() => {
    if (window.location.href.includes('admin')) {
      setHeaderData(prevState => ({ ...prevState, url: "Url" }))
    }
  }, [])

  const onClick = () => {
    debugger
    console.log(formData);
    const payload = {
      "productName": formData.name,
      "pincode": formData.pincode,
      "city": formData.city,
    };
    setLoading(true)
    fetch('http://marketrate.infoware.xyz/priceprediction/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(data => {
        debugger
        console.log('Success:', data);
        setResponseData(data?.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // setResponseData(data?.data);
    // console.log(data)
  }
  const handleChange = event => {
    setData(prevState => ({ ...prevState, [event.target.name]: event.target.value }));

  };
  return (
    <div>
      <Segment inverted color='blue'>
        <Link style={{ color: "white", float: "left" }} to="/">Home</Link>
        <img src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" style={{ position: "relative", bottom: "5px" }} className="ui mini right floated image" />
        <Link style={{ color: "white", float: "right" }} to="#">My Account</Link>
      </Segment>
      <div className="ui container logc">
        <div class="page-login">
          <div class="ui centered grid container">
            <div class="nine wide column">
              <div class="ui fluid card">
                <div class="content">
                  <form class="ui form" onSubmit={e => e.preventDefault()}>
                    <div class="field">
                      <label>Product Name</label>
                      <input type="text" name="name" placeholder="Enter Product Name" onChange={handleChange} />
                    </div>
                    <div class="field">
                      <label>Product Code</label>
                      <input type="number" name="code" placeholder="Enter code" />
                    </div>
                    <div class="field">
                      <label>Category</label>
                      <input type="text" name="cost" placeholder="Enter category" />
                    </div>
                    <div class="field">
                      <label>Brand</label>
                      <input type="text" name="code" placeholder="Enter brand" />
                    </div>
                    <div class="field">
                      <label>City</label>
                      <input type="text" name="city" placeholder="Enter city" onChange={handleChange} />
                    </div>
                    <div class="field">
                      <label>PinCode</label>
                      <input type="number" name="pincode" placeholder="Enter pincode" onChange={handleChange} />
                    </div>
                    <div className="form-check" style={{ display: "flex", flexDirection: "column", marginBottom: "0.5rem" }}>
                      <div class="ui checkbox"><input type="checkbox" tabindex="0" /><label>Amazon</label></div>
                      <div class=" ui checkbox"><input type="checkbox" tabindex="0" /><label>Flipkart</label></div>
                      <div class=" ui checkbox"><input type="checkbox" tabindex="0" /><label>Jiomart</label></div>
                      <div class=" ui checkbox"><input type="checkbox" tabindex="0" /><label>Grofers</label></div>
                      <div class="ui checkbox"><input type="checkbox" tabindex="0" /><label>BigBasket</label></div>
                    </div>
                    <button class="ui primary button" style={{ marginBottom: "1rem" }} onClick={() => onClick()}>
                      Start Search <i style={{ marginLeft: "1rem" }} aria-hidden="true" className="search icon"></i>
                    </button>
                    <div class="three blue ui buttons">
                      <button class="ui button">
                        <i aria-hidden="true" className="add icon"></i>
                     Add Single Product</button>
                      <button class="ui button">
                        <i aria-hidden="true" className="list icon"></i>
                        Batch Import</button>
                      <button class="ui button">
                        <i aria-hidden="true" className="edit icon"></i>
                       Manage</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? <h1>Please Wait Data is Loading...</h1> :
        (responseData?.amazon_data?.products || responseData?.bb_data?.products || responseData?.flipkart_data?.products || responseData?.grofer_data?.products || responseData?.jio_data?.products
          ? <div class="row">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th>#</th>
                  <th >Amazon</th>
                  <th >BigBasket</th>
                  <th >Grofers</th>
                  <th >Jio Mart</th>
                  <th >Flipkart</th>
                </tr>
              </thead>
              <tbody>
                <td className="tabledata"><SearchCard data={headerData} /></td>
                <td>{responseData?.amazon_data ? <SearchCard data={responseData?.amazon_data?.products} /> : null}</td>
                <td>{responseData?.bb_data ? <SearchCard data={responseData?.bb_data?.products} /> : null}</td>
                <td>{responseData?.grofer_data ? <SearchCard data={responseData?.grofer_data?.products} /> : null}</td>
                <td>{responseData?.jio_data ? <SearchCard data={responseData?.jio_data?.products} /> : null}</td>
                <td>{responseData?.flipkart_data ? <SearchCard data={responseData?.flipkart_data?.products} /> : null}</td>
              </tbody>
            </table>
          </div> : <h1>No Search Result Found...</h1>)}
    </div>
  );
}
