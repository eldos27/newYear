const baubles = document.querySelectorAll("main > p");
const maxX = 30;
const maxY = 40;
const baublesLength = baubles.length;

baubles.forEach((bauble, i) => {
  // Tree
  const y = Math.pow(i / baublesLength, 0.5) * maxY * 2 - maxY;
  const x =
    Math.pow((maxX * i) / baublesLength, 0.5) *
    5.5 *
    Math.random() *
    (i % 2 === 0 ? 1 : -1);

  // Wreath
  const wreath = 22.5 + Math.random() * 17.5;

  // Snowperson
  let snowY = maxY * 0.45;
  let snowX = (Math.random() * 0.3 + 0.7) * maxX * 0.7;
  let snowR = Math.random();
  if (i > baublesLength - 25) {
    snowR = i % 2 === 0 ? -0.05 : -0.45;
    snowY = maxY * -0.25;
    snowX = (Math.random() * 0.3 + 0.7) * maxX * 0.5 + Math.random() * 18;
  } else if (i % 10 === 0 || i % 10 === 1) {
    snowY = maxY * -0.7;
    snowX = (Math.random() * 0.3 + 0.7) * maxX * 0.333;
  } else if (i % 10 === 2 || i % 10 === 3 || i % 10 === 4) {
    snowY = maxY * -0.25;
    snowX = (Math.random() * 0.3 + 0.7) * maxX * 0.5;
  }

  bauble.style.setProperty("--x", `${x}vmin`);
  bauble.style.setProperty("--y", `${y}vmin`);
  bauble.style.setProperty("--x-wreath", `${wreath}vmin`);
  bauble.style.setProperty("--r-wreath", `${Math.random()}turn`);
  bauble.style.setProperty("--y-snow", `${snowY}vmin`);
  bauble.style.setProperty("--x-snow", `${snowX}vmin`);
  bauble.style.setProperty("--r-snow", `${snowR}turn`);
  bauble.style.setProperty("--s", Math.random() * 0.875 + 0.125);
  bauble.style.setProperty("--hue", Math.random() * 360);

  bauble.animate(
    { opacity: [1, 1, 0] },
    {
      duration: 2000 + Math.random() * 3000,
      iterations: Infinity,
      direction: "alternate",
      delay: Math.random() * -16000,
      easing: "ease-in",
    }
  );
});

if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document
    .getAnimations()
    //.filter((animation) => animation.id)
    .forEach((animation) => {
      animation.pause();
    });
}

document.getElementById("shape").addEventListener("change", (e) => {
  document.documentElement.classList = e.currentTarget.value;
});
