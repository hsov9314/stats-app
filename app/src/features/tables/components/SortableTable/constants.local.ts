import { faker } from '@faker-js/faker'
import { createColumnHelper, sortingFns } from '@tanstack/react-table'

export type Person = {
  name: string
  age: number
  progress: number
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (): Person => {
  return {
    name: faker.name.fullName(),
    age: faker.datatype.number(40),
    progress: faker.datatype.number(100)
  }
}

export const makeData = (...lens: number[]) => {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((d): Person => {
      return {
        ...newPerson()
      }
    })
  }

  return makeDataLevel()
}

export const useColumns = () => {
  const columnHelper = createColumnHelper<Person>()

  const columns = [
    columnHelper.accessor('name', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      sortingFn: 'text'
    }),
    columnHelper.accessor('age', {
      header: () => 'Age',
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
      sortingFn: 'alphanumeric'
    }),
    columnHelper.accessor('progress', {
      header: 'Profile Progress',
      footer: (info) => info.column.id,
      sortingFn: 'alphanumeric'
    })
  ]

  return { columns }
}
