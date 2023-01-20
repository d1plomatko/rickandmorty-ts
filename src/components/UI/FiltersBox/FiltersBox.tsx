import {FC, ReactNode} from "react";
import {Box, Paper, Typography} from "@mui/material";

import css from './FiltersBox.module.css';

interface IProps {
    children: ReactNode
}

const FiltersBox: FC<IProps> = ({children}) => {

    return (
        <Box component={Paper} className={css.filters_box}>
               <Typography variant={'h6'} className={css.filters_heading}>
                   Filters
               </Typography>
               {children}
        </Box>
    )

}

export {FiltersBox}