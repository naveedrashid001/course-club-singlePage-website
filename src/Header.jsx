import React from 'react';


import "./css/style.css"

function formatDate(date) {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dayName = dayNames[date.getDay()]; // Get day name
  const monthName = monthNames[date.getMonth()]; // Get month name
  const day = date.getDate(); // Get day of the month
  const year = date.getFullYear(); // Get year

  return `${dayName}, ${monthName} ${day}, ${year}`;
}

const currentDate = new Date();
const formattedDate = formatDate(currentDate);

const Header = () => {
  return (
    <div>
      <div  className="row pt-2 py-1 pl-2 text-center" style={{ backgroundColor: "#1E73BE" }}>
      <div className="col-sm-2 text-center pt-1 text-bold" style={{ backgroundColor: "red", justifyContent: "center" }}>
        {formattedDate}
      </div>
      <div className="col-sm-10" style={{ fontWeight: "lighter", color: "white" }}>
        <ul className="list-unstyled text-center" style={{ display: "flex", gap: "17px" }}>
          <li>DMCA - Copyrights</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Sitemap</li>
        </ul>
      </div>
      </div>
      {/* picture */}
      <div className="row mt-3">
        <div className="col-12"> {/* Center the image horizontally */}
          <img 
            src=".s://courseclub.me/wp-content/uploads/2018/04/FFFF.png" 
            alt="Course Club" 
            style={{ width: '300px', height: '100px', objectFit: 'cover' }} 
          />
        </div>
      </div>

      {/* for 2nd header  */}
      
      <div  className="row pl-2 " style={{ backgroundColor: "#1E73BE"}}>
      
      <div className="col-sm-10" style={{ fontWeight: "lighter", color: "white" ,}}>
        <ul className=" text-center mt-1" 
        style={{ display: "flex", gap: "17px",textDecoration:"none", textTransform:"capitalize", listStyleType: "none",paddingLeft:"10px"}}>

                <a href="."><li>Home</li></a>
            <li class="dropdown">
                <a href="." class="dropbtn text-white" style={{textDecoration:"none"}}>Categories <i class="bi bi-caret-down"></i></a>
                <div class="dropdown-content">
                    <a href=".">CBT Nuggets</a>
                    <a href=".">Laracasts</a>
                    <a href=".">Linkden</a>
                    <a href=".">Lynda</a>
                    <a href=".">other</a>

                </div>
            </li>
          <a href="."><li>How to Download Course <i class="bi bi-file-plus"></i></li>
          </a>
          <a href="."><li>Request Course</li></a>
          <a href="."> <li>Contact Us</li></a>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Header;
