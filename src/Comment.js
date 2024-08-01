import Reply from "./Reply"
import {useState} from "react";

const Comments=({content,createdAt,replies,user})=>{

    const[reply,setReply]=useState(true);
        function handleReply(){
              setReply(!reply);
        }

    return (<div>
         <div>{user}</div>    
         <div>{content &&content } </div>
         <div>{createdAt && createdAt } </div>
         <div>{replies &&replies.map((item)=> <div><Comments content={item.content} createdAt={item.createdAt} user={item.user.username} replies={item.replies}/></div>)}</div>
         <button onClick={handleReply}>reply</button>
         <div>{reply&&<Reply/>}</div>


    </div>
)        

    
}
export default Comments;



// posting the data and then passing the replies to the same component and then displaying the results recursively