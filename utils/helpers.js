module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()
            }`;
    },
    // seperate_burger: (stringArray) => {
    //     console.log(`Result of seperate_burger: ${typeof stringArray}`);
    //     const converted = stringArray.split(',').join;
    //     console.log(`Result of seperate_burger: ${typeof converted}`);
    //     return converted;
    // },
};


