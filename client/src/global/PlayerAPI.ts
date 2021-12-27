import { IPlayer } from "../models/IPlayer";
import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://localhost:9000/api";
export const PlayerAPI = createApi({
    reducerPath: "PlayerAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Players"],
    endpoints: (builder) => ({
        fetchAll: builder.query<IPlayer[], void>({
            query: () => "/",
            providesTags: (result) => result ?
            [...result.map(({ _id }) => 
                ({ type: "Players" as const, _id })),
                { type: "Players", id: "LIST" },
            ] : [{ type: "Players", id: "LIST" }],
        })
    }),
});



