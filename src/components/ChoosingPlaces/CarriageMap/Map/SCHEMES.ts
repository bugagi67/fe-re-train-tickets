export type SupportedScheme = "first" | "second" | "third" | "fourth"

export const SCHEMES = {
  third: [
    // 8 купе слева
    ...Array.from( { length: 8 }, ( _, i ) => ( {
      left: {
        type: "compartment",
        seats: [
          i * 4 + 1, // нижнее левое
          i * 4 + 2, // верхнее левое
          i * 4 + 3, // верхнее правое
          i * 4 + 4, // нижнее правое
        ],
      }
    } ) ),
    // 8 боковых справа
    ...Array.from( { length: 8 }, ( _, i ) => ( {
      right: {
        type: "side",
        seats: [
          33 + i * 2 + 1, // нижнее боковое
          33 + i * 2 + 2, // верхнее боковое
        ],
      }
    } ) ),
  ],
  second: [
    ...Array.from( { length: 8 }, ( _, i ) => ( {
      type: "compartment",
      seats: [ i * 4 + 1, i * 4 + 2, i * 4 + 3, i * 4 + 4 ],
    } ) ),
  ],
  first: [
    ...Array.from( { length: 8 }, ( _, i ) => ( {
      type: "compartment",
      seats: [ i * 2 + 1, i * 2 + 2 ],
    } ) ),
  ],
  fourth: [
    ...Array.from( { length: 8 }, ( _, i ) => ( {
      type: "compartment",
      seats: [
        i * 4 + 1, // нижнее левое
        i * 4 + 2, // верхнее левое
        i * 4 + 3, // верхнее правое
        i * 4 + 4, // нижнее правое
      ],
    } ) ),
    ...Array.from( { length: 8 }, ( _, i ) => ( {
      type: "compartment",
      seats: [
        32 + i * 4 + 1, // нижнее боковое
        32 + i * 4 + 2, // верхнее боковое
        32 + i * 4 + 3, // нижнее боковое
        32 + i * 4 + 4, // верхнее боковое
      ],
    } ) ),
  ]
} as const;