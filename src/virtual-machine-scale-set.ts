// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#automatic_os_upgrade VirtualMachineScaleSet#automatic_os_upgrade}
  */
  readonly automaticOsUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#eviction_policy VirtualMachineScaleSet#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#health_probe_id VirtualMachineScaleSet#health_probe_id}
  */
  readonly healthProbeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#license_type VirtualMachineScaleSet#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#location VirtualMachineScaleSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#overprovision VirtualMachineScaleSet#overprovision}
  */
  readonly overprovision?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#priority VirtualMachineScaleSet#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#proximity_placement_group_id VirtualMachineScaleSet#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#resource_group_name VirtualMachineScaleSet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#single_placement_group VirtualMachineScaleSet#single_placement_group}
  */
  readonly singlePlacementGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#tags VirtualMachineScaleSet#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#upgrade_policy_mode VirtualMachineScaleSet#upgrade_policy_mode}
  */
  readonly upgradePolicyMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#zones VirtualMachineScaleSet#zones}
  */
  readonly zones?: string[];
  /**
  * boot_diagnostics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#boot_diagnostics VirtualMachineScaleSet#boot_diagnostics}
  */
  readonly bootDiagnostics?: VirtualMachineScaleSetBootDiagnostics;
  /**
  * extension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#extension VirtualMachineScaleSet#extension}
  */
  readonly extension?: VirtualMachineScaleSetExtension[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#identity VirtualMachineScaleSet#identity}
  */
  readonly identity?: VirtualMachineScaleSetIdentity;
  /**
  * network_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#network_profile VirtualMachineScaleSet#network_profile}
  */
  readonly networkProfile: VirtualMachineScaleSetNetworkProfile[];
  /**
  * os_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#os_profile VirtualMachineScaleSet#os_profile}
  */
  readonly osProfile: VirtualMachineScaleSetOsProfile;
  /**
  * os_profile_linux_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#os_profile_linux_config VirtualMachineScaleSet#os_profile_linux_config}
  */
  readonly osProfileLinuxConfig?: VirtualMachineScaleSetOsProfileLinuxConfig;
  /**
  * os_profile_secrets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#os_profile_secrets VirtualMachineScaleSet#os_profile_secrets}
  */
  readonly osProfileSecrets?: VirtualMachineScaleSetOsProfileSecrets[];
  /**
  * os_profile_windows_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#os_profile_windows_config VirtualMachineScaleSet#os_profile_windows_config}
  */
  readonly osProfileWindowsConfig?: VirtualMachineScaleSetOsProfileWindowsConfig;
  /**
  * plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#plan VirtualMachineScaleSet#plan}
  */
  readonly plan?: VirtualMachineScaleSetPlan;
  /**
  * rolling_upgrade_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#rolling_upgrade_policy VirtualMachineScaleSet#rolling_upgrade_policy}
  */
  readonly rollingUpgradePolicy?: VirtualMachineScaleSetRollingUpgradePolicy;
  /**
  * sku block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#sku VirtualMachineScaleSet#sku}
  */
  readonly sku: VirtualMachineScaleSetSku;
  /**
  * storage_profile_data_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#storage_profile_data_disk VirtualMachineScaleSet#storage_profile_data_disk}
  */
  readonly storageProfileDataDisk?: VirtualMachineScaleSetStorageProfileDataDisk[];
  /**
  * storage_profile_image_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#storage_profile_image_reference VirtualMachineScaleSet#storage_profile_image_reference}
  */
  readonly storageProfileImageReference?: VirtualMachineScaleSetStorageProfileImageReference;
  /**
  * storage_profile_os_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#storage_profile_os_disk VirtualMachineScaleSet#storage_profile_os_disk}
  */
  readonly storageProfileOsDisk: VirtualMachineScaleSetStorageProfileOsDisk;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#timeouts VirtualMachineScaleSet#timeouts}
  */
  readonly timeouts?: VirtualMachineScaleSetTimeouts;
}
export interface VirtualMachineScaleSetBootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#enabled VirtualMachineScaleSet#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#storage_uri VirtualMachineScaleSet#storage_uri}
  */
  readonly storageUri: string;
}

export function virtualMachineScaleSetBootDiagnosticsToTerraform(struct?: VirtualMachineScaleSetBootDiagnosticsOutputReference | VirtualMachineScaleSetBootDiagnostics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    storage_uri: cdktf.stringToTerraform(struct!.storageUri),
  }
}

export class VirtualMachineScaleSetBootDiagnosticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualMachineScaleSetBootDiagnostics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._storageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageUri = this._storageUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetBootDiagnostics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._storageUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._storageUri = value.storageUri;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // storage_uri - computed: false, optional: false, required: true
  private _storageUri?: string; 
  public get storageUri() {
    return this.getStringAttribute('storage_uri');
  }
  public set storageUri(value: string) {
    this._storageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUriInput() {
    return this._storageUri;
  }
}
export interface VirtualMachineScaleSetExtension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#auto_upgrade_minor_version VirtualMachineScaleSet#auto_upgrade_minor_version}
  */
  readonly autoUpgradeMinorVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#protected_settings VirtualMachineScaleSet#protected_settings}
  */
  readonly protectedSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#provision_after_extensions VirtualMachineScaleSet#provision_after_extensions}
  */
  readonly provisionAfterExtensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#publisher VirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#settings VirtualMachineScaleSet#settings}
  */
  readonly settings?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#type VirtualMachineScaleSet#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#type_handler_version VirtualMachineScaleSet#type_handler_version}
  */
  readonly typeHandlerVersion: string;
}

export function virtualMachineScaleSetExtensionToTerraform(struct?: VirtualMachineScaleSetExtension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade_minor_version: cdktf.booleanToTerraform(struct!.autoUpgradeMinorVersion),
    name: cdktf.stringToTerraform(struct!.name),
    protected_settings: cdktf.stringToTerraform(struct!.protectedSettings),
    provision_after_extensions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.provisionAfterExtensions),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    settings: cdktf.stringToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
    type_handler_version: cdktf.stringToTerraform(struct!.typeHandlerVersion),
  }
}

export interface VirtualMachineScaleSetIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#identity_ids VirtualMachineScaleSet#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#type VirtualMachineScaleSet#type}
  */
  readonly type: string;
}

export function virtualMachineScaleSetIdentityToTerraform(struct?: VirtualMachineScaleSetIdentityOutputReference | VirtualMachineScaleSetIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class VirtualMachineScaleSetIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualMachineScaleSetIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface VirtualMachineScaleSetNetworkProfileDnsSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#dns_servers VirtualMachineScaleSet#dns_servers}
  */
  readonly dnsServers: string[];
}

export function virtualMachineScaleSetNetworkProfileDnsSettingsToTerraform(struct?: VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference | VirtualMachineScaleSetNetworkProfileDnsSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsServers),
  }
}

export class VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualMachineScaleSetNetworkProfileDnsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetNetworkProfileDnsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServers = value.dnsServers;
    }
  }

  // dns_servers - computed: false, optional: false, required: true
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }
}
export interface VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#domain_name_label VirtualMachineScaleSet#domain_name_label}
  */
  readonly domainNameLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#idle_timeout VirtualMachineScaleSet#idle_timeout}
  */
  readonly idleTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
}

export function virtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationToTerraform(struct?: VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference | VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name_label: cdktf.stringToTerraform(struct!.domainNameLabel),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainNameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNameLabel = this._domainNameLabel;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainNameLabel = undefined;
      this._idleTimeout = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainNameLabel = value.domainNameLabel;
      this._idleTimeout = value.idleTimeout;
      this._name = value.name;
    }
  }

  // domain_name_label - computed: false, optional: false, required: true
  private _domainNameLabel?: string; 
  public get domainNameLabel() {
    return this.getStringAttribute('domain_name_label');
  }
  public set domainNameLabel(value: string) {
    this._domainNameLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameLabelInput() {
    return this._domainNameLabel;
  }

  // idle_timeout - computed: false, optional: false, required: true
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
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
export interface VirtualMachineScaleSetNetworkProfileIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#application_gateway_backend_address_pool_ids VirtualMachineScaleSet#application_gateway_backend_address_pool_ids}
  */
  readonly applicationGatewayBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#application_security_group_ids VirtualMachineScaleSet#application_security_group_ids}
  */
  readonly applicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#load_balancer_backend_address_pool_ids VirtualMachineScaleSet#load_balancer_backend_address_pool_ids}
  */
  readonly loadBalancerBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#load_balancer_inbound_nat_rules_ids VirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}
  */
  readonly loadBalancerInboundNatRulesIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#primary VirtualMachineScaleSet#primary}
  */
  readonly primary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#subnet_id VirtualMachineScaleSet#subnet_id}
  */
  readonly subnetId: string;
  /**
  * public_ip_address_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#public_ip_address_configuration VirtualMachineScaleSet#public_ip_address_configuration}
  */
  readonly publicIpAddressConfiguration?: VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration;
}

export function virtualMachineScaleSetNetworkProfileIpConfigurationToTerraform(struct?: VirtualMachineScaleSetNetworkProfileIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_gateway_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.applicationGatewayBackendAddressPoolIds),
    application_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.applicationSecurityGroupIds),
    load_balancer_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.loadBalancerBackendAddressPoolIds),
    load_balancer_inbound_nat_rules_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.loadBalancerInboundNatRulesIds),
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    public_ip_address_configuration: virtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationToTerraform(struct!.publicIpAddressConfiguration),
  }
}

export interface VirtualMachineScaleSetNetworkProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#accelerated_networking VirtualMachineScaleSet#accelerated_networking}
  */
  readonly acceleratedNetworking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#ip_forwarding VirtualMachineScaleSet#ip_forwarding}
  */
  readonly ipForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#network_security_group_id VirtualMachineScaleSet#network_security_group_id}
  */
  readonly networkSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#primary VirtualMachineScaleSet#primary}
  */
  readonly primary: boolean | cdktf.IResolvable;
  /**
  * dns_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#dns_settings VirtualMachineScaleSet#dns_settings}
  */
  readonly dnsSettings?: VirtualMachineScaleSetNetworkProfileDnsSettings;
  /**
  * ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#ip_configuration VirtualMachineScaleSet#ip_configuration}
  */
  readonly ipConfiguration: VirtualMachineScaleSetNetworkProfileIpConfiguration[];
}

export function virtualMachineScaleSetNetworkProfileToTerraform(struct?: VirtualMachineScaleSetNetworkProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerated_networking: cdktf.booleanToTerraform(struct!.acceleratedNetworking),
    ip_forwarding: cdktf.booleanToTerraform(struct!.ipForwarding),
    name: cdktf.stringToTerraform(struct!.name),
    network_security_group_id: cdktf.stringToTerraform(struct!.networkSecurityGroupId),
    primary: cdktf.booleanToTerraform(struct!.primary),
    dns_settings: virtualMachineScaleSetNetworkProfileDnsSettingsToTerraform(struct!.dnsSettings),
    ip_configuration: cdktf.listMapper(virtualMachineScaleSetNetworkProfileIpConfigurationToTerraform)(struct!.ipConfiguration),
  }
}

export interface VirtualMachineScaleSetOsProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#admin_password VirtualMachineScaleSet#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#admin_username VirtualMachineScaleSet#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#computer_name_prefix VirtualMachineScaleSet#computer_name_prefix}
  */
  readonly computerNamePrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#custom_data VirtualMachineScaleSet#custom_data}
  */
  readonly customData?: string;
}

export function virtualMachineScaleSetOsProfileToTerraform(struct?: VirtualMachineScaleSetOsProfileOutputReference | VirtualMachineScaleSetOsProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    computer_name_prefix: cdktf.stringToTerraform(struct!.computerNamePrefix),
    custom_data: cdktf.stringToTerraform(struct!.customData),
  }
}

export class VirtualMachineScaleSetOsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualMachineScaleSetOsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._computerNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.computerNamePrefix = this._computerNamePrefix;
    }
    if (this._customData !== undefined) {
      hasAnyValues = true;
      internalValueResult.customData = this._customData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetOsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._computerNamePrefix = undefined;
      this._customData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._computerNamePrefix = value.computerNamePrefix;
      this._customData = value.customData;
    }
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // computer_name_prefix - computed: false, optional: false, required: true
  private _computerNamePrefix?: string; 
  public get computerNamePrefix() {
    return this.getStringAttribute('computer_name_prefix');
  }
  public set computerNamePrefix(value: string) {
    this._computerNamePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNamePrefixInput() {
    return this._computerNamePrefix;
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData;
  }
}
export interface VirtualMachineScaleSetOsProfileLinuxConfigSshKeys {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#key_data VirtualMachineScaleSet#key_data}
  */
  readonly keyData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#path VirtualMachineScaleSet#path}
  */
  readonly path: string;
}

export function virtualMachineScaleSetOsProfileLinuxConfigSshKeysToTerraform(struct?: VirtualMachineScaleSetOsProfileLinuxConfigSshKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_data: cdktf.stringToTerraform(struct!.keyData),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface VirtualMachineScaleSetOsProfileLinuxConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#disable_password_authentication VirtualMachineScaleSet#disable_password_authentication}
  */
  readonly disablePasswordAuthentication?: boolean | cdktf.IResolvable;
  /**
  * ssh_keys block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#ssh_keys VirtualMachineScaleSet#ssh_keys}
  */
  readonly sshKeys?: VirtualMachineScaleSetOsProfileLinuxConfigSshKeys[];
}

export function virtualMachineScaleSetOsProfileLinuxConfigToTerraform(struct?: VirtualMachineScaleSetOsProfileLinuxConfigOutputReference | VirtualMachineScaleSetOsProfileLinuxConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_password_authentication: cdktf.booleanToTerraform(struct!.disablePasswordAuthentication),
    ssh_keys: cdktf.listMapper(virtualMachineScaleSetOsProfileLinuxConfigSshKeysToTerraform)(struct!.sshKeys),
  }
}

export class VirtualMachineScaleSetOsProfileLinuxConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualMachineScaleSetOsProfileLinuxConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePasswordAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePasswordAuthentication = this._disablePasswordAuthentication;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetOsProfileLinuxConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disablePasswordAuthentication = undefined;
      this._sshKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disablePasswordAuthentication = value.disablePasswordAuthentication;
      this._sshKeys = value.sshKeys;
    }
  }

  // disable_password_authentication - computed: false, optional: true, required: false
  private _disablePasswordAuthentication?: boolean | cdktf.IResolvable; 
  public get disablePasswordAuthentication() {
    return this.getBooleanAttribute('disable_password_authentication') as any;
  }
  public set disablePasswordAuthentication(value: boolean | cdktf.IResolvable) {
    this._disablePasswordAuthentication = value;
  }
  public resetDisablePasswordAuthentication() {
    this._disablePasswordAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePasswordAuthenticationInput() {
    return this._disablePasswordAuthentication;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: VirtualMachineScaleSetOsProfileLinuxConfigSshKeys[]; 
  public get sshKeys() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ssh_keys') as any;
  }
  public set sshKeys(value: VirtualMachineScaleSetOsProfileLinuxConfigSshKeys[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }
}
export interface VirtualMachineScaleSetOsProfileSecretsVaultCertificates {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#certificate_store VirtualMachineScaleSet#certificate_store}
  */
  readonly certificateStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#certificate_url VirtualMachineScaleSet#certificate_url}
  */
  readonly certificateUrl: string;
}

export function virtualMachineScaleSetOsProfileSecretsVaultCertificatesToTerraform(struct?: VirtualMachineScaleSetOsProfileSecretsVaultCertificates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_store: cdktf.stringToTerraform(struct!.certificateStore),
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
  }
}

export interface VirtualMachineScaleSetOsProfileSecrets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#source_vault_id VirtualMachineScaleSet#source_vault_id}
  */
  readonly sourceVaultId: string;
  /**
  * vault_certificates block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#vault_certificates VirtualMachineScaleSet#vault_certificates}
  */
  readonly vaultCertificates?: VirtualMachineScaleSetOsProfileSecretsVaultCertificates[];
}

export function virtualMachineScaleSetOsProfileSecretsToTerraform(struct?: VirtualMachineScaleSetOsProfileSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
    vault_certificates: cdktf.listMapper(virtualMachineScaleSetOsProfileSecretsVaultCertificatesToTerraform)(struct!.vaultCertificates),
  }
}

export interface VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#component VirtualMachineScaleSet#component}
  */
  readonly component: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#content VirtualMachineScaleSet#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#pass VirtualMachineScaleSet#pass}
  */
  readonly pass: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#setting_name VirtualMachineScaleSet#setting_name}
  */
  readonly settingName: string;
}

export function virtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigToTerraform(struct?: VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    content: cdktf.stringToTerraform(struct!.content),
    pass: cdktf.stringToTerraform(struct!.pass),
    setting_name: cdktf.stringToTerraform(struct!.settingName),
  }
}

export interface VirtualMachineScaleSetOsProfileWindowsConfigWinrm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#certificate_url VirtualMachineScaleSet#certificate_url}
  */
  readonly certificateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#protocol VirtualMachineScaleSet#protocol}
  */
  readonly protocol: string;
}

export function virtualMachineScaleSetOsProfileWindowsConfigWinrmToTerraform(struct?: VirtualMachineScaleSetOsProfileWindowsConfigWinrm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface VirtualMachineScaleSetOsProfileWindowsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#enable_automatic_upgrades VirtualMachineScaleSet#enable_automatic_upgrades}
  */
  readonly enableAutomaticUpgrades?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#provision_vm_agent VirtualMachineScaleSet#provision_vm_agent}
  */
  readonly provisionVmAgent?: boolean | cdktf.IResolvable;
  /**
  * additional_unattend_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#additional_unattend_config VirtualMachineScaleSet#additional_unattend_config}
  */
  readonly additionalUnattendConfig?: VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig[];
  /**
  * winrm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#winrm VirtualMachineScaleSet#winrm}
  */
  readonly winrm?: VirtualMachineScaleSetOsProfileWindowsConfigWinrm[];
}

export function virtualMachineScaleSetOsProfileWindowsConfigToTerraform(struct?: VirtualMachineScaleSetOsProfileWindowsConfigOutputReference | VirtualMachineScaleSetOsProfileWindowsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_automatic_upgrades: cdktf.booleanToTerraform(struct!.enableAutomaticUpgrades),
    provision_vm_agent: cdktf.booleanToTerraform(struct!.provisionVmAgent),
    additional_unattend_config: cdktf.listMapper(virtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigToTerraform)(struct!.additionalUnattendConfig),
    winrm: cdktf.listMapper(virtualMachineScaleSetOsProfileWindowsConfigWinrmToTerraform)(struct!.winrm),
  }
}

export class VirtualMachineScaleSetOsProfileWindowsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualMachineScaleSetOsProfileWindowsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutomaticUpgrades !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutomaticUpgrades = this._enableAutomaticUpgrades;
    }
    if (this._provisionVmAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionVmAgent = this._provisionVmAgent;
    }
    if (this._additionalUnattendConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalUnattendConfig = this._additionalUnattendConfig;
    }
    if (this._winrm !== undefined) {
      hasAnyValues = true;
      internalValueResult.winrm = this._winrm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetOsProfileWindowsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAutomaticUpgrades = undefined;
      this._provisionVmAgent = undefined;
      this._additionalUnattendConfig = undefined;
      this._winrm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAutomaticUpgrades = value.enableAutomaticUpgrades;
      this._provisionVmAgent = value.provisionVmAgent;
      this._additionalUnattendConfig = value.additionalUnattendConfig;
      this._winrm = value.winrm;
    }
  }

  // enable_automatic_upgrades - computed: false, optional: true, required: false
  private _enableAutomaticUpgrades?: boolean | cdktf.IResolvable; 
  public get enableAutomaticUpgrades() {
    return this.getBooleanAttribute('enable_automatic_upgrades') as any;
  }
  public set enableAutomaticUpgrades(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticUpgrades = value;
  }
  public resetEnableAutomaticUpgrades() {
    this._enableAutomaticUpgrades = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticUpgradesInput() {
    return this._enableAutomaticUpgrades;
  }

  // provision_vm_agent - computed: false, optional: true, required: false
  private _provisionVmAgent?: boolean | cdktf.IResolvable; 
  public get provisionVmAgent() {
    return this.getBooleanAttribute('provision_vm_agent') as any;
  }
  public set provisionVmAgent(value: boolean | cdktf.IResolvable) {
    this._provisionVmAgent = value;
  }
  public resetProvisionVmAgent() {
    this._provisionVmAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionVmAgentInput() {
    return this._provisionVmAgent;
  }

  // additional_unattend_config - computed: false, optional: true, required: false
  private _additionalUnattendConfig?: VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig[]; 
  public get additionalUnattendConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_unattend_config') as any;
  }
  public set additionalUnattendConfig(value: VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig[]) {
    this._additionalUnattendConfig = value;
  }
  public resetAdditionalUnattendConfig() {
    this._additionalUnattendConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalUnattendConfigInput() {
    return this._additionalUnattendConfig;
  }

  // winrm - computed: false, optional: true, required: false
  private _winrm?: VirtualMachineScaleSetOsProfileWindowsConfigWinrm[]; 
  public get winrm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('winrm') as any;
  }
  public set winrm(value: VirtualMachineScaleSetOsProfileWindowsConfigWinrm[]) {
    this._winrm = value;
  }
  public resetWinrm() {
    this._winrm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmInput() {
    return this._winrm;
  }
}
export interface VirtualMachineScaleSetPlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#product VirtualMachineScaleSet#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#publisher VirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
}

export function virtualMachineScaleSetPlanToTerraform(struct?: VirtualMachineScaleSetPlanOutputReference | VirtualMachineScaleSetPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}

export class VirtualMachineScaleSetPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualMachineScaleSetPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._product = undefined;
      this._publisher = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._product = value.product;
      this._publisher = value.publisher;
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

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }
}
export interface VirtualMachineScaleSetRollingUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#max_batch_instance_percent VirtualMachineScaleSet#max_batch_instance_percent}
  */
  readonly maxBatchInstancePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#max_unhealthy_instance_percent VirtualMachineScaleSet#max_unhealthy_instance_percent}
  */
  readonly maxUnhealthyInstancePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#max_unhealthy_upgraded_instance_percent VirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}
  */
  readonly maxUnhealthyUpgradedInstancePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#pause_time_between_batches VirtualMachineScaleSet#pause_time_between_batches}
  */
  readonly pauseTimeBetweenBatches?: string;
}

export function virtualMachineScaleSetRollingUpgradePolicyToTerraform(struct?: VirtualMachineScaleSetRollingUpgradePolicyOutputReference | VirtualMachineScaleSetRollingUpgradePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_batch_instance_percent: cdktf.numberToTerraform(struct!.maxBatchInstancePercent),
    max_unhealthy_instance_percent: cdktf.numberToTerraform(struct!.maxUnhealthyInstancePercent),
    max_unhealthy_upgraded_instance_percent: cdktf.numberToTerraform(struct!.maxUnhealthyUpgradedInstancePercent),
    pause_time_between_batches: cdktf.stringToTerraform(struct!.pauseTimeBetweenBatches),
  }
}

export class VirtualMachineScaleSetRollingUpgradePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualMachineScaleSetRollingUpgradePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBatchInstancePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchInstancePercent = this._maxBatchInstancePercent;
    }
    if (this._maxUnhealthyInstancePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthyInstancePercent = this._maxUnhealthyInstancePercent;
    }
    if (this._maxUnhealthyUpgradedInstancePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthyUpgradedInstancePercent = this._maxUnhealthyUpgradedInstancePercent;
    }
    if (this._pauseTimeBetweenBatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseTimeBetweenBatches = this._pauseTimeBetweenBatches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetRollingUpgradePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBatchInstancePercent = undefined;
      this._maxUnhealthyInstancePercent = undefined;
      this._maxUnhealthyUpgradedInstancePercent = undefined;
      this._pauseTimeBetweenBatches = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBatchInstancePercent = value.maxBatchInstancePercent;
      this._maxUnhealthyInstancePercent = value.maxUnhealthyInstancePercent;
      this._maxUnhealthyUpgradedInstancePercent = value.maxUnhealthyUpgradedInstancePercent;
      this._pauseTimeBetweenBatches = value.pauseTimeBetweenBatches;
    }
  }

  // max_batch_instance_percent - computed: false, optional: true, required: false
  private _maxBatchInstancePercent?: number; 
  public get maxBatchInstancePercent() {
    return this.getNumberAttribute('max_batch_instance_percent');
  }
  public set maxBatchInstancePercent(value: number) {
    this._maxBatchInstancePercent = value;
  }
  public resetMaxBatchInstancePercent() {
    this._maxBatchInstancePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchInstancePercentInput() {
    return this._maxBatchInstancePercent;
  }

  // max_unhealthy_instance_percent - computed: false, optional: true, required: false
  private _maxUnhealthyInstancePercent?: number; 
  public get maxUnhealthyInstancePercent() {
    return this.getNumberAttribute('max_unhealthy_instance_percent');
  }
  public set maxUnhealthyInstancePercent(value: number) {
    this._maxUnhealthyInstancePercent = value;
  }
  public resetMaxUnhealthyInstancePercent() {
    this._maxUnhealthyInstancePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyInstancePercentInput() {
    return this._maxUnhealthyInstancePercent;
  }

  // max_unhealthy_upgraded_instance_percent - computed: false, optional: true, required: false
  private _maxUnhealthyUpgradedInstancePercent?: number; 
  public get maxUnhealthyUpgradedInstancePercent() {
    return this.getNumberAttribute('max_unhealthy_upgraded_instance_percent');
  }
  public set maxUnhealthyUpgradedInstancePercent(value: number) {
    this._maxUnhealthyUpgradedInstancePercent = value;
  }
  public resetMaxUnhealthyUpgradedInstancePercent() {
    this._maxUnhealthyUpgradedInstancePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyUpgradedInstancePercentInput() {
    return this._maxUnhealthyUpgradedInstancePercent;
  }

  // pause_time_between_batches - computed: false, optional: true, required: false
  private _pauseTimeBetweenBatches?: string; 
  public get pauseTimeBetweenBatches() {
    return this.getStringAttribute('pause_time_between_batches');
  }
  public set pauseTimeBetweenBatches(value: string) {
    this._pauseTimeBetweenBatches = value;
  }
  public resetPauseTimeBetweenBatches() {
    this._pauseTimeBetweenBatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseTimeBetweenBatchesInput() {
    return this._pauseTimeBetweenBatches;
  }
}
export interface VirtualMachineScaleSetSku {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#capacity VirtualMachineScaleSet#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#tier VirtualMachineScaleSet#tier}
  */
  readonly tier?: string;
}

export function virtualMachineScaleSetSkuToTerraform(struct?: VirtualMachineScaleSetSkuOutputReference | VirtualMachineScaleSetSku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}

export class VirtualMachineScaleSetSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualMachineScaleSetSku | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetSku | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacity = undefined;
      this._name = undefined;
      this._tier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacity = value.capacity;
      this._name = value.name;
      this._tier = value.tier;
    }
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}
export interface VirtualMachineScaleSetStorageProfileDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#caching VirtualMachineScaleSet#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#create_option VirtualMachineScaleSet#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#disk_size_gb VirtualMachineScaleSet#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#lun VirtualMachineScaleSet#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#managed_disk_type VirtualMachineScaleSet#managed_disk_type}
  */
  readonly managedDiskType?: string;
}

export function virtualMachineScaleSetStorageProfileDataDiskToTerraform(struct?: VirtualMachineScaleSetStorageProfileDataDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    lun: cdktf.numberToTerraform(struct!.lun),
    managed_disk_type: cdktf.stringToTerraform(struct!.managedDiskType),
  }
}

export interface VirtualMachineScaleSetStorageProfileImageReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#id VirtualMachineScaleSet#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#offer VirtualMachineScaleSet#offer}
  */
  readonly offer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#publisher VirtualMachineScaleSet#publisher}
  */
  readonly publisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#sku VirtualMachineScaleSet#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#version VirtualMachineScaleSet#version}
  */
  readonly version?: string;
}

export function virtualMachineScaleSetStorageProfileImageReferenceToTerraform(struct?: VirtualMachineScaleSetStorageProfileImageReferenceOutputReference | VirtualMachineScaleSetStorageProfileImageReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class VirtualMachineScaleSetStorageProfileImageReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualMachineScaleSetStorageProfileImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetStorageProfileImageReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // offer - computed: false, optional: true, required: false
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  public resetOffer() {
    this._offer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: true, required: false
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  public resetPublisher() {
    this._publisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface VirtualMachineScaleSetStorageProfileOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#caching VirtualMachineScaleSet#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#create_option VirtualMachineScaleSet#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#image VirtualMachineScaleSet#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#managed_disk_type VirtualMachineScaleSet#managed_disk_type}
  */
  readonly managedDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#os_type VirtualMachineScaleSet#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#vhd_containers VirtualMachineScaleSet#vhd_containers}
  */
  readonly vhdContainers?: string[];
}

export function virtualMachineScaleSetStorageProfileOsDiskToTerraform(struct?: VirtualMachineScaleSetStorageProfileOsDiskOutputReference | VirtualMachineScaleSetStorageProfileOsDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    image: cdktf.stringToTerraform(struct!.image),
    managed_disk_type: cdktf.stringToTerraform(struct!.managedDiskType),
    name: cdktf.stringToTerraform(struct!.name),
    os_type: cdktf.stringToTerraform(struct!.osType),
    vhd_containers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.vhdContainers),
  }
}

export class VirtualMachineScaleSetStorageProfileOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualMachineScaleSetStorageProfileOsDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caching !== undefined) {
      hasAnyValues = true;
      internalValueResult.caching = this._caching;
    }
    if (this._createOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.createOption = this._createOption;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._managedDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDiskType = this._managedDiskType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    if (this._vhdContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhdContainers = this._vhdContainers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetStorageProfileOsDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caching = undefined;
      this._createOption = undefined;
      this._image = undefined;
      this._managedDiskType = undefined;
      this._name = undefined;
      this._osType = undefined;
      this._vhdContainers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caching = value.caching;
      this._createOption = value.createOption;
      this._image = value.image;
      this._managedDiskType = value.managedDiskType;
      this._name = value.name;
      this._osType = value.osType;
      this._vhdContainers = value.vhdContainers;
    }
  }

  // caching - computed: true, optional: true, required: false
  private _caching?: string; 
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string) {
    this._caching = value;
  }
  public resetCaching() {
    this._caching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching;
  }

  // create_option - computed: false, optional: false, required: true
  private _createOption?: string; 
  public get createOption() {
    return this.getStringAttribute('create_option');
  }
  public set createOption(value: string) {
    this._createOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createOptionInput() {
    return this._createOption;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // managed_disk_type - computed: true, optional: true, required: false
  private _managedDiskType?: string; 
  public get managedDiskType() {
    return this.getStringAttribute('managed_disk_type');
  }
  public set managedDiskType(value: string) {
    this._managedDiskType = value;
  }
  public resetManagedDiskType() {
    this._managedDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskTypeInput() {
    return this._managedDiskType;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // vhd_containers - computed: false, optional: true, required: false
  private _vhdContainers?: string[]; 
  public get vhdContainers() {
    return this.getListAttribute('vhd_containers');
  }
  public set vhdContainers(value: string[]) {
    this._vhdContainers = value;
  }
  public resetVhdContainers() {
    this._vhdContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhdContainersInput() {
    return this._vhdContainers;
  }
}
export interface VirtualMachineScaleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#create VirtualMachineScaleSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#delete VirtualMachineScaleSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#read VirtualMachineScaleSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#update VirtualMachineScaleSet#update}
  */
  readonly update?: string;
}

export function virtualMachineScaleSetTimeoutsToTerraform(struct?: VirtualMachineScaleSetTimeoutsOutputReference | VirtualMachineScaleSetTimeouts): any {
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

export class VirtualMachineScaleSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualMachineScaleSetTimeouts | undefined {
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

  public set internalValue(value: VirtualMachineScaleSetTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html azurerm_virtual_machine_scale_set}
*/
export class VirtualMachineScaleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_machine_scale_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html azurerm_virtual_machine_scale_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineScaleSetConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine_scale_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automaticOsUpgrade = config.automaticOsUpgrade;
    this._evictionPolicy = config.evictionPolicy;
    this._healthProbeId = config.healthProbeId;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._name = config.name;
    this._overprovision = config.overprovision;
    this._priority = config.priority;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._singlePlacementGroup = config.singlePlacementGroup;
    this._tags = config.tags;
    this._upgradePolicyMode = config.upgradePolicyMode;
    this._zones = config.zones;
    this._bootDiagnostics.internalValue = config.bootDiagnostics;
    this._extension = config.extension;
    this._identity.internalValue = config.identity;
    this._networkProfile = config.networkProfile;
    this._osProfile.internalValue = config.osProfile;
    this._osProfileLinuxConfig.internalValue = config.osProfileLinuxConfig;
    this._osProfileSecrets = config.osProfileSecrets;
    this._osProfileWindowsConfig.internalValue = config.osProfileWindowsConfig;
    this._plan.internalValue = config.plan;
    this._rollingUpgradePolicy.internalValue = config.rollingUpgradePolicy;
    this._sku.internalValue = config.sku;
    this._storageProfileDataDisk = config.storageProfileDataDisk;
    this._storageProfileImageReference.internalValue = config.storageProfileImageReference;
    this._storageProfileOsDisk.internalValue = config.storageProfileOsDisk;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_os_upgrade - computed: false, optional: true, required: false
  private _automaticOsUpgrade?: boolean | cdktf.IResolvable; 
  public get automaticOsUpgrade() {
    return this.getBooleanAttribute('automatic_os_upgrade') as any;
  }
  public set automaticOsUpgrade(value: boolean | cdktf.IResolvable) {
    this._automaticOsUpgrade = value;
  }
  public resetAutomaticOsUpgrade() {
    this._automaticOsUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticOsUpgradeInput() {
    return this._automaticOsUpgrade;
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
  }

  // health_probe_id - computed: false, optional: true, required: false
  private _healthProbeId?: string; 
  public get healthProbeId() {
    return this.getStringAttribute('health_probe_id');
  }
  public set healthProbeId(value: string) {
    this._healthProbeId = value;
  }
  public resetHealthProbeId() {
    this._healthProbeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeIdInput() {
    return this._healthProbeId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // overprovision - computed: false, optional: true, required: false
  private _overprovision?: boolean | cdktf.IResolvable; 
  public get overprovision() {
    return this.getBooleanAttribute('overprovision') as any;
  }
  public set overprovision(value: boolean | cdktf.IResolvable) {
    this._overprovision = value;
  }
  public resetOverprovision() {
    this._overprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overprovisionInput() {
    return this._overprovision;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string; 
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }
  public set proximityPlacementGroupId(value: string) {
    this._proximityPlacementGroupId = value;
  }
  public resetProximityPlacementGroupId() {
    this._proximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupIdInput() {
    return this._proximityPlacementGroupId;
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

  // single_placement_group - computed: false, optional: true, required: false
  private _singlePlacementGroup?: boolean | cdktf.IResolvable; 
  public get singlePlacementGroup() {
    return this.getBooleanAttribute('single_placement_group') as any;
  }
  public set singlePlacementGroup(value: boolean | cdktf.IResolvable) {
    this._singlePlacementGroup = value;
  }
  public resetSinglePlacementGroup() {
    this._singlePlacementGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singlePlacementGroupInput() {
    return this._singlePlacementGroup;
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

  // upgrade_policy_mode - computed: false, optional: false, required: true
  private _upgradePolicyMode?: string; 
  public get upgradePolicyMode() {
    return this.getStringAttribute('upgrade_policy_mode');
  }
  public set upgradePolicyMode(value: string) {
    this._upgradePolicyMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyModeInput() {
    return this._upgradePolicyMode;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics = new VirtualMachineScaleSetBootDiagnosticsOutputReference(this as any, "boot_diagnostics", true);
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public putBootDiagnostics(value: VirtualMachineScaleSetBootDiagnostics) {
    this._bootDiagnostics.internalValue = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics.internalValue;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: VirtualMachineScaleSetExtension[]; 
  public get extension() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('extension') as any;
  }
  public set extension(value: VirtualMachineScaleSetExtension[]) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new VirtualMachineScaleSetIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: VirtualMachineScaleSetIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // network_profile - computed: false, optional: false, required: true
  private _networkProfile?: VirtualMachineScaleSetNetworkProfile[]; 
  public get networkProfile() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_profile') as any;
  }
  public set networkProfile(value: VirtualMachineScaleSetNetworkProfile[]) {
    this._networkProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile;
  }

  // os_profile - computed: false, optional: false, required: true
  private _osProfile = new VirtualMachineScaleSetOsProfileOutputReference(this as any, "os_profile", true);
  public get osProfile() {
    return this._osProfile;
  }
  public putOsProfile(value: VirtualMachineScaleSetOsProfile) {
    this._osProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileInput() {
    return this._osProfile.internalValue;
  }

  // os_profile_linux_config - computed: false, optional: true, required: false
  private _osProfileLinuxConfig = new VirtualMachineScaleSetOsProfileLinuxConfigOutputReference(this as any, "os_profile_linux_config", true);
  public get osProfileLinuxConfig() {
    return this._osProfileLinuxConfig;
  }
  public putOsProfileLinuxConfig(value: VirtualMachineScaleSetOsProfileLinuxConfig) {
    this._osProfileLinuxConfig.internalValue = value;
  }
  public resetOsProfileLinuxConfig() {
    this._osProfileLinuxConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileLinuxConfigInput() {
    return this._osProfileLinuxConfig.internalValue;
  }

  // os_profile_secrets - computed: false, optional: true, required: false
  private _osProfileSecrets?: VirtualMachineScaleSetOsProfileSecrets[]; 
  public get osProfileSecrets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('os_profile_secrets') as any;
  }
  public set osProfileSecrets(value: VirtualMachineScaleSetOsProfileSecrets[]) {
    this._osProfileSecrets = value;
  }
  public resetOsProfileSecrets() {
    this._osProfileSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileSecretsInput() {
    return this._osProfileSecrets;
  }

  // os_profile_windows_config - computed: false, optional: true, required: false
  private _osProfileWindowsConfig = new VirtualMachineScaleSetOsProfileWindowsConfigOutputReference(this as any, "os_profile_windows_config", true);
  public get osProfileWindowsConfig() {
    return this._osProfileWindowsConfig;
  }
  public putOsProfileWindowsConfig(value: VirtualMachineScaleSetOsProfileWindowsConfig) {
    this._osProfileWindowsConfig.internalValue = value;
  }
  public resetOsProfileWindowsConfig() {
    this._osProfileWindowsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileWindowsConfigInput() {
    return this._osProfileWindowsConfig.internalValue;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new VirtualMachineScaleSetPlanOutputReference(this as any, "plan", true);
  public get plan() {
    return this._plan;
  }
  public putPlan(value: VirtualMachineScaleSetPlan) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // rolling_upgrade_policy - computed: false, optional: true, required: false
  private _rollingUpgradePolicy = new VirtualMachineScaleSetRollingUpgradePolicyOutputReference(this as any, "rolling_upgrade_policy", true);
  public get rollingUpgradePolicy() {
    return this._rollingUpgradePolicy;
  }
  public putRollingUpgradePolicy(value: VirtualMachineScaleSetRollingUpgradePolicy) {
    this._rollingUpgradePolicy.internalValue = value;
  }
  public resetRollingUpgradePolicy() {
    this._rollingUpgradePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpgradePolicyInput() {
    return this._rollingUpgradePolicy.internalValue;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new VirtualMachineScaleSetSkuOutputReference(this as any, "sku", true);
  public get sku() {
    return this._sku;
  }
  public putSku(value: VirtualMachineScaleSetSku) {
    this._sku.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // storage_profile_data_disk - computed: false, optional: true, required: false
  private _storageProfileDataDisk?: VirtualMachineScaleSetStorageProfileDataDisk[]; 
  public get storageProfileDataDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('storage_profile_data_disk') as any;
  }
  public set storageProfileDataDisk(value: VirtualMachineScaleSetStorageProfileDataDisk[]) {
    this._storageProfileDataDisk = value;
  }
  public resetStorageProfileDataDisk() {
    this._storageProfileDataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileDataDiskInput() {
    return this._storageProfileDataDisk;
  }

  // storage_profile_image_reference - computed: false, optional: true, required: false
  private _storageProfileImageReference = new VirtualMachineScaleSetStorageProfileImageReferenceOutputReference(this as any, "storage_profile_image_reference", true);
  public get storageProfileImageReference() {
    return this._storageProfileImageReference;
  }
  public putStorageProfileImageReference(value: VirtualMachineScaleSetStorageProfileImageReference) {
    this._storageProfileImageReference.internalValue = value;
  }
  public resetStorageProfileImageReference() {
    this._storageProfileImageReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileImageReferenceInput() {
    return this._storageProfileImageReference.internalValue;
  }

  // storage_profile_os_disk - computed: false, optional: false, required: true
  private _storageProfileOsDisk = new VirtualMachineScaleSetStorageProfileOsDiskOutputReference(this as any, "storage_profile_os_disk", true);
  public get storageProfileOsDisk() {
    return this._storageProfileOsDisk;
  }
  public putStorageProfileOsDisk(value: VirtualMachineScaleSetStorageProfileOsDisk) {
    this._storageProfileOsDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileOsDiskInput() {
    return this._storageProfileOsDisk.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualMachineScaleSetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualMachineScaleSetTimeouts) {
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
      automatic_os_upgrade: cdktf.booleanToTerraform(this._automaticOsUpgrade),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      health_probe_id: cdktf.stringToTerraform(this._healthProbeId),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      overprovision: cdktf.booleanToTerraform(this._overprovision),
      priority: cdktf.stringToTerraform(this._priority),
      proximity_placement_group_id: cdktf.stringToTerraform(this._proximityPlacementGroupId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      single_placement_group: cdktf.booleanToTerraform(this._singlePlacementGroup),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      upgrade_policy_mode: cdktf.stringToTerraform(this._upgradePolicyMode),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      boot_diagnostics: virtualMachineScaleSetBootDiagnosticsToTerraform(this._bootDiagnostics.internalValue),
      extension: cdktf.listMapper(virtualMachineScaleSetExtensionToTerraform)(this._extension),
      identity: virtualMachineScaleSetIdentityToTerraform(this._identity.internalValue),
      network_profile: cdktf.listMapper(virtualMachineScaleSetNetworkProfileToTerraform)(this._networkProfile),
      os_profile: virtualMachineScaleSetOsProfileToTerraform(this._osProfile.internalValue),
      os_profile_linux_config: virtualMachineScaleSetOsProfileLinuxConfigToTerraform(this._osProfileLinuxConfig.internalValue),
      os_profile_secrets: cdktf.listMapper(virtualMachineScaleSetOsProfileSecretsToTerraform)(this._osProfileSecrets),
      os_profile_windows_config: virtualMachineScaleSetOsProfileWindowsConfigToTerraform(this._osProfileWindowsConfig.internalValue),
      plan: virtualMachineScaleSetPlanToTerraform(this._plan.internalValue),
      rolling_upgrade_policy: virtualMachineScaleSetRollingUpgradePolicyToTerraform(this._rollingUpgradePolicy.internalValue),
      sku: virtualMachineScaleSetSkuToTerraform(this._sku.internalValue),
      storage_profile_data_disk: cdktf.listMapper(virtualMachineScaleSetStorageProfileDataDiskToTerraform)(this._storageProfileDataDisk),
      storage_profile_image_reference: virtualMachineScaleSetStorageProfileImageReferenceToTerraform(this._storageProfileImageReference.internalValue),
      storage_profile_os_disk: virtualMachineScaleSetStorageProfileOsDiskToTerraform(this._storageProfileOsDisk.internalValue),
      timeouts: virtualMachineScaleSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
