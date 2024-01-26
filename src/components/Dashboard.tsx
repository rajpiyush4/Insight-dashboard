import { useState, useContext } from "react"
import PriceGraph from "../Graph/PriceGraph"
import { DataContext } from "../Context/DataProvider"
import SizeGraph from "../Graph/SizeGraph"
import AndroidCompatibleGraph from "../Graph/AndroidCompatibleGraph"


function Dashboard({ isShow }: { isShow: boolean }) {
  const [category, setCategory] = useState<string>()
  const data = useContext(DataContext)
  return (
    <section className={`${isShow ? "w-[95%]" : 'w-[80%]'} p-4 h-[90vh] overflow-y-scroll`}>
      <div className="flex justify-around items-center ">
        <div className="flex flex-col items-center justify-center gap-2 text-white bg-[#212121] w-[30%] h-[100px] rounded-md shadow-md border">
          <span className="font-bold text-lg">Vendors</span>
          <span className="text-3xl">{data && data[1]?.length - 1}</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-white bg-[#212121] w-[30%] h-[100px] rounded-md shadow-md border">
          <span className="font-bold text-lg">Product Category</span>
          <span className="text-3xl"> {data && data[0]?.length - 1}</span>
        </div>
      </div>

      <br />

      <div className="flex justify-center items-center p-4 ">
        <span >Product Category: </span>
        <select onChange={(e) => setCategory(e.target.value)} className="border p-4 rounded-md" name="" id="">
          <option value=""></option>
          <option value="hydration assessment">Hydration Assessment</option>
        </select>
      </div>

      <br />

      <div>
        <div className="text-center font-bold text-lg capitalize">Selected Product Category: {category}</div>
        <div className="grid grid-cols-2 gap-2  ">
            <SizeGraph category={category} />
             <AndroidCompatibleGraph/>
            <PriceGraph category={category} />
        </div>
      </div>
    </section>
  )
}

export default Dashboard