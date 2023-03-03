import React from "react";

function TodoEdit({
  todoText,
  id,
  deleteTodo,
  toggleToEdit,
  createdAt,
  updateFormState,
  numberOfOpenForms,
  isDone,
  markAsDone,
  themePreference,
}) {
  return (
    <div
      className={
        "w-full  shadow-xl  ring-gray-700/80 relative  transition-colors duration-500 rounded-lg bg-gray-900 from-black   p-2 " +
        (themePreference === "Blue"
          ? "to-blue-500 border-blue-500"
          : themePreference === "Green"
          ? "to-green-500 border-green-500"
          : themePreference === "Red"
          ? "to-red-500 border-red-500"
          : "")
      }
    >
      {!isDone ? (
        <span className="absolute uppercase top-0 border border-white/75  opacity-90 rounded font-black left-0 px-1 text-white text-xs text-center bg-yellow-500">
          <i className="text-xs bi-hourglass-split"></i>
          <span className=" lg:inline capitalize"> Pending </span>
        </span>
      ) : (
        <span className="absolute top-0 border uppercase border-white/75  opacity-90 font-black rounded  left-0 px-1 text-white text-xs text-center bg-green-500">
          <i className="text-xs bi-check2"></i>
          <span className=" lg:inline capitalize"> Completed </span>
        </span>
      )}
      <div className=" ">
        <p className="p-2 my-4 border-white/50 border rounded-lg    text-left text-white font-normal text-base lg:text-lg">
          {todoText}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full ">
        <p className="text-center inline-block px-2 rounded-lg  text-white/60 text-xs  lg:text-sm bg-gray-800">
          <i className="bi-clock-history text-lg lg:text-lg    "></i>
          &nbsp;&nbsp;
          {createdAt}
        </p>

        <div className="flex flex-row justify-end  space-x-3   ">
          {!isDone && (
            <i
              title="Edit"
              onClick={() => {
                if (numberOfOpenForms > 0) return;
                // alert(numberOfOpenForms);

                updateFormState(true);
                toggleToEdit();
              }}
              className="bi-pencil-square cursor-pointer hover:scale-110 text-gray-50  text-base lg:text-lg hover:text-gray-400"
            ></i>
          )}

          {isDone || (
            <i
              title="Mark as done"
              onClick={() => {
                markAsDone(id);
              }}
              className="bi-check2-square cursor-pointer  hover:scale-110 text-gray-50 text-base lg:text-lg hover:text-gray-400"
            ></i>
          )}

          {isDone && (
            <i
              title="Todo has been marked as done"
              className="bi-check-lg hover:text-green-300   text-green-400 text-base lg:text-lg "
            ></i>
          )}

          <i
            title="Delete"
            onClick={() => {
              if (confirm("Are you sure you want to delete the todo?")) {
                deleteTodo(id);
              }
            }}
            className="bi-trash cursor-pointer  hover:scale-110 text-gray-50 text-base lg:text-lg hover:text-gray-400"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default TodoEdit;
