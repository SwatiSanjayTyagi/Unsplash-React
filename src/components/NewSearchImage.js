import React, {useState} from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import {Container , Button , Card , Form }  from  "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function NewSearchImage(){
    const [photo,setphoto] =   useState("");
    const [clientid,setclientid] = useState("HBhFtSYxABc5NhFUnsqdsltWnx4Wy3GzNgoaTXhpewc")
    const [result,setResult]=useState([])
    function handlechange(event){
        setphoto(event.target.value);
    }
    function handlesubmit(event){
        console.log(photo);

         const url = "https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+clientid;
    //    const url = "https://api.unsplash.com/900x400/search/photos?page=1&query="+photo+"&client_id="+clientid;
        axios.get(url)
        .then((Response) => {
            console.log(Response);
            setResult(Response.data.results);
        })
    }
    return(
        <div>
        <Container>
            {/* <Form>
                <Form.Group controlId="formText"> */}
                    <h1>Unsplash images in react</h1>
                    {/* <Form.Control onChange={handlechange} type = "text" name = "photo" placeholder = "Search for photos ..." /> */}
                    <input onChange={handlechange} type = "text" name = "photo" placeholder = "Search for photos ..." />
                    <Button onClick={handlesubmit} type = "submit">Search</Button>
                {/* </Form.Group>
            </Form> */}
            <Card>
                {result.map((photo)=>(
                    //  <Card.Img src={photo.urls.small}/>
                    //<LazyLoadImage width={1200} height={1200} src={photo.urls.small}/>
                    <LazyLoadImage src={photo.urls.small}/>
                ))}
            </Card>
            </Container>
        </div>
    )
}
export default NewSearchImage