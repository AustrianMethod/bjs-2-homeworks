function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    "marks" in this ? this.marks.splice(this.marks.length, 0, ...marks) : undefined;
}

Student.prototype.getAverage = function () {
    return (
        ("marks" in this && this.marks.length !==0) ?
        (this.marks.reduce((res, elem) => res + elem, 0)/this.marks.length) : 0
    )
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}