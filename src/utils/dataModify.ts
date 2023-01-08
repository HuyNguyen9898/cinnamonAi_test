import { IUser } from "interfaces";

export const userDataModify = (raw: any): IUser => {
  return {
    id: raw?.id,
    avatar: raw?.avatar_url,
    name: raw?.login,
    blog: raw?.html_url,
    key: raw?.id,
  }
}