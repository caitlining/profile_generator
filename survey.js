const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)\n", (answer) => {
  const name = answer;
  rl.question("What's an activity you like doing?\n", (answer) => {
    const activities = answer;
    rl.question("What do you listen to while doing that?\n", (answer) => {
      const musicPreference = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (answer) => {
        const faveMeal = answer;
        rl.question("What's your favourite thing to eat for that meal?\n", (answer) => {
          const faveFood = answer;
          rl.question("Which sport is your absolute favourite?\n", (answer) => {
          const faveSport = answer;
          rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (answer) => {
            const superpower = answer;
            {console.log(`${name} loves listening to ${musicPreference} while ${activities}, devouring ${faveFood} for ${faveMeal}, prefers ${faveSport} over any other sport, and is amazing at ${superpower}.`)};
            rl.close();
          });
          });
        });
      });
    });
  });
});