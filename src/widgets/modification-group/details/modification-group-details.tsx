'use client'

import {
  useAddModificationMutation,
  useGetModificationGroupQuery,
} from '@/entities/modification-group/api/modification-group-api'
import { ModificationGroupOverview } from '@/entities/modification-group/ui/modification-group-overview'
import { CircularProgress } from '@mui/material'
import { useParams } from 'next/navigation'
import { AddModificationModal } from '../../../features/menu/add-modification-modal/add-modification-modal'
import { useState } from 'react'
import { Modification } from './types'

export function ModificationGroupDetailsWidget() {
  const params = useParams<{ id: string }>()

  const [addModificationModal, setAddModificationModal] = useState(false)

  const { data, isLoading } = useGetModificationGroupQuery(params.id)

  const [addModification] = useAddModificationMutation()

  const handleModificationModalOpen = () => {
    setAddModificationModal(true)
  }

  const handleModificationModalClose = () => {
    setAddModificationModal(false)
  }

  const handleModificationSubmit = async (modification: Modification) => {
    await addModification({
      ...modification,
      modificationGroupId: data?.id,
    }).unwrap()
    setAddModificationModal(false)
  }

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <>
      <ModificationGroupOverview
        {...data}
        onModalOpen={handleModificationModalOpen}
      />
      {addModificationModal && (
        <AddModificationModal
          onModificationClose={handleModificationModalClose}
          onModificationSubmit={handleModificationSubmit}
        />
      )}
    </>
  )
}
