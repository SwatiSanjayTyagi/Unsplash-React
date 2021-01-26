import React , {useEffect , useState} from 'react';
import {createApi} from "unsplash-js";

  
function SearchImage() {
    // const [querySearch , setquerySearch] = useState('');
    const [querySearch , setquerySearch] = useState({sCriteria: '',
                                                page:'',
                                                perpage:''});
    const [getPhotots, setGetPhotos] =  useState([])
    const [triggerCall, setTriggerCall] = useState(true)
    let imageTag = React.createRef()

    useEffect(() => {
    const unsplash =  createApi({accessKey: "HBhFtSYxABc5NhFUnsqdsltWnx4Wy3GzNgoaTXhpewc"})

    unsplash.search.getPhotos({ 
        query: querySearch.sCriteria,
        page: querySearch.page,
        perPage: querySearch.perpage
    }).then(result => {
        if (result.type === 'success') {
            const firstPhoto = result.response.results.map(item => item.urls.raw);
            setGetPhotos([...getPhotots, firstPhoto]) // getPhotos: [..this.getPhotos, firstPhoto]
          }
        })
    }, [querySearch.page, triggerCall])
    useEffect(() => {
        if(imageTag && imageTag.current && imageTag.current.scrollTop + 1 > imageTag.current.scrollHeight - imageTag.current.clientHeight) {
            setquerySearch(querySearch.page + 1)
        }
    }, [imageTag?.current?.scrollTop])
 
    const clickAgain = () => {
       //  console.log(getPhotots, this.imageTag && this.imageTag.current && this.imageTag.current.scrollHeight, this.imageTag.current.scrollTop)
 
    }
 
    let imageComponent = getPhotots.map(item => <img style={{
        width: '110px',
        height: '110px'
    }} src={item} />)
     // const unsplash = new Unsplash({
    //     accessKey: "HBhFtSYxABc5NhFUnsqdsltWnx4Wy3GzNgoaTXhpewc"
    //   });
    // const searchImage = async (e) => {
    //     e.preventDefault();
    //         Unsplash.inputSearch
    //         .photos(sCriteria).page 
    //         .then(toJson)
    //         .then((JSON) =>{ console.log(JSON);})
        
    //   };


    return(
    <div>
        <form className="form" >
            <input type = 'text' value = {querySearch.sCriteria} placeholder ='Please enter search criteria'
                    onChange={(event)=>{setquerySearch({sCriteria: event.target.value})}} autoFocus/>
            
            <input type = 'text' value = {querySearch.page} placeholder ='Page no:'
                    onChange={(event)=>{setquerySearch({page: event.target.value})}} />
            
            <input type = 'text' value = {querySearch.perpage} placeholder ='No of images per page:'
                    onChange={(event)=>{setquerySearch({perpage: event.target.value})}} />
            <input type = "button" value="Search"></input>
        </form>
        
    </div>
)
}

export default SearchImage