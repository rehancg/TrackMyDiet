const fileHandler = require('../fileHandler');
const chalk = require('chalk');
const androidApplicationIdModule = require('./android/applicationId');
const androidDisplayNameModule = require('./android/displayName');
const iosBundleIdentifierModule = require('./ios/bundleIdentifier');
const iosDisplayNameModule = require('./ios/displayName');
const { execSync } = require('child_process');

const log = console.log;

const init = ({ androidApplicationId, iosBundleIdentifier, displayName, skipIos, skipAndroid, skip }) => {
    return new Promise(async function(resolve, reject) {
        try {
            if (skip) {
                return resolve(true);
            }
            log(chalk.yellow('Starting native app configurations...'));

            if (!skipIos && iosBundleIdentifier) {
                await iosBundleIdentifierModule.resolveIOSApplicationId(iosBundleIdentifier);
            }
            if (!skipAndroid && androidApplicationId) {
                await androidApplicationIdModule.resolveAndroidApplicationId(androidApplicationId);
            }
            if (displayName) {
                !skipIos && await iosDisplayNameModule.changeIosDisplayName(displayName);
                !skipAndroid && await androidDisplayNameModule.changeAndroidDisplayName(displayName);
                if (!skipIos || !skipAndroid) {
                    const appJson = await fileHandler.readJson(`./app.json`);
                    fileHandler.writeJson({ ...appJson, displayName}, `./app.json`);
                    log(chalk.cyan('update ./app.json successful!'));
                }
            }

            try {
                log(chalk.yellow('Updating ios pods and cleaning andorid gradle builds...'));

                if (process.platform != 'win32') {
                    !skipIos && execSync('cd ios && pod install');
                    !skipAndroid && execSync('cd android && ./gradlew clean');
                }
                else {
                    !skipAndroid && execSync('cd android && ./gradlew clean');
                }
                log(chalk.green('Updating ios pods and cleaning andorid gradle builds success!'));

            }
            catch(e) {
                log(chalk.green('Updating ios pods and cleaning andorid gradle builds silently failed!'));
            }
           
    
            return resolve();
        }
        catch (e) {
            log(chalk.red('Updating native app configurations failed!'));
            return reject(e);
        }
    });
}

module.exports = {
    init,
}