import { api } from "../config/axios";

export const fetchAllProjects = (): Promise<Project[] | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .get<
                                {
                                        success: boolean,
                                        status: number,
                                        message: string,
                                        data: { projects: Project[] },
                                }>(`/projects/`)
                        .then((res) => {
                                resolve(res.data.data.projects);
                        })
                        .catch((error) => {
                                console.error('Error fetching All Projects:', error);
                                reject(error);
                        });
        });
};

export const fetchOneProject = (id: string): Promise<Project | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .get<{
                                success: boolean,
                                status: number,
                                data: {
                                        project: Project,
                                }
                        }>(`/projects/${id}`)
                        .then((res) => {
                                resolve(res.data.data.project);
                        })
                        .catch((error) => {
                                reject(error);
                        });
        });
};
export const createProduct = (product: Project): Promise<Project | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .post<Project>(`/projects/`, product)
                        .then((res) => {
                                resolve(res.data);
                        })
                        .catch((error) => {
                                console.error('Error creating Project:', error);
                                reject(error);
                        });
        });
};