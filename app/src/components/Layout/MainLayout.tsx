import { Header } from '../Header'
import { SideBar } from '../SideBar'

type Props = {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="flex flex-row h-screen bg-slate-100">
      <SideBar />
      <div className="flex flex-col w-full px-4 py-6">
        <div className="mb-10">
          <Header title="概要" />
        </div>
        <div className="flex flex-col w-full h-full">{children}</div>
      </div>
    </div>
  )
}
