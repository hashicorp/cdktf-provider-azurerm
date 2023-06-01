/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}
  */
  readonly azureVmwareDataStoreEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}
  */
  readonly createFromSnapshotResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#id NetappVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#location NetappVolume#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#name NetappVolume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}
  */
  readonly networkFeatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}
  */
  readonly poolName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}
  */
  readonly serviceLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}
  */
  readonly snapshotDirectoryVisible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}
  */
  readonly storageQuotaInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#tags NetappVolume#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}
  */
  readonly throughputInMibps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}
  */
  readonly volumePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#zone NetappVolume#zone}
  */
  readonly zone?: string;
  /**
  * data_protection_replication block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#data_protection_replication NetappVolume#data_protection_replication}
  */
  readonly dataProtectionReplication?: NetappVolumeDataProtectionReplication;
  /**
  * data_protection_snapshot_policy block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#data_protection_snapshot_policy NetappVolume#data_protection_snapshot_policy}
  */
  readonly dataProtectionSnapshotPolicy?: NetappVolumeDataProtectionSnapshotPolicy;
  /**
  * export_policy_rule block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#export_policy_rule NetappVolume#export_policy_rule}
  */
  readonly exportPolicyRule?: NetappVolumeExportPolicyRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}
  */
  readonly timeouts?: NetappVolumeTimeouts;
}
export interface NetappVolumeDataProtectionReplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#endpoint_type NetappVolume#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#remote_volume_location NetappVolume#remote_volume_location}
  */
  readonly remoteVolumeLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#remote_volume_resource_id NetappVolume#remote_volume_resource_id}
  */
  readonly remoteVolumeResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#replication_frequency NetappVolume#replication_frequency}
  */
  readonly replicationFrequency: string;
}

export function netappVolumeDataProtectionReplicationToTerraform(struct?: NetappVolumeDataProtectionReplicationOutputReference | NetappVolumeDataProtectionReplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_type: cdktf.stringToTerraform(struct!.endpointType),
    remote_volume_location: cdktf.stringToTerraform(struct!.remoteVolumeLocation),
    remote_volume_resource_id: cdktf.stringToTerraform(struct!.remoteVolumeResourceId),
    replication_frequency: cdktf.stringToTerraform(struct!.replicationFrequency),
  }
}

export class NetappVolumeDataProtectionReplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappVolumeDataProtectionReplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointType = this._endpointType;
    }
    if (this._remoteVolumeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteVolumeLocation = this._remoteVolumeLocation;
    }
    if (this._remoteVolumeResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteVolumeResourceId = this._remoteVolumeResourceId;
    }
    if (this._replicationFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFrequency = this._replicationFrequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeDataProtectionReplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointType = undefined;
      this._remoteVolumeLocation = undefined;
      this._remoteVolumeResourceId = undefined;
      this._replicationFrequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointType = value.endpointType;
      this._remoteVolumeLocation = value.remoteVolumeLocation;
      this._remoteVolumeResourceId = value.remoteVolumeResourceId;
      this._replicationFrequency = value.replicationFrequency;
    }
  }

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // remote_volume_location - computed: false, optional: false, required: true
  private _remoteVolumeLocation?: string; 
  public get remoteVolumeLocation() {
    return this.getStringAttribute('remote_volume_location');
  }
  public set remoteVolumeLocation(value: string) {
    this._remoteVolumeLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVolumeLocationInput() {
    return this._remoteVolumeLocation;
  }

  // remote_volume_resource_id - computed: false, optional: false, required: true
  private _remoteVolumeResourceId?: string; 
  public get remoteVolumeResourceId() {
    return this.getStringAttribute('remote_volume_resource_id');
  }
  public set remoteVolumeResourceId(value: string) {
    this._remoteVolumeResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVolumeResourceIdInput() {
    return this._remoteVolumeResourceId;
  }

  // replication_frequency - computed: false, optional: false, required: true
  private _replicationFrequency?: string; 
  public get replicationFrequency() {
    return this.getStringAttribute('replication_frequency');
  }
  public set replicationFrequency(value: string) {
    this._replicationFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFrequencyInput() {
    return this._replicationFrequency;
  }
}
export interface NetappVolumeDataProtectionSnapshotPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#snapshot_policy_id NetappVolume#snapshot_policy_id}
  */
  readonly snapshotPolicyId: string;
}

export function netappVolumeDataProtectionSnapshotPolicyToTerraform(struct?: NetappVolumeDataProtectionSnapshotPolicyOutputReference | NetappVolumeDataProtectionSnapshotPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snapshot_policy_id: cdktf.stringToTerraform(struct!.snapshotPolicyId),
  }
}

export class NetappVolumeDataProtectionSnapshotPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappVolumeDataProtectionSnapshotPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snapshotPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPolicyId = this._snapshotPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeDataProtectionSnapshotPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._snapshotPolicyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._snapshotPolicyId = value.snapshotPolicyId;
    }
  }

  // snapshot_policy_id - computed: false, optional: false, required: true
  private _snapshotPolicyId?: string; 
  public get snapshotPolicyId() {
    return this.getStringAttribute('snapshot_policy_id');
  }
  public set snapshotPolicyId(value: string) {
    this._snapshotPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyIdInput() {
    return this._snapshotPolicyId;
  }
}
export interface NetappVolumeExportPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}
  */
  readonly allowedClients: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#protocols_enabled NetappVolume#protocols_enabled}
  */
  readonly protocolsEnabled?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#root_access_enabled NetappVolume#root_access_enabled}
  */
  readonly rootAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#rule_index NetappVolume#rule_index}
  */
  readonly ruleIndex: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#unix_read_only NetappVolume#unix_read_only}
  */
  readonly unixReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#unix_read_write NetappVolume#unix_read_write}
  */
  readonly unixReadWrite?: boolean | cdktf.IResolvable;
}

export function netappVolumeExportPolicyRuleToTerraform(struct?: NetappVolumeExportPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedClients),
    protocols_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocolsEnabled),
    root_access_enabled: cdktf.booleanToTerraform(struct!.rootAccessEnabled),
    rule_index: cdktf.numberToTerraform(struct!.ruleIndex),
    unix_read_only: cdktf.booleanToTerraform(struct!.unixReadOnly),
    unix_read_write: cdktf.booleanToTerraform(struct!.unixReadWrite),
  }
}

export class NetappVolumeExportPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetappVolumeExportPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClients = this._allowedClients;
    }
    if (this._protocolsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolsEnabled = this._protocolsEnabled;
    }
    if (this._rootAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootAccessEnabled = this._rootAccessEnabled;
    }
    if (this._ruleIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIndex = this._ruleIndex;
    }
    if (this._unixReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixReadOnly = this._unixReadOnly;
    }
    if (this._unixReadWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixReadWrite = this._unixReadWrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeExportPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedClients = undefined;
      this._protocolsEnabled = undefined;
      this._rootAccessEnabled = undefined;
      this._ruleIndex = undefined;
      this._unixReadOnly = undefined;
      this._unixReadWrite = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedClients = value.allowedClients;
      this._protocolsEnabled = value.protocolsEnabled;
      this._rootAccessEnabled = value.rootAccessEnabled;
      this._ruleIndex = value.ruleIndex;
      this._unixReadOnly = value.unixReadOnly;
      this._unixReadWrite = value.unixReadWrite;
    }
  }

  // allowed_clients - computed: false, optional: false, required: true
  private _allowedClients?: string[]; 
  public get allowedClients() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_clients'));
  }
  public set allowedClients(value: string[]) {
    this._allowedClients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // protocols_enabled - computed: true, optional: true, required: false
  private _protocolsEnabled?: string[]; 
  public get protocolsEnabled() {
    return this.getListAttribute('protocols_enabled');
  }
  public set protocolsEnabled(value: string[]) {
    this._protocolsEnabled = value;
  }
  public resetProtocolsEnabled() {
    this._protocolsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsEnabledInput() {
    return this._protocolsEnabled;
  }

  // root_access_enabled - computed: false, optional: true, required: false
  private _rootAccessEnabled?: boolean | cdktf.IResolvable; 
  public get rootAccessEnabled() {
    return this.getBooleanAttribute('root_access_enabled');
  }
  public set rootAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._rootAccessEnabled = value;
  }
  public resetRootAccessEnabled() {
    this._rootAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootAccessEnabledInput() {
    return this._rootAccessEnabled;
  }

  // rule_index - computed: false, optional: false, required: true
  private _ruleIndex?: number; 
  public get ruleIndex() {
    return this.getNumberAttribute('rule_index');
  }
  public set ruleIndex(value: number) {
    this._ruleIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIndexInput() {
    return this._ruleIndex;
  }

  // unix_read_only - computed: false, optional: true, required: false
  private _unixReadOnly?: boolean | cdktf.IResolvable; 
  public get unixReadOnly() {
    return this.getBooleanAttribute('unix_read_only');
  }
  public set unixReadOnly(value: boolean | cdktf.IResolvable) {
    this._unixReadOnly = value;
  }
  public resetUnixReadOnly() {
    this._unixReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixReadOnlyInput() {
    return this._unixReadOnly;
  }

  // unix_read_write - computed: false, optional: true, required: false
  private _unixReadWrite?: boolean | cdktf.IResolvable; 
  public get unixReadWrite() {
    return this.getBooleanAttribute('unix_read_write');
  }
  public set unixReadWrite(value: boolean | cdktf.IResolvable) {
    this._unixReadWrite = value;
  }
  public resetUnixReadWrite() {
    this._unixReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixReadWriteInput() {
    return this._unixReadWrite;
  }
}

export class NetappVolumeExportPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : NetappVolumeExportPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): NetappVolumeExportPolicyRuleOutputReference {
    return new NetappVolumeExportPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetappVolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#create NetappVolume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#delete NetappVolume#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#read NetappVolume#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume#update NetappVolume#update}
  */
  readonly update?: string;
}

export function netappVolumeTimeoutsToTerraform(struct?: NetappVolumeTimeouts | cdktf.IResolvable): any {
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

export class NetappVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetappVolumeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetappVolumeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume azurerm_netapp_volume}
*/
export class NetappVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_netapp_volume";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/netapp_volume azurerm_netapp_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: NetappVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_volume',
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
    this._accountName = config.accountName;
    this._azureVmwareDataStoreEnabled = config.azureVmwareDataStoreEnabled;
    this._createFromSnapshotResourceId = config.createFromSnapshotResourceId;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._networkFeatures = config.networkFeatures;
    this._poolName = config.poolName;
    this._protocols = config.protocols;
    this._resourceGroupName = config.resourceGroupName;
    this._securityStyle = config.securityStyle;
    this._serviceLevel = config.serviceLevel;
    this._snapshotDirectoryVisible = config.snapshotDirectoryVisible;
    this._storageQuotaInGb = config.storageQuotaInGb;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._throughputInMibps = config.throughputInMibps;
    this._volumePath = config.volumePath;
    this._zone = config.zone;
    this._dataProtectionReplication.internalValue = config.dataProtectionReplication;
    this._dataProtectionSnapshotPolicy.internalValue = config.dataProtectionSnapshotPolicy;
    this._exportPolicyRule.internalValue = config.exportPolicyRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // azure_vmware_data_store_enabled - computed: false, optional: true, required: false
  private _azureVmwareDataStoreEnabled?: boolean | cdktf.IResolvable; 
  public get azureVmwareDataStoreEnabled() {
    return this.getBooleanAttribute('azure_vmware_data_store_enabled');
  }
  public set azureVmwareDataStoreEnabled(value: boolean | cdktf.IResolvable) {
    this._azureVmwareDataStoreEnabled = value;
  }
  public resetAzureVmwareDataStoreEnabled() {
    this._azureVmwareDataStoreEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVmwareDataStoreEnabledInput() {
    return this._azureVmwareDataStoreEnabled;
  }

  // create_from_snapshot_resource_id - computed: true, optional: true, required: false
  private _createFromSnapshotResourceId?: string; 
  public get createFromSnapshotResourceId() {
    return this.getStringAttribute('create_from_snapshot_resource_id');
  }
  public set createFromSnapshotResourceId(value: string) {
    this._createFromSnapshotResourceId = value;
  }
  public resetCreateFromSnapshotResourceId() {
    this._createFromSnapshotResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createFromSnapshotResourceIdInput() {
    return this._createFromSnapshotResourceId;
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

  // mount_ip_addresses - computed: true, optional: false, required: false
  public get mountIpAddresses() {
    return this.getListAttribute('mount_ip_addresses');
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

  // network_features - computed: true, optional: true, required: false
  private _networkFeatures?: string; 
  public get networkFeatures() {
    return this.getStringAttribute('network_features');
  }
  public set networkFeatures(value: string) {
    this._networkFeatures = value;
  }
  public resetNetworkFeatures() {
    this._networkFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFeaturesInput() {
    return this._networkFeatures;
  }

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
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

  // security_style - computed: true, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // service_level - computed: false, optional: false, required: true
  private _serviceLevel?: string; 
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelInput() {
    return this._serviceLevel;
  }

  // snapshot_directory_visible - computed: true, optional: true, required: false
  private _snapshotDirectoryVisible?: boolean | cdktf.IResolvable; 
  public get snapshotDirectoryVisible() {
    return this.getBooleanAttribute('snapshot_directory_visible');
  }
  public set snapshotDirectoryVisible(value: boolean | cdktf.IResolvable) {
    this._snapshotDirectoryVisible = value;
  }
  public resetSnapshotDirectoryVisible() {
    this._snapshotDirectoryVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDirectoryVisibleInput() {
    return this._snapshotDirectoryVisible;
  }

  // storage_quota_in_gb - computed: false, optional: false, required: true
  private _storageQuotaInGb?: number; 
  public get storageQuotaInGb() {
    return this.getNumberAttribute('storage_quota_in_gb');
  }
  public set storageQuotaInGb(value: number) {
    this._storageQuotaInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageQuotaInGbInput() {
    return this._storageQuotaInGb;
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
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // throughput_in_mibps - computed: true, optional: true, required: false
  private _throughputInMibps?: number; 
  public get throughputInMibps() {
    return this.getNumberAttribute('throughput_in_mibps');
  }
  public set throughputInMibps(value: number) {
    this._throughputInMibps = value;
  }
  public resetThroughputInMibps() {
    this._throughputInMibps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInMibpsInput() {
    return this._throughputInMibps;
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // data_protection_replication - computed: false, optional: true, required: false
  private _dataProtectionReplication = new NetappVolumeDataProtectionReplicationOutputReference(this, "data_protection_replication");
  public get dataProtectionReplication() {
    return this._dataProtectionReplication;
  }
  public putDataProtectionReplication(value: NetappVolumeDataProtectionReplication) {
    this._dataProtectionReplication.internalValue = value;
  }
  public resetDataProtectionReplication() {
    this._dataProtectionReplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProtectionReplicationInput() {
    return this._dataProtectionReplication.internalValue;
  }

  // data_protection_snapshot_policy - computed: false, optional: true, required: false
  private _dataProtectionSnapshotPolicy = new NetappVolumeDataProtectionSnapshotPolicyOutputReference(this, "data_protection_snapshot_policy");
  public get dataProtectionSnapshotPolicy() {
    return this._dataProtectionSnapshotPolicy;
  }
  public putDataProtectionSnapshotPolicy(value: NetappVolumeDataProtectionSnapshotPolicy) {
    this._dataProtectionSnapshotPolicy.internalValue = value;
  }
  public resetDataProtectionSnapshotPolicy() {
    this._dataProtectionSnapshotPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProtectionSnapshotPolicyInput() {
    return this._dataProtectionSnapshotPolicy.internalValue;
  }

  // export_policy_rule - computed: false, optional: true, required: false
  private _exportPolicyRule = new NetappVolumeExportPolicyRuleList(this, "export_policy_rule", false);
  public get exportPolicyRule() {
    return this._exportPolicyRule;
  }
  public putExportPolicyRule(value: NetappVolumeExportPolicyRule[] | cdktf.IResolvable) {
    this._exportPolicyRule.internalValue = value;
  }
  public resetExportPolicyRule() {
    this._exportPolicyRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyRuleInput() {
    return this._exportPolicyRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetappVolumeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetappVolumeTimeouts) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      azure_vmware_data_store_enabled: cdktf.booleanToTerraform(this._azureVmwareDataStoreEnabled),
      create_from_snapshot_resource_id: cdktf.stringToTerraform(this._createFromSnapshotResourceId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_features: cdktf.stringToTerraform(this._networkFeatures),
      pool_name: cdktf.stringToTerraform(this._poolName),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      security_style: cdktf.stringToTerraform(this._securityStyle),
      service_level: cdktf.stringToTerraform(this._serviceLevel),
      snapshot_directory_visible: cdktf.booleanToTerraform(this._snapshotDirectoryVisible),
      storage_quota_in_gb: cdktf.numberToTerraform(this._storageQuotaInGb),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      throughput_in_mibps: cdktf.numberToTerraform(this._throughputInMibps),
      volume_path: cdktf.stringToTerraform(this._volumePath),
      zone: cdktf.stringToTerraform(this._zone),
      data_protection_replication: netappVolumeDataProtectionReplicationToTerraform(this._dataProtectionReplication.internalValue),
      data_protection_snapshot_policy: netappVolumeDataProtectionSnapshotPolicyToTerraform(this._dataProtectionSnapshotPolicy.internalValue),
      export_policy_rule: cdktf.listMapper(netappVolumeExportPolicyRuleToTerraform, true)(this._exportPolicyRule.internalValue),
      timeouts: netappVolumeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
