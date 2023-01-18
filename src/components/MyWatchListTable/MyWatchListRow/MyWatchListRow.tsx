import {FC} from "react";
import {ITodo} from "../../../interfaces";
import {Button, Checkbox, TableCell, TableRow, Typography} from "@mui/material";

interface IProps {
    todo: ITodo,
    deleteTodo: (id: number) => void,
    updateTodo: (id: number) => void
}


const MyWatchListRow: FC<IProps> = ({todo, updateTodo, deleteTodo}) => {

    const color = !todo.watched ? 'red' : 'green'


    return(
        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            <TableCell sx={{maxWidth: '100px'}}>
                <Checkbox onClick={() => updateTodo(todo.id)} checked={todo.watched}/>
            </TableCell>
            <TableCell>
                <Typography color={color} sx={{width: '300px'}}>
                    {todo.name}
                </Typography>
            </TableCell>
            <TableCell>
                <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
            </TableCell>
        </TableRow>

    )

}

export {MyWatchListRow}