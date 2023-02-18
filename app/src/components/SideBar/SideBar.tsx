import { SideBarHeader } from './SideBarHeader'
import { SideBarItem } from './SideBarItem'

export const SideBar = () => {
  return (
    <div className="w-60 py-4 bg-slate-700">
      <SideBarHeader label="ダッシュボード" />
      {['概要', 'データ', '設定'].map((item) => (
        <SideBarItem label={item} />
      ))}
    </div>
  )
}
