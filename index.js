"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMonthlyInterval = void 0;
function* generateMonthlyInterval(start, end) {
    const startYear = start.getFullYear();
    const startMonth = start.getMonth();
    const endYear = end.getFullYear();
    const endMonth = end.getMonth();
    if (startYear > endYear)
        throw Error("start year must be less than end year!");
    if (startMonth > endMonth)
        throw Error("Start month must be less than end month!");
    let currentMonth = startMonth;
    let currentYear = startYear;
    while (currentYear < endYear || currentMonth <= endMonth) {
        const yieldDate = new Date();
        yieldDate.setFullYear(currentYear);
        yieldDate.setMonth(currentMonth);
        yield yieldDate;
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        }
        else {
            currentMonth++;
        }
    }
}
exports.generateMonthlyInterval = generateMonthlyInterval;
