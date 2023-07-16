import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Button} from "react-bootstrap";
import HistoryTable from "./FirstQuarter/TablesFirstQuarter/HistoryTable"
import PhilosophyTable from './FirstQuarter/TablesFirstQuarter/PhilosophyTable.jsx';
import ItalianTable from './FirstQuarter/TablesFirstQuarter/ItalianTable';
import MathTable from './FirstQuarter/TablesFirstQuarter/MathTable';
import ScienceTable from './FirstQuarter/TablesFirstQuarter/ScienceTable';
import PhysicalTable from './FirstQuarter/TablesFirstQuarter/PhysicalTable';
import PhysEd from './FirstQuarter/TablesFirstQuarter/PhysEd';

const FirstQuarterSubjects = (school_subjects) => {
    //console.log(school_subjects.school_subjects.storia)
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
        <Container className='mt-5'>
            <Row>
                <Col>
                    <div className='d-flex justify-content-between'>

                        <div>
                            <Button variant="outline-dark" className='p-0' onClick={toggleClickStoria}>STORIA</Button>
                            {renderTableStoria && handleStoria &&
                                <>
                                    <HistoryTable
                                        storia={school_subjects.school_subjects.storia}
                                    />
                                </>
                            }
                        </div>
                        <div>
                            <Button variant="outline-dark" className='p-0' onClick={toggleClickFilosifia}>FILOSOFIA</Button>
                            {renderTableFilosofia && handleFilosofia &&
                                <>
                                    <PhilosophyTable
                                        filosofia={school_subjects.school_subjects.filosofia}
                                    />
                                </>
                            }
                        </div>
                         <div>
                            <Button variant="outline-dark" className='p-0' onClick={toggleClickItaliano}>ITALIANO</Button>
                            {renderTableItaliano && handleItaliano &&
                                <>
                                    <ItalianTable
                                        italiano={school_subjects.school_subjects.italiano}
                                    />
                                </>
                            }
                        </div>
                       <div>
                            <Button variant="outline-dark" className='p-0' onClick={toggleClickMath}>MATEMATICA</Button>
                            {renderTableMath && handleMath &&
                                <>
                                    <MathTable
                                        matematica={school_subjects.school_subjects.matematica}
                                    />
                                </>
                            }
                        </div>
                        <div>
                            <Button variant="outline-dark" className='p-0' onClick={toggleClickScienze}>SCIENZE</Button>
                            {renderTableScienze && handleScienze &&
                                <>
                                    <ScienceTable
                                        scienze={school_subjects.school_subjects.scienze}
                                    />
                                </>
                            }
                        </div>
                        <div>
                            <Button variant="outline-dark" className='p-0' onClick={toggleClickFisica}>FISICA</Button>
                            {renderTableFisica && handleFisica &&
                                <>
                                    <PhysicalTable
                                        fisica={school_subjects.school_subjects.fisica}
                                    />
                                </>
                            }
                        </div>
                        <div>
                            <Button variant="outline-dark" className='p-0' onClick={toggleClickEdFisica}>EDUCAZIONE FISICA</Button>
                            {renderTableEdFisica && handleEdFisica &&
                                <>
                                    <PhysEd
                                        edFisica={school_subjects.school_subjects.educazione_fisica}
                                    />
                                </>
                            }
                        </div> 
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default FirstQuarterSubjects