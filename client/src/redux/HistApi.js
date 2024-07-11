import {createApi,fetchBaseQuery} from "@reduxjs/toolkit"
export const histApiSlice = createApi({
    reducePath:"histSlice",
    baseQuery:fetchBaseQuery({baseurl:""}),
    endPoints:(builder)=>({
        
    })
})