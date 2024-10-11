import React from "react";
import Container from "react-bootstrap/esm/Container";

const NotFound = () => {
  return (
    <div className="bg-dark">
      <Container className="py-5">
        <h1
          style={{ fontSize: "80px" }}
          className="text-danger text-center  pb-5"
        >
          404 NOT FOUND
        </h1>
        <h1 style={{ fontSize: "70px" }} className="pb-5">
          <i class="fa-solid fa-face-sad-cry text-warning d-block text-center "></i>
        </h1>
        <h1 className="text-light text-center">PLEASE TRY SOMETHING ELSE</h1>{" "}
      </Container>
    </div>
  );
};

export default NotFound;
