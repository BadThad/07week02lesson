// const flipCoin = new Promise((resolve, reject) => {
//     let result = Math.random();
//     if (result < 0.5) {
//       resolve("Heads");
//     } else {
//       reject("Tails");
//     }
//   });

// flipCoin
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const randomAdviceId = Math.floor(Math.random()*255);

const fetchAdviceById = async (id) => {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
    if (!response.ok) {
      throw new Error("No network response.");
    }
    const data = await response.json();
    const advice = data.slip.advice;
    console.log(`${advice}`);
  } catch (error) {
    console.error("Sorry, we have no new advice for you.", error);
  }
};

fetchAdviceById(randomAdviceId);