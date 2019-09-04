import React from 'react'
import '../Styling.css'
//import { Document, Page } from 'react-pdf';

import resumePDF from './docs/IranResumeTech(Fall 2019).pdf';

const Resume = () => {

    return(
      <div>
        <embed className="pdf-viewport" height="80%" name="plugin" id="plugin" src={resumePDF} type="application/pdf" internalinstanceid="4"></embed>
        <div className= 'relevant-courses'
              style={{backgroundColor: 'white'}}>
          <h3>Relavent Courses</h3>
          <ul>
            <li>
              <a 
                href="http://faculty.cse.tamu.edu/ritchey/courses/csce121/spring19/syllabus.pdf"
                rel="noopener noreferrer"
                target="_blank">
                  CSCE 121
              </a>
              <br/>
              Intro to Program Design and Concepts
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 219
              </a>
              <br/>
              Digital Electronics
            </li>
            <br/>
            <li> 
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 210
              </a>
              <br/>
              Circuit Analysis
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 211
              </a>
              <br/>
              Power Systems & Circuit Applications
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 350
              </a>
              <br/>
              Analog Electronics
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 355
              </a>
              <br/>
              EMAG & High Frequency Systems
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 455
              </a>
              <br/>
              Wireless Transmission Systems
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 269
              </a>
              <br/>
              Embedded Systems Development in C
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 349
              </a>
              <br/>
              Microcontroller Architecture
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 369
              </a>
              <br/>
              Embedded Systems Software
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 469
              </a>
              <br/>
              Real Time Operating Systems (RTOS)
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 333
              </a>
              <br/>
              Product Development
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 333
              </a>
              <br/>
              Engineering Leadership
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 315
              </a>
              <br/>
              Local Metropolitan Area Networks
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 415
              </a>
              <br/>
              Advanced Network Security
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 352
              </a>
              <br/>
              Electronic Test I
            </li>
            <br/>
            <li>
              <a 
                href="https://catalog.tamu.edu/undergraduate/course-descriptions/eset/"
                rel="noopener noreferrer"
                target="_blank">
                  ESET 329
              </a>
              <br/>
              Six Sigma & Applied Statistics
            </li>
          </ul>
        </div>
      </div>
          
    )
}


export default Resume
