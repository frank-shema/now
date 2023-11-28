interface Login {
        email: string;
        password: string;
}

interface Project {
        createdAt?: Date;
        updatedAt?: Date;
}



interface User {
        _id: string;
        fullName: string;
        email: string;
        projects: Project[];
        password?: string;
        role?: string;
        dob: Date
        status?: string;
        createdAt?: Date;
        updatedAt?: Date;
}

interface CreateUser {
        fullName: string;
        email: string;
}

interface Category {
        _id: string;
        title: string
}

interface Comment {
        createdAt?: Date;
        updatedAt?: Date;
}

interface Project {
        _id?: string;
        name: string
        category: Category
        numberOfFloors: number;
        stage: string;
        description: string;
        planPrice: number;
        comments: Comment[];
        images: string;
        likes: User[]
        video?: string;
        location: string;
        livingRooms: string;
        washRooms: string;
        bedRooms: string;
        uploadedBy: User
        createdAt?: Date;
        updatedAt?: Date;
}

interface Folder {
        id?: string;
        _id?: string;
        description?: string;
        name: string;
        images?: string[];
        videos?: string[];
        documents?: string[];
        createdAt?: Date;
        updatedAt?: Date;
}

interface Notification {
        _id?: string;
        action: string;
        doer: User;
        recipients: string;
        createdAt?: Date;
        updatedAt?: Date;
}