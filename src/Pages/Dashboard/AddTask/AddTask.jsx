const AddTask = () => {
  return (
    <div>
      <div className="pt-32 md:pt-20">
        <h3 className="text-xl md:text-4xl font-bold text-center">Add Task</h3>

        <form className="space-y-3 w-full md:w-1/2 mx-auto flex flex-col justify-center items-center">
          <input
            name="title"
            type="text"
            placeholder="title"
            className="w-full md:w-1/2 py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  "
            required
          />

          <input
            name="description"
            type=""
            placeholder="description"
            className="w-full md:w-1/2 py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  "
            required
          />
          <select  className="w-full md:w-1/2 py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  ">
            <option value="low">Low</option>

            <option value="moderate">Moderate</option>

            <option value="high">High</option>
          </select>

          <input
            name="deadline"
            type="date"
            placeholder="deadline"
            className="w-full md:w-1/2 py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  "
            required
          />
          <div className="">
            <button
              type="submit"
              className=" text-center shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white  px-10 py-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddTask;
