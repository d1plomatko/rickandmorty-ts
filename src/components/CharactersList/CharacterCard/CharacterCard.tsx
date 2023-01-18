import {FC, useState} from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

import {CharacterPopUp} from "./CharacterPopUp/CharacterPopUp";
import {ICharacter} from "../../../interfaces";

interface IProps {
    character: ICharacter
}

const CharacterCard:FC<IProps> = ({character}) => {

    const [open, setOpen] = useState(false);

    return(
        <>
            <CharacterPopUp character={character} open={open} setOpen={setOpen}/>

            <Card sx={{
                width: 250,
                height: 350
            }}
                  onClick={() => setOpen(true)}>

                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={character.image}
                        alt={character.name}
                    />

                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div" sx={{height: 60}}>
                            {character.name}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Species - {character.species}
                        </Typography>

                    </CardContent>

                </CardActionArea>

            </Card>
        </>
    )

}

export {CharacterCard}