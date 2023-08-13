function YearIsLeapOrNot(year) {
    let ShowYear = [];
    if (year % 4 === 0) {
        ShowYear.push("yaer is leap")
    } else {
        ShowYear.push("year is not leap")
    }

    return ShowYear;
}
let result = YearIsLeapOrNot(2023);
console.log(result)