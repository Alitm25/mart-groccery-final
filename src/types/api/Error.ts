import {AxiosError} from "axios";

export interface AxiosErrorResponse {
    error: {
        status: number;
        name: string;
        message: string;
    }
}

export type ApiAxiosError = AxiosError<AxiosErrorResponse>;