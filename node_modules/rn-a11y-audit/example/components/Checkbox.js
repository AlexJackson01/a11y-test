"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Checkbox = () => {
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Text, { style: styles.header }, "Hello once more")));
};
exports.Checkbox = Checkbox;
const styles = react_native_1.StyleSheet.create({
    header: {
        fontSize: 12,
    },
});
