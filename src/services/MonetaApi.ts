import axios, {AxiosProgressEvent, AxiosResponse} from "axios";

const monetaClient = axios.create({
    baseURL: process.env.REACT_APP_MONETA_API_BASE_URL,
    timeout: 20000
})

const MonetaApi = {
    list: <T>(resource: string, onProgress: (value: number) => void ): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.get<T>(`/${resource}`, {
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
    create: <T>(resource: string, entity: T, onProgress: (value: number) => void): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.post<T>('/'+resource, entity, {
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
    save: <T>(resource: string, id: string | number, entity: T, onProgress: (value: number) => void): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.put<T>(`/${resource}/${id}`, entity, {
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
    get: <T>(resource: string, id: string | number, onProgress: (value: number) => void ): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.get<T>(`/${resource}/${id}`, {
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
    delete: <T>(resource: string, id: string | number, onProgress: (value: number) => void ): Promise<AxiosResponse<T>> => {
        const accessToken = localStorage.getItem("accessToken")
        return monetaClient.delete<T>(`/${resource}/${id}`, {
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