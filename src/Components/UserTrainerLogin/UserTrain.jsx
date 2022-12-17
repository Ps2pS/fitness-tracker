import { useState } from "react";
import Login from "../UserLogin/login";
import Trainer from "../TrainerLogin/trainer";

function UserTrainer({ setCurrentUser ,setUserData}) {
  const [normal, setNormal] = useState(false);
  const [trainer, setTrainer] = useState(true);
  const [activeColor, setActiveColor] = useState("#fff");
  const [nonActiveColor, setNonActiveColor] = useState("#F4623A");

  // Functionality For switching between user and trainer login

  const changeToTrainer = () => {
    setTrainer(false);
    setNormal(true);
    setActiveColor("#F4623A");
    setNonActiveColor("#fff");
  };
  const changeToNormal = () => {
    setNormal(false);
    setTrainer(true);
    setActiveColor("#fff");
    setNonActiveColor("#F4623A");
  };

  return (
    <div>
      <section className="" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="d-flex justify-content-around">
                    <div className="text-center">
                      <button
                        style={{ background: `${activeColor}`, color: "black" }}
                        className="btn btn-outline-dark"
                        onClick={changeToTrainer}
                      >
                        Trainer Login
                      </button>
                    </div>
                    <div>
                      <button
                        style={{
                          background: `${nonActiveColor}`,
                          color: "black"
                        }}
                        className="btn btn-outline-dark"
                        onClick={changeToNormal}
                      >
                        User Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {normal && <Trainer setCurrentUser={setCurrentUser} />}
      {trainer && <Login setCurrentUser={setCurrentUser} setUserData={setUserData} />}
    </div>
  );
}

export default UserTrainer;
