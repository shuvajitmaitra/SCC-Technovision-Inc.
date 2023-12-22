import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const AddTask = () => {
    const axiosPublic= useAxiosPublic()
    const {user} = useContext(AuthContext)

    const { register, handleSubmit} = useForm();
    const onSubmit = async (data )=> {
        console.log(data.title);
        const dataList = {
            name: user.displayName,
            email: user.email,
            title: data?.title,
            description: data?.description,
            priority: data?.priority,
            deadline: data?.deadline,
            

        }
        const response = await axiosPublic.post("/todo", dataList);
        if (response.data.insertedId) {
            console.log("inserted");
        }
    }
  return (
    <div>
      <div className="pt-32 md:pt-20">
        <h3 className="text-xl md:text-4xl font-bold text-center">Add Task</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full md:w-1/2 mx-auto flex flex-col justify-center items-center">
          <input
            name="title"
            type="text"
            placeholder="title"
            {...register("title", { required: true })}
            className="w-full md:w-1/2 py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  "
            required
          />

          <input
            name="description"
            type="text"
            placeholder="description"
            {...register("description", { required: true })}
            className="w-full md:w-1/2 py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  "
            required
          />
          <select name="priority" {...register("priority", { required: true })}  className="w-full md:w-1/2 py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  ">
            <option value="low">Low</option>

            <option value="moderate">Moderate</option>

            <option value="high">High</option>
          </select>

          <input
            name="deadline"
            type="date"
            placeholder="deadline"
            {...register("deadline", { required: true })}
            className="w-full md:w-1/2 py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  "
            required
          />
          <div className="">
            <button
              type="submit"
              className=" text-center shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white  px-10 py-2"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddTask;
