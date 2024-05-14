


export const replaceSlashNWithNewLine = (str: string): string | any => {
    return str.replace(/(?:\r\n|\r|\n)/g, "<br>");
};

export const replaceSpacesWithDashes = (str: string): string | any => {
    return str.replace(/ +/g, "-");
};

export const checkIfTwoWordsAreTheSame = (
    word1: string,
    word2: string
): boolean => {
    return word1.toLowerCase() === word2.toLowerCase();
};

export const checkIfWordIncludeInParagraph = (
    word: string,
    paragraph: string
): boolean => {
    return paragraph.toLowerCase().includes(word.toLowerCase());
};

export const checkIfStringIsEmpty = (word: string): boolean => {
    return word === "";
};
export const checkIfTypeIsString = (word: string): boolean => {
    return typeof word === "string";
};

export const convertTextToPascalCase = (text: any) => {
    text = text?.replace("/", "-");
    return text?.replace(/(^\w|-\w)/g, makeTextClearAndUpper);
};

export const makeTextClearAndUpper = (text: any) => {
    return text.replace(/-/, "").toUpperCase();
};
export const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getFirstLetterOfFirstAndLastWord = (word: string) => {
    let firstLetters = word
        .split(" ")
        .map((i) => i.charAt(0))
        .join("")
        .toUpperCase();
    let result =firstLetters?.length>1? firstLetters[0]?.concat(firstLetters[firstLetters.length - 1]):firstLetters[0];
    return result;
};

// check If Include UUID
export const checkIfIncludeUUID = (text: string): boolean => {
    const uuidRegex: RegExp =
        /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i;

    if (uuidRegex.test(text)) {
        return true;
    } else {
        return false;
    }
};




export const toPascalCaseWithSpace = (str: string) => {
    return str
        .split("_") // Split the string into an array of words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
        .join(" "); // Join the words back into a single string with a space between each word
};

export const parseUserAgent = (userAgentString: string) => {
    // const agent = useragent.parse(userAgentString);
    let browserName = userAgentString.match(
        /(Opera|Chrome|Safari|Firefox|MSIE|Trident(?=\/)|Edg(?=\/))\/?\s*([\d\.]+)/i
    )?.[1];
    let osName = userAgentString.match(/\(([^)]+)\)/)?.[1];
    if (userAgentString.includes("Edg")) {
        browserName = "Edge";
    }
    return {browserName, osName};
};


export const generateRandomPassword = (length?: number): string => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    const uppercaseChars = lowercaseChars.toUpperCase();

    const allChars = uppercaseChars + lowercaseChars + numbers + specialChars;
    let password = '';

    for (let i = 0; i < (length ?? 12); i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}

export const highlightString = (str: string, searchValue: string, color?: string): string|undefined => {
    const regex = new RegExp(`(${searchValue})`, "gi");
    const highlightedValue = `<span style="font-weight:bold ; background-color: ${color ?? "yellow"}">$1</span>`;
    return str?.replace(regex, highlightedValue);
};
