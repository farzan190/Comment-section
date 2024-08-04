import Reply from "./Reply"
import {useState} from "react";
import data from "./data.json";
const Comments=({content,createdAt,replies,user,id,AllComments,setAllComments,handleReplyToTheComment})=>{

    const[reply,setReply]=useState(true);

      function handleReply(event){
              setReply(!reply);     
        }
         
    return (
             
          <div>
            
         <div>{user}</div>    
         <div>{content &&content } </div>
         <div>{createdAt && createdAt } </div>
         <button onClick={(event)=>handleReply(event)} id={id}>reply</button>
         <div>{reply&&<><Reply /> <button id={id} onClick={(event)=>handleReplyToTheComment(event)} >Replytothecomment</button></>}</div>
         
         <div>{replies &&replies?.map((item)=> <div><Comments content={item.content} createdAt={item.createdAt} user={item.user.username} handleReplyToTheComment={(event)=>handleReplyToTheComment(event)} replies={item.replies} id={item.id}/></div>)}</div>
         
       
            
         
     

    </div>
)        

    
}
export default Comments;



// posting the data and then passing the replies to the same component and then displaying the results recursively