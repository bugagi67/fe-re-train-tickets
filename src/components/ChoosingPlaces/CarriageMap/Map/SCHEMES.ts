export type SupportedScheme = "first" | "second" | "third" | "fourth";

export const SCHEMES = {
  first: [
    ...Array.from({ length: 8 }, (_, i) => ({
      type: "compartment",
      seats: [i * 2 + 2, i * 2 + 1], // [2,1], [4,3], ...
    })),
  ],

  second: [
    ...Array.from({ length: 8 }, (_, i) => ({
      type: "compartment",
      seats: [
        i * 4 + 2, // top-left -> 2
        i * 4 + 4, // top-right -> 4
        i * 4 + 1, // bottom-left -> 1
        i * 4 + 3, // bottom-right -> 3
      ], // визуально: 2,1,4,3 when read as top-left, bottom-left, top-right, bottom-right
    })),
  ],

  third: [
    ...Array.from({ length: 8 }, (_, i) => ({
      left: {
        type: "compartment",
        seats: [i * 2 + 2, i * 2 + 1], // [2,1], [4,3], ...
      },
    })),

    ...Array.from({ length: 8 }, (_, i) => ({
      right: {
        type: "side",
        seats: [33 + i * 2 + 1, 33 + i * 2], // [34,33], [36,35], ...
      },
    })),
  ],

  fourth: [
    ...Array.from({ length: 8 }, (_, i) => ({
      type: "compartment",
      seats: [i * 4 + 2, i * 4 + 4, i * 4 + 1, i * 4 + 3],
    })),
    ...Array.from({ length: 8 }, (_, i) => ({
      type: "compartment",
      seats: [32 + i * 4 + 2, 32 + i * 4 + 4, 32 + i * 4 + 1, 32 + i * 4 + 3],
    })),
  ],
} as const;
