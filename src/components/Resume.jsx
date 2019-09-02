import React from 'react'
import '../Styling.css'
//import { Document, Page } from 'react-pdf';

import resumePDF from './docs/IranRamirezResume.pdf';

const Resume = () => {

    return(
      <div>
        <embed className="pdf-viewport" width="60%" height="100%" name="plugin" id="plugin" src={resumePDF} type="application/pdf" internalinstanceid="4"></embed>
      </div>
          
    )
}


export default Resume
