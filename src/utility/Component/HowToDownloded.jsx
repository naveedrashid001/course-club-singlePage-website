// HowToDownload.jsx
import React from 'react';

import logoOne from '../../images/howToDowinload/first.png';
import logo2nd from '../../images/howToDowinload/2nd.png';
import logo3nd from '../../images/howToDowinload/3rd.png';
import logo4nd from '../../images/howToDowinload/4th.png';
import logo5nd from '../../images/howToDowinload/5th.png';
import logo6nd from '../../images/howToDowinload/6th.png';
import logo7nd from '../../images/howToDowinload/7th.jpg';

const HowToDownload = () => {
  return (
    <div>
      <h6 className='mt-4 mb-4'><strong>How to Download Course From FCS – Complete Guide</strong></h6>
      <hr />
      <p>Hello, guys I’m going to show you how to download your favorite course from FCS. Because lots of FCS fans are facing issues downloading their desired courses. So here is a full detailed guide, please follow all the given instructions.</p>
      <div className='p-5'>
         {/* first image */}
         <p>1. First of all, please disable your ad blocker because you can’t download any course if you have an ad blocker. Our ad blocker system will block you. So open the desired course you want to download from FCS.</p>

        <img src={logoOne} alt="img1" width={"100%"} height={"260px"} />
       
        {/* {2nd image} */}
        <p className='mt-4 mb-4'>2. Scroll down to the bottam and you can see download button. Click on Download Now.</p>

        <img src={logo2nd} alt="img1" width={"100%"} height={"260px"} />

        {/* {3nd image} */}
        <p className='mt-4 mb-4'>3. It will redirect to you on a site where you can see Click to Verify button, you need to click on that</p>
        <img src={logo3nd} alt="img1" width={"100%"} height={"260px"} />

        {/* 4th picture */}
        <p className='mt-4 mb-4'>4. After that you can see please wait button, so you need to wait for a few minutes.</p>
        <img src={logo4nd} alt="img1" width={"100%"} height={"260px"} />

        {/* 5th picture */}
        <p className='mt-4 mb-4'>5. Now you can see Generate Link button, Click on Button</p>
        <img src={logo5nd} alt="img1" width={"100%"} height={"260px"} />

        {/* 6th picture */}
        <p>6. It will redirect to our shrinker site, fill the recaptcha and press, Click here to continue button</p>
        <img src={logo6nd} alt="img1" width={"100%"} height={"260px"} />

        {/* 7th picture */}
        <p className='mt-4 mb-4'>7. Once you logged in. Click on Download & Play Here Button.</p>
        <img src={logo7nd} alt="img1" width={"100%"} height={"260px"} />

        <p className='mt-4'>That’s it.</p>
        <p><strong>Note: <span style={{color:"red"}}> If you see any error like Request Time Out or API is full or any other kind of error. Please wait for few hours and try again later.</span></strong></p>
      </div>
    </div>
  );
};

export default HowToDownload;
