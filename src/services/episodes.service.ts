import {AxiosRes, axiosService} from "./axios.service";

import {urls} from "../configs";
import {IApi, IEpisode} from "../interfaces";

const episodesService = {
    getEpisodes: (page: string, name: string): AxiosRes<IApi<IEpisode[]>> => axiosService.get(urls.episodes, {
        params: {
            page,
            name
        }
    })
}

export {
    episodesService
};