const Person = ({searchResults, persons}) => {
  return (
    <div>
      <h2>Numbers</h2>
      {searchResults.length > 0
        ? searchResults.map((person) => (
            <li key={person.name}>
              {" "}
              {person.name} {person.phone}
            </li>
          ))
        : persons.map((person) => (
            <li key={person.name}>
              {" "}
              {person.name} {person.phone}
            </li>
          ))}
    </div>
  );
};


export default Person;