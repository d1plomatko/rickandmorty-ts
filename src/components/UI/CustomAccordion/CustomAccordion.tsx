import {FC, ReactNode} from "react";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";


interface IProps {
    children: ReactNode,
    name: string,
    expanded: string,
    handleChange: (isExpanded: boolean, expanded:string) => void
}

const CustomAccordion:FC<IProps> = ({children, name, expanded, handleChange}) => {

    return(
        <Accordion expanded={expanded === name}
                   onChange={(_, isExpanded) => handleChange(isExpanded, name)}>
            <AccordionSummary expandIcon={<i
                className="fa-solid fa-chevron-down"></i>}>{name}</AccordionSummary>
            <AccordionDetails>
                <>
                    {children}
                </>
            </AccordionDetails>
        </Accordion>
    )

}

export {CustomAccordion}