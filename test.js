import { generateMonthlyInterval } from "./index";

const interval = generateMonthlyInterval(new Date("2021/10/1"), new Date("2022/11/12"));

let months = 0;
for (const month of interval) {
  console.log(month);
  months++;
}

console.log("total months: ", months);
