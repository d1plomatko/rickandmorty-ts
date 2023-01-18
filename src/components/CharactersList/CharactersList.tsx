import {FC, useEffect} from "react";
import {Box, Container} from "@mui/material";
import {useSearchParams} from "react-router-dom";

import {CustomPagination, Heading} from "../UI";
import {CharactersFilters} from "./CharactersFilters/CharactersFilters";
import {CharacterCard} from "./CharacterCard/CharacterCard";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {charactersActions} from "../../redux";
import css from './CharactersList.module.css';
import {ErrorPage} from "../../pages";

const CharactersList: FC = () => {

    const {
        characters,
        totalPages,
        error
    } = useAppSelector(state => state.charactersReducer);
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams();


    useEffect(() => {

        dispatch(charactersActions.getCharacters({
            page: query.get('page') || '1',
            species: query.get('species') || '',
            status: query.get('status') || '',
            gender: query.get('gender') || ''
        }))
    }, [dispatch, query])


    const handlePagination = (value: number) => {
        if (query.get('species')) {
            setQuery({species: query.get('species') || '', page: value.toString()})
        } else if (query.get('status')) {
            setQuery({status: query.get('status') || '', page: value.toString()})
        } else if (query.get('gender')) {
            setQuery({gender: query.get('gender') || '', page: value.toString()})
        } else {
            setQuery({page: value.toString()})
        }
        window.scroll(0, 0)
    }

    if (error) {
        return (
            <ErrorPage>{error.error}</ErrorPage>
        )
    }

    return (
        <>
            <Heading>Characters</Heading>

            <Container
                fixed={true}
                maxWidth={'lg'}
                disableGutters={true}
                className={css.container}>

                <CharactersFilters/>

                <Box className={css.characters_wrapper}>
                    {
                        characters.map(character => <CharacterCard key={character.id}
                                                                   character={character}/>)
                    }
                </Box>

            </Container>

            <CustomPagination handlePagination={handlePagination} totalPages={totalPages}/>
        </>

    )

}

export {CharactersList}