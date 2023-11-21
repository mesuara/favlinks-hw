import Table from './Table'
import Form from './Form'
import {useState} from 'react'

function LinkContainer(){
 const[favLinks, setFavLinks] = useState([])
 
    const handleRemove = (index) => {
        console.log("inside remove", index)
        setFavLinks(favLinks.filter((_, i) => i !== index))
    
      }
    
      const handleSubmit = (favLink) => {
        console.log(favLink)        

           
           setFavLinks([...favLinks, favLink])
        //    console.log(favLink)
        // console.log(favLinks)
      }

    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table! </p>
            <Table linkData={favLinks} removeLink={handleRemove}/>
            <h1>Add New</h1>
            <Form onNewSubmit={handleSubmit}/>
        </div>
    )

}
export default LinkContainer