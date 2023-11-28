import { api } from "../config/axios";

export const fetchAllNots = (id: string): Promise<Notification[] | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .get<Notification[]>(`/notifications/${id}`)
                        .then((res) => {
                                resolve(res.data);
                        })
                        .catch((error) => {
                                console.error('Error fetching All Notifications:', error);
                                reject(error);
                        });
        });
};