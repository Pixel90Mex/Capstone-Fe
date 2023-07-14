import React, { useState, useEffect } from "react";
import UserNavigationBar from "../components/UserArea/UserNavigationBar";
import useSession from "../hooks/useSession";
import UserTeacherHome from "../components/UserArea/TeacherArea/UserTeacherHome";
import UserStudentHome from "../components/UserArea/StudentArea/UserStudentHome";
import { useParams } from "react-router-dom";

const UserArea = () => {
  const { id } = useParams();
  console.log(id);
  const session = useSession();
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    if (session.role === "student") {
      setIsStudent(true)
    } else {
      setIsStudent(false)
    }
  }, [])

  return (
    <>
      {isStudent &&
        <>
          <UserNavigationBar />
          <UserStudentHome 
          Student={session}
          />
        </>
      }

      {
        !isStudent &&
        <>
          <UserNavigationBar />
          <UserTeacherHome
          Teacher={session} />
        </>
      }
    </>
  );
}

export default UserArea;