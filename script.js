function likePost() {
    alert("❤️ You liked this post! Retro vibes, dude!");
}
  

// Parallax Scroll Effect
document.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    document.querySelector('.layer-bg').style.transform = `translateY(${scrollTop * 0.5}px)`;
});

window.addEventListener("load", function () {
    setTimeout(() => {
      document.querySelector(".loading-screen").style.display = "none";
    }, 1000);
});
  

document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll(".like-btn");
    const commentButtons = document.querySelectorAll(".comment-btn");
    const shareButtons = document.querySelectorAll(".share-btn");
  

    likeButtons.forEach((button) => {
      let liked = false;
      button.addEventListener("click", () => {
        liked = !liked;
        button.textContent = liked ? "❤️ Liked" : "❤️ Like";
        button.style.color = liked ? "red" : "black";
      });
    });
  

    commentButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const comment = prompt("Add your comment:");
        if (comment) {
          alert(`You commented: "${comment}"`);
        }
      });
    });

    shareButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const link = window.location.href; 
        navigator.clipboard.writeText(link);
        alert("Post link copied to clipboard!");
      });
    });
});
  