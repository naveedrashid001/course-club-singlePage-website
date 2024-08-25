import React from 'react';
import "./css/style.css"
import Button from './utility/Component/Button';

const MainPage = ({ content }) => {
  return (
    <div>
      <div className="row pt-2 py-1 pl-2 mt-4">
        <div className="eighty" style={{ justifyContent: "center" }}>
          {/* Display content if available, otherwise show images */}
          {content ? (
            <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
              <p>{content}</p>
            </div>
          ) : (
            <>
              {/* first one */}
              <img src="https://courseclub.me/wp-content/uploads/2023/12/516320-357x210.png" alt="pic-1" height={"230px"} style={{ marginLeft: "20px", marginTop: "10px" }} />
              <img src="https://courseclub.me/wp-content/uploads/2023/11/3215685-357x210.png" alt="pic-1" height={"230px"} style={{ marginLeft: "20px", marginTop: "10px" }} />
              <img src="https://courseclub.me/wp-content/uploads/2023/11/9784646123-357x210.png" alt="pic-1" height={"230px"} style={{ marginLeft: "20px", marginTop: "10px" }} />
              <img src="https://courseclub.me/wp-content/uploads/2023/11/436576-357x210.png" alt="pic-1" height={"230px"} style={{ marginLeft: "20px", marginTop: "10px" }} />
              {/* 2nd */}
              <img src="https://courseclub.me/wp-content/uploads/2023/12/45656263-357x210.jpg" alt="pic-1" height={"230px"} style={{ marginLeft: "20px", marginTop: "10px" }} />
              <img src="https://courseclub.me/wp-content/uploads/2023/11/32132312-357x210.jpeg" alt="pic-1" height={"230px"} style={{ marginLeft: "20px", marginTop: "10px" }} />
              <img src="https://courseclub.me/wp-content/uploads/2023/11/23445344-357x210.jpg" alt="pic-1" height={"230px"} style={{ marginLeft: "20px", marginTop: "10px" }} />
              <img src="https://courseclub.me/wp-content/uploads/2023/11/653120-357x210.jpg" alt="pic-1" height={"230px"} style={{ marginLeft: "20px", marginTop: "10px" }} />
              
              {/* <div style={{ margin:"0px auto"}}>
              <button className='btn btn-danger mt-4' style={{ width: "25%", }}>Loading..</button>
              </div> */}
              </>
          )}
        </div>
        {/* 3rd one */}
        <div className='col-sm-4'>
          <h5>Search Your Favourite Course</h5>
          <input type="text" style={{ padding: "3px", width: "60%" }} className='mt-3' placeholder='Search...' /> <button className='btn btn-danger'>Search</button>
          <h5 className='mt-4 mb-4 text-lighter'>Subscribe to Blog via Email</h5>
          <p>Enter your email address to get all of our premium Lynda, Pluralsight, Laracasts, and many more courses directly into your email box :-)</p>
          <input type="email" placeholder='Email Address' style={{ width: "70%", padding: "2px 4px" }} /> <br />
          <button className='btn btn-danger mt-2 mb-2' style={{ borderRadius: "17px", }}>SUBSCRIBE</button>
          <p>Join 1,221 other subscribers</p>
          <hr style={{ fontWeight: "bolder", color: "black", height: "5px", width: "80%", margin: "0px auto" }} />
          <h5 className='mt-4 mb-4'>TAG CLOUD</h5>
          
          <Button />
    </div>

      </div>
     

      
      </div>
    
  );
}

export default MainPage;
