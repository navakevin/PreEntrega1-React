
import TodoList from "./TodoList"
import {v4 as uuid} from "uuid"
import { useState ,useRef } from "react"
import { Container,Row,Form,FloatingLabel,Button } from "react-bootstrap"



export const App = () => {

    const [todoList, setTodoList] = useState([])
    const todoRef = useRef()
    const handleAddTodo =(e)=>{
        e.preventDefault()
        const newTodo = {
            id:uuid(),
            description:todoRef.current.value,
            completed:false
        }
        setTodoList((prevState)=>{
            return[...prevState,newTodo]
        })
        todoRef.current.value=null
        
    }
    //estado de la aplicacion

    
    return (
       /*  <Container>
            <Row className="text-center mt4">
         <h1 >Aplicacion General que hace de todo</h1>
         <nav>Bienvenidos </nav>
            
         <TodoList todoList={todoList}></TodoList>
         </Row>
            <Form className="text-center">
            <input ref={todoRef} type="text"placeholder="nueva tarea"></input>
            <Button className="m-2" onClick={handleAddTodo}>Agregar Tareas</Button>
            <Button className="m-2">Eliminar Tareas</Button>
            </Form>

            
        
        </Container> */
         <Container>

            <h1 className="text-center mt-4">Fancy Todo List</h1>
            <Form className="my-5"
            >
                <Row className="align-items-center justify-content-center text-capitalize">
                    <Form.Group className="col-12 col-lg-8">
                        <FloatingLabel controlId="floatingInput" label="Nueva Tarea">
                            <Form.Control ref={todoRef} type="text" placeholder="Ingrese descripciÃ³n..." autoFocus />
                        </FloatingLabel>
                    </Form.Group>
                    <Button size="sm" variant="success" className="mt-4 w-50" onClick={handleAddTodo}>Agregar Tarea</Button>
                    <Button size="sm" variant="danger" className="m-2 w-50">Eliminar Finalizadas</Button>
                </Row>
            </Form>
            <Row className="text-center">
                <TodoList todoList={todoList} setTodoList={setTodoList} />
            </Row>

        </Container >
    )
}

