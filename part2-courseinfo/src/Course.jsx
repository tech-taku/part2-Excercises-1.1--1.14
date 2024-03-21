import App from "./App";

const Header = ({ heading }) => {
  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>
        {name} {exercises}{" "}
      </p>
    </div>
  );
};

const Course = ({ course }) => {
  const total = course.parts.reduce(
    (max, currentValue) => max + currentValue.exercises,
    0
  );
  console.log(total);

  return (
    <div>
      <Header heading={course.name} />
      <ul>
        {course.parts.map((part) => (
          // If curly braces used- make sure to return otherwise use ()

          <li key={part.id}>
            <Part key={part.id} name={part.name} exercises={part.exercises} />
          </li>
        ))}
      </ul>
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </div>
  );
};

export default Course;
