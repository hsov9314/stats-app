type Props = {
  title: string
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex w-full mb-10">
      <div className="w-3/4">
        <p className="text-2xl font-bold text-black-500">{title}</p>
      </div>
      <div className="w-1/4">プロフィール</div>
    </div>
  )
}
