
    //7061e970101843f981ba5b883ff0909a
    //https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
     //fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7061e970101843f981ba5b883ff0909a`)
     
     async function news(){
        var news_data = document.getElementById("inp").value;
         let res = await fetch(`http://newsapi.org/v2/everything?q=${news_data}&apiKey=7061e970101843f981ba5b883ff0909a`)
         var data = await res.json();
         console.log("data:", data);
     }
    
     async function news12(){
        //var news_data = document.getElementById("inp").value;
         let res = await fetch(`http://newsapi.org/v2/everything?q=india&apiKey=7061e970101843f981ba5b883ff0909a`)
         var data = await res.json();
         console.log("data:", data.articles);
         let array = data.articles;
         //console.log(array[0]);
// for left side
        let new1 = array[Math.floor(Math.random()*20)]
         let head1 = document.createElement("h2");
         head1.textContent = new1.title;
         let image1 = document.createElement("img");
         image1.src = new1.urlToImage;
         let lay3 = document.getElementById("layout3");
         let lay2 = document.getElementById("layout2");
         let lay1 = document.getElementById("layout");
         lay3.append(head1, image1);
         
//for right side
         let head2 = document.createElement("h2");
         head2.style.marginTop = "30px"
         head2.textContent = array[Math.floor(Math.random()*20)].title;
         let lay4 = document.getElementById("layout4");
         lay4.append(head2);
        

         let head3 = document.createElement("h2");
         head3.textContent = array[Math.floor(Math.random()*20)].title;
         lay4.append(head3);
        

         let head4 = document.createElement("h2");
         head4.textContent = array[Math.floor(Math.random()*20)].title;
         lay4.append(head4);
         

         let head5 = document.createElement("h2");
         head5.textContent = array[Math.floor(Math.random()*20)].title;
         lay4.append(head5);   
     }
news12();
    