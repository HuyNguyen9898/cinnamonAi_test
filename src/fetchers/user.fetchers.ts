import axios from "axios"
import { GITHUB_USER_URL } from "constant"
import { IUser } from "interfaces"
import { userDataModify } from "utils"

export const utils_getUserList = async (since: number, amount = 10) => {
  try {
    const query = `?per_page=${amount}&since=${since}`
    const res = await utils_getUserBase(query)
    const userList: IUser[] = res.data?.filter(Boolean).map((raw: any) => userDataModify(raw))
    return userList
  } catch {
    return []
  }
}

export const utils_getUser = async (name: string) => {
  try {
      const query = `/${name}`
      const res = await utils_getUserBase(query)
      const user: IUser = userDataModify(res.data)
    return [user]
  } catch {
      return []
  }
}

const utils_getUserBase = async (query: string) => {
  try {
      const res = await axios.get(`${GITHUB_USER_URL}${query}`)
      return res
  } catch(err: any) {
      console.error(`${GITHUB_USER_URL}${query}`, err)
      throw new Error()
  }
}