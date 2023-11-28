import { AxiosResponse } from 'axios';
import { api } from "../config/axios";
import { boolean } from 'yup';

const setAuthorizationHeader = (cookie: string) => {
        api.defaults.headers.common['Authorization'] = `Bearer ${cookie}`;
};

export const loginService = (data: Login): Promise<{ message: string } | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .post<{
                                success: boolean,
                                status: number,
                                message: string
                                data: User,
                                token: string,
                        }>(`/auth/login`, data)
                        .then((res) => {
                                const { message, token } = res.data;
                                setAuthorizationHeader(token);
                                localStorage.setItem('uid', res.data.data._id)
                                resolve({ message });
                        })
                        .catch((error) => {
                                reject(error.response.data.message);
                        });
        });
};

export const checkLoggedIn = async () => {
        const uid = await localStorage.getItem("uid")
        if (uid) {
                return true
        }
        return false
}
