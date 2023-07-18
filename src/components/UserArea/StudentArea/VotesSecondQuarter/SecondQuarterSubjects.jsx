import React from 'react'
import { useState } from 'react';
import { ListGroup, Button } from "react-bootstrap";
import HistoryTable from "./SecondQuarter/TablesSecondQuarter/HistoryTable";
import PhilosophyTable from './SecondQuarter/TablesSecondQuarter/PhilosophyTable';
import ItalianTable from './SecondQuarter/TablesSecondQuarter/ItalianTable';
import MathTable from './SecondQuarter/TablesSecondQuarter/MathTable';
import ScienceTable from './SecondQuarter/TablesSecondQuarter/ScienceTable';
import PhysicalTable from './SecondQuarter/TablesSecondQuarter/PhysicalTable';
import PhysEd from './SecondQuarter/TablesSecondQuarter/PhysEd';

const SecondQuarterSubjects = (school_subjects) => {
    console.log(school_subjects.school_subjects.storia)
    const [renderTableStoria, setRenderTableStoria] = useState(false);
    const [renderTableFilosofia, setRenderTableFilosofia] = useState(false);
    const [renderTableItaliano, setRenderTableItaliano] = useState(false);
    const [renderTableMath, setRenderTableMath] = useState(false);
    const [renderTableScienze, setRenderTableScienze] = useState(false);
    const [renderTableFisica, setRenderTableFisica] = useState(false);
    const [renderTableEdFisica, setRenderTableEdFisica] = useState(false);


    const [handleStoria, setHandleStoria] = useState(false);
    const [handleFilosofia, setHandleFilosofia] = useState(false);
    const [handleItaliano, setHandleItaliano] = useState(false);
    const [handleMath, setHandleMath] = useState(false);
    const [handleScienze, setHandleScienze] = useState(false);
    const [handleFisica, setHandleFisica] = useState(false);
    const [handleEdFisica, setHandleEdFisica] = useState(false);

    const toggleClickStoria = () => {
        setHandleStoria(true)
        setRenderTableStoria(!renderTableStoria)
    }
    const toggleClickFilosifia = () => {
        setHandleFilosofia(true)
        setRenderTableFilosofia(!renderTableFilosofia)
    }
    const toggleClickItaliano = () => {
        setHandleItaliano(true)
        setRenderTableItaliano(!renderTableItaliano)
    }
    const toggleClickMath = () => {
        setHandleMath(true)
        setRenderTableMath(!renderTableMath)
    }
    const toggleClickScienze = () => {
        setHandleScienze(true)
        setRenderTableScienze(!renderTableScienze)
    }
    const toggleClickFisica = () => {
        setHandleFisica(true)
        setRenderTableFisica(!renderTableFisica)
    }
    const toggleClickEdFisica = () => {
        setHandleEdFisica(true)
        setRenderTableEdFisica(!renderTableEdFisica)
    }
    return (
        <>
            <ListGroup className="mt-4">
                <ListGroup.Item className='border-0' style={{backgroundColor: '#ebebeb'}}>
                    <Button style={{fontWeight:'600', width:'133px'}} variant="outline-dark" onClick={toggleClickStoria}>STORIA</Button>
                    {renderTableStoria && handleStoria &&
                        <>
                            <HistoryTable
                                storia={school_subjects.school_subjects.storia}
                            />
                        </>
                    }
                </ListGroup.Item>
                <ListGroup.Item className='border-0' style={{backgroundColor: '#ebebeb'}}>
                    <Button style={{fontWeight:'600', width:'133px'}} variant="outline-dark" onClick={toggleClickFilosifia}>FILOSOFIA</Button>
                    {renderTableFilosofia && handleFilosofia &&
                        <>
                            <PhilosophyTable
                                filosofia={school_subjects.school_subjects.filosofia}
                            />
                        </>
                    }
                </ListGroup.Item>
                <ListGroup.Item className='border-0' style={{backgroundColor: '#ebebeb'}}>
                    <Button style={{fontWeight:'600', width:'133px'}} variant="outline-dark" onClick={toggleClickItaliano}>ITALIANO</Button>
                    {renderTableItaliano && handleItaliano &&
                        <>
                            <ItalianTable
                                italiano={school_subjects.school_subjects.italiano}
                            />
                        </>
                    }
                </ListGroup.Item>
                <ListGroup.Item className='border-0' style={{backgroundColor: '#ebebeb'}}>
                    <Button style={{fontWeight:'600', width:'133px'}} variant="outline-dark" onClick={toggleClickMath}>MATEMATICA</Button>
                    {renderTableMath && handleMath &&
                        <>
                            <MathTable
                                matematica={school_subjects.school_subjects.matematica}
                            />
                        </>
                    }
                </ListGroup.Item>
                <ListGroup.Item className='border-0' style={{backgroundColor: '#ebebeb'}}>
                    <Button style={{fontWeight:'600', width:'133px'}} variant="outline-dark" onClick={toggleClickScienze}>SCIENZE</Button>
                    {renderTableScienze && handleScienze &&
                        <>
                            <ScienceTable
                                scienze={school_subjects.school_subjects.scienze}
                            />
                        </>
                    }
                </ListGroup.Item>
                <ListGroup.Item className='border-0' style={{backgroundColor: '#ebebeb'}}>
                    <Button style={{fontWeight:'600', width:'133px'}} variant="outline-dark" onClick={toggleClickFisica}>FISICA</Button>
                    {renderTableFisica && handleFisica &&
                        <>
                            <PhysicalTable
                                fisica={school_subjects.school_subjects.fisica}
                            />
                        </>
                    }
                </ListGroup.Item>
                <ListGroup.Item className='border-0' style={{backgroundColor: '#ebebeb'}}>
                    <Button style={{fontWeight:'600', width:'133px'}} variant="outline-dark" onClick={toggleClickEdFisica}>ED. FISICA</Button>
                    {renderTableEdFisica && handleEdFisica &&
                        <>
                            <PhysEd
                                edFisica={school_subjects.school_subjects.educazione_fisica}
                            />
                        </>
                    }
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default SecondQuarterSubjects