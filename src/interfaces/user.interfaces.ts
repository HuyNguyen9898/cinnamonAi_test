import { IRow } from "./table.interfaces"

export interface IUser extends IRow {
    id: number
    avatar: string
    name: string
    blog: string
}

