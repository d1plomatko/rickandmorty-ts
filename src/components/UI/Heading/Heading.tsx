import {FC, ReactNode} from "react";
import {Typography} from "@mui/material";

import css from './Heading.module.css';

interface IProps {
    children: ReactNode
}

const Heading: FC<IProps> = ({children}) => {

    return (
        <Typography component={'h1'} variant={'h3'} className={css.heading}>
            {children}
        </Typography>
    )

}

export {Heading}