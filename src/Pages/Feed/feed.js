export function feed () {
    const containerFeed = document.createElement("div");
  
    const templateFeed = `   
      
      <header></header>
  
     <main>
  
       <div class = "container-feed">
         <textarea class="post"  placeholder="O que deseja compartilhar?"></textarea>
         <button class="btn-post">Publicar</button>

       </div>
  
     </main>
  
     <footer>
     <p class="desenvolvedora"> Desenvolvido por Carolina Menezes</p>
     </footer>
  `;

  containerFeed.innerHTML = templateFeed;

  //interligando com a página de CSS
  const feedStyle = document.createElement("link"); 
  feedStyle.rel = "stylesheet";
  feedStyle.href = "Pages/Feed/feed.css";
  document.head.appendChild(feedStyle);

  return containerFeed;
}