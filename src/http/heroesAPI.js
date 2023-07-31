import { $host } from "./index"

export const getAllHeroes = async (currentPage) => {
    const response = await $host.get(`api/character/?page=${currentPage}`)
    return response.data
}