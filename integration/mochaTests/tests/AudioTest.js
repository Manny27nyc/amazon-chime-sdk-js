const { describe, before, after, it } = require('mocha');
const { v4: uuidv4 } = require('uuid');
const { Window } = require('../utils/Window');
const WebDriverFactory = require('../utils/WebDriverFactory');
const SdkBaseTest = require('../utils/SdkBaseTest');
const AppPage = require('../pages/AppPage');

describe('AudioTest', () => {
  const driverFactory = new WebDriverFactory();
  let page;
  let test_window;
  let monitor_window;
  let test_attendee_id;
  let monitor_attendee_id;
  let meetingId;
  // class AudioTest extends SdkBaseTest {
  //   constructor() {
  //     super();
  //   }
  // }

  /*
   * 1. Starts a meeting
   * 2. Adds 2 participants to the meeting
   * 3. Turns on the audio tone for both
   * 4. One attendee plays random tone
   * 5. Checks if the other participant is able to hear the tone
   * 6. Same attendee mutes the audio
   * 7. Checks if the other participant is not able to hear the audio
   * */

  before(async () => {
    await driverFactory.build();
    driverFactory.driver.manage().window().maximize();
    page = new AppPage(driverFactory.driver);
  });

  // after(async () => {
  //   driverFactory.driver.quit();
  // });

  describe('run test on single session', async () => {
    describe('setup', async () => {
      it('should open the meeting demo in two tabs', async () => {
        test_window = await Window.existing(driverFactory.driver, "TEST");
        monitor_window = await Window.openNew(driverFactory.driver, "MONITOR");
  
        await test_window.runCommands(async () => await page.open(driverFactory.url));
        await monitor_window.runCommands(async () => await page.open(driverFactory.url));
      });
  
      it('should authenticate the user to the meeting', async () => {
        meetingId = uuidv4();
        test_attendee_id = 'Test Attendee - ' + uuidv4().toString();
        monitor_attendee_id = 'Monitor Attendee - ' + uuidv4().toString();
  
        await test_window.runCommands(async () => await page.enterMeetingId(meetingId));
        await monitor_window.runCommands(async () => await page.enterMeetingId(meetingId));
  
        await test_window.runCommands(async () => await page.enterAttendeeName(test_attendee_id));
        await monitor_window.runCommands(async () => await page.enterAttendeeName(monitor_attendee_id));
  
        // TODO: Add region selection option
        // await test_window.runCommands(async () => await page.selectRegion());
        // await monitor_window.runCommands(async () => await page.selectRegion());
  
        await test_window.runCommands(async () => await page.authenticate());
        await monitor_window.runCommands(async () => await page.authenticate());
      });
    });
    
    describe('user', async () => {
      it('should join the meeting', async () => {
        await test_window.runCommands(async () => await page.joinMeeting());
        await monitor_window.runCommands(async () => await page.joinMeeting());
      });
    });

    describe('meeting', async () => {
      it('should have two participants in the roster', async () => {
        await test_window.runCommands(async () => await page.rosterCheck(2));
        await monitor_window.runCommands(async () => await page.rosterCheck(2));
      });
    });

    describe('both attendee', async () => {
      it('should be muted at the start of the test', async () => {
        // TODO: Currently, the meeting demo does not have an option for the attendee to join muted.
        // Using selenium to mute the attendees at this point. The demo should be updated to allow an option to join in the future.
        await test_window.runCommands(async () => await page.muteMicrophone());
        await monitor_window.runCommands(async () => await page.muteMicrophone());
      })
    });

    describe('test attendee', async () => {
      it('should play random tone', async () => {
        await test_window.runCommands(async () => await page.playRandomTone());
      })
    });

    // describe('monitor attendee', async () => {
    //   it('should check for random tone in the meeting', async () => {
    //     await monitor_window.runCommands(async () => await page.audioCheck("AUDIO_ON"));
    //   })
    // });

    // describe('test user', async () => {
    //   it('should stop playing random tone', async () => {
    //     await test_window.runCommands(async () => await page.playRandomTone());
    //   })
    // });

    // describe('monitor user', async () => {
    //   it('should check for no random tone in the meeting', async () => {
    //     await test_window.runCommands(async () => await page.playRandomTone());
    //   })
    // });
  });
});
// }

// (async () => {
//   let test = new AudioTest();
//   await test.runIntegrationTest();
// })();
