import "./NewDep.css"
import React,{Component} from 'react';

export class NewDep extends Component{
    render(){
        return(
            <div className="newDep">
               <h1 className="newDepTitle">New Dep</h1>
               <from className="newDepFrom">
                   <div className="newDepItem">
                       <label>DepName</label>
                       <input type="text" placeholder="Thành"/>
                   </div>

                   <div className="newDepItem">
                       <label>Full Name</label>
                       <input type="text" placeholder="Tuấn Thành"/>
                   </div>

                   <div className="newDepItem">
                       <label>Email</label>
                       <input type="Email" placeholder="tuanthanh@gmail.com"/>
                   </div>

                   <div className="newDepItem">
                       <label>Password</label>
                       <input type="Password" placeholder="Password"/>
                   </div>

                   <div className="newDepItem">
                       <label>Phone</label>
                       <input type="text" placeholder="+84 964 507 389"/>
                   </div>

                   <div className="newDepItem">
                       <label>Address</label>
                       <input type="text" placeholder="Sóc Trăng | Vietnamese"/>
                   </div>

                   <div className="newDepItem">
                       <label>Department</label>
                       <input type="text" placeholder="Phòng phân thích thiết kế"/>
                   </div>

                   <div className="newDepItem">
                       <label>Group</label>
                       <input type="text" placeholder="Nhóm 1"/>
                   </div>

                   <div className="newDepItem">
                       <label>Gender</label>
                       <div className="newDepGender"> 
                       <input type="radio" name="gender" id="male" value="male"/>
                       <label for="male">Male</label>
                       <input type="radio" name="gender" id="female" value="female"/>
                       <label for="female">Female</label>
                       <input type="radio" name="gender" id="other" value="other"/>
                       <label for="other">Other</label>
                        </div>
                      
                   </div>
                   <div className="newDepItem">
                   <label>Active</label>
                   <select className="newDepSelect" name="active" id="active">
                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                   </select>
                   </div>
                   <button className="newDepButton">Create</button>
               </from>
            </div>
        )
    }
}