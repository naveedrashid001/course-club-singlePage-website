// ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <div>
<h6 className=' mt-4 mb-4'><strong>Contact Us</strong></h6>


        <form>
  <div class="form-group">
    <label for="exampleInputEmail1" className='mt-3'><strong>Name</strong></label> <small id="nameHelp" class="form-text text-muted">(Required)</small>  <br />
    <input type="text" id='name' className='p-1' style={{width:"40%"}}  required/>
 <br />
    <label for="exampleInputEmail1" className='mt-3'><strong>Email</strong></label> <small id="emailHelp" class="form-text text-muted">(Required)</small>  <br />
    <input type="email" id='name' className='p-1' style={{width:"40%"}}  required/>

    <br />
    <label for="exampleInputEmail1" className='mt-3'><strong>Subject</strong></label> <small id="subject" class="form-text text-muted">(Required)</small>  <br />
    <input type="text" id='subject' className='p-1' style={{width:"40%"}} required />

    <br />
    <label for="exampleInputEmail1" className='mt-3'><strong>Message</strong></label> <small id="url" class="form-text text-muted">(Required)</small>  <br />
    <textarea name="message" id=" message" style={{width:"100%", height:"100px"}}></textarea> <br />

    <button className='btn btn-danger mt-3'><strong>SUBMIT</strong></button>
    
  </div>
</form>

    </div>)
   
};

export default ContactUs;
