import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonList, IonPage } from "@ionic/react"
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
    }


    // Function will add the user's input to the todoList state array
    const handleAddTodo = () => {
        const todoListArray = todoList;
        todoListArray.push(newTodo);
        setTodoList(todoListArray);
        setNewTodo(""); // Refresh the user's input field

        console.log("Todo list: ", todoList)
    }

    const renderTodoList = () => {
        const formattedArray = [];
        for (let i = 0; i < todoList.length; i++) {
            formattedArray.push (
                <IonItem key={i}>
                    <IonLabel>{todoList[i]}</IonLabel>
                    <IonButton>Delete</IonButton>
                </IonItem>
            )
        }
        return formattedArray;
    }

    return (
        <IonPage>
            <IonContent>
                <h1>Todo App</h1>
                <IonList>
                    {renderTodoList()}
                </IonList>
                <IonInput 
                    placeholder="Enter new Todo"
                    value={newTodo}
                    onIonInput={handleUserInput}
                />
                <IonButton onClick={handleAddTodo}>Add</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Todo;