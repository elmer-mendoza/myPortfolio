import React,{useState} from 'react'; 
import {Container,Row,Col, Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import {FaStar} from 'react-icons/fa'
import axios from 'axios';
import Resizer from "react-image-file-resizer";


const SubmitReviewForm = () => {
    const [rating,setRating] =useState(null)
    const [hover,setHover] =useState(null)
    const [formData, setFormData] = useState()
    const [newImage, setNewImage] = useState();
    
    const formSubmit = (e) =>{
        e.preventDefault();
        const avatar =new FormData();
        avatar.append('reviewerImage', newImage);
        avatar.append('name',formData.name);
        avatar.append('comment', formData.comment);
        avatar.append('numStar', formData.numStar);
        const data = avatar;
        console.log(data);
        
        // axios.post(`http://localhost:5001/api/reviews`,data)
        axios.post(`https://resume-elmermendoza.herokuapp.com/api/reviews`,data)
        .then(res=> {console.log(res)})
        .catch(err=>console.log(err));
        alert(`Thank you for your review ${formData.name}`)
        e.target.reset()  
        setRating(null);
        setNewImage(null)
        }
        
    const changeHandler =(e) => {
        setFormData({...formData,
            [e.target.name]:e.target.value
        })
        console.log(formData)
    }

    const fileChangedHandler=(e)=> {
        let fileInput = false;
        if (e.target.files[0]) { 
            fileInput = true;}
        if (fileInput) {
            try {
            Resizer.imageFileResizer(
                e.target.files[0], 100, 100, "JPEG", 50,0,
                (uri) => { setNewImage( uri );},
                "file", 100, 100
            );
            } catch (err) {
            console.log(err);
            }
        }
    }
    
    // const fileChangedHandler=(e)=> {
    // console.log(e.target.files[0])
    //      setNewImage(e.target.files[0]);  
    // }

 
    return (
        <div className='review__submit' sm="12" md="6" lg="6">
            <Row >
                <Col className="col-9 mx-auto">
                    <Form  id="myForm" onSubmit={formSubmit} method='post' encType='multipart/form-data'>
                        <FormGroup >
                            {[...Array(5)].map((_,i)=> {
                                const ratingValue = i + 1;
                                    return (
                                    <label key={ratingValue}>
                                        <input 
                                            type="radio" 
                                            name="numStar" 
                                            onChange={changeHandler}
                                            value={ratingValue}
                                            onClick={()=> setRating(ratingValue)} 
                                            required  />
                                        <FaStar className="star" 
                                            color={ratingValue <= (hover || rating) ? "#ffc107" : "rgb(128,128,128)"}
                                            onMouseEnter={()=>setHover(ratingValue)}
                                            onMouseLeave={()=>setHover(null)} />
                                    </label>
                                )
                            })}
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" name="comment"  onChange={changeHandler} id="textArea" placeholder="Write your comment" required/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="name" id="name"  onChange={changeHandler} placeholder="Name" required/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="file" name="reviewerImage"  id="reviewerImage"  onChange={fileChangedHandler} /> 
                            <FormText color="muted">
                            {newImage ? <img src={URL.createObjectURL(newImage)} className="fback_img shadow m-1" alt="" /> :
                            "Upload your profile picture"}
                            </FormText>
                                {/* <Button className="my-1 mx-2" >Submit</Button> */}
                        </FormGroup>
                        <Button className="my-1" >Submit</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    ) 
}

export default SubmitReviewForm