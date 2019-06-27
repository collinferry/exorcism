export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
export const value = (input) => parseInt(COLORS.indexOf(input[0]).toString() + COLORS.indexOf(input[1]).toString());
