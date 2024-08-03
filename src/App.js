import './App.css';
import data from "./data.json";
import Reply from './Reply';
import Comments from './Comment';
import { useState } from 'react';
import useAddComment from './addComment';

function App() {
      const [AllComments,setAllComments]=useState(data.comments);
      const [handleOnclick,setHandleOnclick]=useState();
      const ans=useAddComment();
        

  return (<> <div>{AllComments.map((item)=><div><Comments
                                            content={item.content}
                                            createdAt={item.createdAt}
                                            replies={item.replies} 
                                            user={item.user.username}
                                            id={item.id} AllComments={AllComments}
                                            setAllComments={setAllComments}/></div>)}
                                          </div>
     <div>{ans}</div>            
           

                 </>     
              )
            
//we need to push the object to the replies and for that i need to find ki kiske replies mai push karna hai object ka apna ek replies array hai     
// we have the Id of the comment  and now find that  and push the content            
        

       
}

export default App;
