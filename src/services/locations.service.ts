import {AxiosRes, axiosService} from "./axios.service";
import {urls} from "../configs";
import {IApi, ILocation} from "../interfaces";

export interface ILocationParams {
    page: string,
    name: string,
    type: string,
    dimension: string
}

const locationsService = {
    getLocations: (params: ILocationParams): AxiosRes<IApi<ILocation[]>> => axiosService.get(urls.locations, {params: {...params}})

};

export {
    locationsService
};