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
      <div className="font-bold text-3xl p-4 mb-4">Vendors</div>
      <ul className="bg-[white] p-4 rounded-md underline">
     {data[1]?.map((item:string, key:number)=> key != 0 && <li className=" mb-4 p-4 cursor-pointer rounded-md m-auto duration-75 hover:bg-[whitesmoke]" key={key}>{item}</li>)}
      </ul>
    </section >
  )
}

export default Vendors
