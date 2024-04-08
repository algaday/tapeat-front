import { SideNavigation } from '@/widgets/side-navigation/side-navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <div>
          <SideNavigation />
        </div>
        {children}
      </main>
    </>
  )
}
