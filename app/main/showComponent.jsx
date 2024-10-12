"use client"
import data from './data.js'; // adjust the path as necessary
import { useState ,useEffect  } from "react";
import Custom404 from './notFoundsComponent.jsx';
import Header from './headerComponent.jsx';
function ShowNatega(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [Studentdata ,setStudentData]=useState({});
    const [student ,setStudent] = useState({});
    useEffect(() => {
        // Set the data once when the component mounts
        setStudentData(data);
    }, []); 
    
    useEffect(() => {
        try {
            // Find the student when the component mounts or when props.id changes
            const foundStudent = Studentdata.find(student => student.student_class === props.id || student.national_id==props.id );
            if (foundStudent) {
                setStudent(foundStudent); // If student is found, store it
                setIsOpen(false); // No need for 404
            } else {
                throw new Error("Student not found");
            }
        } catch (e) {
            console.log(e);
            setIsOpen(true); // Trigger 404 page if student not found
        }
    }, [props.id, Studentdata]); 
    
    return ( 
        <>
            {isOpen ? <Custom404 /> : student && (
                <>
                <Header></Header>
                 <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }} className=''>
                 <thead>
                     <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
                         <th style={{ padding: "12px", border: "1px solid #ddd" }} className='text-lg font-bold '>ID</th>
                         <th style={{ padding: "12px", border: "1px solid #ddd" }} className='text-lg font-bold '>Student Class</th>
                         <th style={{ padding: "12px", border: "1px solid #ddd" }} className='text-lg font-bold '>Student Name</th>
                         <th style={{ padding: "12px", border: "1px solid #ddd" }} className='text-lg font-bold '>National ID</th>
                         <th style={{ padding: "12px", border: "1px solid #ddd" }} className='text-lg font-bold '>Department</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td style={{ padding: "12px", border: "1px solid #ddd" }} className='text-lg font-bold '>{student.id}</td>
                         <td style={{ padding: "12px", border: "1px solid #ddd" }} className='text-lg font-bold'>{student.student_class}</td>
                         <td style={{ padding: "12px", border: "1px solid #ddd" }} className='text-lg font-bold'>{student.student_name}</td>
                         <td style={{ padding: "12px", border: "1px solid #ddd" }} className='text-lg font-bold'>{student.national_id}</td>
                         <td style={{ padding: "12px", border: "1px solid #ddd" }} className='text-lg font-bold'>{student.department}</td>
                     </tr>
                 </tbody>
             </table>
             </>
            )}
        </>
    );
}

export default ShowNatega;