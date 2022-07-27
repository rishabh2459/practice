// import React from "React";
  
  function ChildComponent({ name,college,data}) {
    // console.log(props);
    // const {name, college, data} = props;
    return (
      <>
      <div>
        <h2>Child Component</h2>
        <h3>My name is{name}</h3>
        <p>College {college}</p>

        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Roll No.</th>
              <th>Subject</th>
            </tr>
          </thead>

          <tbody>
            {data.map((arr, index) => {
              console.log(arr);
              return (
                <tr key = {index}>
                  <td>{index + 1}</td>
                  <td>{arr.name}</td>
                  <td>{arr.rollno}</td>
                  <td>{arr.sub}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </>
    );
  }

export default ChildComponent;