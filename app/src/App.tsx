import { Card } from './components/Card/Card'
import { MainLayout } from './components/Layout/MainLayout'

function App() {
  return (
    <>
      <MainLayout>
        <div className="flex-col">
          <div className="flex w-full h-full">
            <div className="w-1/4 mr-5">
              <Card>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl text-gray-400 my-2">first</p>
                  <p className="text-3xl font-bold">432</p>
                </div>
              </Card>
            </div>
            <div className="w-1/4 mx-5">
              <Card>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl text-gray-400 my-2">second</p>
                  <p className="text-3xl font-bold">23</p>
                </div>
              </Card>
            </div>
            <div className="w-1/4 mx-5">
              <Card>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl text-gray-400 my-2">third</p>
                  <p className="text-3xl font-bold">999</p>
                </div>
              </Card>
            </div>
            <div className="w-1/4 ml-5">
              <Card>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl text-gray-400 my-2">fourth</p>
                  <p className="text-3xl font-bold">531</p>
                </div>
              </Card>
            </div>
          </div>
          <div className="w-full">
            <Card>
              <div className="flex">
                <div className="w-2/3 flex-col">
                  <div className="text-xl my-2">推移</div>
                </div>
                <div className="text-xl my-2">パラメータ</div>
              </div>
            </Card>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default App
