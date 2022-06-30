import React, { useState } from "react";
import '../styles/menu1.css';
import { Document, Page} from "react-pdf/dist/esm/entry.webpack";
// import dinein from '../assets/dinein.pdf'
// import take from '../assets/takeout.pdf'

// import dine from '../assets/images/dine.png';
// import takeout from '../assets/images/takeout.png';
// import delivery from '../assets/images/delivery.png';

const Menu1 = () => {   
   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);
 
   const onDocumentLoadSuccess = ({ numPages }) => {
     setNumPages(numPages);
   };
 
   return (
     <div>
       <Document
         file='../assets/p.pdf'
         onLoadSuccess={onDocumentLoadSuccess}
       >
         <Page height="600" pageNumber={pageNumber} />
       </Document>
       <p>
         Page {pageNumber} of {numPages}
       </p>
     </div>
   );
}

export default Menu1;
