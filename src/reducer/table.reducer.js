export const initialState = {
  members: [{ id: 1234, name: "Jessica Adams", role: "Community Engineer" }],
  totalMembers: 1,
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MEMBER":
      console.log("result", {
        ...state,
        members: [...state.members, action.payload.member],
        totalMembers: state.totalMembers + 1,
      });
      return {
        ...state,
        members: [...state.members, action.payload.member],
        totalMembers: state.totalMembers + 1,
      };

    case "REMOVE_MEMBER":
      const memberToBeRemoved = state.members.find(
        (member) => member.id === action.payload.member.id
      );

      const members = state.members.filter(
        (member) => member.id !== action.payload.member.id
      );
      return {
        ...state,
        members,
        totalMembers: state.totalMembers - 1,
      };

    default:
      break;
  }
};

export default tableReducer;
