import React from "react";
import { usePost } from "../../components/context/PostContext";
import { useHistory } from 'react-router-dom';

const Details = () => {
  const [post, setPost] = usePost();
  const history = useHistory();

  const goBack = () =>{
    setPost(null, null);
    history.push('/home');
  }
  
    return (
      <div>
        <button style={{margin: '20px'}} onClick={goBack}>Back</button>
        <div
        style={{
          position: 'fixed',
          top: '15%',
          left: '10%'
        }}
        >
            <b>Title</b>
            <p>{post.title}</p>
            <b>Body</b>
            <p>{post.body}</p>
        </div>
      </div>
    );
}

export default Details;
