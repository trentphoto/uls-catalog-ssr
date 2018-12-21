import axios from 'axios'
import { siteApiBase } from '../../config'

const auth = {
  headers: {
    Authorization: 'Bearer ax7eDRucZkJGKV2gwli3nr49AEdQkEPt'
  }
}

const apiEndpoints = {
  getAllPages: async () => {
    try {
      const result = await axios.get(`${siteApiBase}/page/rows`, auth)
      return result.data.data as Page[]
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
