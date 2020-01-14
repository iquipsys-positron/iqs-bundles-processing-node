import { DefaultContainerFactory } from 'pip-services3-container-node';

import { MessageDistributionClientFactory } from 'pip-clients-msgdistribution-node';
import { StatisticsClientFactory } from 'pip-clients-statistics-node';

import { OrganizationsClientFactory } from 'pip-clients-organizations-node';
import { ControlObjectsClientFactory } from 'iqs-clients-controlobjects-node';
import { ZonesClientFactory } from 'iqs-clients-zones-node';
import { EventRulesClientFactory } from 'iqs-clients-eventrules-node';
import { DataProfilesClientFactory } from 'iqs-clients-dataprofiles-node';
import { DevicesClientFactory } from 'iqs-clients-devices-node';
import { DeviceProfilesClientFactory } from 'iqs-clients-deviceprofiles-node';
import { ClustersClientFactory } from 'pip-clients-clusters-node';

import { SignalsClientFactory } from 'iqs-clients-signals-node';

import { StatisticsClientFactory as IqsStatisticsClientFactory } from 'iqs-clients-statistics-node'; 
import { OperationalEventsClientFactory } from 'iqs-clients-opevents-node';
import { RoutesClientFactory } from 'pip-clients-routes-node';
import { ObjectStatesClientFactory } from 'iqs-clients-objectstates-node';
import { PositionsClientFactory } from 'pip-clients-positions-node';
import { TransducerDataClientFactory } from 'pip-clients-transducerdata-node';
import { AttendanceClientFactory } from 'iqs-clients-attendance-node';

import { CurrentObjectStatesClientFactory } from 'iqs-clients-currobjectstates-node';
import { CurrentDeviceStatesClientFactory } from 'iqs-clients-currdevicestates-node';
import { StateUpdatesClientFactory } from 'iqs-clients-stateupdates-node';
import { IncidentsClientFactory } from 'iqs-clients-incidents-node';
import { RostersClientFactory } from 'iqs-clients-rosters-node';
import { CorrectionsClientFactory } from 'iqs-clients-corrections-node';
import { RouteAnalysisClientFactory } from 'pip-clients-routeanalysis-node';
import { EventGenerationClientFactory } from 'iqs-clients-eventgeneration-node';

export class ProcessingBundleClientsFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new MessageDistributionClientFactory());
        this.add(new StatisticsClientFactory());

        this.add(new OrganizationsClientFactory());
        this.add(new ControlObjectsClientFactory());
        this.add(new ZonesClientFactory());
        this.add(new EventRulesClientFactory());
        this.add(new DataProfilesClientFactory());
        this.add(new DevicesClientFactory());
        this.add(new DeviceProfilesClientFactory());
        this.add(new ClustersClientFactory());

        this.add(new SignalsClientFactory());

        this.add(new IqsStatisticsClientFactory());
        this.add(new OperationalEventsClientFactory());
        this.add(new RoutesClientFactory());
        this.add(new ObjectStatesClientFactory());
        this.add(new PositionsClientFactory());
        this.add(new TransducerDataClientFactory());
        this.add(new AttendanceClientFactory());

        this.add(new CurrentObjectStatesClientFactory());
        this.add(new CurrentDeviceStatesClientFactory());
        this.add(new StateUpdatesClientFactory());
        this.add(new IncidentsClientFactory());
        this.add(new RostersClientFactory());
        this.add(new CorrectionsClientFactory());
        this.add(new RouteAnalysisClientFactory());
        this.add(new EventGenerationClientFactory());

    }

}
