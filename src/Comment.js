import Reply from "./Reply"
import {useState} from "react";
import data from "./data.json";
const Comments=({content,createdAt,replies,user,id,AllComments,setAllComments})=>{

    const[reply,setReply]=useState(true);

      function handleReply(event){
              setReply(!reply);     
        }
       
      function handleReplyToTheComment(event){
        const answer= data.comments.map((item)=>item.id===2 ? item.replies.push({
          "id": 1,
          "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
          "createdAt": "1 month ago",
          "score": 12,
          "user": {
            "image": { 
              "png": "./images/avatars/image-amyrobson.png",
              "webp": "./images/avatars/image-amyrobson.webp"
            },
            "username": "amyrobson"
          },
          "replies": []
        }):"")    
           console.log(answer);
            }
          
// when i click on the replyonthecomment button it should push an object to the data 
         
   
    return (
             
          <div>
            
         <div>{user}</div>    
         <div>{content &&content } </div>
         <div>{createdAt && createdAt } </div>
         <button onClick={(event)=>handleReply(event)} id={id}>reply</button>
         <div>{reply&&<><Reply /> <button id={id} onClick={(event)=>handleReplyToTheComment(event)} >Replytothecomment</button></>}</div>
             
         
         
         <div>{replies &&replies?.map((item)=> <div><Comments content={item.content} createdAt={item.createdAt} user={item.user.username} replies={item.replies} id={item.id}/></div>)}</div>
         
       
            
         
     

    </div>
)        

    
}
export default Comments;



// posting the data and then passing the replies to the same component and then displaying the results recursively