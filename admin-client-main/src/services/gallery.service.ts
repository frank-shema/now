import { api } from "../config/axios";

export const fetchAllFolders = (): Promise<Folder[] | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .get<{
                                success: boolean,
                                status: number,
                                message: string,
                                data: { folders: Folder[] },
                        }>(`/folders/`)
                        .then((res) => {
                                resolve(res.data.data.folders);
                        })
                        .catch((error) => {
                                console.error('Error fetching All Folders:', error);
                                reject(error);
                        });
        });
};

export const fetchOneFolder = (id: string): Promise<Folder | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .get<{
                                success: boolean,
                                status: number,
                                message: string,
                                data: { folder: Folder },
                        }>(`/folders/${id}`)
                        .then((res) => {
                                resolve(res.data.data.folder);
                        })
                        .catch((error) => {
                                console.error('Error fetching One Folder:', error);
                                reject(error);
                        });
        });
};
export const createFolder = (folder: Folder): Promise<Folder | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .post<{
                                success: boolean,
                                status: number,
                                message: string,
                                data: Folder,
                        }>(`/folders/`, folder)
                        .then((res) => {
                                console.log(res.data)
                                resolve(res.data.data);
                        })
                        .catch((error) => {
                                console.error('Error creating Folder:', error);
                                reject(error);
                        });
        });
};