import Link from 'next/link'

//async function fetchCourses() {
//const response = await fetch('http://localhost:3000/api/courses')
// const courses = response.json()
//return courses
//}
const Courses = async ({ courses }) => {
  //const courses = await fetchCourses()
  return (
    <div className="grid-1 ">
      {courses?.map((course) => (
        <div key={course.id} className="bg-blue-200 p-4 m-4 rounded-lg">
          <h2 className="font-bold text-xl">{course.title}</h2>
          <small className="text-green-600">Level: {course.level}</small>
          <p className="mb-4">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="py-2 px-4 bg-gray-700 hover:bg-gray-800 text-white rounded-lg mb-4"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Courses
