const awaitButton = document.getElementById("asyncAwait");
// const div = document.querySelector("div")
// const setText3 = (text) => {
//   div.textContent = text
// }

const checkAuth3 = () => {
  return new Promise((resolve, reject) => {
    setText('Checking Auth...')
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
}

const fetchStudent3 = () => {
  return new Promise((resolve, reject) => {
    setText('Fetching Student...')
    setTimeout(() => {
      resolve({ name: "Martina" });
    }, 2000)
  })
}

awaitButton.addEventListener("click", async () => {
  const isAuth = await checkAuth3()
  let student = null;
  if (isAuth) {
    student = await fetchStudent3()
  }
  setText(student.name)
});
