function basicTeenager(age) {
  if (age === 13)
    return "You are a teenager!"
  if (age === 12)
    return undefined
}

function teenager(age) {
  if (age === 13)
    return "You are a teenager!"
  else  (age === 12 || age === 29)
    return "You are not a teenager"
}

function ageChecker(age) {
  if (age === 13)
    return "You are a teenager!"
  else if (age < 13)
    return "You are a kid"
  else (age > 19)
    return "You are a grownup"
}

function ternaryTeenager(age) {
  return age === 15 ? "You are a teenager" : "You are not a teenager"
  return age === 75 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age) {
    case 15:
      return "You are a teenager";
      break;
    case 75:
      return "You have an age";
      break;
    case 7:
        return "You have an age";
        break;}
}
