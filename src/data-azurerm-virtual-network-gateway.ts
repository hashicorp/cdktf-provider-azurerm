// https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermVirtualNetworkGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway#name DataAzurermVirtualNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway#resource_group_name DataAzurermVirtualNetworkGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway#timeouts DataAzurermVirtualNetworkGateway#timeouts}
  */
  readonly timeouts?: DataAzurermVirtualNetworkGatewayTimeouts;
}
export class DataAzurermVirtualNetworkGatewayBgpSettings extends cdktf.ComplexComputedList {

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // peer_weight - computed: true, optional: false, required: false
  public get peerWeight() {
    return this.getNumberAttribute('peer_weight');
  }

  // peering_address - computed: true, optional: false, required: false
  public get peeringAddress() {
    return this.getStringAttribute('peering_address');
  }
}
export class DataAzurermVirtualNetworkGatewayCustomRoute extends cdktf.ComplexComputedList {

  // address_prefixes - computed: true, optional: false, required: false
  public get addressPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('address_prefixes'));
  }
}
export class DataAzurermVirtualNetworkGatewayIpConfiguration extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ip_address_allocation - computed: true, optional: false, required: false
  public get privateIpAddressAllocation() {
    return this.getStringAttribute('private_ip_address_allocation');
  }

  // public_ip_address_id - computed: true, optional: false, required: false
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataAzurermVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}
export class DataAzurermVirtualNetworkGatewayVpnClientConfigurationRootCertificate extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_cert_data - computed: true, optional: false, required: false
  public get publicCertData() {
    return this.getStringAttribute('public_cert_data');
  }
}
export class DataAzurermVirtualNetworkGatewayVpnClientConfiguration extends cdktf.ComplexComputedList {

  // aad_audience - computed: true, optional: false, required: false
  public get aadAudience() {
    return this.getStringAttribute('aad_audience');
  }

  // aad_issuer - computed: true, optional: false, required: false
  public get aadIssuer() {
    return this.getStringAttribute('aad_issuer');
  }

  // aad_tenant - computed: true, optional: false, required: false
  public get aadTenant() {
    return this.getStringAttribute('aad_tenant');
  }

  // address_space - computed: true, optional: false, required: false
  public get addressSpace() {
    return this.getListAttribute('address_space');
  }

  // radius_server_address - computed: true, optional: false, required: false
  public get radiusServerAddress() {
    return this.getStringAttribute('radius_server_address');
  }

  // radius_server_secret - computed: true, optional: false, required: false
  public get radiusServerSecret() {
    return this.getStringAttribute('radius_server_secret');
  }

  // revoked_certificate - computed: true, optional: false, required: false
  public get revokedCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('revoked_certificate');
  }

  // root_certificate - computed: true, optional: false, required: false
  public get rootCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('root_certificate');
  }

  // vpn_client_protocols - computed: true, optional: false, required: false
  public get vpnClientProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('vpn_client_protocols'));
  }
}
export interface DataAzurermVirtualNetworkGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway#read DataAzurermVirtualNetworkGateway#read}
  */
  readonly read?: string;
}

export function dataAzurermVirtualNetworkGatewayTimeoutsToTerraform(struct?: DataAzurermVirtualNetworkGatewayTimeoutsOutputReference | DataAzurermVirtualNetworkGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermVirtualNetworkGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermVirtualNetworkGatewayTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermVirtualNetworkGatewayTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway azurerm_virtual_network_gateway}
*/
export class DataAzurermVirtualNetworkGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_network_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway azurerm_virtual_network_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermVirtualNetworkGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermVirtualNetworkGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network_gateway',
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_active - computed: true, optional: false, required: false
  public get activeActive() {
    return this.getBooleanAttribute('active_active');
  }

  // bgp_settings - computed: true, optional: false, required: false
  public bgpSettings(index: string) {
    return new DataAzurermVirtualNetworkGatewayBgpSettings(this, 'bgp_settings', index, false);
  }

  // custom_route - computed: true, optional: false, required: false
  public customRoute(index: string) {
    return new DataAzurermVirtualNetworkGatewayCustomRoute(this, 'custom_route', index, false);
  }

  // default_local_network_gateway_id - computed: true, optional: false, required: false
  public get defaultLocalNetworkGatewayId() {
    return this.getStringAttribute('default_local_network_gateway_id');
  }

  // enable_bgp - computed: true, optional: false, required: false
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp');
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getStringAttribute('generation');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_configuration - computed: true, optional: false, required: false
  public ipConfiguration(index: string) {
    return new DataAzurermVirtualNetworkGatewayIpConfiguration(this, 'ip_configuration', index, false);
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_ip_address_enabled - computed: true, optional: false, required: false
  public get privateIpAddressEnabled() {
    return this.getBooleanAttribute('private_ip_address_enabled');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpn_client_configuration - computed: true, optional: false, required: false
  public vpnClientConfiguration(index: string) {
    return new DataAzurermVirtualNetworkGatewayVpnClientConfiguration(this, 'vpn_client_configuration', index, false);
  }

  // vpn_type - computed: true, optional: false, required: false
  public get vpnType() {
    return this.getStringAttribute('vpn_type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermVirtualNetworkGatewayTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermVirtualNetworkGatewayTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermVirtualNetworkGatewayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
