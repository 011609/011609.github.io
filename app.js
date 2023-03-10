const age = 96;
/**
 * 코리안 에이지 뱉어줌
 * @param {number} ageOfForeigner 
 * @returns 
 */
function koreanAge(ageOfForeigner) {
    return ageOfForeigner + 2
};

const player = {
    name: '김인간',
    age: 60
};

const playerKoreanAge = koreanAge(player.age)

alert(koreanAge(123))