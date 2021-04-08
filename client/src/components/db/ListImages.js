import React, { Fragment, useEffect, useState } from "react";

import EditImage from "./EditImage";

const ListImages = () => {
  const [images, setImages] = useState([]);

  //delete image function

  const deleteImage = async id => {
    try {
      const deleteImage = await fetch(`http://localhost:5000/images/${id}`, {
        method: "DELETE"
      });

      setImages(images.filter(image => image.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getImages = async () => {
    try {
      const response = await fetch("http://localhost:5000/images");
      const jsonData = await response.json();

      setImages(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  console.log(images);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {images.map(image => (
            <tr key={image.id}>
              <td><img className="imgColumn" src={image.link}/></td>
              <td>
                <EditImage image={image} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteImage(image.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListImages;
