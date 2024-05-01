import { useGetAllModificationGroupsQuery } from '@/entities/modification-group/api/modification-group-api'
import { Box, Chip } from '@mui/material'

type Props = {
  selected: string[] | []
}

export function ModificationGroupChip(props: Props) {
  const { data } = useGetAllModificationGroupsQuery()

  const moodificationGroupByIdName: { [key: string]: string } = {}

  data?.forEach((item) => (moodificationGroupByIdName[item.id] = item.name))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
      {props.selected.map((value) => {
        return <Chip key={value} label={moodificationGroupByIdName[value]} />
      })}
    </Box>
  )
}
