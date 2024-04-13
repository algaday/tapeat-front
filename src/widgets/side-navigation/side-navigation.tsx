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
  Typography,
} from '@mui/material'
import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import LogoutIcon from '@mui/icons-material/Logout'
import { Wrapper } from './side-navigation.styles'
import { useAppDispatch, useAppSelector } from '@/shared/lib/store/hooks'
import { useLogoutMutation } from '@/entities/user/api/user-api'
import { useRouter } from 'next/navigation'
import { clearUser } from '@/entities/user/model/slice'
import Link from 'next/link'
export function SideNavigation() {
  const user = useAppSelector((state) => state.user.user)

  const [logout] = useLogoutMutation()

  const router = useRouter()

  const dispatch = useAppDispatch()

  const handleLogout = async () => {
    dispatch(clearUser())
    await logout()
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
          <Divider />

          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem key='menu' disablePadding>
            <ListItemButton href='/dashboard/menu' LinkComponent={Link}>
              <ListItemIcon>
                <AddBusinessIcon />
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
