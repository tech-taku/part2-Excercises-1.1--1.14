import Course from "./Course";

const Header = ({ heading }) => {
  console.log(heading);
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
};

// const Content = ({ name, total }) => {
//   return (
//     <div>
//       <p>{name? name: null}</p>
//       <p><strong>{total && `total of ${total} exercises`}</strong></p>
//     </div>
//   );
// };

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      <div>
        <Header heading="Web development curriculum" />

        {courses.map((course) => (
          console.log(course),
          <Course key={course.id} course={course} />
          
        ))}
        
      </div>

      <div>
        {/* <Content
          name={course.parts.map((part) => (
            <p>
              {part.name} {part.exercises}
            </p>
          ))}
        /> */}
      </div>
    </>
  );
};

export default App;
