// RequestCourse.jsx
import React from 'react';

const RequestCourse = () => {
  return (
    <div>
        <h6 className=' mt-4 mb-4'><strong>Request Course</strong></h6>

        <h6 className=' mt-4 mb-4 text-danger'><strong>UDEMY COURSE REQUEST WILL NOT BE ACCEPTED HERE.</strong></h6>
        <h6><strong>Use this link to request UDEMY COURSE: <a className='text-danger' href="https://freecoursesite.com/request-course/">https://freecoursesite.com/request-course/</a></strong></h6>

        <h6><strong>Use this link to request UDEMY COURSE:<a className='text-danger' href="https://desirecourse.com/request-course/">https://desirecourse.com/request-course/</a></strong></h6>

        <form>
  <div class="form-group">
    <label for="exampleInputEmail1" className='mt-3'><strong>Name</strong></label> <small id="nameHelp" class="form-text text-muted">(Required)</small>  <br />
    <input type="text" id='name' className='p-1' style={{width:"40%"}}  required/>
 <br />
    <label for="exampleInputEmail1" className='mt-3'><strong>Email</strong></label> <small id="emailHelp" class="form-text text-muted">(Required)</small>  <br />
    <input type="email" id='name' className='p-1' style={{width:"40%"}}  required/>

    <br />
    <label for="exampleInputEmail1" className='mt-3'><strong>Name of the Course</strong></label> <small id="course" class="form-text text-muted">(Required)</small>  <br />
    <input type="text" id='course' className='p-1' style={{width:"40%"}} required />

    <br />
    <label for="exampleInputEmail1" className='mt-3'><strong>URL Link on Course Website</strong></label> <small id="url" class="form-text text-muted">(Required)</small>  <br />
    <input type="url" id='url' className='p-1' style={{width:"40%"}}  required/> <br />

    <button className='btn btn-danger mt-3'><strong>SUBMIT</strong></button>
    
  </div>
</form>
        
    </div>)
   
};

export default RequestCourse;
