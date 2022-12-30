import React, { useContext } from "react";

const PostContext = React.createContext([
    {
    body: null,
    title:null
    }, 
    ()=> undefined
]);
export default PostContext;

export const usePost = () => useContext(PostContext);