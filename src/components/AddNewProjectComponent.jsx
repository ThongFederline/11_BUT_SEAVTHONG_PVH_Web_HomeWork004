import { Plus } from "lucide-react";
import React, { useState } from "react";
import CardComponent from "./CardComponent";

  // export default function AddNewProjectComponent({addProject}) {
  // we have to add the fonction addproject to this font command to ANP
  // to perform action create a new project 
  export default function AddNewProjectComponent({addProject}) {

  const [dueDate, setDueDate] = useState("");
  const [projectName, setProjectName] = useState("");
  const [progress, setProgress] = useState("");
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    const project = {
      projectName,
      dueDate,
      progress,
      description,
    };

    setProjects([...projects, project]);
    setDueDate("");
    setProgress("");
    setDescription("");
    setProjectName("");
    setIsModalOpen(false);

    // using function add project to add any project.
    addProject(projects);
  };

  return (
    <div className="mr-10 ">
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center flex items-center gap-2"
      >
        <Plus size={22} /> <span className="text-base">New Project</span>
      </button>

      {isModalOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="text-lg font-semibold">Create New Project</h3>
            <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
          </div>
          <form className="mt-4" onSubmit={handleCreate}>
            <label className="block mb-2 text-sm font-medium">Project Name</label>
            <input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              type="text"
              className="w-full p-2 border rounded-lg mb-3"
              placeholder="Type project name"
              required
            />

            <label className="block mb-2 text-sm font-medium">Due Date</label>
            <input
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              type="date"
              className="w-full p-2 border rounded-lg mb-3"
              required
            />

            <label className="block mb-2 text-sm font-medium">Progress</label>
            <select
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
              className="w-full p-2 border rounded-lg mb-3"
            >
              <option value="">Select Progress</option>
              <option value="100">100</option>
              <option value="75">75</option>
              <option value="50">50</option>
              <option value="25">25</option>
            </select>

            <label className="block mb-2 text-sm font-medium">Project Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded-lg mb-3"
              placeholder="Write project description here"
              rows="3"
            ></textarea>

            <div className="text-right">
              <button
                type="submit"
                className="text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 font-medium rounded-lg px-5 py-2"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
