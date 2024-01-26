
interface ExcelTableProps {
  data: (string | number)[][];
}

const ExcelTable = ({ data }:ExcelTableProps) => {
  if (!data || !data.length) {
    return null;
  }

  const headers = data[0];
  const rows = data.slice(1);

  return (
    <table>
      <thead>
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
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExcelTable;
