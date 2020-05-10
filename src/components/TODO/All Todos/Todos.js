import React,{useState,useEffect} from 'react';
import Template from '../Home/HomeTemplate';
import TodosTemplate from './TodosTemplate/TodosTemplate';
import {useAuth0} from '../../../react-auth0-spa'
import './Todos.css';

const Todos = (props) =>{
    const {loading,user,logout} = useAuth0()
    const [allTodos,setAllTodos] = useState([
        {
            title : 'Office',
            todos : [
                'Sign in to use your favorite productivity apps from any device',
                'Get the premium Office apps with Microsoft 365',
                'Welcome to Office',
                'Your place to create, communicate, collaborate, and get great work done',
            ]
        },
        {
            title : 'Home',
            todos : [
                '‎The True Meaning of Smekday',
                'Find your favorite Disney movies available now or pre-order on Blu-ray',
                `One of the best dreamworks films I've ever seen! It stands out from all other animation films!`,
                `Home is a 2009 documentary by Yann Arthus-Bertrand.`,
            ]
        },
        {
            title : 'Home',
            todos : [
                '‎The True Meaning of Smekday',
                'Find your favorite Disney movies available now or pre-order on Blu-ray',
                `One of the best dreamworks films I've ever seen! It stands out from all other animation films!`,
                `Home is a 2009 documentary by Yann Arthus-Bertrand.`,
            ]
        },
        {
            title : 'Home',
            todos : [
                '‎The True Meaning of Smekday',
                'Find your favorite Disney movies available now or pre-order on Blu-ray',
                `One of the best dreamworks films I've ever seen! It stands out from all other animation films!`,
                `Home is a 2009 documentary by Yann Arthus-Bertrand.`,
            ]
        },
        {
            title : 'Home',
            todos : [
                '‎The True Meaning of Smekday',
                'Find your favorite Disney movies available now or pre-order on Blu-ray',
                `One of the best dreamworks films I've ever seen! It stands out from all other animation films!`,
                `Home is a 2009 documentary by Yann Arthus-Bertrand.`,
            ]
        },
    ])
    const deleteOneTodo = (individualI,index) =>{
        let todos = [...allTodos]
        todos[index].todos.splice(individualI,1)
        setAllTodos(todos)
    }
    const editTodo = (event,individualI,index) =>{
        let todos = [...allTodos]
        todos[index].todos[individualI] = event.target.value
        setAllTodos(todos)
    }
    const insertion = (value,index) =>{
        let todos = [...allTodos]
        todos[index].todos = [value,...todos[index].todos]
        setAllTodos(todos)
    }
    const newTodoContainer = () =>{
        let title = prompt('Enter the title : ')
        let insertion = [...allTodos]
        let newTodo = {
            title : title,
            todos : [

            ]
        }
        insertion = [newTodo,...insertion]
        setAllTodos(insertion)
    }
    const containerDeletion = (index) =>{
        let todos = [...allTodos]
        todos.splice(index,1)
        setAllTodos(todos)
    }
    if(loading || !user){
        return(
            <div>loading</div>
        )
    }
    else{
    return(
        <Template logout = {() => logout({})}
            profile = {user.picture}>
        {console.log(user,'Todos...')}
            <div className = 'create_new'>
                <button className = 'create_button' onClick = {()=> newTodoContainer()}>Create New +</button>
            </div>
            <div className = 'all_todos_container'>
                <div className = 'all_todos'>
                    {
                        allTodos.map((content,index)=>{
                            return(
                                <div className = 'single_container' key = {index}>
                                    <TodosTemplate content = {content} 
                                        deleteIndividual = {(indexIndividual)=> deleteOneTodo(indexIndividual,index)}
                                        editTodo = {(event,individualI)=>editTodo(event,individualI,index)}
                                        insertion = {(value) => insertion(value,index)}
                                        deleteContainer = {() => containerDeletion(index)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Template>
    )
}
}
export default Todos