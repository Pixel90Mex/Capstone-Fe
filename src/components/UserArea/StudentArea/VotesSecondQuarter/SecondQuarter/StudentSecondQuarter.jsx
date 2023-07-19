import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import SecondQuarterSubjects from '../SecondQuarterSubjects';
import "../../../../../style/buttonList.css"

const StudentSecondQuarter = ({ school_subjects }) => {
    //console.log(school_subjects)
    const [renderTable, setRenderTable] = useState(false);
    //test per renderizzare in base al bottone premuto
    const [handleTwo, setHandleTwo] = useState(false);

    const toggleClickTwo = () => {
        setHandleTwo(true)
        setRenderTable(!renderTable)
    }
    return (
        <>
            <div>
                <Button id='butStudent' className='mt-0' onClick={toggleClickTwo}>2°Q</Button>
                {renderTable && handleTwo &&
                    <>
                        <SecondQuarterSubjects
                            school_subjects={school_subjects.secondo_quadrimestre}
                        />
                    </>
                }
            </div>
        </>
    )
}

export default StudentSecondQuarter