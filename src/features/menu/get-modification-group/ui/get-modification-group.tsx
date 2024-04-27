'use client'

import { useGetModificationGroupQuery } from '@/entities/modification-group/api/modification-group-api'
import { ModificationGroupOverview } from '@/entities/modification-group/ui/modification-group-overview'
import { CircularProgress } from '@mui/material'
import { useParams } from 'next/navigation'

export function GetModificationGroupWidget() {
  const params = useParams<{ id: string }>()

  const { data, isLoading } = useGetModificationGroupQuery(params?.id)

  if (isLoading) {
    return <CircularProgress />
  }

  console.log(data)

  return <ModificationGroupOverview {...data} />
}
