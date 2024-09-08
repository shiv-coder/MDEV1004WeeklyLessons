fetch('https://api.giphy.com/v1/gifs/random?api_key=5gy5sxOe3vZGV0jzYkBESEKtUFEXllGz&tag=sea+otter&rating=g')
.then(function(response){
    if(response.status == 200){
    return response.json();
    }
    else{
        console.log("Oops we got a problem!")
    }
})
.then(function(jsonData){
    console.log(jsonData);
    let gifUrl = jsonData.data.images.original.url;
    console.log(gifUrl);

    //create gif on web page
let gif = document.createElement('img');
gif.setAttribute('src',gifUrl);
document.body.appendChild(gif);

let gifTitle =jsonData.data.title;
let caption = document.createElement('h3');
caption.innerHTML = gifTitle;
document.body.appendChild(caption);

})
.catch(function(error){
    console.log("There was a problem",error);
})