/// <reference types="cypress" />

module.exports = (on, config) => {
  if (config.env.a11yConfig == true) {
    // config.video = false;
    // config.videoCompression=false
    // config.videoUploadOnPasses = false;
    // config.retries = { runMode: 0, openMode: 0 };
  }

  console.log(config)
}
