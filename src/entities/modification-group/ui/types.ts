export type ModificationGroupOverviewProps = {
  id: string
  name: string
  restaurantId: string
  createdAt: string
  updatedAt: string
  modifications: Modification[]
}

export type Modification = {
  id: string
  modificationGroupId: string
  name: string
  price: string
  createdAt: string
  updatedAt: string
}
