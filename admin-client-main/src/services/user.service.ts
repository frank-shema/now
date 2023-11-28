import { api } from "../config/axios";

export const fetchAllUsers = (): Promise<User[] | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .get<{
                                success: boolean,
                                status: number,
                                message: string,
                                data: { users: User[] },
                        }>(`/users/`)
                        .then((res) => {
                                resolve(res.data.data.users);
                        })
                        .catch((error) => {
                                reject({ message: `Error fetching all Users`, error });
                        });
        });
};

export const fetchOneUser = (id: string): Promise<User | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .get<User>(`/users/${id}`)
                        .then((res) => {
                                resolve(res.data);
                        })
                        .catch((error) => {
                                reject({ message: `Error fetching User: ${id}`, error });
                        });
        });
};
export const createUser = (user: CreateUser): Promise<User | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .post<User>(`/users/`, user)
                        .then((res) => {
                                resolve(res.data);
                        })
                        .catch((error) => {
                                console.error('Error creating Users:', error);
                                reject(error);
                        });
        });
};