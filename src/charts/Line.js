import Chart from "react-apexcharts";


const Line = ({data,values,labels}) => {
    const options= {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: labels
        }
      }
      const series= [
        {
          name: "series-1",
          data: values
        }
      ]
  return (
    <div>
        <Chart
            options={options}
            series={series}
            type='line'
            width="500"
        />
    </div>
  )
}

export default Line