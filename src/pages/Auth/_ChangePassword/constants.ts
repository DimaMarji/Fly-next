import {InputRules} from "../../../Constants/RegExr/InputRules/InputRules"

const {greaterThanEight, containsNumber, containsSymbol, ContainsUppercase, ContainsLowercase} = InputRules

export const validatorSetting = {
    contentColor: "white",
    titleColor: "black",
    backgroundColor: "#349EA7",
    title: "Password must contain the following:",
    rules: [
        {
            pattern: greaterThanEight.pattern,
            message: greaterThanEight.message
        }, {
            pattern: containsNumber.pattern,
            message: containsNumber.message
        }, {
            pattern: containsSymbol.pattern,
            message: containsSymbol.message
        },
        {
            pattern: ContainsUppercase.pattern,
            message: ContainsUppercase.message
        },
        {
            pattern: ContainsLowercase.pattern,
            message: ContainsLowercase.message
        }
    ],
}

export const indicatorSetting = {
    rules: [
        {
            pattern: greaterThanEight.pattern,
        }, {
            pattern: containsNumber.pattern,
        }, {
            pattern: containsSymbol.pattern,
        },
        {
            pattern: ContainsUppercase.pattern,
        },
        {
            pattern: ContainsLowercase.pattern,
        }
    ]
}