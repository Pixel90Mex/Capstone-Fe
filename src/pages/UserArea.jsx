import React, { useState, useEffect } from "react";
import TeacherNavigationBar from "../components/UserArea/TeacherArea/TeacherNavigationBar";
import StudentNavigationBar from "../components/UserArea/StudentArea/StudentNavigationBar";
import Footer from "../components/Home/Footer";
import useSession from "../hooks/useSession";
import UserTeacherHome from "../components/UserArea/TeacherArea/UserTeacherHome";
import UserStudentHome from "../components/UserArea/StudentArea/UserStudentHome";

const UserArea = () => {
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
            <StudentNavigationBar />
            <UserStudentHome />
            <Footer/>
          </>
        }

        {
          !isStudent &&
          <>
            <TeacherNavigationBar />
            <UserTeacherHome />
            <Footer/>
          </>
        }
    </>
  );
}

export default UserArea;