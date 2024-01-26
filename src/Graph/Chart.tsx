// import React from "react";
// import { AxisOptions, Chart } from "react-charts";
// import useDemoConfig from '../useDemoConfig'

// export default function Bar() {
//   const { data, randomizeData } = useDemoConfig({
//     series: 3,
//     dataType: "ordinal",
//   });
//   console.log(data)

//   const primaryAxis = React.useMemo<
//     AxisOptions<typeof data[number]["data"][number]>
//   >(
//     () => ({
//       getValue: (datum) => datum.primary,
//     }),
//     []
//   );

//   const secondaryAxes = React.useMemo<
//     AxisOptions<typeof data[number]["data"][number]>[]
//   >(
//     () => [
//       {
//         getValue: (datum) => datum.secondary,
//       },
//     ],
//     []
//   );

// //   const data = [
// //     {
// //       label: "MX3 Hydration Testing System, Pro Version",
// //       data: [
// //         { primary: "Metrics tracked", secondary: "Sweat volume, electrolyte" },
// //         { primary: "Pricing", secondary: 1449 },
// //         { primary: "Size", secondary: "300 mm" },
// //         { primary: "Weight", secondary: "5.6 oz" },
// //         { primary: "CE Certification", secondary: "Yes" },
// //         { primary: "FDA Approved", secondary: "No" },
// //         { primary: "Battery life", secondary: "1000+ measurements when fully charged" },
// //         { primary: "iOS compatible", secondary: "Yes" },
// //         { primary: "Android compatible", secondary: "Yes" },
// //       ],
// //     },
// //     // Add data for other products if needed
// //   ];
  

  

//   return (
//     <>
//       {/* <button onClick={randomizeData}>Randomize Data</button> */}
//       <br />
//       <br />
      
//         <Chart 
//           options={{
//             data,
//             primaryAxis,
//             secondaryAxes,
//             initialHeight: 500,
            
//           }}
        
//         />

//     </>
//   );
// }
