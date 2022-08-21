export default function (name = [], action) {
  if (action.type === "addName") {
    var nameCopy = [];
    nameCopy.push(
      action.name,
      action.lastName,
      action.gender,
      action.probability
    );
    return nameCopy;
  } else {
    return name;
  }
}
