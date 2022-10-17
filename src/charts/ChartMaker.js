import React,{useState,useEffect,createRef} from 'react'
import Line from './Line';
import Bar from './Bar';
import Donut from './Donut';
import Pie from './Pie';
import { useScreenshot } from 'use-react-screenshot';

const ChartMaker = ({helper}) => {
    const [chartTab,setChartTab]=useState(1)
    const ref=createRef(null)
    const [image,takeScreenshot]=useScreenshot();
    const [name,setName]=useState('')
  const [values,setValues]=useState([10,20]);
  const [labels,setLabels]=useState(['men','women'])
  const [data,setData]=useState([{
    value:10,
    label:'men'
  },{
    value:20,
    label:'women'
  }])
  console.log(image)
  useEffect(()=>{
    changeChart(data)
  },[data])
  const changeChart=(data)=>{
    let tempValues=[];
    let tempLabels=[];
    data.forEach(element=>{
        tempValues.push(parseInt(element.value));
        tempLabels.push(element.label)
    })
    setLabels(tempLabels);
    setValues(tempValues)
}
const addRow=()=>{
    let tempData=data;
    tempData.push({value:"",label:''})
    console.table(tempData)
    changeChart(tempData)
    setData(tempData)
}
const addImage=async()=>{
  let tempImage
  await takeScreenshot(ref.current).then(res=>tempImage=res)
  // console.log(tempImage)
  helper(tempImage)
}
  return (
    <div>
        Add Charts
        <div>
        <button onClick={()=>setChartTab(1)}>Line</button>
        <button onClick={()=>setChartTab(2)}>Bar</button>
        <button onClick={()=>setChartTab(3)}>Pie</button>
        <button onClick={()=>setChartTab(4)}>Donut</button>
        </div>
        {data.map((item,index)=>(
        <div>
            <input value={item.label} onChange={e=>{
            // console.log(e)
            let tempData=data;
            tempData[index].label=e.target.value;
            // console.table(data)
            changeChart(tempData)
            setData(tempData)
            }} placeholder='label' />
            <input value={item.value} placeholder='value' onChange={(e)=>{
            let tempData=data;
            tempData[index].value=e.target.value;
            changeChart(tempData)
            setData(tempData)
            }} />
            <button onClick={()=>{
            let tempData=[];
            data.forEach((item,i)=>{
                if(i!==index){
                    tempData.push(item)
                }
            })
            changeChart(tempData)
            setData(tempData)
            }}>Remove</button>
        </div>
        ))}
        <button onClick={()=>addRow()}>ADD ROW</button>
        {/* <button onClick={chartMaker} >Generate</button> */}
        <button onClick={()=>{
          // getImage()
          addImage()}}>add</button>
        <div ref={ref}>
            {chartTab===1 && <Line data={data} values={values} labels={labels} />}
            {chartTab===2 && <Bar data={data}  values={values} labels={labels}/>}
            {chartTab===3 && <Pie data={data}  values={values} labels={labels}/>}
            {chartTab===4 && <Donut data={data}  values={values} labels={labels}/>}                    
        </div>
        
    </div>
  )
}

export default ChartMaker