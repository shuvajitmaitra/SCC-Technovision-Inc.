import { FaCalendar, FaDesktop, FaPiggyBank } from "react-icons/fa";

const UserTypes = () => {
  return (
    <div className="text-center max-w-6xl mx-auto md:py-32 space-y-10">
      <h3 className="text-4xl lg:text-5xl font-bold max-w-5xl mx-auto">
        WHAT TYPE OF PEOPLE ARE USING  
        <span className="text-[#08DAFA]"> <br /> SCC Technovision </span>?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="border rounded-lg p-6 space-y-4 text-center">
          {" "}
          <div className="flex justify-center">
            <FaDesktop  className="text-white text-4xl"/>
          </div>
           <h2 className="text-[#08DAFA] text-3xl">Developers</h2>{" "}
          <p>
          TaskForge help developers organize their projects by breaking them down into manageable tasks. This ensures that each aspect of a project is clearly defined and progress can be tracked effectively.
          </p>
        </div>
        <div className="border rounded-lg p-6 space-y-4 text-center">
          {" "}
          <div className="flex justify-center">
            <FaPiggyBank  className="text-white text-4xl"/>
          </div>
           <h2 className="text-[#08DAFA] text-3xl">Bankers</h2>{" "}
          <p>
          Bankers often have multiple responsibilities and tasks to juggle, from client meetings to financial analysis. TaskForge help them prioritize tasks, set deadlines, and allocate time effectively.
          </p>
        </div>
        <div className="border rounded-lg p-6 space-y-4 text-center">
          {" "}
          <div className="flex justify-center">
            <FaCalendar  className="text-white text-4xl"/>
          </div>
           <h2 className="text-[#08DAFA] text-3xl">Professional</h2>{" "}
          <p>
          Many corporate roles involve project-based work. TaskForge provide features for project planning, task assignment, progress tracking, and collaboration, facilitating effective project management.
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserTypes;
