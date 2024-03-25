import { useEffect, useState } from "react";
import Filter from "./filter";
import PersonForm from "./form";
import Person from "./person";
import peopleServices from "./services/peopleServices";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  // Manage filter ir search state
  const [searchTerm, setNewSearchTerm] = useState("");
  const [searchResults, setNewSearchResults] = useState([]);

  // Get everything from the db first
  useEffect(() => {
    peopleServices.getAll().then((persons) => setPersons(persons));
  }, []);

  // Componet handler functions
  const addContact = (event) => {
    event.preventDefault();
    // Update the phonebook with names
    const newPerson = {
      name: newName,
      number: newPhone,
    };
    // create a placeholder for the new name
    const checkedName = persons.find(
      (person) => person.name === newPerson.name
    );

    // check whether the new name is already in the array- using the following with an else may actually return unexpected behaviour
    
    if (checkedName) {
      alert(`The name ${checkedName.name} is already added to the phonebook`);
      setNewName("");
      setNewPhone("");
      return; //To disallow the saving of that entry
    }

    // tried to make use of the following and it didnt work:
    // checkedName && alert(`The name ${checkedName.name} is already in`)
    // It will actually check if the name is there but will continue to go and save the details

    peopleServices
      .create(newPerson)
      .then((returnName) => setPersons(persons.concat(returnName)));
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

  const handleDelete = (id) => {
    peopleServices
      .deleteItem(id)
      .then(setPersons(persons.filter((person) => person.id !== id)));
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
      <Person
        searchResults={searchResults}
        persons={persons}
        onHandleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
