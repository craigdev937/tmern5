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
        }),
        getOne: builder.query<IPlayer, string>({
            query: (_id) => `/${_id}`,
            providesTags: (result, error, _id) => 
                [{ type: "Players", _id }],
        }),
        create: builder.mutation<IPlayer, IPlayer>({
            query: (player) => {
                return {
                    url: `/`,
                    method: "POST",
                    body: player
                }
            },
            invalidatesTags: [{ type: "Players", id: "LIST" }],
        }),
        update: builder.mutation<IPlayer, IPlayer>({
            query: ({_id, ...player}) => ({
                url: `/${_id}`,
                method: "PUT",
                body: player,
            }),
            invalidatesTags: [{ type: "Players", id: "LIST" }],
        }),
        delete: builder.mutation<IPlayer, string>({
            query: (_id) => ({
                url: `/${_id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Players", id: "LIST" }],
        }),
    }),
});



