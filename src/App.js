import { CKEditor } from 'ckeditor4-react';
import {React,useState,createRef} from 'react'
import './App.css';
import Chart from "react-apexcharts";
import { useScreenshot } from 'use-react-screenshot';
// import { Doughnut } from 'react-chartjs-2';

function App() {
  const [charts,setCharts]=useState([])
  const ref=createRef(null)
  const [image,takeScreenshot]=useScreenshot();
  const getImage=()=>takeScreenshot(ref.current)
  console.log(image)
  const options= {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }
  const series= [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
  const helper=()=>{
    getImage()
    // console.log(document.querySelector(".cke_editable"))
    // document.querySelector('.cke_editable').innerHTML+=`<img src="${image}" alt='' align='right'/>`
    // console.log(CKEditor)
    // var imgHtml = CKEditor.dom.element.createFromHtml("<img src=" + "https://ik.imagekit.io/yfeaxn7q0f/basic-bar_a5DrwOiY_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665473988365" + " alt='' align='right'/>");
    // CKEditor.instances.body.insertElement(imgHtml);
  }
  return (
    <div className="App">
      <CKEditor
      config={{
        extraPlugins:"widget"
      }}
      onChange={e=>console.log(e.editor.container)}
                initData="<p>Hello from CKEditor 4!</p>"
            />
            <button onClick={()=>setCharts([...charts,charts.length+1])}>Add chart</button>
            <div>
              Add Charts
              <button onClick={()=>helper()}>add</button>
              <div ref={ref}>
                {charts.map((item)=>(
                  <Chart
                    options={options}
                    series={series}
                    type="bar"
                    width="500"
                  />
                ))}
              </div>
            </div>
            {/* <h1>jfsdqjwfdjq</h1> */}
    </div>
  );
}

export default App;
