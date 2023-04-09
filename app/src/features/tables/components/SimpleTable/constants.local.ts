import { createColumnHelper } from '@tanstack/react-table'

export type Person = {
  name: string
  age: number
  progress: number
}

export const defaultData: Person[] = [
  { name: 'John Doe', age: 42, progress: 20 },
  { name: 'Jane Doe', age: 35, progress: 30 },
  { name: 'Sammy Doe', age: 18, progress: 40 }
]

export const useColumns = () => {
  const columnHelper = createColumnHelper<Person>()

  const columns = [
    columnHelper.accessor('name', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id
    }),
    columnHelper.accessor('age', {
      header: () => 'Age',
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id
    }),
    columnHelper.accessor('progress', {
      header: 'progress',
      footer: (info) => info.column.id
    })
  ]

  return { columns }
}
