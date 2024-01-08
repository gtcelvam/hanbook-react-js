module.exports = (webpackEnv) => {
  return {
    resolve: {
      fallback: {
        crypto: require.resolve("crypto-browserify"),
      },
    },
  };
};
