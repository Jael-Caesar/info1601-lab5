//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student, course) {

  // find the course inside transcript
  const record = student.transcript.find(c => c.course === course);

  if (!record) {
    return "Course not found";
  }

  let sum = 0;

  for (let i = 0; i < record.grades.length; i++) {
    sum += record.grades[i];
  }

  return sum / record.grades.length;
}

function getAssignmentMark(student, course, num) {

  const record = student.transcript.find(c => c.course === course);

  if (!record) {
    return "Course not found";
  }

  if (num < 0 || num >= record.grades.length) {
    return "Invalid assignment number";
  }

  return record.grades[num];
}


/*function getAverageGrade (student, course) {
    for (let i = 0; i < student.transcript.length; i++) {
        if (student.transcript[i].course === course) {
            let sum = 0;
            for (let j = 0; j < student.transcript[i].grades.length; j++) {
            }
            sum += student.transcript[i].grades [j];
            return sum / student.transcript[i].grades.length;
        }
    }
    return -1;
} */

function averageAssessment(students, courseName, assignment) {

  let total = 0;
  let count = 0;

  for (let i = 0; i < students.length; i++) {

    const record = students[i].transcript.find(
      c => c.course === courseName
    );

    if (record && assignment >= 0 && assignment < record.grades.length) {
      total += record.grades[assignment];
      count++;
    }
  }

  if (count === 0) {
    return "No valid data found";
  }

  return total / count;
}

console.log(getAverageGrade(bob, 'INFO 1603'));
console.log(getAssignmentMark(bob, 'INFO 1603', 1));
console.log(averageAssessment(students, 'INFO 1601', 0));