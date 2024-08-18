export interface IFormInput {
    name?: string;
    age?: number | string;
    email?: string;
    password1?: string;
    password2?: string;
    gender?: string;
    TC?: boolean;
    picture?: string | null | File | FileList | undefined | unknown;
    country?: string;
}