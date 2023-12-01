import { SideBarContentTop } from './SideBarContentTop'
import { SideBarFilter } from './SideBarFilter'

export function SideBar() {
  return (
    <aside className="h-[69.7vh] w-full max-w-[30rem]">
      <SideBarContentTop />
      <SideBarFilter />
    </aside>
  )
}
