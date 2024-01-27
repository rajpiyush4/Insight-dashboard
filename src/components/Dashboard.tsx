import { useState, useContext } from "react"
import { CertificationChart, CompatibilityChart, MetricsTrackedChart, PriceGraph, SizeWeightChart } from '../Graph/index'
import { DataContext } from "../Context/DataProvider"
import ExcelTable from "../Graph/ExcelTable"



function Dashboard({ isShow }: { isShow: boolean }) {
  const [category, setCategory] = useState<string>()
  const data = useContext(DataContext)
  return (
    <section className={`${isShow ? "w-[95%]" : 'w-[80%]'} p-4 h-[90vh] overflow-y-scroll overflow-x-hidden `}>
      <div className="flex gap-3 items-center ">
        <div className="flex flex-col items-center justify-center gap-2  bg-white w-[30%] h-[100px] rounded-md  border">
          <span className="font-bold text-lg">Vendors</span>
          <span className="text-3xl font-bold text-green-500">{data && data[1]?.length - 1}</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-white bg-[#212121] w-[30%] h-[100px] rounded-md  border">
          <span className="font-bold text-lg text-center">Product Category</span>
          <span className="text-3xl text-green-500"> {data && data[0]?.length - 1}</span>
        </div>
      </div>

      <br />

      <div className="flex flex-col bg-white w-fit rounded-md p-4">
        <span className="text-blue-500 font-semibold" >Product Category: </span>
        <select onChange={(e) => setCategory(e.target.value)} className="border p-4 rounded-md" name="" id="">
          <option value=""></option>
          <option value="hydration assessment">Hydration Assessment</option>
        </select>
      </div>

      <br />

      <div>
        <div className="text-center font-bold text-lg capitalize">{category}</div>
        <div className="">
          <div className="col-span-2 bg-white ">
            <PriceGraph category={category} />
          </div>
          <div className="col-span-2 bg-white">
            <SizeWeightChart category={category} />
          </div>
          <div className="col-span-4 bg-white">
            <CompatibilityChart category={category} />
          </div>
          <div className="col-span-2 bg-white">
            <MetricsTrackedChart category={category} />
          </div>
          <div className="col-span-2 bg-white">
            <CertificationChart category={category} />
          </div>

        </div>
        {category && <section className="h-[80vh] overflow-scroll mt-8 text-[hsl(0,0%,20%)] bg-[white] p-4 rounded-sm">
          <ExcelTable data={data} />
        </section>}
      </div>
    </section>
  )
}

export default Dashboard