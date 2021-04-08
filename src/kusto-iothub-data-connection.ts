// https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoIothubDataConnectionConfig extends cdktf.TerraformMetaArguments {
  readonly clusterName: string;
  readonly consumerGroup: string;
  readonly databaseName: string;
  readonly eventSystemProperties?: string[];
  readonly iothubId: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sharedAccessPolicyName: string;
  /** timeouts block */
  readonly timeouts?: KustoIothubDataConnectionTimeouts;
}
export interface KustoIothubDataConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

function kustoIothubDataConnectionTimeoutsToTerraform(struct?: KustoIothubDataConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class KustoIothubDataConnection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KustoIothubDataConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_iothub_data_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._consumerGroup = config.consumerGroup;
    this._databaseName = config.databaseName;
    this._eventSystemProperties = config.eventSystemProperties;
    this._iothubId = config.iothubId;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sharedAccessPolicyName = config.sharedAccessPolicyName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // consumer_group - computed: false, optional: false, required: true
  private _consumerGroup: string;
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }
  public set consumerGroup(value: string) {
    this._consumerGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupInput() {
    return this._consumerGroup
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // event_system_properties - computed: false, optional: true, required: false
  private _eventSystemProperties?: string[];
  public get eventSystemProperties() {
    return this.getListAttribute('event_system_properties');
  }
  public set eventSystemProperties(value: string[] ) {
    this._eventSystemProperties = value;
  }
  public resetEventSystemProperties() {
    this._eventSystemProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSystemPropertiesInput() {
    return this._eventSystemProperties
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothub_id - computed: false, optional: false, required: true
  private _iothubId: string;
  public get iothubId() {
    return this.getStringAttribute('iothub_id');
  }
  public set iothubId(value: string) {
    this._iothubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubIdInput() {
    return this._iothubId
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // shared_access_policy_name - computed: false, optional: false, required: true
  private _sharedAccessPolicyName: string;
  public get sharedAccessPolicyName() {
    return this.getStringAttribute('shared_access_policy_name');
  }
  public set sharedAccessPolicyName(value: string) {
    this._sharedAccessPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessPolicyNameInput() {
    return this._sharedAccessPolicyName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoIothubDataConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KustoIothubDataConnectionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      consumer_group: cdktf.stringToTerraform(this._consumerGroup),
      database_name: cdktf.stringToTerraform(this._databaseName),
      event_system_properties: cdktf.listMapper(cdktf.stringToTerraform)(this._eventSystemProperties),
      iothub_id: cdktf.stringToTerraform(this._iothubId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      shared_access_policy_name: cdktf.stringToTerraform(this._sharedAccessPolicyName),
      timeouts: kustoIothubDataConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
