import axios, {AxiosProgressEvent, AxiosResponse} from "axios";

const monetaClient = axios.create({
    baseURL: process.env.REACT_APP_MONETA_API_BASE_URL,
    timeout: 20000
})

const MonetaApi = {
    list: <T>(name: string, onProgress: (value: number) => void ): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.get<T>(`/${name}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
                console.log(progressEvent)
                const total = progressEvent.total || 0
                const current = progressEvent.loaded

                let percentCompleted = Math.floor(current / total * 100)
                onProgress(percentCompleted)
            }
        })
    },
    create: <T>(name: string, entity: T, onProgress: (value: number) => void): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.post<T>('/'+name, entity, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
                console.log(progressEvent)
                const total = progressEvent.total || 0
                const current = progressEvent.loaded

                let percentCompleted = Math.floor(current / total * 100)
                onProgress(percentCompleted)
            }
        })
    },
    get: <T>(name: string, id: string, onProgress: (value: number) => void ): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.get<T>(`/${name}/${id}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
                console.log(progressEvent)
                const total = progressEvent.total || 0
                const current = progressEvent.loaded

                let percentCompleted = Math.floor(current / total * 100)
                onProgress(percentCompleted)
            }
        })
    },
    delete: <T>(name: string, id: string | number, onProgress: (value: number) => void ): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.delete<T>(`/${name}/${id}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
                console.log(progressEvent)
                const total = progressEvent.total || 0
                const current = progressEvent.loaded

                let percentCompleted = Math.floor(current / total * 100)
                onProgress(percentCompleted)
            }
        })
    }
}

export default MonetaApi;