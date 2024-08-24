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

                
<h6 className=' mt-4 mb-4'><strong>DMCA – Copyrights</strong></h6>
<h6 className=' mt-4 mb-4'><strong>Disclaimer</strong></h6>
                <p>All parts of the <strong>CourseClub.NET</strong> Website are for Private use only. No files are Hosted on our Server, they are Indexed in a similar way to how Google works. The ISP and/or Administrator cannot be held responsible for the contents of any linked Sites or any link contained in a linked Site, or changes/updates to such Sites.</p>

                
<h6 className=' mt-4 mb-4'><strong>Content Removal</strong></h6>

                <p>It is however our policy to respond to VALID infringement notices and take appropriate actions under the copyright laws that we are in compliance with <strong>CourseClub.NET</strong> is in full compliance with the Digital Millennium Copyright Act (“DMCA”) and International Copyright Laws. We only comply with notices provided they take the following steps:</p>

                <p>1. Write an email and specify the page on <strong>CourseClub.NET</strong> where you believe copyrighted material has been infringed upon. <br />
2. Provide us sufficient contact information so that we may contact you (name and email address is required). <br />
3. Provide us with evidence that you own the copyright to said.</p>
<br />
<p>We urge all Copyright Owners, if you find the content on this site, where they hold copyright, ask them to contact us.
 <br /> <br />
If you want to send a DMCA takedown request please keep in mind these will take 2-4 working days to process.
<br /> <br />
Thank you for understanding.
</p>
              </div>)}>
              <li>DMCA - Copyrights</li>
            </a>
            <a href="#prvcy" onClick={() => 
              setContent(<div>
                
                <hr  style={{height:"4px", color:"black"}}/>
                <h6><strong>Privacy Policy</strong></h6>
<h6 className='mb-4 mt-4'><strong>1. INTRODUCTION</strong></h6>
<h6 className='mb-4'><strong>1.1. PURPOSE OF POLICY</strong></h6>
<p><strong>CourseClub.NET</strong> (us, we, Non-Profit Organization) is committed to respecting the privacy rights of visitors and other users of this site. We created this Privacy Policy (this Policy) to give you confidence as you visit and use the Site, and to demonstrate our commitment to fair information practices. This Policy is only applicable to the Site, and not to any other websites that you may be able to access from the Site, each of which may have data collection and use practices and policies that differ materially from this Policy.</p>
<h6 className=' mt-4 mb-4'><strong>1.2. NOTICE CONCERNING CHILDREN</strong></h6>

<p>PLEASE NOTE: We are a general audience site, and do not direct any of our content specifically at children under 13 years of age pursuant to the Children’s Online Privacy Protection Act of 1998.</p>
<h6 className=' mt-4 mb-4'><strong>2. INFORMATION COLLECTION PRACTICES</strong></h6>
<h6 className=' mt-4 mb-4'><strong>2.1. WHAT BASIC INFORMATION DOES THE WE COLLECT?</strong></h6>

<p>In operating the Site, we collect personal information from you in a couple different situations. The first is if you should contact us via the contact page. In doing so, you will provide us with your name and email address. The second is if you leave a comment to a blog post during which you may be asked for a name and other information. You are not required to provide us with information via these two methods to use and enjoy the Site.</p>
<h6 className=' mt-4 mb-4'><strong>2.2. WHAT ADDITIONAL INFORMATION DOES WE COLLECT?</strong></h6>

<p>(a) AUTOMATIC COLLECTION. Our servers automatically recognize visitors’ domain names and IP addresses (the number assigned to computers on the Internet). No personal information about you is revealed in this process. The Site may also gather anonymous traffic data that does not personally identify you, but that may be helpful for marketing purposes or for improving the services we offer. <br /> <br />

(b) COOKIES. From time to time, we may use the standard cookies feature of major browser applications that allows us to store a small piece of data on your computer about your visit to our Site. Cookies help us learn which areas of our Site are useful and which areas need improvement through programs including, but not limited to, Google Analytics. We may also use cookies from third party social sites and programs including, but not limited to, Facebook, Google Plus and Twitter. You can choose to disable cookies through your browser or independent programs available online. However, if you choose to disable this function, your experience at our Site may be diminished as some features may not work as they were intended. <br /> <br />

(c) SPONSORS AND ADVERTISERS. We may decide to accept sponsorship and advertisements on the Site. Should this occur, you should assume said sponsors and advertisers will be given access to the impressions and click data on their marketing pieces. Your personally identifiable information will never be revealed to them by us.
</p>

<h6 className=' mt-4 mb-4'><strong>3. USE AND SHARING OF INFORMATION</strong></h6>
<h6 className=' mt-4 mb-4'><strong>3.1. WHAT DOES WE DO WITH COLLECTED INFORMATION?</strong></h6>

<p>(a) PERSONAL INFORMATION. We do not disclose the personally identifiable information to any third parties other than those that we use to facilitate the functioning of the site such as a hosting we and email program for mailings. <br />
<br />
b) ANONYMOUS INFORMATION. We use anonymous information to analyze our Site traffic. In addition, we may use anonymous IP addresses to help diagnose problems with our server, to administer our site, or to display the content according to your preferences. Traffic and transaction information may also be shared with business partners and advertisers on an aggregate and anonymous basis. <br />
<br /> 

(c) USE OF COOKIES. Promotions or advertisements displayed on our site may contain cookies. We do not have access to or control over information collected by outside advertisers on our site. <br />
<br />

(d) DISCLOSURE OF PERSONAL INFORMATION. We may disclose any information we have for you if required to do so by law or in the good-faith belief that such action is necessary to (1) conform to the edicts of the law or comply with legal process served on us, (2) protect and defend our rights or property or the users of the Site, or (3) act under exigent circumstances to protect the safety of the public or users of the Site. <br />
<br />

(e) SALE OF INFORMATION. In order to accommodate changes in our business, we may sell or buy portions of the Site, including the information collected through this Site. If substantially all of its assets are acquired by a third party, user information will be one of the assets transferred to the acquirer. 
</p>

              </div>)}>
              <li>Privacy Policy</li></a>

            <a href="#trm" onClick={() => 
              setContent(<div>
                
                <hr  style={{height:"4px", color:"black"}}/>
                <h6><strong>Terms of Use</strong></h6>
<h6 className='mb-4 mt-4'><strong>1. BINDING EFFECT</strong></h6>
<p>This is a binding agreement between you and <strong>CourseClub.NET</strong> (us, we, Non-Profit Organization). By using the Internet site located at https://courseclub.me (the Site), you agree to abide by these Terms of Use. If at any time you find these Terms of Use unacceptable, you must immediately leave the Site and cease all use of it</p>
<h6 className=' mt-4 mb-4'><strong>2. PRIVACY POLICY</strong></h6>
<p>We respect your privacy and permit you to control the treatment of your personal information. A complete statement of our current privacy policy can be found by clicking here. Our privacy policy is expressly incorporated into this Agreement by this reference. </p>

<h6 className=' mt-4 mb-4'><strong>3. GOVERNING LAW</strong></h6>

<p>These Terms of Use shall be construed in accordance with and governed by the laws of California and the United States, without reference to rules regarding conflicts of law. This Site is intended for use by individuals based in the United States of America. </p>

<h6 className=' mt-4 mb-4'><strong>4. MINIMUM AGE</strong></h6>

<p>You must be at least 18 years old to access and participate on this site. You guarantee and warrant you are at least 18 years old and are able to enter into this Agreement from a legal perspective. </p>


<h6 className=' mt-4 mb-4'><strong>5. EBOOK SIGNUPS AND MAILINGS</strong></h6>

<p>You have the option, but not obligation, to sign up and receive a free eBook from us. Should you do so, you are agreeing to receive further emailing from us of a commercial nature.</p>

<h6 className=' mt-4 mb-4'><strong>6. EMAIL COMMUNICATIONS</strong></h6>

<p>When you contact us, you expressly consent and agree to receive email responses from us. These email communications may be commercial or non-commercial in nature. Non-commercial emails may include, but are not limited to, administrative issues and announcements of changes to these Terms, the Privacy Policy or other site documentation.

<h6 className=' mt-4 mb-4'><strong>7. USE OF SOFTWARE</strong></h6>



We may make certain software available to you from the Site. If you download software from the Site, the software, including all files and images contained in or generated by the software, and accompanying data (collectively, Software) are deemed to be licensed to you by us, for your personal, noncommercial, home use only. We does not transfer either the title or the intellectual property rights to the Software, and We retains full and complete title to the Software as well as all intellectual property rights therein. You may not sell, redistribute, or reproduce the Software, nor may you decompile, reverse-engineer, disassemble, or otherwise convert the Software to a human-perceivable form. All trademarks and logos are owned by Company or its licencors and you may not copy or use them in any manner.</p>
 </div>)}>
              <li>Terms of Use</li></a>
            <a href="#stpm" onClick={() => 
              setContent(<div>
<    h4 className=' mt-4 mb-4'><strong>XML Sitemap</strong></h4>

<p>Generated by <span style={{color:"red"}}>YoastSEO</span>, this is an XML Sitemap, meant for consumption by search engines.

You can find more information about XML sitemaps on  <span style={{color:"red"}}>sitemaps.org</span>. <br /> <br />

This XML Sitemap Index file contains 8 sitemaps.</p>
                 </div>)}>
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
