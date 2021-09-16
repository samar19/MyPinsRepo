
import React,{ usestate }from 'react';
import '../styles/modal_styles.css'; 
import { useState } from 'react';


function upload_img (event , pinDetails ,setPinDetails ,setshowLabel ,setshowModalPin) {
   if(event.target.files && event.target.files[0])
   {
   if(/image\/*/.test(event.target.files[0].type)){
       const reader = new FileReader();
   
   reader.onload =function(){
      setPinDetails({
       ...pinDetails,
       img_blob:reader.result
      });

       setshowLabel(false);
       setshowModalPin(true);


   }
       reader.readAsDataURL(event.target.files[0]);
   }
   
   } 
   
   }


   function check_size(event){

     const image = event.target;
     image.classList.add('pin_max_width');

     if(
        image.getBoundingClientRect().width < image.parentElement.getBoundingClientRect().width ||
        image.getBoundingClientRect().height  < image.parentElement.getBoundingClientRect().height 
     ){
      image.classList.remove('pin_max_width');
      image.classList.add('pin_max_height');
     }
     image.style.opacity = 1;
   }

   function save_pin( pinDetails , add_pin) {
      const users_data = {
         ...pinDetails,
         author:'jack',
         board:'default',
         title:document.querySelector('#pin_title').value,
         description:document.querySelector('#pin_description').value,
         destination:document.querySelector('#pin_destination').value,
         pin_size:document.querySelector('#pin_size').value,

         
      }
    /* console.log(users_data);*/
     add_pin(users_data);
   }

function modal(props) {
const [pinDetails,setPinDetails]= useState ({
author:'',
board:'',
title:'',
description:'',
destination:'',
img_blob:'',
pin_size:'',

   });

const [showLabel, setshowLabel]= useState(true);
const [showModalPin, setshowModalPin]= useState(false);

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
                      <label htmlFor="upload_img" id="upload_img_labal"
                      style={{
                        display:showLabel ? 'block':'none'
                      }}>

                       <div className="upload_img_container">
                          <div id="dotted_border">
                              <div className="pint_mock_icon_container">
                               <img src="./images/up-arrow.png" alt="upload_img" className="pint_mock_icon" />
                          </div>
                          <div>Click to upload</div>
                          <div>Recomendation:use hight-quailty .jpg less than 20 mg</div>

                           </div>
                       </div>
                       <input onChange={ event=> upload_img(event ,pinDetails ,setPinDetails ,setshowLabel ,setshowModalPin)} type="file" name="upload_img" id="upload_img" value=""/>
                       </label>
                    <div className="modals_pin"
                    
                    style={{
                     display:showModalPin ? 'block':'none'
                   }}>


                    <div className="pin_image">
                       <img  onLoad={check_size} src={pinDetails.img_blob} alt=""/>
                       </div>
                    </div>
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
                         <div onClick={()=>save_pin( pinDetails, props.add_pin)} className="save_pin">save</div>

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