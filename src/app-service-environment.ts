// https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#allowed_user_ip_cidrs AppServiceEnvironment#allowed_user_ip_cidrs}
  */
  readonly allowedUserIpCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#front_end_scale_factor AppServiceEnvironment#front_end_scale_factor}
  */
  readonly frontEndScaleFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#internal_load_balancing_mode AppServiceEnvironment#internal_load_balancing_mode}
  */
  readonly internalLoadBalancingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#name AppServiceEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#pricing_tier AppServiceEnvironment#pricing_tier}
  */
  readonly pricingTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#resource_group_name AppServiceEnvironment#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#subnet_id AppServiceEnvironment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#tags AppServiceEnvironment#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#user_whitelisted_ip_ranges AppServiceEnvironment#user_whitelisted_ip_ranges}
  */
  readonly userWhitelistedIpRanges?: string[];
  /**
  * cluster_setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#cluster_setting AppServiceEnvironment#cluster_setting}
  */
  readonly clusterSetting?: AppServiceEnvironmentClusterSetting[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#timeouts AppServiceEnvironment#timeouts}
  */
  readonly timeouts?: AppServiceEnvironmentTimeouts;
}
export interface AppServiceEnvironmentClusterSetting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#name AppServiceEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#value AppServiceEnvironment#value}
  */
  readonly value: string;
}

export function appServiceEnvironmentClusterSettingToTerraform(struct?: AppServiceEnvironmentClusterSetting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AppServiceEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#create AppServiceEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#delete AppServiceEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#read AppServiceEnvironment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html#update AppServiceEnvironment#update}
  */
  readonly update?: string;
}

export function appServiceEnvironmentTimeoutsToTerraform(struct?: AppServiceEnvironmentTimeoutsOutputReference | AppServiceEnvironmentTimeouts): any {
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

export class AppServiceEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppServiceEnvironmentTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppServiceEnvironmentTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html azurerm_app_service_environment}
*/
export class AppServiceEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_app_service_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html azurerm_app_service_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppServiceEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: AppServiceEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_environment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedUserIpCidrs = config.allowedUserIpCidrs;
    this._frontEndScaleFactor = config.frontEndScaleFactor;
    this._internalLoadBalancingMode = config.internalLoadBalancingMode;
    this._name = config.name;
    this._pricingTier = config.pricingTier;
    this._resourceGroupName = config.resourceGroupName;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._userWhitelistedIpRanges = config.userWhitelistedIpRanges;
    this._clusterSetting = config.clusterSetting;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_user_ip_cidrs - computed: true, optional: true, required: false
  private _allowedUserIpCidrs?: string[]; 
  public get allowedUserIpCidrs() {
    return this.getListAttribute('allowed_user_ip_cidrs');
  }
  public set allowedUserIpCidrs(value: string[]) {
    this._allowedUserIpCidrs = value;
  }
  public resetAllowedUserIpCidrs() {
    this._allowedUserIpCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUserIpCidrsInput() {
    return this._allowedUserIpCidrs;
  }

  // front_end_scale_factor - computed: false, optional: true, required: false
  private _frontEndScaleFactor?: number; 
  public get frontEndScaleFactor() {
    return this.getNumberAttribute('front_end_scale_factor');
  }
  public set frontEndScaleFactor(value: number) {
    this._frontEndScaleFactor = value;
  }
  public resetFrontEndScaleFactor() {
    this._frontEndScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontEndScaleFactorInput() {
    return this._frontEndScaleFactor;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_ip_address - computed: true, optional: false, required: false
  public get internalIpAddress() {
    return this.getStringAttribute('internal_ip_address');
  }

  // internal_load_balancing_mode - computed: false, optional: true, required: false
  private _internalLoadBalancingMode?: string; 
  public get internalLoadBalancingMode() {
    return this.getStringAttribute('internal_load_balancing_mode');
  }
  public set internalLoadBalancingMode(value: string) {
    this._internalLoadBalancingMode = value;
  }
  public resetInternalLoadBalancingMode() {
    this._internalLoadBalancingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLoadBalancingModeInput() {
    return this._internalLoadBalancingMode;
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

  // outbound_ip_addresses - computed: true, optional: false, required: false
  public get outboundIpAddresses() {
    return this.getListAttribute('outbound_ip_addresses');
  }

  // pricing_tier - computed: false, optional: true, required: false
  private _pricingTier?: string; 
  public get pricingTier() {
    return this.getStringAttribute('pricing_tier');
  }
  public set pricingTier(value: string) {
    this._pricingTier = value;
  }
  public resetPricingTier() {
    this._pricingTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingTierInput() {
    return this._pricingTier;
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // service_ip_address - computed: true, optional: false, required: false
  public get serviceIpAddress() {
    return this.getStringAttribute('service_ip_address');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_whitelisted_ip_ranges - computed: true, optional: true, required: false
  private _userWhitelistedIpRanges?: string[]; 
  public get userWhitelistedIpRanges() {
    return this.getListAttribute('user_whitelisted_ip_ranges');
  }
  public set userWhitelistedIpRanges(value: string[]) {
    this._userWhitelistedIpRanges = value;
  }
  public resetUserWhitelistedIpRanges() {
    this._userWhitelistedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userWhitelistedIpRangesInput() {
    return this._userWhitelistedIpRanges;
  }

  // cluster_setting - computed: false, optional: true, required: false
  private _clusterSetting?: AppServiceEnvironmentClusterSetting[]; 
  public get clusterSetting() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cluster_setting') as any;
  }
  public set clusterSetting(value: AppServiceEnvironmentClusterSetting[]) {
    this._clusterSetting = value;
  }
  public resetClusterSetting() {
    this._clusterSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSettingInput() {
    return this._clusterSetting;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppServiceEnvironmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppServiceEnvironmentTimeouts) {
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
      allowed_user_ip_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedUserIpCidrs),
      front_end_scale_factor: cdktf.numberToTerraform(this._frontEndScaleFactor),
      internal_load_balancing_mode: cdktf.stringToTerraform(this._internalLoadBalancingMode),
      name: cdktf.stringToTerraform(this._name),
      pricing_tier: cdktf.stringToTerraform(this._pricingTier),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      user_whitelisted_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform)(this._userWhitelistedIpRanges),
      cluster_setting: cdktf.listMapper(appServiceEnvironmentClusterSettingToTerraform)(this._clusterSetting),
      timeouts: appServiceEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
