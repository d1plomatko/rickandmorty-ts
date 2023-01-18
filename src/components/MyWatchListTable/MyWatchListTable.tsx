import {FC} from "react";
import useLocalStorage from "use-local-storage";
import {Container} from "@mui/material";

import {CustomForm, CustomTable, Heading} from "../UI";
import {MyWatchListRow} from "./MyWatchListRow/MyWatchListRow";
import {ITodo} from "../../interfaces";

const MyWatchListTable:FC = () => {


    const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', []);


    const createEpisode = (name: string) => {
        const newEpisode: ITodo = {
            id: Date.now(),
            name: name,
            watched: false
        }

        if (todos) {
            setTodos([...todos, newEpisode] )
        }
    }

    const deleteTodo = (id: number) => {
        const index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1)
        setTodos([...todos])
    }

    const updateTodo = (id:number) => {
        const find = todos.find(todo => todo.id === id);
        if (find) {
            find.watched = !find?.watched
        }
        setTodos([...todos])
    }

    const headings = ['Watched', 'Name', 'Delete']

    return (
        <Container maxWidth={'lg'} fixed={true} sx={{margin: '0 auto', minHeight: '90vh'}}>
            <Heading>My Watch List</Heading>
            <CustomForm buttonName={'Add'} action={createEpisode} placeholder={'Episode name'}/>

            {
                todos.length ? <CustomTable headings={headings}>
                    {
                        todos.map(todo => <MyWatchListRow key={todo.id} todo={todo}
                                                           deleteTodo={deleteTodo}
                                                           updateTodo={updateTodo}/>)
                    }
                </CustomTable> : <></>
            }

        </Container>
    )

}

export {MyWatchListTable}