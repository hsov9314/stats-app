type SideBarItemProps = { label: string }

export const SideBarItem: React.FC<SideBarItemProps> = ({ label }) => {
  return (
    <div className="px-6 py-4 hover:bg-slate-600">
      <p className="text-gray-400">{label}</p>
    </div>
  )
}
