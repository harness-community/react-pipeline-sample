export const initialState = {
    members: [
      { id: 1234, name: "Jessica Adams", role: "Community Engineer" },
    ],
    totalMembers: 1,
  };

const tableReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_MEMBER" : 
        return {
            ...state,
            members: [...state.members, action.payload.member],
            totalMembers: state.totalMembers+1
        };

        case "REMOVE_MEMBER" : 
        const updatedMembersList = state.members.filter((memberObj) => memberObj.id !== action.payload.member.id )
        return {
            ...state,
            members: [...updatedMembersList],
            totalMembers: state.totalMembers - 1
        };

        default : 
        break;
    }
}


export default tableReducer