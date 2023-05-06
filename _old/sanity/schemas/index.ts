import recipe from "./recipe-schema";
import ingredient from "./recipe-ingredient-schema";
import recipeStep from "./recipe-step-schema";
import account from "./auth/account";
import user from "./auth/user";
import verificationToken from "./auth/verification-token";

const schemas = [recipe, ingredient, recipeStep, account, user, verificationToken];

export default schemas;