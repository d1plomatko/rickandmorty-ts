import {FC, ReactNode} from "react";
import {
    Paper,
    Table,
    TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

interface IProps {
    children: ReactNode,
    headings: string[],
}

const CustomTable: FC<IProps> = ({children, headings}) => {

    return (
        <TableContainer component={Paper}
                        sx={{minHeight: '50vh'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            headings.map((heading, index) => <TableCell
                                key={index}><Typography fontFamily={'Rowdies, sans-serif'}
                                                        component={'h1'}
                                                        variant={'h6'}>{heading}</Typography></TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export {CustomTable}