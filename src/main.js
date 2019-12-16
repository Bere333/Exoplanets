const search = document.querySelector(".input-search")
const selectType = document.querySelector("#select-type")


const getData = () =>{

    fetch("https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2016-09-01&endDate=2019-09-30&catalog=ALL&api_key=1qKDxv55zICsKKnsPKcTHW35m6dROjKl3lYdyxal")
      .then((response) => {
        return response.json();
      })
      .then((myJson) =>{
            const speed = myJson.map(x=>{
                return x["type"]
            })
            const dataFilter = speed.filter(type => type === "C")
            console.log(speed);
            console.log(dataFilter);
            
            
            //console.log(myJson[0]["speed"]);
            
      })
      .catch(()=>{return "error"})
}

const hide = e => {

    console.log(e.target);
    
}
search.addEventListener('click', getData())
selectType.addEventListener('click', hide())

//https://api.nasa.gov/planetary/apod?api_key=1qKDxv55zICsKKnsPKcTHW35m6dROjKl3lYdyxal