// const fileInput = document.getElementById("fileInput");
// const songList = document.querySelector(".songlist");

// fileInput.addEventListener("change", function () {
//   songList.innerHTML = ""; // Clear existing list
//   const files = fileInput.files;
//   console.log(files);
//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     if (file.type === "audio/mp3") {
//       const listItem = document.createElement("div");
//       listItem.textContent = file.name;
//       songList.appendChild(listItem);
//     }
//   }
// });

document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const audioPlayer = document.getElementById("audioPlayer");
      const fileURL = URL.createObjectURL(file);
      console.log(fileURL);
      audioPlayer.src = fileURL;
      audioPlayer.play();
    }
  });
