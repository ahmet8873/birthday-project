const List = ({ people }) => {
  return (
   
      <div className="list">
        {people.map((person) => (
          <div className="iclist">
            <img src={person.image} alt={person.name} />

            <div className="info">
              <h4>{person.name}</h4>
              <p>{person.age}</p>
            </div>
          </div>
        ))}
      </div>
   
  );
};

export default List;
