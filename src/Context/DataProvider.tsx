import { createContext, useState, useEffect} from 'react'
import readExcelFile from '../lib/readSheet'


type ComponentProps = {
children : React.ReactNode
}
export const DataContext = createContext<(string)[][] | undefined>(undefined)

function DataProvider({children} : ComponentProps) {
    const [data, setData] = useState<(string)[][] | undefined>()
  
    async function getExcelData() {
      try {
        const res = await readExcelFile() as (string)[][] | undefined
        setData(res)
  
      } catch (err) {
        console.log(err, 'error in fetch data')
      }
    }
  
    useEffect(() => {
      getExcelData()
    }, [])
  return (
    <DataContext.Provider value={data}>
           {children}
    </DataContext.Provider>
  )
}

export default DataProvider