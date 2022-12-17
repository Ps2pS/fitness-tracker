import { useState } from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// User Imports

import UserNavbar from "./Components/Navbar/UserNavbar";
import Profile from "./Components/UserPanel/Profile";
import UserHome from "./Components/UserPanel/UserHome";
import BmiCalculator from "./Components/UserPanel/BmiCalculator";

// Trainer Imports

import ManageUsers from "./Components/TrainerPanel/ManageUsers";
import CreatePlan from "./Components/TrainerPanel/CreatePlan";
import TrainerNavbar from "./Components/Navbar/TrainerNavBar";

// Admin Imports

import Admin from "./Components/Admin/AdminLogin";
import AdminNavbar from "./Components/Navbar/MainAdminBar";
import CreateUser from "./Components/Admin/CreateUser";
import TrainersList from "./Components/Admin/TrainersList";
import UsersList from "./Components/Admin/UsersList";
import CreatePlans from "./Components/Admin/CreateWorkoutPlans";
import ManageWorkoutPlans from "./Components/Admin/ManageWorkoutPlans";

// Home Imports

import NavBar from "./Components/Navbar/navbar";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/footer";
import UserTrainer from "./Components/UserTrainerLogin/UserTrain";
import Error from "./Components/Error/error";
import AdminHome from "./Components/Admin/AdminHome";

export default function App() {
  const [currentUser, setCurrentUser] = useState("home"); // Storing the Current type of user using the application
  const [userData, setUserData] = useState(); // Storing Logged in user Data

  return (
    <div className="App">
      {currentUser === "home" && (
        <div>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Register" element={<Register />} />
            <Route
              exact
              path="/Login"
              element={
                <UserTrainer
                  setCurrentUser={setCurrentUser}
                  setUserData={setUserData}
                />
              }
            />
            <Route
              exact
              path="/fittrack-admin"
              element={<Admin setCurrentUser={setCurrentUser} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      )}
      {currentUser === "Trainer" && (
        <div>
          <TrainerNavbar setCurrentUser={setCurrentUser} />
          <Routes>
            <Route exact path="/" element={<ManageUsers />} />
            <Route exact path="/create-plan" element={<CreatePlans />} />
            <Route path="*" element={<Error />} />
            <Route exact path="create-schedule" element={<CreatePlan />} />
          </Routes>
        </div>
      )}
      {currentUser === "user" && (
        <div>
          <UserNavbar
            setCurrentUser={setCurrentUser}
            setUserData={setUserData}
          />
          <Routes>
            <Route exact path="/" element={<UserHome userData={userData} />} />
            <Route
              exact
              path="/bmi-calculator"
              element={<BmiCalculator userData={userData} />}
            />
            <Route path="*" element={<Error />} />
            <Route
              exact
              path="/profile"
              element={<Profile userData={userData} />}
            />

            
          </Routes>
        </div>
      )}
      {currentUser === "admin" && (
        <div>
          <AdminNavbar setCurrentUser={setCurrentUser} />
          <Routes>
          <Route exact path="/" element={<AdminHome />} />

            <Route exact path="/create-user" element={<CreateUser />} />
            <Route exact path="/trainers" element={<TrainersList />} />
            <Route exact path="/users" element={<UsersList />} />
            <Route exact path="/create-plan" element={<CreatePlans />} />
            <Route exact path="/manage-plan" element={<ManageWorkoutPlans />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      )}

      <Footer />
      <ToastContainer />
    </div>
  );
}
