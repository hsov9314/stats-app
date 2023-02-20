import { Card } from '../../components/Card/Card'
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
} from 'chart.js'
import {
  BarChartData,
  BarChartOptions,
  LineChartData,
  PieChartData,
  PieChartOptions,
  SummaryData,
  TableData
} from './constants.local'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
)

export const Summary: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full h-full mb-10">
        <div className="w-1/4 mr-5">
          <Card>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl text-gray-400">first</p>
              <p className="text-3xl font-bold">{SummaryData[0]}</p>
            </div>
          </Card>
        </div>
        <div className="w-1/4 mx-5">
          <Card>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl text-gray-400">second</p>
              <p className="text-3xl font-bold">{SummaryData[1]}</p>
            </div>
          </Card>
        </div>
        <div className="w-1/4 mx-5">
          <Card>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl text-gray-400">third</p>
              <p className="text-3xl font-bold">{SummaryData[2]}</p>
            </div>
          </Card>
        </div>
        <div className="w-1/4 ml-5">
          <Card>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl text-gray-400">fourth</p>
              <p className="text-3xl font-bold">{SummaryData[3]}</p>
            </div>
          </Card>
        </div>
      </div>
      <div className="w-full mb-10">
        <Card>
          <div className="flex">
            <div className="w-2/3 flex flex-col">
              <div className="text-xl my-2">推移</div>
              <div className="w-full">
                <Line data={LineChartData} />
              </div>
            </div>
            <div className="w-1/3 flex flex-col ml-2">
              <div className="text-xl my-2 mb-4">サマリ</div>
              <div className="flex">
                <div className="w-1/2">
                  <div className="flex flex-col">
                    <p className="font-normal text-gray-500 mb-2">平均</p>
                    <p className="font-bold text-3xl">65.7</p>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex flex-col">
                    <p className="font-normal text-gray-500 mb-2">最大</p>
                    <p className="font-bold text-3xl">80</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex w-full mb-10">
        <div className="w-1/3">
          <Card>
            <div className="h-96">
              <div className="text-xl mb-4 ">一覧</div>
              <div>
                {TableData.map((data) => {
                  return (
                    <div className="flex my-2 justify-between">
                      <p className="text-gray-500">{data.key}</p>
                      <div className="flex flex-col w-2/3">
                        <p className="font-bold text-lg">{data.name}</p>
                        <p className="font-bold text-sm text-gray-500 text-gre">{data.age}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="font-bold text-lg">{data.value}</p>
                        <p
                          className={`font-bold text-sm ${
                            data.delta > 0 ? 'text-green-500' : 'text-red-500'
                          }`}
                        >
                          {data.delta > 0 ? `+${data.delta}` : data.delta}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Card>
        </div>
        <div className="w-1/3 mx-5">
          <Card>
            <div className="flex flex-col h-96 justify-between">
              <div className="text-xl mb-4 ">比較</div>
              <div className="h-80">
                <Bar data={BarChartData} options={BarChartOptions} />
              </div>
            </div>
          </Card>
        </div>
        <div className="w-1/3">
          <Card>
            <div className="h-96">
              <div className="text-xl mb-4 ">割合</div>
              <div className="h-80">
                <Doughnut data={PieChartData} options={PieChartOptions} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
