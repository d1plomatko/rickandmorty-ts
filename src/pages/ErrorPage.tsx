import {FC, ReactNode} from "react";
import {Container} from "@mui/material";

import {Heading} from "../components";

interface IProps {
    children: ReactNode
}

const ErrorPage: FC<IProps> = ({children}) => {

    return (
        <Container sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Heading>{children}</Heading>
        </Container>
    )

};

export {ErrorPage};