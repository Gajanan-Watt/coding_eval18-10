async function searchNews(){
    var news_data = document.getElementById("query").value;
     let res = await fetch(`http://newsapi.org/v2/everything?q=${news_data}&apiKey=7061e970101843f981ba5b883ff0909a`)
     var data = await res.json();
     console.log("data:", data);
    //console.log(data.articles[2].title)
    let article = data.articles;
    console.log(article)
     appendNews(article);
 }


async function appendNews(article){
// using destucturing and ES6 
  news.innerHTML = null;
    await article.forEach((el) => {

        let news = document.getElementById("news");

        let head = document.createElement('h2');
        head.textContent = el.title;
        let image = document.createElement('img');
        image.style.width = "100%"
        image.src = el.urlToImage;
        let para = document.createElement('p');
        para.textContent = el.content;
        
      news.append(head,image,para);
    });
}