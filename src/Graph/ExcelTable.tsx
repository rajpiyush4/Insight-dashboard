interface ExcelTableProps {
  data: (string)[][] | undefined;

}

const transposeData = (data: (string)[][]) => {
  return data[0].map((_, columnIndex) => {
    return data.map(row => row[columnIndex])});
};

const ExcelTable = ({ data }: ExcelTableProps) => {
  if (!data || !data.length) {
    return null;
  }

  const transposedData = transposeData(data);
  const headers = transposedData[0];
  const rows = transposedData.slice(1);
  console.log(transposedData, 'slfjek')

  return (
    <>
   { <table className="border">
      <thead className="border">
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td className="border p-2" key={cellIndex}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>}
    </>
    
  );
};

export default ExcelTable;
