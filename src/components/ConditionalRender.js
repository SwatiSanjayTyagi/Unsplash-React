import React , {useEffect , useState} from 'react';
import {createApi} from "unsplash-js";
 
function ConditionalRender(props){
const [getPhotots, setGetPhotos] =  useState([])
const [querySearch, setQuerySearch] = useState('')
const [page, setPage] = useState(1)
const [triggerCall, setTriggerCall] = useState(true)
let imageTag = React.createRef()
 
useEffect(() => {
// const unsplash = createApi({​​​​​​​​ accessKey:'sHB6uFxO2J5IjTuheN46U7qJ3EZkpZNhvQBIhebtUlc' }​​​​​​​​)
const unsplash =  createApi({accessKey: "HBhFtSYxABc5NhFUnsqdsltWnx4Wy3GzNgoaTXhpewc"})
unsplash.search.getPhotos({
    query: querySearch,
    page:page,
    perPage:10
}).then(result=> {
if (result.type === 'success') {
const firstPhoto = result.response.results.map(item=>item.urls.raw);
setGetPhotos( [...getPhotots, firstPhoto]) // getPhotos: [..this.getPhotos, firstPhoto]
        }
    })
},[page, triggerCall])
 
useEffect(() => {
if(imageTag && imageTag.current && imageTag.current.scrollTop + 1 > imageTag.current.scrollHeight - imageTag.current.clientHeight) {
setPage(page + 1)
}
},[imageTag?.current?.scrollTop])
 
const clickAgain = () => {
//  console.log(getPhotots, this.imageTag && this.imageTag.current && this.imageTag.current.scrollHeight, this.imageTag.current.scrollTop)
 
}
 
let imageComponent = getPhotots.map(item => 
<img style={{
width:'250px',
height:'250px'
}} src = {item} /> )
 
return (
        <div>
            <input type="text" onChange={(evt)=> setQuerySearch(evt.target.value)}/>
            <button onClick={()=> {setTriggerCall(!triggerCall)}}>Search</button>
            {/* <button onClick={() => {clickAgain()}}> search </button> */}
            <div style={{height:'600px',
            overflow: 'auto'}} ref={imageTag}>
                {imageComponent}
            </div>
            
        </div>
        )
}
 
export default ConditionalRender

