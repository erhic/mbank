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
    marginTop: -32,
    marginLeft: 10,
    objectFit: "contain",
    height: 20,
  },
};
const REGISTERSTYLES = {
  registerLabelOne: {
    paddingLeft: 60,
    paddingTop: 5,
    color: COLORS.secondary,
    paddingBottom: 10,
  },
  registerLabelTwo: {
    paddingLeft: 60,
    color: COLORS.secondary,
    paddingTop: 5,
    paddingBottom: 10,
  },
  input: {
    height: 40,
    marginHorizontal: 55,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.lightWhite,
  },
  registerBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 27,
  },
  logoImg: {
    backgroundColor: COLORS.primary,
    alignSelf: "center",
    display: "flex",
    marginTop: -45,
    width: 100,
    objectFit: "contain",
  },
  registerLabelthree: {
    paddingLeft: 60,
    color: COLORS.secondary,
    paddingTop: 10,
    paddingBottom: 10,
  },
  registerLabelFour: {
    paddingLeft: 60,
    color: COLORS.secondary,
    paddingTop: 5,
    paddingBottom: 10,
  },
  btnContainer: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    paddingVertical: 15,
  },
  btnText: {
    backgroundColor: COLORS.primary,
    color: COLORS.lightWhite,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
};
const LOGINSTYLES = {
  loginLabelOne: {
    paddingLeft: 60,
    paddingTop: 45,
    color: COLORS.secondary,
    paddingBottom: 10,
  },
  loginLabelTwo: {
    paddingLeft: 60,
    color: COLORS.secondary,
    paddingTop: 15,
    paddingBottom: 10,
  },
  input: {
    height: 40,
    marginHorizontal: 55,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.lightWhite,
  },
  inputPass: {
    height: 40,
    marginLeft: 55,
    borderWidth: 1,
    padding: 10,
    width: 269,
    borderRadius: 10,
    backgroundColor: COLORS.lightWhite,
  },
  loginBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },
  logoImg: {
    backgroundColor: COLORS.primary,
    alignSelf: "center",
    display: "flex",
    width: 100,
    objectFit: "contain",
  },
  registerText: {
    color: COLORS.secondary,
    borderRadius: 10,
  },
  registerLink: {
    color: COLORS.secondary,
    paddingLeft: 10,
  },
  register: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  eyeIcon: {
    objectFit: "contain",
    width: 30,
    marginLeft: -40,
  },
  textBtn: {
    backgroundColor: COLORS.primary,
    color: COLORS.lightWhite,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
};
export { COLORS, FONT, SIZES, SHADOWS, HEADER, REGISTERSTYLES, LOGINSTYLES };
