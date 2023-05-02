
var initialData = {
    productos: [],
  };
  const basicReducer = (storedata = initialData, action) => {
    if (action.type === "productos") {
      return {
        ...storedata,
         productos :action.payload
      };
    } 
    return storedata;
  };
  
  export default basicReducer;