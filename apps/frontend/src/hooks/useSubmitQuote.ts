import { useMutation } from "@tanstack/react-query";
import { axiosClient } from "../util/axiosClient";


export interface QuoteRequest {
    name: string;
    phone: string;
    vehicle: string;
    issue: string;
};

export const useSubmitQuote = () => {
    return useMutation({
        mutationFn: (data: QuoteRequest) => axiosClient.put('/quotes', data),
    });
};

