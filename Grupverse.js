function renderPost(title, author, content) {
    let post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `
    <div class="post-header">
      <h3 class="post-title">${title}</h3>
      <h5 class="post-author">${author}</h5>
    </div>
    <p class="post-content">${content}</p>
    <div class="post-buttons">
      <button class="like-button">Like</button>
      <button class="comment-button">Comment</button>
    </div>
  `;

    let likeButton = post.querySelector(".like-button");
    likeButton.addEventListener("click", function() {
        console.log("Like button clicked!");
    });

    let commentButton = post.querySelector(".comment-button");
    commentButton.addEventListener("click", function() {
        console.log("Comment button clicked!");
    });

    return post;
}

let app = document.getElementById("app");
let post = renderPost("Hello Everyone", "sudarsan", "This is my first post.");
app.appendChild(post);