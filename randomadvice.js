const flipCoin = () => {
  return new Promise((resolve, reject) => {
    let flip = Math.random();
    flip < 0.5 ? resolve("Heads") : reject("Tails");
  });
};

const flipCoinResult = async () => {
  try {
    const coinFlip = await flipCoin();
    console.log(coinFlip.resolve);
  } catch (error) {
    console.error("There is no coin.", error);
  }
};

flipCoinResult();

const randomAdviceId = Math.floor(Math.random() * 255);

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
