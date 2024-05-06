

import { apiWithAuth, getApiResponse, getErrorResponse } from "./http";


export const loginService = (data) => 
  apiWithAuth()
    .post(`/admin/login`, data)
    .then(getApiResponse)
    .catch(getErrorResponse)



