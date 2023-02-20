import { SideBarHeader } from './SideBarHeader'
import { SideBarItem } from './SideBarItem'

export const SideBar = () => {
  return (
    <div className="w-60 py-4 bg-slate-700 fixed top-0 left-0 h-full">
      <SideBarHeader label="ダッシュボード" />
      {['概要', 'データ', '設定'].map((item) => (
        <SideBarItem label={item} />
      ))}
    </div>
  )
}
