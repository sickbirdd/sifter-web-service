import React, { useEffect } from 'react';


export default function Parser({setContext}) {

    useEffect(() => {
        (async function(){
            const pdfJS = await import('pdfjs-dist/build/pdf');
			pdfJS.GlobalWorkerOptions.workerSrc =
				window.location.origin + '/pdf.worker.min.js';
			const pdf = await pdfJS.getDocument('example.pdf').promise;

			// // Prepare canvas using PDF page dimensions.
			// const canvas = canvasRef.current;
			// const canvasContext = canvas.getContext('2d');
			// canvas.height = viewport.height;
			// canvas.width = viewport.width;

			// // Render PDF page into canvas context.
			// const renderContext = { canvasContext, viewport };
			// page.render(renderContext);
        })();
    }, []);
    const dragDrop = (e) => {
        e.preventDefault();

        const files = [...e.dataTransfer?.files];
  
        console.log(files[0]);

        // const reader = new FileReader();
        // reader.onload = function(){
        //     console.log(reader.result);
        //   };

        // reader.onprogress = function(event){
        //     if (event.loaded && event.total) {
        //         const percent = (event.loaded / event.total) * 100;
        //         console.log(`Progress: ${Math.round(percent)}`);
        //       }
        // };

        // reader.readAsText(files[0])
    }
    return (
        <div className="attachBtn" onDragOver={(e) => e.preventDefault()} onDrop = {(e) => dragDrop(e)}>
            <input type="file" multiple />
            {/* <i className="fa-solid fa-file-arrow-up"></i>
            <span> 첨부 파일</span> */}
        </div>
);
}
