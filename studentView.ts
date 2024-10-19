import { Student } from "./Student";
const btnSave = document.getElementById("btnSave");
const iptName = document.getElementById("iptName") as HTMLInputElement;
const iptEmail = document.getElementById("iptEmail") as HTMLInputElement;
const btnList = document.getElementById("btnList") as HTMLInputElement;
const tblStudent = document.getElementById("tblStudent") as HTMLTableElement;
const students: Student[] = [];
function saveStudent() {
  try {
    const student = new Student(iptName.value);
    student.setEmail(iptEmail.value);
    students.push(student);
  } catch (error) {
    alert(error);
  }
}

function listStudent() {
  let student: Student;
  tblStudent.innerHTML = "";
  for (student of students) {
    tblStudent.innerHTML =
      tblStudent.innerHTML +
      `<tr> <td>${student.name} </td> <td> ${student.getEmail()} </td> </tr>`;
  }
}

btnList?.addEventListener("click", listStudent);
btnSave?.addEventListener("click", saveStudent);
