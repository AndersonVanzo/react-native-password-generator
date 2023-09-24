module.exports = {
    root: true,
    extends: "@react-native",
    rules: {
        quotes: ["error", "double"],
        "react-hooks/exhaustive-deps": ["off"],
        "react/react-in-jsx-scope": ["off"],
        "react/no-unstable-nested-components": ["off"],
    },
};
