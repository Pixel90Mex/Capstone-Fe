import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import StudentList from './StudentList';
//import "../../style/MainCard.css"

const TeacherMainCard = ({ idClass, section, Teacher }) => {
  console.log(Teacher)
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [singleClass, setSingleClass] = useState(null);

  const getClass = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/class/${idClass}?page=${page}&pageSize=${pageSize}`
      );
      const data = await response.json();
      setSingleClass(data);
    } catch (error) {
      console.log(error);
    };
  };
  useEffect(() => {
    getClass()
  }, [page, pageSize]);

  return (
    <>
      <StudentList
        singleClass={singleClass}
        section={section}
        Teacher={Teacher}
      />
    </>
  );
}

export default TeacherMainCard;