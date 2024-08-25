import React from 'react';
import "./css/style.css";
import HowToDownload from './utility/Component/HowToDownloded';
import Dmca from './utility/Component/Dmca';
import Privacy from './utility/Component/Pricacy';
import TermServies from './utility/Component/TermServies';
import SiteMape from './utility/Component/SiteMape';
import RequestCourse from './utility/Component/RequestCourse';
import ContactUs from './utility/Component/ContactUs';
import ServerBusy from './utility/Component/serverBusy';

// function to see Date
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
// DMCA-Copyright function 
const ShowDMCACopyright = (e)=>{
  e.preventDefault();
    setContent(
      <div>
        <Dmca/>
      </div>
    );
}
// Pravicy function 
const ShowPrivacy = (e)=>{
  e.preventDefault();
    setContent(
      <div>
       <Privacy />
      </div>
    );
}
// TermServises function 
const ShowTermServis = (e)=>{
  e.preventDefault();
    setContent(
      <div>
       <TermServies />
      </div>
    );
}
// SiteMape function 
const ShowSiteMape = (e)=>{
  e.preventDefault();
    setContent(
      <div>
       <SiteMape />
      </div>
    );
}
  // how to dowinloded function 

  const showHowToDownload = (e) => {
    e.preventDefault();
    setContent(
      <div>
        <HowToDownload />
      </div>
    );
  };

   // how to RequestCourse function 

   const showRequestCourse = (e) => {
    e.preventDefault();
    setContent(
      <div>
        <RequestCourse />
      </div>
    );
  };
    // how to ContactUs function 

    const showContactUs = (e) => {
      e.preventDefault();
      setContent(
        <div>
          <ContactUs />
        </div>
      );
    };
 // ServerBusy function 
    const ShowServerBusy = (e) => {
      e.preventDefault();
      setContent(
        <div>
        <ServerBusy />
        </div>
      );
    };


  //  return 
  return (
    <div>
      <div className="row pt-2 py-1 pl-2 text-center" style={{ backgroundColor: "#1E73BE" }}>
        <div className="col-sm-2 text-center pt-1 text-bold" style={{ backgroundColor: "red", justifyContent: "center" }}>
          {formattedDate}
        </div>
        <div className="col-sm-10" style={{ fontWeight: "lighter", color: "white" }}>
          <ul className="list-unstyled text-center" style={{ display: "flex", gap: "17px" }}>
            <a href="#dmca" onClick={ShowDMCACopyright}>
              <li>DMCA - Copyrights</li>
            </a>
            <a href="#prvcy" onClick={ShowPrivacy}>
              <li>Privacy Policy</li></a>

            <a href="#trm" onClick={ShowTermServis}>
              <li>Terms of Use</li></a>
            <a href="#stpm" onClick={ShowSiteMape}>
              <li>Sitemap</li></a>
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
      
      <div id='headerone' className="col-sm-10" style={{ fontWeight: "lighter", color: "white" ,}}>
        <ul className=" text-center mt-1" 
        style={{ display: "flex", gap: "17px",textDecoration:"none", textTransform:"capitalize", listStyleType: "none",paddingLeft:"10px"}}>

                <a href="."><li>Home</li></a>
            <li class="dropdown">
                <a href="." class="dropbtn text-white" style={{textDecoration:"none"}}>Categories <i class="bi bi-caret-down"></i></a>
                <div class="dropdown-content">
                    <a href="#serverbusy" onClick={ShowServerBusy}>CBT Nuggets</a>
                    <a href="#serverbusy" onClick={ShowServerBusy}>Laracasts</a>
                    <a href="#serverbusy" onClick={ShowServerBusy}>Linkden</a>
                    <a href="#serverbusy" onClick={ShowServerBusy}>Lynda</a>
                    <a href="#serverbusy" onClick={ShowServerBusy}>other</a>

                </div>
            </li>
            <a href="down" onClick={showHowToDownload}><li>How to Download Course <i className="bi bi-file-plus"></i></li></a>
            
          <a href="#reqCourse" onClick={showRequestCourse}><li>Request Course</li></a>
          <a href="#contactUs" onClick={showContactUs}> <li >Contact Us</li></a>
        </ul>
      </div>
      </div>
    </div>
    </div>
    
  );
};

export default Header;
