import pdj from "./public/page-data/niftyCode/page-data.json";

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-split-pane/,
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
