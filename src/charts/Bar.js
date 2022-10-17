import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";


const Bar = ({data,values,labels}) => {
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
            type='bar'
            width="500"
        />
    </div>
  )
}

export default Bar