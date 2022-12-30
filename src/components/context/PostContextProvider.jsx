import React, { useCallback, useState } from "react";
import PostContext from "./PostContext";

const PostContextPovider = ({ children }) => {
    const [_post, _setPost] = useState({title: '', body:''});

    const setPost = useCallback((t, b)=>{
        _setPost({title: t, body: b});
    },[])

  return <PostContext.Provider value={[_post, setPost]}>{children}</PostContext.Provider>;
};

export default PostContextPovider;
