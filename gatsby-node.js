exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-split-pane@next/,
            use: loaders.null(),
          },
          {
            test: pdj,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
