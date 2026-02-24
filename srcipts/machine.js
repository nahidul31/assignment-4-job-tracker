function getValueById(id) {
  const value = document.getElementById(id);
  // console.log(value);
  return value;
}

function btnop(id) {
  const interview = getValueById("interview-container");
  const rejected = getValueById("reajected-container");
  const alljobInfo = getValueById("show-all-jobs");
  const selected = getValueById(id);
  interview.classList.add("hidden");
  rejected.classList.add("hidden");
  alljobInfo.classList.add("hidden");
  selected.classList.remove("hidden");
  selected.classList.add("bg-blue-200");
}
