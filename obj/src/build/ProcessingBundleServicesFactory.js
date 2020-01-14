"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const iqs_services_currobjectstates_node_1 = require("iqs-services-currobjectstates-node");
const iqs_services_currdevicestates_node_1 = require("iqs-services-currdevicestates-node");
const iqs_services_stateupdates_node_1 = require("iqs-services-stateupdates-node");
const iqs_services_incidents_node_1 = require("iqs-services-incidents-node");
const iqs_services_rosters_node_1 = require("iqs-services-rosters-node");
const iqs_services_corrections_node_1 = require("iqs-services-corrections-node");
const pip_services_routeanalysis_node_1 = require("pip-services-routeanalysis-node");
const iqs_services_eventgeneration_node_1 = require("iqs-services-eventgeneration-node");
class ProcessingBundleServicesFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new iqs_services_currobjectstates_node_1.CurrentObjectStatesServiceFactory);
        this.add(new iqs_services_currdevicestates_node_1.CurrentDeviceStatesServiceFactory);
        this.add(new iqs_services_stateupdates_node_1.StateUpdatesServiceFactory);
        this.add(new iqs_services_incidents_node_1.IncidentsServiceFactory);
        this.add(new iqs_services_rosters_node_1.RostersServiceFactory);
        this.add(new iqs_services_corrections_node_1.CorrectionsServiceFactory);
        this.add(new pip_services_routeanalysis_node_1.RouteAnalysisServiceFactory);
        this.add(new iqs_services_eventgeneration_node_1.EventGenerationServiceFactory);
    }
}
exports.ProcessingBundleServicesFactory = ProcessingBundleServicesFactory;
//# sourceMappingURL=ProcessingBundleServicesFactory.js.map