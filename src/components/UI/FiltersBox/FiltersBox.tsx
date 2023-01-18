import {FC, ReactNode} from "react";
import {Box, Paper, Typography} from "@mui/material";

import css from './FiltersBox.module.css';

interface IProps {
    children: ReactNode
}

const FiltersBox: FC<IProps> = ({children}) => {

    return (
        <Box component={Paper} className={css.filters_box}>
           <Box>
               <Typography variant={'h6'} className={css.filters_heading}>
                   Filters
               </Typography>
               {children}
           </Box>
            <Box className={css.banners_wrapper}>
                <img
                    src={'https://i.pinimg.com/564x/7a/fc/33/7afc33cf4ee9cc328aaa9a4f4ef4dfe8.jpg'}
                    className={css.filters_banner} alt={'banner1'}/>
                <img src={'https://www.justwatch.com/images/poster/300655827/s332/season-6'}
                     className={css.filters_banner} alt={'banner2'}/>
                <img
                    src={'https://sm.mashable.com/t/mashable_in/photo/default/image-12_ua4g.720.jpg'}
                    className={css.filters_banner} alt={'banner3'}/>

            </Box>
            <img
                src={'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/08/Rick--Morty-Season-6EWKSF-feature.jpg'}
                className={css.top_banner} alt={'banner3'}/>
        </Box>
    )

}

export {FiltersBox}