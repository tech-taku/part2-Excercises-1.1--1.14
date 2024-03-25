import { useEffect, useState } from "react";
import Filter from "./filter";
import PersonForm from "./form";
import Person from "./person";
import peopleServices from "./services/peopleServices";

const Footer = () => {
  const footerStyle = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16,
  };

  return (
    <div style={footerStyle}>
      <br />
      <em>Phonebook, Created by Ashley Mapfumo of Harare</em>
    </div>
  );
};
const App = () => {
  // Manage persons and filter state
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchTerm, setNewSearchTerm] = useState("");
  const [searchResults, setNewSearchResults] = useState([]);

  // Pull resources from the database
  useEffect(() => {
    peopleServices.getAll().then((persons) => setPersons(persons));
  }, []);

  // Component handler function to add form data and save it to the db
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
      person.name.includes(event.target.value)
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
      <Footer />
    </div>
  );
};

export default App;
