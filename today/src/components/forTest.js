export const forTest = (name, days) =>{
    if (!name) {
        return `Привет, незнакомец, не желаешь ли зарегистрироваться?`
    } else {
        if (days <= 5) {
            return `Привет, ${name}, с возвращением!`
        } 
        if (days > 5) {
            return `Привет, ${name}, давно не виделись! Дней - ${days} как прошло.`
        }
    }
}