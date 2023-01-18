import {FC} from "react";
import {ILocation} from "../../../interfaces";
import {TableCell, TableRow} from "@mui/material";

interface IProps {
    location: ILocation
}

const LocationRow: FC<IProps> = ({location}) => {

    return(
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{location.name}</TableCell>
            <TableCell>{location.type}</TableCell>
            <TableCell>{location.dimension}</TableCell>
        </TableRow>
    )

}

export {LocationRow}