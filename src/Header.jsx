import React from 'react';
import "./css/style.css";

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

const Header = ({ setContent }) => {
  return (
    <div>
      <div className="row pt-2 py-1 pl-2 text-center" style={{ backgroundColor: "#1E73BE" }}>
        <div className="col-sm-2 text-center pt-1 text-bold" style={{ backgroundColor: "red", justifyContent: "center" }}>
          {formattedDate}
        </div>
        <div className="col-sm-10" style={{ fontWeight: "lighter", color: "white" }}>
          <ul className="list-unstyled text-center" style={{ display: "flex", gap: "17px" }}>
            <a href="#dmca" onClick={() => 
              setContent(<div>
                <hr  style={{height:"4px", color:"black"}}/>

                <h4 className='mb-3'>DMCA – Copyrights</h4>
                <h2>Disclaimer:</h2>
                <p>All parts of the <strong>CourseClub.NET</strong> Website are for Private use only. No files are Hosted on our Server, they are Indexed in a similar way to how Google works. The ISP and/or Administrator cannot be held responsible for the contents of any linked Sites or any link contained in a linked Site, or changes/updates to such Sites.</p>

                <h4>Content Removal</h4>
                <p>It is however our policy to respond to VALID infringement notices and take appropriate actions under the copyright laws that we are in compliance with <strong>CourseClub.NET</strong> is in full compliance with the Digital Millennium Copyright Act (“DMCA”) and International Copyright Laws. We only comply with notices provided they take the following steps:</p>

                <p>1. Write an email and specify the page on <strong>CourseClub.NET</strong> where you believe copyrighted material has been infringed upon. <br />
2. Provide us sufficient contact information so that we may contact you (name and email address is required). <br />
3. Provide us with evidence that you own the copyright to said.</p>
<br /> <br />
<p>We urge all Copyright Owners, if you find the content on this site, where they hold copyright, ask them to contact us.
 <br /> <br />
If you want to send a DMCA takedown request please keep in mind these will take 2-4 working days to process.
<br /> <br />
Thank you for understanding.
</p>
              </div>)}>
              <li>DMCA - Copyrights</li>
            </a>
            <a href="."><li>Privacy Policy</li></a>
            <a href="."><li>Terms of Use</li></a>
            <a href="."><li>Sitemap</li></a>
          </ul>
        </div>
      </div>
      {/* picture */}
      <div className="row mt-3">
        <div className="col-12"> {/* Center the image horizontally */}
          <img 
            src="https://courseclub.me/wp-content/uploads/2018/04/FFFF.png" 
            alt="Course Club" 
            className='mt-3 mb-3'
            style={{ width: '300px', height: '100px', objectFit: 'cover' }} 
          />
          </div>
      {/*second header remain unchanged */}
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
      {/* Picture and second header remain unchanged */}
    </div>
    </div>
    
  );
};

export default Header;
