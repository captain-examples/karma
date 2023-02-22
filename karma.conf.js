// Karma configuration
// Generated on Tue Feb 21 2023 14:21:27 GMT-0500 (Eastern Standard Time)

module.exports = function (config) {
  config.set({
    reporters: ["progress", "json"],
    jsonReporter: {
      stdout: false,
      outputFile: "tmp/results.json",
    },
    frameworks: ["jasmine"],
    files: ["tests/**/*.js"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ["Chrome", "ChromeHeadless", "ChromeHeadlessCI"],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
    singleRun: true,
    concurrency: Infinity,
  });
};
