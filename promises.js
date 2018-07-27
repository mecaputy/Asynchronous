const promiseButton = document.getElementById("promises");
// const div = document.querySelector("div");

// const setText = (text) => {
//     div.textContent = text
// }

const checkAuth2 = () => {
    return new Promise((resolve, reject) => {
      setText('Checking Auth...')
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
  }

const fetchStudent2 = () => {
    return new Promise((resolve, reject) => {
    setText("Fetching Student...")
    setTimeout(() => {
        resolve({name: "Martina"});
    }, 2000);        
    })
};

promiseButton.addEventListener("click", () => {
    checkAuth2()
       .then(isAuth => {
            if (isAuth) {
              return fetchStudent2()
            }
          }
        )
        .then(
          students => {
            setText(students.name)
          }
        )
  });
  