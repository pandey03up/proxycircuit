import React,{useState} from 'react';
import './TodosTemplate.css';

const TodosTemplate = (props) =>{
    const [mode,setMode] = useState('default')
    const [insert,setInsertion] = useState('')
    let title
    let todoContainer
    const insertion = () =>{
        props.insertion(insert)
        setMode('default')
        setInsertion('')
    }
    switch (mode){
        case 'default':
           title = <div className = 'title_container'>
                        {props.content.title}
                    </div>
            todoContainer = <div className = 'individual_todo'>
                                {
                                    props.content.todos.map((todo,index)=>{
                                        return(
                                            <div className = 'individual' key = {index}>
                                                {todo}
                                            </div>
                                        )
                                    })
                                }
                            </div>
            break
        case 'edit':
            title = <div className = 'title_container'>
                        {props.content.title}
                        <div className = 'submit_container'>
                            <button className = 'change_submit'
                                onClick = {()=> setMode('default')}
                            >
                                &#10004;
                            </button>
                        </div>
                    </div>
            todoContainer = <div className = 'individual_todo'>
                {
                    props.content.todos.map((todo,index)=>{
                        return(
                            <div className = 'individual' key ={index}>
                                <textarea className = 'new_input' 
                                    value = {todo} 
                                    onChange = {(event)=>props.editTodo(event,index)} />
                                <button className = 'delete_'
                                    onClick = {()=>props.deleteIndividual(index)}
                                >
                                    X
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            break
        case 'add_new': 
            title = <div className = 'title_container'>
                        {props.content.title}
                        <div className = 'submit_container'>
                            <button className = 'change_submit'
                                onClick = {()=> insertion()}
                            >
                                &#10004;
                            </button>
                        </div>
                    </div>
            todoContainer = <div className = 'individual_todo'>
                <div className = 'individual'>
                    <textarea className = 'new_input' 
                        value = {insert}
                        onChange = {(event)=>setInsertion(event.target.value)}
                    />
                    <button className = 'delete_'
                        onClick = {()=>setMode('default')}
                    >
                        X
                    </button>
                </div>
                {
                    props.content.todos.map((todo,index)=>{
                        return(
                            <div className = 'individual' key ={index}>
                                {todo}
                            </div>
                        )
                    })
                }
            </div>
            break
        case 'del':
            props.deleteContainer()
            setMode('default')
            break
    }
    return(
        <div className = 'container'>
            <div className = 'title'>
                {title}
                <div className = 'menus'>
                    <button className = 'dropbtn'>&#9776;</button>
                    <div class="dropdown-content">
                        <button onClick = {()=> setMode('edit')}>&#9998;</button>
                        <button onClick = {()=> setMode('add_new')}>&#10010;</button>
                        <button onClick = {()=> setMode('del')}>&#9986;</button>
                    </div>
                </div>
            </div>
            {todoContainer}
        </div>
    )
}
export default TodosTemplate