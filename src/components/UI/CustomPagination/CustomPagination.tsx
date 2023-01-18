import {FC} from "react";
import {Pagination} from "@mui/material";
import {useSearchParams} from "react-router-dom";

import css from './CustomPagination.module.css';

interface IProps {
    totalPages: number,
    handlePagination: (num: number) => void
}

const CustomPagination: FC<IProps> = ({totalPages, handlePagination}) => {

    const [query, ] = useSearchParams({page: '1'});

    const currentPage = query.get('page') || '1'

    return(
        <>
            <Pagination
                onChange={(_, num) => handlePagination(num)}
                page={parseInt(currentPage)}
                count={totalPages}
                color={'primary'}
                className={css.pagination}
            />
        </>
    )

}

export {CustomPagination}