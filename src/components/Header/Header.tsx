import {FC} from "react";

import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header: FC = () => {
    const navItems = ['characters', 'episodes', 'locations', 'my watch list']


    return (
        <AppBar>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div">
                    RickAndMorty
                </Typography>
                <Box className={css.link_wrapper}>

                    {
                        navItems.map((item, index) => <NavLink
                            style={({isActive}) => ({
                                opacity: isActive ? 1 : 0.8,
                                borderBottom: isActive ? '2px solid #fff' : 'none'
                            })}
                            className={css.link} key={index}
                            to={item.split(' ').join('-')}>{item}</NavLink>)
                    }

                </Box>
            </Toolbar>
        </AppBar>
    )


}

export {Header}