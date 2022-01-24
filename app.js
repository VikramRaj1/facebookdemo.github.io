


function fetchData(){
    url= ("https://jsonplaceholder.typicode.com/posts/1")
    fetch(url).then(response =>{
        if(!response.ok){
            throw Error("Error");
        }
        return response.json();
    }).then(data => {
        
         document.getElementById('left').innerHTML += data.title+ " " + data.body + " "
    })
    .catch(error =>{
        console.log(error);
    });
}
fetchData();










    
