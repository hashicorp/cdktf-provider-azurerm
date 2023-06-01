/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}
  */
  readonly addressPrefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#enforce_private_link_endpoint_network_policies Subnet#enforce_private_link_endpoint_network_policies}
  */
  readonly enforcePrivateLinkEndpointNetworkPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#enforce_private_link_service_network_policies Subnet#enforce_private_link_service_network_policies}
  */
  readonly enforcePrivateLinkServiceNetworkPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#id Subnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#name Subnet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#private_endpoint_network_policies_enabled Subnet#private_endpoint_network_policies_enabled}
  */
  readonly privateEndpointNetworkPoliciesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}
  */
  readonly privateLinkServiceNetworkPoliciesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}
  */
  readonly serviceEndpointPolicyIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}
  */
  readonly serviceEndpoints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * delegation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#delegation Subnet#delegation}
  */
  readonly delegation?: SubnetDelegation[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#timeouts Subnet#timeouts}
  */
  readonly timeouts?: SubnetTimeouts;
}
export interface SubnetDelegationServiceDelegation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#actions Subnet#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#name Subnet#name}
  */
  readonly name: string;
}

export function subnetDelegationServiceDelegationToTerraform(struct?: SubnetDelegationServiceDelegationOutputReference | SubnetDelegationServiceDelegation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class SubnetDelegationServiceDelegationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#name Subnet#name}
  */
  readonly name: string;
  /**
  * service_delegation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#service_delegation Subnet#service_delegation}
  */
  readonly serviceDelegation: SubnetDelegationServiceDelegation;
}

export function subnetDelegationToTerraform(struct?: SubnetDelegation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    service_delegation: subnetDelegationServiceDelegationToTerraform(struct!.serviceDelegation),
  }
}

export class SubnetDelegationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SubnetDelegation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serviceDelegation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDelegation = this._serviceDelegation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetDelegation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._serviceDelegation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._serviceDelegation.internalValue = value.serviceDelegation;
    }
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

  // service_delegation - computed: false, optional: false, required: true
  private _serviceDelegation = new SubnetDelegationServiceDelegationOutputReference(this, "service_delegation");
  public get serviceDelegation() {
    return this._serviceDelegation;
  }
  public putServiceDelegation(value: SubnetDelegationServiceDelegation) {
    this._serviceDelegation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDelegationInput() {
    return this._serviceDelegation.internalValue;
  }
}

export class SubnetDelegationList extends cdktf.ComplexList {
  public internalValue? : SubnetDelegation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SubnetDelegationOutputReference {
    return new SubnetDelegationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubnetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#create Subnet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#delete Subnet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#read Subnet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet#update Subnet#update}
  */
  readonly update?: string;
}

export function subnetTimeoutsToTerraform(struct?: SubnetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SubnetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: SubnetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet azurerm_subnet}
*/
export class Subnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_subnet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/subnet azurerm_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subnet',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.58.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressPrefixes = config.addressPrefixes;
    this._enforcePrivateLinkEndpointNetworkPolicies = config.enforcePrivateLinkEndpointNetworkPolicies;
    this._enforcePrivateLinkServiceNetworkPolicies = config.enforcePrivateLinkServiceNetworkPolicies;
    this._id = config.id;
    this._name = config.name;
    this._privateEndpointNetworkPoliciesEnabled = config.privateEndpointNetworkPoliciesEnabled;
    this._privateLinkServiceNetworkPoliciesEnabled = config.privateLinkServiceNetworkPoliciesEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceEndpointPolicyIds = config.serviceEndpointPolicyIds;
    this._serviceEndpoints = config.serviceEndpoints;
    this._virtualNetworkName = config.virtualNetworkName;
    this._delegation.internalValue = config.delegation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefixes - computed: false, optional: false, required: true
  private _addressPrefixes?: string[]; 
  public get addressPrefixes() {
    return this.getListAttribute('address_prefixes');
  }
  public set addressPrefixes(value: string[]) {
    this._addressPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixesInput() {
    return this._addressPrefixes;
  }

  // enforce_private_link_endpoint_network_policies - computed: true, optional: true, required: false
  private _enforcePrivateLinkEndpointNetworkPolicies?: boolean | cdktf.IResolvable; 
  public get enforcePrivateLinkEndpointNetworkPolicies() {
    return this.getBooleanAttribute('enforce_private_link_endpoint_network_policies');
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

  // enforce_private_link_service_network_policies - computed: true, optional: true, required: false
  private _enforcePrivateLinkServiceNetworkPolicies?: boolean | cdktf.IResolvable; 
  public get enforcePrivateLinkServiceNetworkPolicies() {
    return this.getBooleanAttribute('enforce_private_link_service_network_policies');
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // private_endpoint_network_policies_enabled - computed: true, optional: true, required: false
  private _privateEndpointNetworkPoliciesEnabled?: boolean | cdktf.IResolvable; 
  public get privateEndpointNetworkPoliciesEnabled() {
    return this.getBooleanAttribute('private_endpoint_network_policies_enabled');
  }
  public set privateEndpointNetworkPoliciesEnabled(value: boolean | cdktf.IResolvable) {
    this._privateEndpointNetworkPoliciesEnabled = value;
  }
  public resetPrivateEndpointNetworkPoliciesEnabled() {
    this._privateEndpointNetworkPoliciesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointNetworkPoliciesEnabledInput() {
    return this._privateEndpointNetworkPoliciesEnabled;
  }

  // private_link_service_network_policies_enabled - computed: true, optional: true, required: false
  private _privateLinkServiceNetworkPoliciesEnabled?: boolean | cdktf.IResolvable; 
  public get privateLinkServiceNetworkPoliciesEnabled() {
    return this.getBooleanAttribute('private_link_service_network_policies_enabled');
  }
  public set privateLinkServiceNetworkPoliciesEnabled(value: boolean | cdktf.IResolvable) {
    this._privateLinkServiceNetworkPoliciesEnabled = value;
  }
  public resetPrivateLinkServiceNetworkPoliciesEnabled() {
    this._privateLinkServiceNetworkPoliciesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkServiceNetworkPoliciesEnabledInput() {
    return this._privateLinkServiceNetworkPoliciesEnabled;
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
    return cdktf.Fn.tolist(this.getListAttribute('service_endpoint_policy_ids'));
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
    return cdktf.Fn.tolist(this.getListAttribute('service_endpoints'));
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
  private _delegation = new SubnetDelegationList(this, "delegation", false);
  public get delegation() {
    return this._delegation;
  }
  public putDelegation(value: SubnetDelegation[] | cdktf.IResolvable) {
    this._delegation.internalValue = value;
  }
  public resetDelegation() {
    this._delegation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationInput() {
    return this._delegation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SubnetTimeoutsOutputReference(this, "timeouts");
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
      address_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addressPrefixes),
      enforce_private_link_endpoint_network_policies: cdktf.booleanToTerraform(this._enforcePrivateLinkEndpointNetworkPolicies),
      enforce_private_link_service_network_policies: cdktf.booleanToTerraform(this._enforcePrivateLinkServiceNetworkPolicies),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_endpoint_network_policies_enabled: cdktf.booleanToTerraform(this._privateEndpointNetworkPoliciesEnabled),
      private_link_service_network_policies_enabled: cdktf.booleanToTerraform(this._privateLinkServiceNetworkPoliciesEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_endpoint_policy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceEndpointPolicyIds),
      service_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceEndpoints),
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
      delegation: cdktf.listMapper(subnetDelegationToTerraform, true)(this._delegation.internalValue),
      timeouts: subnetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
