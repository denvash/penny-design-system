"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var cva_1 = require("cva");
var Headless = __importStar(require("@headlessui/react"));
var Button = function (props) {
    var children = props.children, intent = props.intent, size = props.size;
    return ((0, jsx_runtime_1.jsx)(Headless.Button, __assign({ type: "button", className: buttonVariants({ intent: intent, size: size }) }, { children: children }), void 0));
};
exports.Button = Button;
var buttonVariants = (0, cva_1.cva)({
    base: "rounded-md font-semibold shadow-sm",
    variants: {
        intent: {
            primary: "text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2",
            secondary: "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 border border-solid",
            warning: "text-white bg-red-600 hover:bg-black"
        },
        size: {
            small: "px-2 py-1 text-sm",
            medium: "px-3.5 py-2.5 text-base"
        }
    },
    compoundVariants: [
        {
            intent: "primary",
            size: "medium"
        },
        {
            intent: "primary",
            size: "small"
        },
        {
            intent: "secondary",
            size: "medium"
        },
        {
            intent: "secondary",
            size: "small"
        },
        {
            intent: "warning",
            size: "medium"
        },
        {
            intent: "warning",
            size: "small"
        },
    ],
    defaultVariants: {
        size: "medium"
    }
});
