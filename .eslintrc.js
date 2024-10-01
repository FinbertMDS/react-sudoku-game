module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/no-unknown-property": [
      2,
      {
        "ignore": [
          "jsx",
          "css"
        ]
      }
    ],
    "max-len": "off",
    "react/jsx-indent": "off",
    "no-sequences": "off",
    "no-constant-condition": "off",
    "no-console": "off",
    "indent": "off",
  }
};