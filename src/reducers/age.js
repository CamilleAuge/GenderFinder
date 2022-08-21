export default function (age = "", action) {
  if (action.type === "addAge") {
    return action.age;
  } else {
    return age;
  }
}
