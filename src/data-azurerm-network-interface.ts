// https://www.terraform.io/docs/providers/azurerm/d/network_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermNetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/network_interface#name DataAzurermNetworkInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/network_interface#resource_group_name DataAzurermNetworkInterface#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/network_interface#timeouts DataAzurermNetworkInterface#timeouts}
  */
  readonly timeouts?: DataAzurermNetworkInterfaceTimeouts;
}
export class DataAzurermNetworkInterfaceIpConfiguration extends cdktf.ComplexComputedList {

  // application_gateway_backend_address_pools_ids - computed: true, optional: false, required: false
  public get applicationGatewayBackendAddressPoolsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('application_gateway_backend_address_pools_ids'));
  }

  // application_security_group_ids - computed: true, optional: false, required: false
  public get applicationSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('application_security_group_ids'));
  }

  // gateway_load_balancer_frontend_ip_configuration_id - computed: true, optional: false, required: false
  public get gatewayLoadBalancerFrontendIpConfigurationId() {
    return this.getStringAttribute('gateway_load_balancer_frontend_ip_configuration_id');
  }

  // load_balancer_backend_address_pools_ids - computed: true, optional: false, required: false
  public get loadBalancerBackendAddressPoolsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancer_backend_address_pools_ids'));
  }

  // load_balancer_inbound_nat_rules_ids - computed: true, optional: false, required: false
  public get loadBalancerInboundNatRulesIds() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancer_inbound_nat_rules_ids'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_address_allocation - computed: true, optional: false, required: false
  public get privateIpAddressAllocation() {
    return this.getStringAttribute('private_ip_address_allocation');
  }

  // private_ip_address_version - computed: true, optional: false, required: false
  public get privateIpAddressVersion() {
    return this.getStringAttribute('private_ip_address_version');
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
export interface DataAzurermNetworkInterfaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/network_interface#read DataAzurermNetworkInterface#read}
  */
  readonly read?: string;
}

export function dataAzurermNetworkInterfaceTimeoutsToTerraform(struct?: DataAzurermNetworkInterfaceTimeoutsOutputReference | DataAzurermNetworkInterfaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermNetworkInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermNetworkInterfaceTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermNetworkInterfaceTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/network_interface azurerm_network_interface}
*/
export class DataAzurermNetworkInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_network_interface";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/network_interface azurerm_network_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermNetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermNetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_interface',
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

  // applied_dns_servers - computed: true, optional: false, required: false
  public get appliedDnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('applied_dns_servers'));
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_servers'));
  }

  // enable_accelerated_networking - computed: true, optional: false, required: false
  public get enableAcceleratedNetworking() {
    return this.getBooleanAttribute('enable_accelerated_networking');
  }

  // enable_ip_forwarding - computed: true, optional: false, required: false
  public get enableIpForwarding() {
    return this.getBooleanAttribute('enable_ip_forwarding');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_dns_name_label - computed: true, optional: false, required: false
  public get internalDnsNameLabel() {
    return this.getStringAttribute('internal_dns_name_label');
  }

  // ip_configuration - computed: true, optional: false, required: false
  public ipConfiguration(index: string) {
    return new DataAzurermNetworkInterfaceIpConfiguration(this, 'ip_configuration', index, false);
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
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

  // network_security_group_id - computed: true, optional: false, required: false
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
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

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // virtual_machine_id - computed: true, optional: false, required: false
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermNetworkInterfaceTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermNetworkInterfaceTimeouts) {
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
      timeouts: dataAzurermNetworkInterfaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
