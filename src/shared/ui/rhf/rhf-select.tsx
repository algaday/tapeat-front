import {
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectProps,
} from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { ModificationGroupChip } from '../modification-group-chip/modification-group-chip'
import { ModificationGroup } from '@/entities/modification-group/api/types'

type Props = SelectProps & {
  name: string
  modificationGroups?: ModificationGroup[]
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export function RHFSelect(props: Props) {
  const { control } = useFormContext()

  return (
    <>
      <InputLabel id={props.labelId}>{props.name}</InputLabel>

      <Controller
        name={props.name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return (
            <Select
              labelId={props.labelId}
              id={props.id}
              multiple
              value={field.value}
              onChange={field.onChange}
              input={
                <OutlinedInput id='select-multiple-chip' label={props.name} />
              }
              renderValue={(selected) => {
                return <ModificationGroupChip selected={selected} />
              }}
              MenuProps={MenuProps}
            >
              {props.modificationGroups?.map((modificationGroup) => {
                return (
                  <MenuItem
                    value={modificationGroup.id}
                    key={modificationGroup.id}
                  >
                    {modificationGroup.name}
                  </MenuItem>
                )
              })}
            </Select>
          )
        }}
      />
    </>
  )
}
