import React,{useEffect,useState} from 'react'
import Chart from "react-apexcharts";


const Donut = ({data,values,labels}) => {
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
            type='donut'
            width="500"
        />
    </div>
  )
}

export default Donut