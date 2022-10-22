const ShowList = (props) => {
  return (
    <div>
      {props.data.map((e, i) => {
        return (
          <div>
            <span>
              {i + 1}- {e.title}{" "}
            </span>
            <span>{e.category} </span>
            <span>{e.urgent === true ? "Urgent" : "Not Urgent"} </span>
          </div>
        );
      })}
    </div>
  );
};
export default ShowList;
