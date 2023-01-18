import {FC} from "react";
import {Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";

import {ICharacter} from "../../../../interfaces";
import css from './CharacterPopUp.module.css';

interface IProps {
    character: ICharacter,
    open: boolean,
    setOpen: (open: boolean) => void
}

const CharacterPopUp: FC<IProps> = ({character, open, setOpen}) => {

    return (
        <Dialog
            onClose={() => setOpen(false)}
            fullWidth={true}
            maxWidth={'sm'}
            open={open}
        >
            <DialogTitle className={css.card_title}>
                <Typography fontSize={'25px'}>{character.name}</Typography>
                <Button onClick={() => setOpen(false)}>Close</Button>
            </DialogTitle>
            <DialogContent dividers className={css.card_content}>
                <Avatar alt={character.name}
                        src={character.image}
                        className={css.card_avatar}/>
                <Box>
                    <Typography gutterBottom>
                        Species - {character.species}
                    </Typography>
                    <Typography gutterBottom>
                        Status - {character.status}
                    </Typography>
                    <Typography gutterBottom>
                        Origin - {character.origin.name}
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>

    )

}

export {CharacterPopUp}