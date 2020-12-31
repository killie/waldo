const utils = {
    capitalize: (text: string): string => {
        if (text === null || text === "") return "";
        let result = "";
        for (let i = 0; i < text.length; i++) {
            const char = text.substr(i, 1);
            if (i === 0) {
                result += char.toUpperCase();
            } else if (char === char.toUpperCase()) {
                result += " " + char.toLowerCase();
            } else {
                result += char;
            }
        }
        return result;
    }
};

export default utils;
