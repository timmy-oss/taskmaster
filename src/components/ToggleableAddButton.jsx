import React from "react";
import TodoEdit from "./TodoEdit";

function ToggleableAddButton({
  showEdit,
  addNewTodo,
  toggleToAddButton,
  toggleToEdit,
  updateFormState,
  themePreference,
}) {
  const [newTodoText, setNewTodoText] = React.useState("");

  function handleFieldChange(e) {
    setNewTodoText(e.target.value);
  }

  function cleanUp() {
    setNewTodoText("");
  }

  if (showEdit)
    return (
      <>
        {
          <div className="fixed top-0 left-0 z-10 bottom-0 right-0  bg-gray-900/90 "></div>
        }
        <TodoEdit
          localTodoText={newTodoText}
          handleFieldChange={handleFieldChange}
          addNewTodo={addNewTodo}
          cleanUp={cleanUp}
          toggleToView={toggleToAddButton}
          toggleToAddButton={toggleToAddButton}
          isNewEdit
          updateFormState={updateFormState}
          themePreference={themePreference}
        />
      </>
    );

  return (
    <div className="absolute z-[2] lg:scale-75  rounded-full right-8 lg:right-8 mx-auto top-[75vh] lg:top-[85vh]">
      <i
        onClick={toggleToEdit}
        title="Add new task"
        className={
          "bi-plus text-4xl bg-white lg:text-6xl px-2 lg:px-4 py-1 lg:py-2  hover:scale-[1.1] transition-transform duration-300 cursor-pointer ring-1 lg:ring-0 lg:hover:ring-1  rounded-full  text-center " +
          (themePreference === "Blue"
            ? "text-blue-500 ring-blue-500"
            : themePreference === "Green"
            ? "text-green-500 ring-green-500"
            : themePreference === "Red"
            ? "text-red-500 ring-red-500"
            : "")
        }
      ></i>
    </div>
  );
}

export default ToggleableAddButton;
