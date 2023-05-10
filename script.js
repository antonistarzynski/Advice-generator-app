const btn = document.querySelector("button");
const adviceId = document.querySelector(".advice-id");
const advice = document.querySelector("article");

const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const advice = await res.json();
    return advice.slip;
};

btn.addEventListener("click", () => {
    getAdvice()
        .then((data) => {
            adviceId.textContent = data.id;
            advice.textContent = data.advice;
        })
        .catch((err) => {
            console.log("error!")
            console.log(err);
        })
});




