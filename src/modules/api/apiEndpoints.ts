import axios from 'axios'
import { siteApiBase, imgUrlBase } from '../../config'
import { sortByOrder } from '../utils/sortByOrder'

const auth = {
  headers: {
    Authorization: 'Bearer ax7eDRucZkJGKV2gwli3nr49AEdQkEPt'
  }
}

const apiEndpoints = {
  getAllPages: async () => {
    try {
      const result = await axios.get(`${siteApiBase}/page/rows`, auth)
      // get the results, and map over them to add a property to each item, containing the full image url
      const pages = result.data.data.map((i: Page) => ({
        fullImgUrl: imgUrlBase + i.img.data.url,
        ...i
      }))

      // then we sort the pages by order
      const pagesOrdered = pages.sort(sortByOrder)

      return pagesOrdered as Page[]
    } catch (error) {
      throw error.response.data
    }
  },
  getAllPrograms: async () => {
    try {
      const result = await axios.get(
        `${siteApiBase}/degree-programs/rows`,
        auth
      )
      return result.data.data as Program[]
    } catch (error) {
      throw error.response.data
    }
  }
}

export default apiEndpoints
