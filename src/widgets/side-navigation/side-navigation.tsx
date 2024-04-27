'use client'
import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import LogoutIcon from '@mui/icons-material/Logout'
import { Wrapper } from './side-navigation.styles'
import { useAppDispatch, useAppSelector } from '@/shared/lib/store/hooks'
import { useLogoutMutation } from '@/entities/user/api/user-api'
import { useRouter } from 'next/navigation'
import { clearUser } from '@/entities/user/model/slice'
import Link from 'next/link'
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'

export function SideNavigation() {
  const user = useAppSelector((state) => state.user.user)

  const [logout] = useLogoutMutation()

  const router = useRouter()

  const dispatch = useAppDispatch()

  const handleLogout = async () => {
    dispatch(clearUser())
    await logout().unwrap()
    router.replace('/login')
  }

  return (
    <Wrapper>
      <Drawer
        sx={{
          maxWidth: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            maxWidth: 240,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Divider />
        <List>
          <ListItem key='avatar' disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText primary={user?.firstName} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key='modifications' disablePadding>
            <ListItemButton
              href='/dashboard/menu/modification-group'
              LinkComponent={Link}
            >
              <ListItemIcon>
                <AddCircleTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary='Группа модификации' />
            </ListItemButton>
          </ListItem>
          <ListItem key='menu' disablePadding>
            <ListItemButton href='/dashboard/menu' LinkComponent={Link}>
              <ListItemIcon>
                <AutoStoriesTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary='Меню' />
            </ListItemButton>
          </ListItem>
          <ListItem key='branches' disablePadding>
            <ListItemButton href='/dashboard/branches' LinkComponent={Link}>
              <ListItemIcon>
                <AddBusinessIcon />
              </ListItemIcon>
              <ListItemText primary='Филиал' />
            </ListItemButton>
          </ListItem>
          <ListItem key='logout' disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary='Выйти' />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Wrapper>
  )
}
