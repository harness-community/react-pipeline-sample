import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({dispatch}) => {
    const initialObj = {
        id: uuidv4(),
        name: "",
        role: "",
    }
    const [contributorObj, setContributorObj] = useState(initialObj);
    return(
        <div>
        <h2>Form</h2>
        <input
          placeholder="Add Name"
          value={contributorObj.name}
          onChange={(e) =>
            setContributorObj({ ...contributorObj, name: e.target.value })
          }
        />
        <input
          placeholder="Enter role"
          value={contributorObj.role}
          onChange={(e) =>
            setContributorObj({ ...contributorObj, role: e.target.value })
          }
        />
        <button
          onClick={() => {
            dispatch({
              type: "ADD_MEMBER",
              payload: { member: contributorObj },
            });
            setContributorObj(initialObj)
          }}
        >
          Add Contributor
        </button>
      </div>
    )
}


export default Form
