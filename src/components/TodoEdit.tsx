import React from "react";

function TodoEdit({
  todoText,
  handleFieldChange,
  localTodoText,
  toggleToView,
  id,
  updateTodo,
  addNewTodo,
  cleanUp,
  isNewEdit,
  updateFormState,
  themePreference,
}) {
  const isNewEditClasses =
    " fixed top-[20vh] left-0 right-0 w-4/5 mx-auto   z-30  max-w-lg ";
  const defaultClassnames =
    " ring-gray-700/80  rounded-lg  bg-gradient-to-tr from-black   px-4  pt-2 pb-2 ";
  return (
    <div
      className={
        (isNewEdit ? defaultClassnames + isNewEditClasses : defaultClassnames) +
        (themePreference === "Blue"
          ? "to-blue-500 "
          : themePreference === "Green"
          ? "to-green-500 "
          : themePreference === "Red"
          ? "to-red-500 "
          : "")
      }
    >
      <input
        className="placeholder-60 lg:mx-auto text-lg lg:text-xl text-gray-700 focus:ring-gray-500 ring-white outline-none rounded w-full lg:w-[95%] my-4  pt-4 lg:pt-8 pl-4 lg:pl-10 pr-4 pb-4 lg:pb-6 ring-1 block m-1 ring-gray-900/90 caret-gray-700"
        type="text"
        placeholder="What to do next?"
        required
        onChange={handleFieldChange}
        value={localTodoText}
      />

      <div className="flex-row flex justify-center space-x-8 my-8 content-center">
        <button
          onClick={() => {
            if (!localTodoText) {
              return;
            }

            if (!todoText && localTodoText) {
              addNewTodo(localTodoText);
              toggleToView();
              cleanUp();
              return;
            }

            updateTodo(id, localTodoText);
            updateFormState(false);
            toggleToView();
          }}
          className={
            " shadow-xl ring-1 w-2/5 rounded lg:text-xl  cursor-pointer hover:bg-gray-300 transition-colors text-green-500 bg-gray-200  p-2 lg:py-3 flex-initial text-center capitalize text-base"
          }
          role="button"
          disabled={!localTodoText}
        >
          {todoText ? "Update" : "Create"}
        </button>
        <button
          onClick={() => {
            updateFormState(false);

            toggleToView();
          }}
          className=" w-2/5 rounded shadow-xl cursor-pointer hover:bg-gray-300 transition-colors text-red-500 bg-gray-200  text-base lg:text-xl lg:py-3 flex-initial p-2 text-center capitalize "
          role="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default TodoEdit;
