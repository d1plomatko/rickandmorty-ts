import {FC, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {Box, Container} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {locationsActions} from "../../redux";
import {CustomForm, CustomPagination, CustomTable, Heading} from "../UI";
import {LocationFilters} from "./LocationsFilters/LocationFilters";
import {LocationRow} from "./LocationRow/LocationRow";
import {ErrorPage} from "../../pages";
import css from './LocationsTable.module.css';

const LocationsTable: FC = () => {

    const {locations, totalPages, error} = useAppSelector(state => state.locationsReducer);
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({page: '1', name: '', type: '', dimension: ''});

    useEffect(() => {
        dispatch(locationsActions.getLocations({
            page: query.get('page') || '1',
            name: query.get('name') || '',
            type: query.get('type') || '',
            dimension: query.get('dimension') || ''
        }))
    }, [query, dispatch])

    const searchByName = (name: string) => {
        setQuery({name: name, page: '1'})

    }

    const handlePagination = (value: number) => {
        if (query.get('name')) {
            setQuery({name: query.get('name') || '', page: value.toString()})
        } else if (query.get('type')) {
            setQuery({type: query.get('type') || '', page: value.toString()})
        } else if (query.get('dimension')) {
            setQuery({dimension: query.get('dimension') || '', page: value.toString()})
        } else {
            setQuery({page: value.toString()})
        }

        window.scroll(0, 0)
    }

    const headings = ['Name', 'Type', 'Dimension']

    if (error) {
        return (
            <ErrorPage>{error.error}</ErrorPage>
        )
    }

    return (
        <>
            <Heading>Locations</Heading>

            <CustomForm buttonName={'Search'} placeholder={'Location name'} action={searchByName}/>

            <Container disableGutters={true}
                       className={css.container}>

                <LocationFilters/>

                <Box className={css.table_wrapper}>
                    <CustomTable headings={headings}>
                        {
                            locations.map(location => <LocationRow key={location.id}
                                                                   location={location}/>)
                        }
                    </CustomTable>
                </Box>

            </Container>

            <CustomPagination totalPages={totalPages} handlePagination={handlePagination}/>
        </>
    )

}

export {LocationsTable}