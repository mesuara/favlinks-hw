import {useState} from 'react'

function Form(props){
    const [name, setName] = useState("")
    const [URL, setURL] = useState("")
    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            props.onNewSubmit({name,URL})
            event.target.reset()
          
        }}>
            <label >Link Name:</label>
            <input type="text" id="linkName" name="linkName" onChange={(event)=>{
                setName(event.target.value)
            }}  />
            <br />
            <br />
            <label >Link URL:</label>
            <input type="text" id="linkURL" name="linkURL" onChange={(event)=>{
                setURL(event.target.value)
            }}/>
            <br/>
            <br />
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default Form
