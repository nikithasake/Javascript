class Teacher{
    constructor(name, course){
        this.name = name
        this.course = course
    }

    getTeacherDetails(){
        return "Teacher name:"+ this.name+", Teacher course:"+ this.course;
    }
}

class Student extends Teacher{

    constructor(studentName, studentCourse, name, course){
        super(name, course)
        this.studentName = studentName
        this.studentCourse = studentCourse
    }

    getStudentDetails(){
        return "Teacher name:"+ this.name+", Teacher course:"+ this.course + ", Student name:"+ this.studentName;
    }
}

let teacher = new Teacher("nikki", "react");

let student = new Student("prashuu", "react");

//console.log(teacher.getTeacherDetails())
console.log(student.getStudentDetails())
