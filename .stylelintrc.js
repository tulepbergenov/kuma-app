const { propertyGroups } = require("stylelint-config-clean-order");

const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  emptyLineBefore: "always",
  properties,
}));

module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-tailwindcss",
    "stylelint-config-clean-order",
  ],
  rules: {
    "order/properties-order": [
      propertiesOrder,
      {
        severity: "warning",
        unspecified: "bottomAlphabetical",
      },
    ],
  },
};
