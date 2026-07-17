export const formatStudents = (students) =>
  students >= 1000 ? `${(students / 1000).toFixed(1)}k` : students;
