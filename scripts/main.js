async function apiCall(url) {


    //add api call logic here

    try {

        let res = await fetch(url);
        let data = await res.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }


}


function appendArticles(articles, main) {

    //add append logic here

    articles.forEach(element => {
        let div = document.createElement('div');
        div.setAttribute("id","news")

        let title = document.createElement("p");
        title.textContent = element.title;

        let desc = document.createElement('p');
        desc.textContent = element.description;

        let image = document.createElement('img');
        image.src = element.urlToImage;

        div.append(title,desc,image);

        div.onclick = () =>{
            localStorage.setItem("article",JSON.stringify(element));
            window.location.href = "news.html";
        }

        main.append(div);
        
    });

}

export { apiCall, appendArticles }