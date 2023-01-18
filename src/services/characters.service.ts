import {AxiosRes, axiosService} from "./axios.service";

import {urls} from "../configs";
import {IApi, ICharacter} from "../interfaces";

export interface ICharacterParams {
    page: string,
    species: string,
    status: string,
    gender: string
}

const charactersService = {
    getCharacters: (params: ICharacterParams): AxiosRes<IApi<ICharacter[]>> => axiosService.get(urls.characters, {
        params: {
            ...params
        }
    })
};

export {
    charactersService
};