import { DefaultContainerFactory } from 'pip-services3-container-node';

import { CurrentObjectStatesServiceFactory } from 'iqs-services-currobjectstates-node';
import { CurrentDeviceStatesServiceFactory } from 'iqs-services-currdevicestates-node';
import { StateUpdatesServiceFactory } from 'iqs-services-stateupdates-node';
import { IncidentsServiceFactory } from 'iqs-services-incidents-node';
import { RostersServiceFactory } from 'iqs-services-rosters-node';
import { CorrectionsServiceFactory } from 'iqs-services-corrections-node';
import { RouteAnalysisServiceFactory } from 'pip-services-routeanalysis-node';
import { EventGenerationServiceFactory } from 'iqs-services-eventgeneration-node';

export class ProcessingBundleServicesFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new CurrentObjectStatesServiceFactory);
        this.add(new CurrentDeviceStatesServiceFactory);
        this.add(new StateUpdatesServiceFactory);
        this.add(new IncidentsServiceFactory);
        this.add(new RostersServiceFactory);
        this.add(new CorrectionsServiceFactory);
        this.add(new RouteAnalysisServiceFactory);
        this.add(new EventGenerationServiceFactory);

    }

}
