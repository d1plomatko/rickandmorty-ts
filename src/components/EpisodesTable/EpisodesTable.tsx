import {FC, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {Container} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {episodesActions} from "../../redux";
import {CustomForm, CustomPagination, CustomTable, Heading} from "../UI";
import {EpisodeRow} from "./EpisodeRow/EpisodeRow";
import {ErrorPage} from "../../pages";


const EpisodesTable: FC = () => {

    const {episodes, totalPages, error} = useAppSelector(state => state.episodesReducer);
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({page: '1', name: ''});

    const headings = ['Episode', 'Name', 'Air Date']

    useEffect(() => {
        dispatch(episodesActions.getEpisodes({
            page: query.get('page') || '',
            name: query.get('name') || ''
        }))
    }, [query, dispatch])

    const searchByName = (name: string) => {
        setQuery({name: name, page: '1'})
    }

    const handlePagination = (value: number) => {
        if (query.get('name')) {
            setQuery({name: query.get('name') || '', page: value.toString()})
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
        <Container disableGutters={true}>

            <Heading>Episodes</Heading>

            <CustomForm
                action={searchByName} buttonName={'Search'} placeholder={'Episode name'}/>

            <CustomTable headings={headings}>
                {
                    episodes.map(episode => <EpisodeRow key={episode.id} episode={episode}/>)
                }
            </CustomTable>

            <CustomPagination handlePagination={handlePagination} totalPages={totalPages}/>

        </Container>
    )


}

export {EpisodesTable}