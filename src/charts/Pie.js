import Chart from "react-apexcharts";


const Pie = ({data,values,labels}) => {
    const series= values
  const options= {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: labels,
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }
  return (
    <div>
        <Chart
            options={options}
            series={series}
            type='pie'
            width="500"
        />
    </div>
  )
}

export default Pie