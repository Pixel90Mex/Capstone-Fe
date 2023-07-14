import React, { useState } from 'react'
import Nav from "react-bootstrap/Nav"
import { Button } from 'react-bootstrap';
import StudentTable from './StudentTable';

const StudentVotesCard = () => {
    const [renderTable, setRenderTable] = useState(false);
    
    const toggleTable = () => {
        setRenderTable(!renderTable)
    }
    return (
        <>
        <Button onClick={toggleTable}>Primo Quadrimestre</Button>
        <Button onClick={toggleTable}>Secondo Quadrimestre</Button>
        <Button onClick={toggleTable}>Medie</Button>
        {
            renderTable && <StudentTable/>
        }
        </>
    )
        
        
}

export default StudentVotesCard