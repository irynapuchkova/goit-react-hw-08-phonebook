export const logger = (store) => (next) => (action) => {
  if (action.type === "app/SubmitForm") {
    console.group(action.type);
    console.info("store", store.getState());
    console.info("dispatching", action);
    console.groupEnd(action.type);
  }

  return next(action);
};
