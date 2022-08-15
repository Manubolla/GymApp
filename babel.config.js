const fs = require("fs");
const path = require("path");

module.exports = function (api) {
  api.cache(true);
  const envName = process.env.APP_ENV || "dev";
  const dotEnvPath = path.resolve(__dirname, `.env.${envName}`);
  if (
    !fs.existsSync(dotEnvPath) &&
    !process.env.EAS_BUILD &&
    !process.env.GITHUB_ACTIONS
  ) {
    throw new Error(
      `Babel config couldn't find dot env file path: ${dotEnvPath}`
    );
  }
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "inline-dotenv",
        {
          unsafe: true,
        },
      ],
      [
        "module-resolver",
        {
          root: [".src/"],
        },
      ],
    ],
  };
};
