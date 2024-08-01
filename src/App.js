import './App.css';
import data from "./data.json";
import Reply from './Reply';
import {useState} from "react";
import Comments from './Comment';

function App() {

       const[reply,setReply]=useState(true);
        function handleReply(){
              setReply(!reply);
        }

  return ( <div>{data.comments.map((item)=><div><Comments content={item.content} createdAt={item.createdAt} replies={item.replies} user={item.user.username}/></div>)}</div>
                                  
                 
              )
            
                 
     // take the input and add that e.target.value to the the replies                  


       
}

export default App;
