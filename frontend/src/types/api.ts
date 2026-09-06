/**
 * 對應後端 ApiResponse<T> 的統一回應格式
 */
export interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

/**
 * 對應後端 ExampleEntity
 */
export interface ExampleEntity {
  id: number
  name: string
  description: string | null
  createdAt: string
  updatedAt: string
}
