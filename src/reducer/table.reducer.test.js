import tableReducer from "./table.reducer";

describe("testing reducer", () => {
  test("ADD_MEMBER", () => {
    const initialState = {
      members: [
        { id: 1234, name: "Jessica Adams", role: "Community Engineer" },
      ],
      totalMembers: 1,
    };

    const action = {
      type: "ADD_MEMBER",
      payload: {
        member: {
          id: 1235,
          name: "Ompragash Vishwanathan",
          role: "Senior Software Engineer",
        },
      },
    };

    const expectedState = {
        members: [
          { id: 1234, name: "Jessica Adams", role: "Community Engineer" },{
            id: 1235,
            name: "Ompragash Vishwanathan",
            role: "Senior Software Engineer",
          }
        ],
        totalMembers: 2,
      };

    const state = tableReducer(initialState, action)
    expect(state).toEqual(expectedState)
  });


  test("REMOVE_MEMBER", () => {
    const initialState = {
        members: [
          { id: 1234, name: "Jessica Adams", role: "Community Engineer" },
          { id: 1235, name: "Ompragash Vishwanathan", role: "Senior Software Engineer" },
          { id: 1236, name: "Pravin Mali", role: "Community Engineer Manager" },
          { id: 1237, name: "Alex Garg", role: "Community Engineer" },
        ],
        totalMembers: 4,
      };

    const action = {
        type: "REMOVE_MEMBER",
        payload: {
          member: {
            id: 1237,
            name: "Alex Garg",
            role: "Community Engineer",
          },
        },
      };

      const expectedState = {
        members: [
          { id: 1234, name: "Jessica Adams", role: "Community Engineer" },
          { id: 1235, name: "Ompragash Vishwanathan", role: "Senior Software Engineer" },
          { id: 1236, name: "Pravin Mali", role: "Community Engineer Manager" }
        ],
        totalMembers: 3,
      };

      const state = tableReducer(initialState, action)
      expect(state).toEqual(expectedState)

  })
});

