import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultAwsFactory } from 'pip-services3-aws-node';

import { ProcessingBundleServicesFactory } from '../build/ProcessingBundleServicesFactory';
import { ProcessingBundleClientsFactory } from '../build/ProcessingBundleClientsFactory';

export class ProcessingBundleProcess extends ProcessContainer {

    public constructor() {
        super("iqs-bundles-processing", "Processing bundle for iQuipsys Positron");
        this._factories.add(new ProcessingBundleServicesFactory);
        this._factories.add(new ProcessingBundleClientsFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultAwsFactory);
    }

}
