let ProcessingBundleProcess = require('../obj/src/container/ProcessingBundleProcess').ProcessingBundleProcess;

try {
    new ProcessingBundleProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}