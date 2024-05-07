import React from "react";
import datas from "/datas.jpg";
import cyber from "/cyber.webp";
import fullstack from "/fullstack.jpg";
import TaskRouter from "./taskRouter";
import DataScience from "./dataScience";
import CyberSecurity from "./cyberSecurity";
import FullStack from "./fullStack";
export default function All() {
  return (
    <>
      <TaskRouter />
      <div className="d-flex justify-content-between gap mt-2">
        <div className="col-md-4 sub-border">
          <DataScience />
        </div>
        <div className="col-md-4 sub-border">
          <CyberSecurity />
        </div>{" "}
        <div className="col-md-4 sub-border">
          {" "}
          <FullStack />
        </div>
      </div>
    </>
  );
}
