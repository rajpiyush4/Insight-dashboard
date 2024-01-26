// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function Diagram({newData, category}:{newData:any, category: string|undefined }) {
    // const options = newData ? newData[0] : ''
    // console.log("options", options)
    const options = {
        title: {
            text: category
        },
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "pie",
                dataPoints: [
                    { label: "Apple", y: 10 },
                    { label: "Orange", y: 15 },
                    { label: "Banana", y: 25 },
                    { label: "Mango", y: 30 },
                    { label: "Grape", y: 28 }
                ]
            }
        ]
    }
    return (
        <div>
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
}
