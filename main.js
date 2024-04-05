const list = document.querySelectorAll("li");
console.log(list);
// let value;
list.forEach((ulist) =>
  ulist.addEventListener("click", () => {
    removeclass(list);
    ulist.classList.add("active");
    let rating = ulist.innerText;
    document.getElementById("button").addEventListener("click", () => {
      const front = document.getElementById("first");
      front.innerHTML = `
      <div id="second" class="back d-block">
          <img
            src="./images/illustration-thank-you.svg"
            alt="thank-you-image"
          />
          <div class="my-4">You selected ${rating} out of 5</div>
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      `;
    });
  })
);

function removeclass(arr) {
  arr.forEach((item) => {
    item.classList.remove("active");
  });
}
// function reversecard() {
//   let btn = document.getElementsByTagName("button");
//   //   console.log(btn);
//   let arr = Array.from(btn);
//   console.log(arr);
//   arr.addEventListener("click", function () {
//     let front = document.getElementById("front");
//     front.classList.remove("d-block");
//     front.classList.add("d-none");
//     let back = document.getElementById("back");
//     back.classList.remove("d-none");
//     back.classList.add("d-block");
//   });
// }
