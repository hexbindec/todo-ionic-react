import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";
import { useState } from "react";

const Todo: React.FC = () => {
  ///////////////////
  // State Variables
  ///////////////////

  // Array that stored a list of todo items as strings
  const [todoList, setTodoList] = useState<string[]>([]);

  // The new todo item input by the user inside <IonInput />
  const [newTodo, setNewTodo] = useState("");

  //////////////
  // Functions
  /////////////

  // Function will save the user's input to a state var
  const handleUserInput = (event: any) => {
    setNewTodo(event.target.value);
  };

  // Function will add the user's input to the todoList state array
  const handleAddTodo = () => {
    // Create a temp array to add the new todo item
    const tempArray = todoList;

    // Push the new todo to the end of the array
    tempArray.push(newTodo);
    setTodoList(tempArray); // Update the state variable Todo List with the latest version of tempArray
    setNewTodo(""); // Reset the user's input field
  };

  const handleDelete = (indexToDelete: number) => {
    // Create a temp array to store only the todo items that I want to keep
    // (and skip the one I want to delete)
    const tempArray = [];
    for (let i = 0; i < todoList.length; i++) {
      // If the index is not the same as the the element where the button was clicked,
      // copy the element to tempArray
      if (i != indexToDelete) {
        tempArray.push(todoList[i]);
      }
    }
    // Update the todoList state array with the most recent elements of the tempArray
    setTodoList(tempArray);
  };

  // Function will render a formatted version of todoList inside an
  // array called formattedArray.
  const renderTodoList = () => {
    // Create a temp array that will store the Ionic components formatted todoList
    const formattedArray = [];
    // Loop the todoList array
    for (let i = 0; i < todoList.length; i++) {
      // For each todoList item, add some Ionic component formatting
      // and save to formattedArray
      formattedArray.push(
        <IonItem key={i}>
          <IonLabel>{todoList[i]}</IonLabel>
          <IonButton onClick={() => handleDelete(i)}>Delete</IonButton>
        </IonItem>
      );
    }

    // Return the formattedArray to the user
    return formattedArray;
  };

  return (
    <IonPage>
      <IonContent>
        <h1>Todo App</h1>
        <IonList>{renderTodoList()}</IonList>
        <IonInput
          placeholder="Enter new Todo"
          value={newTodo}
          onIonInput={handleUserInput}
        />
        <IonButton onClick={handleAddTodo}>Add</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Todo;
