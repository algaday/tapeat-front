import { Button, Stack, Typography } from '@mui/material'
import { ModificationGroupOverviewProps } from './types'
import { ModificationItem } from './modification-item'
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import { useState } from 'react'
import { Modal } from '@/shared/ui/modal/modal'
import { useDeleteModificationGroupMutation } from '../api/modification-group-api'
import { useRouter } from 'next/navigation'

export function ModificationGroupOverview(
  props: ModificationGroupOverviewProps
) {
  const [deleteModificationGroup] = useDeleteModificationGroupMutation()

  const router = useRouter()

  const { id, name, modifications } = props

  const [modal, setModal] = useState(false)

  const handleDelete = async () => {
    await deleteModificationGroup({ id }).unwrap()
    router.push('/dashboard/menu/modification-group')
  }

  const handleCancel = () => {
    setModal(false)
  }

  if (!modifications) {
    return <h1>No such element</h1>
  }
  return (
    <>
      <Typography variant='h4'>Модификация: {name}</Typography>
      <Stack direction='row' marginTop={1} spacing={2}>
        <Button
          color='info'
          startIcon={<DriveFileRenameOutlineTwoToneIcon />}
          onClick={() => props.onModalOpen()}
        >
          Добавить модификацию
        </Button>
        <Button
          color='error'
          startIcon={<DeleteTwoToneIcon />}
          onClick={() => setModal(true)}
        >
          Удалить группу
        </Button>
      </Stack>

      {modifications.map((modification) => (
        <ModificationItem key={modification.id} {...modification} />
      ))}
      {modal && (
        <Modal
          text='Вы точно хотите удалить группу?'
          onDelete={handleDelete}
          onCancel={handleCancel}
        />
      )}
    </>
  )
}
