import React from "react";
import TaskRouter from "./taskRouter";
import fullstack from "/fullstack.jpg";
import { Link ,useNavigate} from "react-router-dom";
export default function FullStack() {
  let navigate = useNavigate();
  return (
    <>
      <div className="mt-2">
      <h1 className="heading" onClick={()=>navigate("/fullstack")}>FULL STACK </h1>
        <div>
          <img src={fullstack} width="300" height="300" />
        </div>
        <div>
          <p>
            Full stack development refers to the end-to-end application software
            development, including the front end and back end. The front end
            consists of the user interface, and the back end takes care of the
            business logic and application workflows. Consider a retail website.
          </p>
        </div>
        <div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </>
  );
}
