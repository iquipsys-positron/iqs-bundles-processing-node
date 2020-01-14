"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const ProcessingBundleServicesFactory_1 = require("../build/ProcessingBundleServicesFactory");
const ProcessingBundleClientsFactory_1 = require("../build/ProcessingBundleClientsFactory");
class ProcessingBundleProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("iqs-bundles-processing", "Processing bundle for iQuipsys Positron");
        this._factories.add(new ProcessingBundleServicesFactory_1.ProcessingBundleServicesFactory);
        this._factories.add(new ProcessingBundleClientsFactory_1.ProcessingBundleClientsFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_aws_node_1.DefaultAwsFactory);
    }
}
exports.ProcessingBundleProcess = ProcessingBundleProcess;
//# sourceMappingURL=ProcessingBundleProcess.js.map