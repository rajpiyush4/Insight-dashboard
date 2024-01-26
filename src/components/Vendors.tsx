import ExcelData from "../Graph/ExcelData"
import readExcelFile from "../lib/readSheet"
import { useState, useEffect } from "react"

function Vendors({isShow}:{isShow:boolean}) {
  const [data, setData] = useState<any>()


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

  if(!data){
    return <div>Loading...</div>
  }
  return (
    <section className={`${isShow?"w-[95%]": 'w-[80%]' } h-[100vh] p-4 overflow-y-scroll`} >
     {data[1]?.map((item:string, key:number)=> <div key={key}>{item}</div>)}
    </section >
  )
}

export default Vendors