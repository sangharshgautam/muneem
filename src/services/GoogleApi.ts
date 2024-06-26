import axios, {AxiosProgressEvent, AxiosResponse} from "axios";
const googleClient = axios.create({
    baseURL: 'https://www.googleapis.com'
})

const GoogleApi = {
    getUserInfo: (): Promise<AxiosResponse> => {
        const accessToken = localStorage.getItem("accessToken")
        return googleClient.get(`/oauth2/v1/userinfo?access_token=${accessToken}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json'
            }
        })
    }
}

export default GoogleApi;