module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
    ],
    rules: {
        quotes: ["error", "double"],
        semi: "error",
        indent: ["error", 4],
        "react/jsx-indent": [1, 4],
        "react/jsx-indent-props": [1, 4],
        "react/jsx-filename-extension": [1, { extensions: [".js", ".tsx", ".jsx", ".ts"] }],
        "import/extensions": 0,
        "no-use-before-define": 0,
        "func-names": 0,
        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": 2,
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".tsx", ".js", ".jsx", ".ts"],
            },
        },
    },
};
