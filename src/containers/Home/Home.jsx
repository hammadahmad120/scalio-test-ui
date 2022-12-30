import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikInput from "../../components/shared/FormikField/FormikField";
import { getPost } from "../../services/postService";
import { usePost } from "../../components/context/PostContext";

const Home = ({ location }) => {
    const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [, setPost] = usePost();
  const history = useHistory();

  return (
    <div>
        <div style={{
      position: 'fixed',
      top: '50%',
      left: '40%'
    }}>
            <Formik
              initialValues={{
                id: ''
              }}
              validationSchema={Yup.object({
                id: Yup.number().required("id is required"),
              })}
              onSubmit={async(values, actions) => {
                  setIsLoading(true);
                  if (serverError) setServerError(null);
                  try{
                    const post = (await getPost(values.id)).data;
                    if(post.title && post.body){
                      setPost(post.title, post.body);
                      history.push('/details');
                    }else {
                      setServerError("title or body not exist for post");
                    }
                    setIsLoading(false);
                  }catch(err){
                    setIsLoading(false);
                    if(err.response?.status === 404){
                      setServerError("Post not found with given id");
                    } else setServerError(err.message ?? 'Server Error');
                  }
              }}
            >
              <Form>
                <div>
                  <FormikInput
                    type="number"
                    placeholder="post id"
                    name="id"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading ? true : false}
                  style={{marginTop: '16px'}}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </Form>
            </Formik>
          </div>
          {serverError && (
              <div style={{color: 'red', position:'absolute', marginTop: '30px', left: '40%'}}>{serverError}</div>
            )}
        </div>
  );
};
export default Home;
