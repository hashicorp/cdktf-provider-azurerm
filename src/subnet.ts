// https://www.terraform.io/docs/providers/azurerm/r/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#address_prefix Subnet#address_prefix}
  */
  readonly addressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#address_prefixes Subnet#address_prefixes}
  */
  readonly addressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#enforce_private_link_endpoint_network_policies Subnet#enforce_private_link_endpoint_network_policies}
  */
  readonly enforcePrivateLinkEndpointNetworkPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#enforce_private_link_service_network_policies Subnet#enforce_private_link_service_network_policies}
  */
  readonly enforcePrivateLinkServiceNetworkPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#name Subnet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#resource_group_name Subnet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}
  */
  readonly serviceEndpointPolicyIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#service_endpoints Subnet#service_endpoints}
  */
  readonly serviceEndpoints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#virtual_network_name Subnet#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * delegation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#delegation Subnet#delegation}
  */
  readonly delegation?: SubnetDelegation[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#timeouts Subnet#timeouts}
  */
  readonly timeouts?: SubnetTimeouts;
}
export interface SubnetDelegationServiceDelegation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#actions Subnet#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#name Subnet#name}
  */
  readonly name: string;
}

export function subnetDelegationServiceDelegationToTerraform(struct?: SubnetDelegationServiceDelegationOutputReference | SubnetDelegationServiceDelegation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class SubnetDelegationServiceDelegationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SubnetDelegationServiceDelegation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetDelegationServiceDelegation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
      this._name = value.name;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
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
}
export interface SubnetDelegation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#name Subnet#name}
  */
  readonly name: string;
  /**
  * service_delegation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#service_delegation Subnet#service_delegation}
  */
  readonly serviceDelegation: SubnetDelegationServiceDelegation;
}

export function subnetDelegationToTerraform(struct?: SubnetDelegation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    service_delegation: subnetDelegationServiceDelegationToTerraform(struct!.serviceDelegation),
  }
}

export interface SubnetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#create Subnet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#delete Subnet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#read Subnet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet#update Subnet#update}
  */
  readonly update?: string;
}

export function subnetTimeoutsToTerraform(struct?: SubnetTimeoutsOutputReference | SubnetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class SubnetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SubnetTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/subnet azurerm_subnet}
*/
export class Subnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_subnet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/subnet azurerm_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subnet',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressPrefix = config.addressPrefix;
    this._addressPrefixes = config.addressPrefixes;
    this._enforcePrivateLinkEndpointNetworkPolicies = config.enforcePrivateLinkEndpointNetworkPolicies;
    this._enforcePrivateLinkServiceNetworkPolicies = config.enforcePrivateLinkServiceNetworkPolicies;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceEndpointPolicyIds = config.serviceEndpointPolicyIds;
    this._serviceEndpoints = config.serviceEndpoints;
    this._virtualNetworkName = config.virtualNetworkName;
    this._delegation = config.delegation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefix - computed: true, optional: true, required: false
  private _addressPrefix?: string; 
  public get addressPrefix() {
    return this.getStringAttribute('address_prefix');
  }
  public set addressPrefix(value: string) {
    this._addressPrefix = value;
  }
  public resetAddressPrefix() {
    this._addressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixInput() {
    return this._addressPrefix;
  }

  // address_prefixes - computed: true, optional: true, required: false
  private _addressPrefixes?: string[]; 
  public get addressPrefixes() {
    return this.getListAttribute('address_prefixes');
  }
  public set addressPrefixes(value: string[]) {
    this._addressPrefixes = value;
  }
  public resetAddressPrefixes() {
    this._addressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixesInput() {
    return this._addressPrefixes;
  }

  // enforce_private_link_endpoint_network_policies - computed: false, optional: true, required: false
  private _enforcePrivateLinkEndpointNetworkPolicies?: boolean | cdktf.IResolvable; 
  public get enforcePrivateLinkEndpointNetworkPolicies() {
    return this.getBooleanAttribute('enforce_private_link_endpoint_network_policies') as any;
  }
  public set enforcePrivateLinkEndpointNetworkPolicies(value: boolean | cdktf.IResolvable) {
    this._enforcePrivateLinkEndpointNetworkPolicies = value;
  }
  public resetEnforcePrivateLinkEndpointNetworkPolicies() {
    this._enforcePrivateLinkEndpointNetworkPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcePrivateLinkEndpointNetworkPoliciesInput() {
    return this._enforcePrivateLinkEndpointNetworkPolicies;
  }

  // enforce_private_link_service_network_policies - computed: false, optional: true, required: false
  private _enforcePrivateLinkServiceNetworkPolicies?: boolean | cdktf.IResolvable; 
  public get enforcePrivateLinkServiceNetworkPolicies() {
    return this.getBooleanAttribute('enforce_private_link_service_network_policies') as any;
  }
  public set enforcePrivateLinkServiceNetworkPolicies(value: boolean | cdktf.IResolvable) {
    this._enforcePrivateLinkServiceNetworkPolicies = value;
  }
  public resetEnforcePrivateLinkServiceNetworkPolicies() {
    this._enforcePrivateLinkServiceNetworkPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcePrivateLinkServiceNetworkPoliciesInput() {
    return this._enforcePrivateLinkServiceNetworkPolicies;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // service_endpoint_policy_ids - computed: false, optional: true, required: false
  private _serviceEndpointPolicyIds?: string[]; 
  public get serviceEndpointPolicyIds() {
    return this.getListAttribute('service_endpoint_policy_ids');
  }
  public set serviceEndpointPolicyIds(value: string[]) {
    this._serviceEndpointPolicyIds = value;
  }
  public resetServiceEndpointPolicyIds() {
    this._serviceEndpointPolicyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointPolicyIdsInput() {
    return this._serviceEndpointPolicyIds;
  }

  // service_endpoints - computed: false, optional: true, required: false
  private _serviceEndpoints?: string[]; 
  public get serviceEndpoints() {
    return this.getListAttribute('service_endpoints');
  }
  public set serviceEndpoints(value: string[]) {
    this._serviceEndpoints = value;
  }
  public resetServiceEndpoints() {
    this._serviceEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointsInput() {
    return this._serviceEndpoints;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // delegation - computed: false, optional: true, required: false
  private _delegation?: SubnetDelegation[]; 
  public get delegation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('delegation') as any;
  }
  public set delegation(value: SubnetDelegation[]) {
    this._delegation = value;
  }
  public resetDelegation() {
    this._delegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationInput() {
    return this._delegation;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SubnetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SubnetTimeouts) {
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
      address_prefix: cdktf.stringToTerraform(this._addressPrefix),
      address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._addressPrefixes),
      enforce_private_link_endpoint_network_policies: cdktf.booleanToTerraform(this._enforcePrivateLinkEndpointNetworkPolicies),
      enforce_private_link_service_network_policies: cdktf.booleanToTerraform(this._enforcePrivateLinkServiceNetworkPolicies),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_endpoint_policy_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._serviceEndpointPolicyIds),
      service_endpoints: cdktf.listMapper(cdktf.stringToTerraform)(this._serviceEndpoints),
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
      delegation: cdktf.listMapper(subnetDelegationToTerraform)(this._delegation),
      timeouts: subnetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
