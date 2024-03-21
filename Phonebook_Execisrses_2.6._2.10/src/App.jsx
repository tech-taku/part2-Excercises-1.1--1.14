import { useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [newNumber, setNewNumber] = useState("");

  // event handler on form submission
  const addContact = (event) => {
    event.preventDefault();
    // const newPerson = {
    //   name: newContact,
    //   id: contacts.length + 1,
    // R
    // };
    const newPerson = newContact;
    const newContactNumber = newNumber;
    {
      contacts.includes(newPerson) || numbers.includes(newContactNumber)
        ? alert(
            `${newPerson} and ${newContactNumber} is already added to the phonebook`
          )
        : setContacts(contacts.concat(newPerson)) &&
          setNumbers(numbers.concat(newContactNumber));
    }

    setNewContact("");
    setNewNumber("");
    console.log(contacts, numbers);
  };

  const handleFormChange = (event) => {
    setNewContact(event.target.value);
    setNewNumber(event.target.value)
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          Name: <input value={newContact} onChange={handleFormChange} />
        </div>
        <div>
          Number: <input />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {contacts.map((contact) => {
          return <li key={contact}>{contact}</li>;
        })}
        {numbers.map((number) => {
          return <li key={number}>{number}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
