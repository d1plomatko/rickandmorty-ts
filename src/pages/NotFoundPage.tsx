import {FC} from "react";
import {Container} from "@mui/material";

import {Heading} from "../components";

const NotFoundPage: FC = () => {

    return(
        <Container sx={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Heading>Not Found</Heading>
        </Container>
    )

}

export {NotFoundPage}