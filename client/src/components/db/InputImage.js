import React, { Fragment, useState } from "react";

const InputImage = () => {
  const [link, setLink] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { link };
      const response = await fetch("http://localhost:5000/images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={link}
          onChange={e => setLink(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputImage;
