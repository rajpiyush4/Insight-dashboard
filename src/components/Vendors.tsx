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
      <div className="font-bold text-lg text-center bg-[#eee] p-4 mb-4">Vendors</div>
     {data[1]?.map((item:string, key:number)=> key != 0 && <div className="bg-[#212121] text-center mb-4 p-4 cursor-pointer rounded-md shadow-md text-white w-fit border-2 m-auto duration-75 hover:-translate-y-1" key={key}>{item}</div>)}
    </section >
  )
}

export default Vendors