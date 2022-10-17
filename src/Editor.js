import React,{useState} from 'react'
import CKEditor from "react-ckeditor-component";

function Editor({content,setContent}) {
    
    // const [editor,setEditor]=useState(null)

    function updateContent(newContent) {
        // this.setState({
        //     content: newContent
        // })
      //   editor.model.change( writer => {
      //     writer.insertText( 'Plain text', editor.model.document.selection.getFirstPosition() );
      // } );
    }
    
    function onChange(evt){
      // console.log("onChange fired with event info: ", evt);
      var newContent = evt.editor.getData();
      // evt.editor.setData(`<h1>Ashish</h1>`)
      // console.log(newContent)
      setContent(newContent)
    }
    
    function onBlur(evt){
      // console.log("onBlur event called with event info: ", evt);
    }
    
    function afterPaste(evt){
      // console.log("afterPaste event called with event info: ", evt);
    }
    function onLoad(evt){
      console.log(evt,"load")
    }
    
        return (
          <>
            <CKEditor 
              activeClass="p10" 
              content={content} 
              events={{
                "load":onLoad,
                "blur": onBlur,
                "afterPaste": afterPaste,
                "change": onChange
              }}
              />
            
          </>

        )
}
export default Editor