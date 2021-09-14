
import React from 'react';
import '../styles/modal_styles.css'; 

function modal() {
    return (
        <div className="add_pin_modal">
          <div className="add_pin_Container">
             <div className="side" id="left_side">
                 
                 <div className="section1">
                     <div className="pint_mock_icon_container">
                       <img src="./images/ellipse.png" alt="edit" className="pint_mock_icon" />
                     </div>
                 </div>
                 
                 <div className="section2">
                      <label htmlFor="upload_img" id="upload_img_labal">
                       <div className="upload_img_container">
                          <div id="dotted_border">
                              <div className="pint_mock_icon_container">
                               <img src="./images/up-arrow.png" alt="upload_img" className="pint_mock_icon" />
                          </div>
                          <div>Click to upload</div>
                          <div>Recomendation:use hight-quailty .jpg less than 20 mg</div>

                           </div>
                       </div>
                       <input type="file" name="upload_img" id="upload_img" value=""/>
                       </label>

                 </div>
                 <div className="section3">
                    <div className="save-from-site">save from site</div>
                 </div>
             </div>
             <div className="side" id="right_side">
               
                <div className="section1">
                   <div className="select_size">
                      <select defualtvalue="Select" name="pin_size" id="pin_size">
                        <option value="">Select</option>
                        <option value="small">Small</option>
                        <option value="meduim">meduim</option>
                        <option value="large">large</option>
                      </select>
                         <div className="save_pin">save</div>

                   </div>
                </div>


                <div className="section2">

                  <input placeholder="Add your title" type="text" className="new_pin_input" id="pin_title"/>
                  <input placeholder="Tell everyone What your Pin is About" type="text" className="new_pin_input" id="pin_description"/>
                  <input placeholder="Add a Destination Link" type="text" className="new_pin_input" id="pin_destination"/>

                </div>

             </div>

          </div>
        </div>
    )

}
export default modal;