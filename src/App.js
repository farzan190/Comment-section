import './App.css';
import data from "./data.json";
import Reply from './Reply';
import Comments from './Comment';
import { useState } from 'react';
import useAddComment from './addComment';

function App() {
      const [AllComments,setAllComments]=useState(data.comments);
      const [handleOnclick,setHandleOnclick]=useState();

      function handleReplyToTheComment(event,target){
           if(!target)
            return ;
        const answer= AllComments.map((item)=>{
            if(item.id==event.target.id){
               item.replies.push({
                "id": 6,
                "content": "Adding the new comment ",
                "createdAt": "1 month ago",
                "score": 12,
                "user": {
                  "image": { 
                    "png": "./images/avatars/image-amyrobson.png",
                    "webp": "./images/avatars/image-amyrobson.webp"
                  },
                  "username": "Farzan"
                },
                "replies": []
              });
              }
            // if the id matches then return and if it doesnt match then pass the replies to see if there exists the id we are looking for 
            // pass the item replies to the same function ,if its empty then return otherwise check the condition and if it doesnt match then pass
            // edit and delete fnction bhi banana hai sath mai upvote and downvote  
            else  if(item.replies){
                return handleReplyToTheComment("",item)
              }
              
            return item;

        });

      //if the ID matches then match otherwise look for nested replies 

      setAllComments(answer);
        }

  return (<> <div>{AllComments.map((item)=><div><Comments
                                            content={item.content}
                                            createdAt={item.createdAt}
                                            replies={item.replies} 
                                            user={item.user.username}
                                            score={item.score}
                                            id={item.id} AllComments={AllComments}
                                            handleReplyToTheComment={(event)=>handleReplyToTheComment(event)}
                                            setAllComments={setAllComments}/></div>)}
                                          </div>
           
             
                 </>     
              )
            
//we need to push the object to the replies and for that i need to find ki kiske replies mai push karna hai object ka apna ek replies array hai     
// we have the Id of the comment  and now find that  and push the content            
        

       
}

export default App;
