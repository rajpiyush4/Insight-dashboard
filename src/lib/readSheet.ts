// excelReader.js
import * as XLSX from 'xlsx';

const readExcelFile = async () => {
  try{
    const response = await fetch('/src/assets/test1_comparision.xlsx');
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
  
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1});

    return jsonData;
  }catch(err){
    console.log(err + 'something went wrong')
  }
};

export default readExcelFile;
