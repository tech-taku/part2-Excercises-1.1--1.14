const Person = ({searchResults, persons, onHandleDelete}) => {
  return (
    <div>
      <h2>Numbers</h2>
      {searchResults.length > 0
        ? searchResults.map((person) => (
            <li key={person.id}>
              {" "}
              {person.name} {person.phone}
            </li>
          ))
        : persons.map((person) => (
            <li key={person.id}>
              {" "}
              {person.name} {person.phone}
              <button onClick={() => onHandleDelete(person.id)}>Delete</button>
            </li>
          ))}
    </div>
  );
};


export default Person;