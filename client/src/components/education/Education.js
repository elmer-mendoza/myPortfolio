import React,{useState} from 'react';
import  { Container,Row,Col,Modal, ModalBody} from 'reactstrap';
import reactCert from "../../assets/certificates/reactCert.jpg"
import reactNativeCert from "../../assets/certificates/reactNativeCert.jpg"
import frontEndCert from "../../assets/certificates/frontEndCert.jpg"
import pythonCert from "../../assets/certificates/pythonCert.png"
import backEndCert from "../../assets/certificates/backEndCert.jpg"
import fullStackCert from "../../assets/certificates/fullStackCert.jpg"
import './education.css'
// import {reactCert,reactNativeCert,frontEndCert,pythonCert,backEndCert,fullStackCert} from "../../assets/images"

import Loading from "../loading/Loading";

function Education({education,loading,error}) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
    if(loading){return <Loading/>
    } 
    return (
      <div id='education' className="education sectionContainer">
        <div className='sectionTitle' onClick={()=>toggle()}>
          <h2 >Education And Licenses</h2>
           <p>See Certificates</p>
        </div>
        <div>
            {education?.map((educ,index) =>{
                const {school,accomplishment,year} = educ;
                return (
                  <article key={index} className="text-center">
                      <h3 >{accomplishment}</h3>
                      <h6>-- {school}<span> {year}</span> --</h6>
                        <div/>
                  </article>
                )
              })}
        </div>
        {/* <div className='boxContainer'>
          <div className='boxLeft'></div>
          <div className='boxRight'></div>

        </div> */}
        <div>
          <Modal isOpen={modal} toggle={toggle} >
              <ModalBody className="mt-5 certificate" style={{paddingTop: 50}}toggle={toggle} >
                  <img src={fullStackCert}  alt="" img/>
                  <img src={frontEndCert}  alt="" img/>
                  <img src={backEndCert}  alt="" img/>
                  <img src={reactCert}  alt="" img/>
                  <img src={reactNativeCert}  alt="" img/>
                  <img src={pythonCert}  alt="" img/>
              </ModalBody>
          </Modal>
        </div>
      </div>
    )
}

export default Education