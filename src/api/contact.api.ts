import {api} from "./api";

export interface PostContactDTO {
    name: string
    phone: string
    email: string
}

export function PostContact(dto: PostContactDTO)  {
    return api.post("/feedback", dto)
}