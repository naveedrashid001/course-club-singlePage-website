import React from 'react';
import "./css/style.css"

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
              <button className='btn btn-danger mt-4' style={{ width: "25%" }}>Loading..</button>
            </>
          )}
        </div>
        {/* 3rd one */}
        <div className='col-sm-4'>
          <h5>Search Your Favourite Course</h5>
          <input type="text" style={{ padding: "3px", width: "60%" }} className='mt-3' /> <button className='btn btn-danger'>Search</button>
          <h5 className='mt-4 mb-4 text-lighter'>Subscribe to Blog via Email</h5>
          <p>Enter your email address to get all of our premium Lynda, Pluralsight, Laracasts, and many more courses directly into your email box :-)</p>
          <input type="email" placeholder='Email Address' style={{ width: "70%", padding: "2px 4px" }} /> <br />
          <button className='btn btn-danger mt-2 mb-2' style={{ borderRadius: "17px", }}>SUBSCRIBE</button>
          <p>Join 1,221 other subscribers</p>
          <hr style={{ fontWeight: "bolder", color: "black", height: "5px", width: "80%", margin: "0px auto" }} />
          <h5 className='mt-4 mb-4'>TAG CLOUD</h5>
          <a href="https://courseclub.me/tag/1-algorithms/bb" className="h" >
            <button style={{ border: "none" }}>Ai</button>
          </a>
          {/* Add more tags here */}
       


  <a href="https://courseclub.me/tag/1-algorithms/bb" className="h" >
  <button  style={{border:"none"}}>Andriod</button> </a>

    <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Algorithms</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Anguler</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Animantion</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Application</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Applications</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >AWS</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Beginners</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Blockchain</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Business</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Certified</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Blockchain</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >code</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >CSS</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Data Science</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Deep Learning</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Design</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Developer</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Developers</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Development</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Essentials</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >framework</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Fundamentals</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >HTML</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Introduction</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >iOS</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >Java</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >JavaScript</button></a>

  <a href="https://courseclub.me/tag/1-algorithms/" className="h" >
  <button style={{border:"none"}} >jQuery</button></a>


    </div>

                      {/* LARAVEL Linux Machine Machine Learning Nanodegree Node.js photoshop PHP Professional programming Python React Scratch Security Technology TESTING */}

      
      </div>
     

      
      </div>
    
  );
}

export default MainPage;
