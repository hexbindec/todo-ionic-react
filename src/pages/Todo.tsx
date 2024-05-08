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
  //////////////////
  // State Variables
  //////////////////

  const [todoList, setTodoList] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  ////////////
  // Functions
  ////////////

  // Function will save the user's input to a state var
  const handleUserInput = (event: any) => {
    setNewTodo(event.target.value);
  };

  // Function will add the user's input to the todoList state array
  const handleAddTodo = () => {
    // Create a temp array to add the new todo item
    const tempArray = todoList;
    tempArray.push(newTodo);
    setTodoList(tempArray); // Update the todo list with the new item
    setNewTodo(""); // Refresh the user's input field

    console.log("Todo list: ", todoList);
  };

  const handleDelete = (indexToDelete: number) => {
    // Create a temp array to store only the todo items I want to keep
    // (and skip the one I want to delete)
    const tempArray = [];
    for (let i = 0; i < todoList.length; i++) {
      if (i !== indexToDelete) {
        tempArray.push(todoList[i]);
      }
    }

    // Update the todoList state array with the final values of the tempArray
    // In other words, the todoList state array will contain all items except the one we just deleted
    setTodoList(tempArray);
  };

  // Function will render the formatted version of the Todo list in an array called formattedArray
  // 1) Initialize an empty array formattedArray
  // 2) Loop through the state array todoList
  // 3) For each element inside todoList, get the string todoList[i] (the todo item)
  // 4) Inside the formattedArray, create an <IonItem> component with the previous string
  // inside an <IonLabel> and followed by a delete <IonButton>
  // 5) Return this formattedArray to the user
  const renderTodoList = () => {
    const formattedArray = [];
    for (let i = 0; i < todoList.length; i++) {
      formattedArray.push(
        <IonItem key={i}>
          <IonLabel>{todoList[i]}</IonLabel>
          <IonButton onClick={() => handleDelete(i)}>Delete</IonButton>
        </IonItem>
      );
    }
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
