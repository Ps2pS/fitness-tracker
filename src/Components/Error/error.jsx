import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <section >
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 d-flex flex-column justify-content-center pr-5 mr-5 ">
              <h1 className="display-2">Oops !!!</h1>
              <p style={{width:"75%"}}>
              We're sorry, the page you were looking for could not be found. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.
              </p>

              <Link to="/"><button type="submit" class="btn btn-primary">
                  GO TO HOMEPAGE
                </button></Link> 

            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 text-center">
              <img
                class=""
                style={{width:"44vw"}}
                alt="errorImage"
                src="./images/404.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
