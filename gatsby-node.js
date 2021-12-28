exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-codemirror2-react-17/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
