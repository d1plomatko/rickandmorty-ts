import {FC} from "react";
import {TableCell, TableRow} from "@mui/material";

import {IEpisode} from "../../../interfaces";

interface IProps {
    episode: IEpisode
}

const EpisodeRow:FC<IProps> = ({episode}) => {

    return(
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{episode.episode}</TableCell>
            <TableCell>{episode.name}</TableCell>
            <TableCell>{episode.air_date}</TableCell>
        </TableRow>
    )

}

export {EpisodeRow}