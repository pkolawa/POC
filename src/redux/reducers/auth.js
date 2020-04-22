export default (state={uid:'123'},action)=>{
    switch(action.type){
      case 'LOGIN':
       return {
        uid:action.uid
       };
      case 'LOGOUT':
       return {};
      default:
       return state;
    }
  }