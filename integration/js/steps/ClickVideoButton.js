// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
const AppTestStep = require('../utils/AppTestStep');

class ClickVideoButton extends AppTestStep {
  constructor(kiteBaseTest, sessionInfo) {
    super(kiteBaseTest, sessionInfo);
  }

  static async executeStep(KiteBaseTest, sessionInfo) {
    const step = new ClickVideoButton(KiteBaseTest, sessionInfo);
    await step.execute(KiteBaseTest);
  }

  stepDescription() {
    return 'Click video button';
  }

  async run() {
    await this.page.clickCameraButton();
  }
}

module.exports = ClickVideoButton;
