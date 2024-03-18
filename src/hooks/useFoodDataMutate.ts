import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { FoodData } from '../interface/FoodDate';

const API_URL = 'http://ec2-18-228-228-147.sa-east-1.compute.amazonaws.com:8080';

const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/food', data);
    return response;
}

export function useFoodDataMutate(){
    
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            
        }
    })

    return mutate;
}