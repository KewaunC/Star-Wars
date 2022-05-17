document.querySelector("button").addEventListener("click", getChar);

function getChar() {
  // let getCharacter = document.querySelector('input').value
  let url = `https://swapi.py4e.com/api/people/?format=json`;
  // console.log(url)

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      // console.log(data)
      const characterSearch = document.querySelector("input").value
      // line 14 says that if Char.name contains CharSearch then the arrow function will return true as long as the index doesnt return -1
      const charArray = data.results.filter(char => char.name.toLowerCase().indexOf(characterSearch.toLowerCase())!== -1 )
      // console.log(charArray)
      const character = charArray[0]

      document.querySelector("h1").innerText = character.name
      document.querySelector(".gender").innerText = character.gender
      document.querySelector(".eyeColor").innerText = character.eye_color
      document.querySelector(".birthYear").innerText = character.birth_year
      document.querySelector(".height").innerText = character.height

            
      


      // let inputNumber = 
      // document.querySelector("input").value = inputNumber;
       
      // console.log (inputNumber);
     
      // console.log(data.results[Number(`${inputNumber}`)].name);
      // document.querySelector("h1").innerText = data.results[Number(`${inputNumber}`)].name;
      // return data.results[Number(`${inputNumber}`)].name           
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
