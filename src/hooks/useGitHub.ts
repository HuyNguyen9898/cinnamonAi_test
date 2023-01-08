import { useState, useEffect, useRef } from "react"
import { IUser } from "interfaces"
import { utils_getUserList, utils_getUser } from "fetchers"

const useGitHub = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(false)

  const debounced = useRef<NodeJS.Timeout>()

  const getUserList = async () => {
    setLoading(true)
    const userList = await utils_getUserList(0)
    console.log(userList)
    setUsers(userList)
    setLoading(false)
  }

  const updateUserList = async () => {
    setLoading(true)
    const userList = await utils_getUserList(users[users.length - 1].id)
    setUsers([...users].concat(userList))
    setLoading(false)
  }

  const getUser = async (name: string) => {
    setLoading(true)

    if (!name.length) {
      await getUserList()
    } else {
      const userList = await utils_getUser(name)
      setUsers(userList)
    }
    
    setLoading(false)
  }

  const handleDebouncedGetUser = async (name: string) => {
    if (debounced.current) clearTimeout(debounced.current) 

    debounced.current = setTimeout(async () => {
      await getUser(name.trim())
    }, 500)
  } 

  useEffect(() => {
    getUserList() 
  }, [])

  return {
    users,
    loading,
    updateUserList,
    handleDebouncedGetUser,
  }
}

export default useGitHub