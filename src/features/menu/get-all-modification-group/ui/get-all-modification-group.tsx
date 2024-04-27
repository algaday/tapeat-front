'use client'

import { useGetAllModificationGroupsQuery } from '@/entities/modification-group/api/modification-group-api'
import { ModificationCard } from '@/shared/ui/modification-card/modification-card'
import { CircularProgress } from '@mui/material'

export function ModificationGroupList() {
  const { data: modificationGroups, isLoading } =
    useGetAllModificationGroupsQuery()

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <>
      {modificationGroups?.map((modificationGroup) => {
        return (
          <ModificationCard
            key={modificationGroup.id}
            modificationCount={modificationGroup.modifications.length}
            {...modificationGroup}
          />
        )
      })}{' '}
    </>
  )
}
