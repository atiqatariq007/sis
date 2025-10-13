


const db =require ("../database/studentdatabase");




exports.getAllStudents = (req, res) => {
    const sql = "SELECT * FROM student"
    const limit = parseInt(req.query.limit) || 0;
    const offset = parseInt(req.query.offset) || 0;

    if (Number.isInteger(limit) && limit > 0) {
        return res.json(student.slice(offset, offset + limit));
    } else

        db.query(sql, (err, results) => {
            if (err) {
                console.error('❌ Error fetching students:', err);
                return res.status(500).json({ error: 'Database query failed' });
            }
            res.json(results);
        });

};

exports.getStudentById = (req, res) => {
    const studentID =parseInt(req.params.id);
    const sql = "SELECT * FROM student WHERE IdStudent = ?"

    db.query(sql,[studentID],(err,result)=>{
        if (err) {
            console.error("student not found");
            return res.status(500).json({ error: 'Database query failed' });
         }
         res.json(result);
    });
};

exports.UpdateStudent = (req,res)=>{
    const studentid =parseInt(req.params.id);
    const StudentNewName=req.body.name;
    const FatherNewName = req.body.fatherName;

    const sql = "UPDATE student SET  studentName = ? , fatherName =? WHERE IdStudent = ?"

    db.query(sql,[StudentNewName,FatherNewName,studentid],(err,result)=>{
        if (err) {
            console.error("student not found");
            return res.status(500).json({ error: 'Database query failed' });
         }
         res.json(result);
    });
};


exports.addNewStudent = (req, res) => {

    const name = req.body.name;
    const fatherName = req.body.fatherName;
    const sql = "INSERT INTO student (studentName, fatherName) VALUES (?, ?)"


    db.query(sql, [name, fatherName], (err, result) => {
        if (err) {
            console.error("show: ", err);
            return res.status(500).json({ error: "Failed to add student" });
        }

        res.json({
            message: " Student added successfully",
            studentName: name,
            fatherName: fatherName,

        });
    });
};

exports.deleteStudent = (req, res) =>{
    const studentID = parseInt(req.params.id);
    const sql = "DELETE FROM student WHERE IdStudent=?"

    db.query(sql,[studentID],(err,result)=>{
        if(err){
            console.error("No student with this id exist");
            return res.status(500).json({ error: "Failed to DELETE student" });
        }
        res.json({
            message:"Student Deleted successfully",
            IdStudent : studentID
        })
    
});
};
 //module.exports = studentController;