import { faker } from '@faker-js/faker'

export const SummaryData = [...Array(6)].map(() => faker.datatype.number({ min: 0, max: 1000 }))

export const LineChartData = {
  labels: [...Array(15)].map(() => faker.date.month()),
  datasets: [
    {
      label: 'A社',
      data: [...Array(15)].map(() => faker.datatype.number({ min: 40, max: 100 })),
      borderColor: 'rgb(75, 192, 192)'
    },
    {
      label: 'B社',
      data: [...Array(15)].map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(75, 100, 192)'
    }
  ]
}

export const PieChartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [...Array(6)].map(() => faker.datatype.number({ min: 0, max: 20 })),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
}
export const PieChartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

const BarLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
export const BarChartData = {
  labels: BarLabels,
  datasets: [
    {
      label: 'Dataset 1',
      data: BarLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Dataset 2',
      data: BarLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
}
export const BarChartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

export const TableData = [...Array(6)].map((_, index) => {
  return {
    key: index + 1,
    name: faker.name.firstName(),
    age: faker.datatype.number({ min: 0, max: 100 }),
    value: faker.datatype.number({ min: 0, max: 1000 }),
    delta: faker.datatype.number({ min: -100, max: 100 })
  }
})
