import React from "react";
import { useField } from "formik";

const FormikInput = ({ className, ...rest }) => {
  const [field, meta] = useField(rest);
  //generic formik input error handling
  const errorMsg =
    meta.touched && meta.error ? (
      <div style={{color: 'red', marginTop: '4px'}}>{meta.error}</div>
    ) : null;
  const updatedClass =
    meta.touched && meta.error ? className + " is-invalid" : className;
  return (
    <React.Fragment>
      <input className={updatedClass} {...rest} {...field} />
      {errorMsg}
    </React.Fragment>
  );
};

export default FormikInput;
