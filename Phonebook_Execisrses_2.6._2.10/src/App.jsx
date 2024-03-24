import { useState } from "react";
import Filter from "./filter";
import PersonForm from "./form";
import Person from "./person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  // Manage filter ir search state
  const [searchTerm, setNewSearchTerm] = useState("");
  const [searchResults, setNewSearchResults] = useState([]);

  // Componet handler functions
  const addContact = (event) => {
    event.preventDefault();
    // Update the phnebook with names

    const newPerson = {
      name: newName,
      phone: newPhone,
    };

    // create a placeholder for the new name
    const checkedName = persons.find(
      (person) => person.name === newPerson.name
    );

    // check whether the new name is already in the array...
    checkedName
      ? alert(`The name ${checkedName.name} is already in`)
      : setPersons([...persons, newPerson]);
    setNewName("");
    setNewPhone("");
  };

  const updateNameDetails = (event) => {
    setNewName(event.target.value);
  };

  const updatePhoneDetails = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSearch = (event) => {
    // ensure all results are displayed when search is empty
    setNewSearchTerm(event.target.value);
    // display set
    const searchedResults = persons.filter((person) =>
      person.name.includes(searchTerm)
    );
    setNewSearchResults(searchedResults);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchTerm} onSearch={handleSearch} />
      <PersonForm
        nameValue={newName}
        phoneValue={newPhone}
        onUpdateNameDetails={updateNameDetails}
        onUpdatePhoneDetails={updatePhoneDetails}
        OnAddContact={addContact}
      />
      <Person searchResults={searchResults} persons={persons} />
    </div>
  );
};

export default App;
