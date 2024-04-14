
let container = document.querySelector(".cont-child2")
let arr = []

const fetchData = async () => {
    let url = `jsonData/women.json`

    try {
        let res = await fetch(url)

        let data = await res.json()
        arr= data

        // console.log(arr)

        displayData()


    } catch (error) {
        console.log(error)
    }
}


const lowToHighBtn = document.getElementById('lowToHigh');
    const highToLowBtn = document.getElementById('highToLow');
    lowToHighBtn.addEventListener('click', () => {
        arr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        displayData();
    });
    highToLowBtn.addEventListener('click', () => {
        arr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        displayData();
    });


    
function displayData() {
    container.innerHTML = ""; 

    arr.forEach((elem) => {
        
        let div = document.createElement("div")
        div.innerHTML = `<img src=${elem.image} alt="">
        <h3> ${elem.name} </h3>
        <p>${elem.price}</p>
        <p>${elem.discount}</p>`
div.className="child-22"

        container.append(div)
    })


}

fetchData()
