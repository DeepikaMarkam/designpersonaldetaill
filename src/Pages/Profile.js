import React, { Component } from 'react'

class Profile extends Component {
   
    render() {
        return (
  
     
           <div>
               
               <div className="container">
            <div class="row">
               


                   <div class="col">
                    <label>Name </label>
                    <input type ="text" placeholder = "name" ></input>
                    <label>Current Role </label>
                    <input type ="text" placeholder = "name" ></input>
                    <button type="button" class="btn btn-primary">Switch</button>
                    </div>

                   <div id = "vertical-line"></div>
                <div class="col-sm">
                Profile Management
                </div>
                <div class="col-sm">
                SKILLS EVALUATION
                </div>
                <div class="col-sm">
                JOB DASHBOARD
                </div>
                <div class="col-sm">
                TRAINING PROGRAMS DASHBOARD
                </div>
                <div class="col-sm">
                PLACEMENT ACTIVITY
                 </div>
            </div>
          </div>
<hr></hr>

<form>
    <div className="form-group">
    <label for="exampleInputHeadLine"><h4>Enter a Attractive Headline :</h4></label>
    <input type="text" class="form-control" id="exampleInputHeadLine1" aria-describedby="emailHelp" placeholder="Describe yourself in one Line"></input>
    </div>
</form>

{/*Upload Resume start*/}

<div className="container-fluid">
             <div className='mt-3'>
                <div className="border" >
                                            <h5 class="mb-3">Upload CV/Resume</h5>
                                            
  
                                            <label for="exampleFormControlFile1">File Name : </label>
                                            <input type="file" id="exampleFormControlFile1"></input>
                
                
                <div class="row">
                <div class="col-2">
                Download
                </div>
              
                <div class="col-6">
                   Delete
                </div>
                </div>




               </div>
            </div>
        </div>
 {/*Upload Resume end*/}



{/*Personal Detail  Start*/}

        <div className="container-fluid">
             <div className='mt-3'>
                <div className="border" >
                                            <h5 class="mb-3">Personal Detail</h5>
                                            <div className="container">
            <div class="row">
                  <div class="col">
                    <label>Name </label>
                    <input type ="text" placeholder = "name" ></input>
                  </div>
                  <div class="col">
                     <label>Middle Name </label>
                    <input type ="text" placeholder = "middel name" ></input>
                  </div>
                 <div class="col">
                   <label>Name </label>
                    <input type ="text" placeholder = "lastname" ></input>
                 </div>
             </div>


             <div class="row">
                  <div class="col">
                    <label>Gender </label>
                    <input type ="text" placeholder = "gender" ></input>
                  </div>
                  <div class="col">
                    <label>Perment Adrress </label>
                    <input type ="text" placeholder = "address" ></input>
                  </div>
             </div>

             <div class="row">
                  <div class="col">
                    <label> Nationality </label>
                    <input type ="text" placeholder = "nationality" ></input>
                  </div>
                  <div class="col">
                    <label>Moblie Number </label>
                    <input type ="text" placeholder = "mobile" ></input>
                  </div>
             </div>



             <div class="row">
                  <div class="col">
                    <label>Alternative Email </label>
                    <input type ="text" placeholder = "email" ></input>
                  </div>
                  <div class="col">
                    <label>Email </label>
                    <input type ="text" placeholder = "email" ></input>
                  </div>
             </div>


          </div>
               </div>
            </div>
        </div>


{/*Personal Detail end*/}


{/*Education Background start*/}
        <div className="container-fluid">
             <div className='mt-3'>
                <div className="border" >
                                            <h5 class="mb-3">Education Background</h5>
                                            <div class="col">
                  <div class="col-sm">
                    <label>Name of the Degree </label>
                    <input type ="text" placeholder = "name" ></input>
                  </div>
                  <div class="col-sm">
                     <label>Name of University Insititude </label>
                    <input type ="text" placeholder = " name" ></input>
                  </div>
                 <div class="col-sm">
                   <label>Start Year</label>
                    <input type ="text" placeholder = "year" ></input>
                 </div>
                < div class="col-sm">
                   <label>Year of Completion</label>
                    <input type ="text" placeholder = "year" ></input>
                </div>
             </div>




               </div>
            </div>
        </div>


{/*Education Background end*/}



{/*Projects start*/}
        <div className="container-fluid">
             <div className='mt-3'>
                <div className="border" >
                                            <h5 class="mb-3">Projects</h5>
                                            <div class="col">
                  <div class="col-sm">
                    <label>Name  </label>
                    <input type ="text" placeholder = "name" ></input>
                  </div>
                  <div class="col-sm">
                     <label>Name of Company/University/Institute </label>
                    <input type ="text" placeholder = " name" ></input>
                  </div>
                 <div class="col-sm">
                   <label>Start Year</label>
                    <input type ="text" placeholder = "year" ></input>
                 </div>
                < div class="col-sm">
                   <label>Year of Completion</label>
                    <input type ="text" placeholder = "year" ></input>
                </div>
             </div>



               </div>
            </div>
        </div>
{/*Projects end*/}




           </div>  //main end



                
        )
    }
}
export default Profile;
