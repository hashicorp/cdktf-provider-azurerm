// https://www.terraform.io/docs/providers/azurerm/r/network_interface_application_gateway_backend_address_pool_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_application_gateway_backend_address_pool_association.html#backend_address_pool_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#backend_address_pool_id}
  */
  readonly backendAddressPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_application_gateway_backend_address_pool_association.html#ip_configuration_name NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#ip_configuration_name}
  */
  readonly ipConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_application_gateway_backend_address_pool_association.html#network_interface_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_application_gateway_backend_address_pool_association.html#timeouts NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#timeouts}
  */
  readonly timeouts?: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts;
}
export interface NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_application_gateway_backend_address_pool_association.html#create NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_application_gateway_backend_address_pool_association.html#delete NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_application_gateway_backend_address_pool_association.html#read NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_application_gateway_backend_address_pool_association.html#update NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#update}
  */
  readonly update?: string;
}

function networkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsToTerraform(struct?: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_application_gateway_backend_address_pool_association.html azurerm_network_interface_application_gateway_backend_address_pool_association}
*/
export class NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_application_gateway_backend_address_pool_association.html azurerm_network_interface_application_gateway_backend_address_pool_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_interface_application_gateway_backend_address_pool_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendAddressPoolId = config.backendAddressPoolId;
    this._ipConfigurationName = config.ipConfigurationName;
    this._networkInterfaceId = config.networkInterfaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_address_pool_id - computed: false, optional: false, required: true
  private _backendAddressPoolId: string;
  public get backendAddressPoolId() {
    return this.getStringAttribute('backend_address_pool_id');
  }
  public set backendAddressPoolId(value: string) {
    this._backendAddressPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressPoolIdInput() {
    return this._backendAddressPoolId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_configuration_name - computed: false, optional: false, required: true
  private _ipConfigurationName: string;
  public get ipConfigurationName() {
    return this.getStringAttribute('ip_configuration_name');
  }
  public set ipConfigurationName(value: string) {
    this._ipConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationNameInput() {
    return this._ipConfigurationName
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts ) {
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
      backend_address_pool_id: cdktf.stringToTerraform(this._backendAddressPoolId),
      ip_configuration_name: cdktf.stringToTerraform(this._ipConfigurationName),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      timeouts: networkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
