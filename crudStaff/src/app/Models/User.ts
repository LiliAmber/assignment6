import { Role } from "./Role";

export interface User {
    id: number;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    password: string;
    confirmPassword: string;
    isDeleting?: boolean;
}