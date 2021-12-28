exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-lifecycles-compat/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
