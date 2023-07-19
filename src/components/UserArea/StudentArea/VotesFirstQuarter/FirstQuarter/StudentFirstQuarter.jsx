import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import FirstQuarterSubjects from '../FirstQuarterSubjects';
import "../../../../../style/buttonList.css"

const StudentFirstQuarter = ({ school_subjects }) => {
    const [renderTable, setRenderTable] = useState(false);
    const [handleOne, setHandleOne] = useState(false);

    const toggleClickOne = () => {
        setHandleOne(true)
        setRenderTable(!renderTable)
    }
    return (
        <>
            <div className='mb-3'>
                <Button id='butStudent' className='mt-0' onClick={toggleClickOne}>1°Q</Button>
                {renderTable && handleOne &&
                    <>
                        <FirstQuarterSubjects
                            school_subjects={school_subjects.primo_quadrimestre}
                        />
                    </>
                }
            </div>

        </>
    )
}

export default StudentFirstQuarter