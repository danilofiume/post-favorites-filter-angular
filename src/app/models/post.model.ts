export interface IPostInfo {
  posts: IPost[]
  postCategories: IPostCategory[]
}

export interface IPost {
  id: number
  title: string
  body: string
  userId: number
  date: number
  category: string
}

export interface IPostCategory {
  id: string
  title: string
}
