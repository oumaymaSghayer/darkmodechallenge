import React, { useState } from "react";
import "./MyForm.css";
import { useForm } from "react-hook-form";
function MyForm({ darkMode }) {
  const { register, handleSubmit, errors, formState } = useForm();

  const submitForm = () => {
    console.log(formState.isSubmitSuccessful);
  };
  return (
    <div className="form-wrapper px-3 py-3">
      <form onSubmit={handleSubmit(submitForm)}>
        {formState.isSubmitSuccessful && (
          <div className="mt-4">
            <p className={darkMode ? " text-warning " : "text-success"}>
              {" "}
              Thank you for contacting us – we will get back to you soon!
            </p>
          </div>
        )}
        <div className="my-3">
          <input
            className={
              darkMode
                ? "form-control bg-secondary text-white border-secondary "
                : "form-control my-3"
            }
            type="text"
            placeholder="Name"
            ref={register({ required: true, minLength: 3, maxLength: 20 })}
            name="name"
          ></input>
          {errors.name && (
            <small className="form-text text-muted text-left text-danger">
              This field is required and must be between 3 and 20 caracters.
            </small>
          )}
        </div>

        <input
          type="email"
          className={
            darkMode
              ? "form-control bg-secondary text-white border-secondary my-3"
              : "form-control my-3"
          }
          placeholder="Email"
          ref={register({ required: true, minLength: 3, maxLength: 50 })}
          name="email"
        />
        {errors.email && (
          <small className="form-text text-muted text-left text-danger">
            This field is required and must be between 3 and 50 caracters.
          </small>
        )}

        <div className=" d-flex justify-content-end buttons mt-2 pt-4">
          <button
            type="button"
            className={darkMode ? "btn saveD mx-1" : "btn save mx-1"}
          >
            Save
          </button>
          <button
            type="submit"
            className={darkMode ? "btn  submitD mx-1" : "btn  submit mx-1"}
            onClick={() => submitForm()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default MyForm;
