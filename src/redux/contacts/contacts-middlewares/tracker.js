const trackAction = (type) => {
  console.log("tracker.type => ", type);
};

export const tracker = (store) => (next) => (action) => {
  trackAction(action.type);

  return next(action);
};
