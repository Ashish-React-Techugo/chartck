import { CKEditor } from 'ckeditor4-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {React,useState,createRef,useEffect} from 'react'
import './App.css';
import Chart from "react-apexcharts";
import { useScreenshot } from 'use-react-screenshot';
import CustomModal from './Modal';
import Editor from './Editor'

import ChartMaker from './charts/ChartMaker';


// import { Doughnut } from 'react-chartjs-2';

function App() {
  // const [charts,setCharts]=useState([])
  const [content,setContent]=useState('content')
  const [modalIsOpen, setIsOpen] = useState(false);
  // const ref=createRef(null)
  // const [image,takeScreenshot]=useScreenshot();
  // const getImage=(ref)=>takeScreenshot(ref.current)
  const helper=(image)=>{
    // getImage();'
    // console.log(image)
    appendChart(image)
    // console.log(document.querySelector(".cke_editable"))
    // document.querySelector('.cke_editable').innerHTML+=`<img src="${image}" alt='' align='right'/>`
    // console.log(CKEditor)
    // var imgHtml = CKEditor.dom.element.createFromHtml("<img src=" + "https://ik.imagekit.io/yfeaxn7q0f/basic-bar_a5DrwOiY_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665473988365" + " alt='' align='right'/>");
    // CKEditor.instances.body.insertElement(imgHtml);
  }
  const appendChart=(image)=>{
    let tempContent=content
    // console.log(content)
    tempContent+=`<img alt="" src="${image}" style="height:183px; width:276px" />`
    setContent(tempContent)
    setIsOpen(false)
  }
  return (
    <div className="App">
      
      {/* <CKEditor
        onChange={(e)=>console.log(e.editor.getData())}
        initData="<p>Hello from CKEditor 4!</p>"
        onReady={(e)=>console.log(e.editor.getData())}
      /> */}
       <Editor content={content} setContent={setContent} />
            {/* <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    
                // /> */}
            <CustomModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} children={
              <ChartMaker helper={helper} />
              // <div>asfaf</div>
            } />
            <button onClick={()=>{
              setIsOpen(true);
              // setCharts([...charts,charts.length+1])
              }}>Add chart</button>
            <button >jsdf</button>
    </div>
  );
}

export default App;
