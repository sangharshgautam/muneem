import axios, {AxiosProgressEvent, AxiosResponse} from "axios";
import {Identifier} from "../components/modules/common/Models";

const monetaClient = axios.create({
    baseURL: process.env.REACT_APP_MONETA_API_BASE_URL,
    timeout: 20000
})

const onDownloadProgress = (progressEvent: AxiosProgressEvent, onProgress: (value: number) => void) => {
    // console.log(progressEvent)
    const total = progressEvent.total || 0
    const current = progressEvent.loaded

    let percentCompleted = Math.floor(current / total * 100)
    onProgress(percentCompleted)
}
const MonetaApi = {
    list: <T>(resource: string, onProgress: (value: number) => void ): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.get<T>(`/${resource}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
                onDownloadProgress(progressEvent, onProgress)
            }
        })
    },
    create: <T>(resource: string, entity: T, onProgress: (value: number) => void): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.post<T>('/'+resource, entity, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
                onDownloadProgress(progressEvent, onProgress)
            }
        })
    },
    save: <T extends Identifier>(resource: string, entity: T, onProgress: (value: number) => void): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.put<T>(`/${resource}/${entity.id}`, entity, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
                onDownloadProgress(progressEvent, onProgress)
            }
        })
    },
    get: <T>(resource: string, id: string | number, onProgress: (value: number) => void ): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.get<T>(`/${resource}/${id}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
                onDownloadProgress(progressEvent, onProgress)
            }
        })
    },
    delete: <T>(resource: string, id: string | number, onProgress: (value: number) => void ): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.delete<T>(`/${resource}/${id}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
                onDownloadProgress(progressEvent, onProgress)
            }
        })
    }
}

export default MonetaApi;