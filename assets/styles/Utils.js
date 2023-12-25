const COLORS = {
  primary: "#2C437E",
  secondary: "#444262",
  tertiary: "#a55a8b",

  gray: "#d5d7de",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const HEADER = {
  servicesTitle: {
    paddingTop: 45,
    fontSize: 19,
    textAlign: "center",
    backgroundColor: COLORS.primary,
    color: COLORS.lightWhite,
    paddingBottom: 15,
    fontWeight: "bold",
  },
  backBtn: {
    display: "flex",
    position: "absolute",
    marginTop: 50,
    marginLeft: 10,
    objectFit: "contain",
    height: 20,
  },
};

export { COLORS, FONT, SIZES, SHADOWS, HEADER };
