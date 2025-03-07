import { useState } from "react";
import "./App.css";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import SidebarComponent from "./components/SidebarComponent";
import DashboardComponent from "./components/DashboardComponent";
import AssignmentComponent from "./components/AssignmentsComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import CardComponent from "./components/CardComponent";

function App() {
  // object for storing project created  and then show that project to UI
  const [projects, setProjects] = useState([]);
  //function to recieve data from child component
  const addProject = (project) => {
    // console.log("project", project)
    setProjects([...projects, project]);
  };
  
  const [seachname, setsearchname] = useState([]);
  const search = (p) => {
    // console.log("project", project)
    setsearchname(p);
  };
  
  
  

  return (
    <div className="grid grid-cols-12 gap-0 bg-gray-100">
      <div className="col-span-3">
        <SidebarComponent />
      </div>
      <div className="col-span-9 gap-5 mr-10">
        <div>
          <TopNavbarComponent 
          search={search}

          />
        </div>

        <div className="grid grid-cols-8">
          <div className="col-span-6 pt-5">
            <div>
              <DashboardComponent />
            </div>

            <div>
              <div className="flex justify-between pt-5">
                <AssignmentComponent />

                {/* Pass the function to add projects */}
                <AddNewProjectComponent addProject={addProject} seachname={seachname} />
              </div>

              {/* Display the project cards dynamically */}
              <div className="grid grid-cols-3 gap-4 mt-5 h-[25rem] overflow-auto">
                {projects.map((project,index) => (
                  <CardComponent
                    key={index}
                    projectName={project.projectName}
                    dueDate={project.dueDate}
                    progress={project.progress}
                    description={project.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <LearningMaterialsComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
