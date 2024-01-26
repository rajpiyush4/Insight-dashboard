import { useEffect, useState } from "react"
import readExcelFile from "../lib/readSheet"
// import Diagram from './Diagram's
import { formatData } from "./formattedData"
import PriceGraph from "./PriceGraph"
// import ExcelTable from "./ExcelTable"

function ExcelData({category}:{category: string|undefined}) {
  const [data, setData] = useState<any>()
  const [newData, setNewData] = useState<any>()

  async function getExcelData() {
    try {
      const res = await readExcelFile()
      console.log("res", res)
      setData(res)

    } catch (err) {
      console.log(err, 'error in fetch data')
    }
  }

  useEffect(() => {
    getExcelData()
  }, [])

  useEffect(() => {
    const d = formatData(data)
    setNewData(d[1])
  }, [data])

  console.log("data", data, newData)
  return (
    <div className="">
      <PriceGraph/>
    </div>
  )
}

export default ExcelData