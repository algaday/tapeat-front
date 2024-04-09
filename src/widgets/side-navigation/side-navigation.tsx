'use client'
import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import LogoutIcon from '@mui/icons-material/Logout'
import { Wrapper } from './side-navigation.styles'
import { useAppDispatch, useAppSelector } from '@/shared/lib/store/hooks'
import { useLogoutMutation } from '@/entities/user/api/userApi'
import { useRouter } from 'next/navigation'
import { clearUser } from '@/entities/user/model/slice'
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
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <div className='avatar-container'>
          <Avatar />
          <Typography variant='h6' component='h2'>
            {user?.firstName}
          </Typography>
        </div>
        <Divider />
        <List>
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
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem key='logout' disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Wrapper>
  )
}
