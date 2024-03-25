const PersonForm = ({
  nameValue,
  phoneValue,
  onUpdateNameDetails,
  onUpdatePhoneDetails,
  OnAddContact,
}) => {
  return (
    <div>
      <form onSubmit={OnAddContact}>
        <div>
          <h2>Add New</h2>
          name: <input value={nameValue} onChange={onUpdateNameDetails} />
          phone: <input value={phoneValue} onChange={onUpdatePhoneDetails} />
          
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
