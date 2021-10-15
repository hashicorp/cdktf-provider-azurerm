// https://www.terraform.io/docs/providers/azurerm/d/private_endpoint_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermPrivateEndpointConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_endpoint_connection.html#name DataAzurermPrivateEndpointConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_endpoint_connection.html#resource_group_name DataAzurermPrivateEndpointConnection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_endpoint_connection.html#timeouts DataAzurermPrivateEndpointConnection#timeouts}
  */
  readonly timeouts?: DataAzurermPrivateEndpointConnectionTimeouts;
}
export class DataAzurermPrivateEndpointConnectionNetworkInterface extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataAzurermPrivateEndpointConnectionPrivateServiceConnection extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // request_response - computed: true, optional: false, required: false
  public get requestResponse() {
    return this.getStringAttribute('request_response');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAzurermPrivateEndpointConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_endpoint_connection.html#read DataAzurermPrivateEndpointConnection#read}
  */
  readonly read?: string;
}

function dataAzurermPrivateEndpointConnectionTimeoutsToTerraform(struct?: DataAzurermPrivateEndpointConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/private_endpoint_connection.html azurerm_private_endpoint_connection}
*/
export class DataAzurermPrivateEndpointConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_private_endpoint_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/private_endpoint_connection.html azurerm_private_endpoint_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermPrivateEndpointConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermPrivateEndpointConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_endpoint_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // network_interface - computed: true, optional: false, required: false
  public networkInterface(index: string) {
    return new DataAzurermPrivateEndpointConnectionNetworkInterface(this, 'network_interface', index);
  }

  // private_service_connection - computed: true, optional: false, required: false
  public privateServiceConnection(index: string) {
    return new DataAzurermPrivateEndpointConnectionPrivateServiceConnection(this, 'private_service_connection', index);
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPrivateEndpointConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermPrivateEndpointConnectionTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermPrivateEndpointConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
