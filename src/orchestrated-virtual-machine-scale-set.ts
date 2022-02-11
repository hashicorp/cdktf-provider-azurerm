// https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrchestratedVirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#encryption_at_host_enabled OrchestratedVirtualMachineScaleSet#encryption_at_host_enabled}
  */
  readonly encryptionAtHostEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#eviction_policy OrchestratedVirtualMachineScaleSet#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#extensions_time_budget OrchestratedVirtualMachineScaleSet#extensions_time_budget}
  */
  readonly extensionsTimeBudget?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#instances OrchestratedVirtualMachineScaleSet#instances}
  */
  readonly instances?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#license_type OrchestratedVirtualMachineScaleSet#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#location OrchestratedVirtualMachineScaleSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#max_bid_price OrchestratedVirtualMachineScaleSet#max_bid_price}
  */
  readonly maxBidPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#platform_fault_domain_count OrchestratedVirtualMachineScaleSet#platform_fault_domain_count}
  */
  readonly platformFaultDomainCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#priority OrchestratedVirtualMachineScaleSet#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#proximity_placement_group_id OrchestratedVirtualMachineScaleSet#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#resource_group_name OrchestratedVirtualMachineScaleSet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#sku_name OrchestratedVirtualMachineScaleSet#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#source_image_id OrchestratedVirtualMachineScaleSet#source_image_id}
  */
  readonly sourceImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#tags OrchestratedVirtualMachineScaleSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#zone_balance OrchestratedVirtualMachineScaleSet#zone_balance}
  */
  readonly zoneBalance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#zones OrchestratedVirtualMachineScaleSet#zones}
  */
  readonly zones?: string[];
  /**
  * automatic_instance_repair block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#automatic_instance_repair OrchestratedVirtualMachineScaleSet#automatic_instance_repair}
  */
  readonly automaticInstanceRepair?: OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair;
  /**
  * boot_diagnostics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#boot_diagnostics OrchestratedVirtualMachineScaleSet#boot_diagnostics}
  */
  readonly bootDiagnostics?: OrchestratedVirtualMachineScaleSetBootDiagnostics;
  /**
  * data_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#data_disk OrchestratedVirtualMachineScaleSet#data_disk}
  */
  readonly dataDisk?: OrchestratedVirtualMachineScaleSetDataDisk[] | cdktf.IResolvable;
  /**
  * extension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#extension OrchestratedVirtualMachineScaleSet#extension}
  */
  readonly extension?: OrchestratedVirtualMachineScaleSetExtension[] | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#identity OrchestratedVirtualMachineScaleSet#identity}
  */
  readonly identity?: OrchestratedVirtualMachineScaleSetIdentity;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#network_interface OrchestratedVirtualMachineScaleSet#network_interface}
  */
  readonly networkInterface?: OrchestratedVirtualMachineScaleSetNetworkInterface[] | cdktf.IResolvable;
  /**
  * os_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#os_disk OrchestratedVirtualMachineScaleSet#os_disk}
  */
  readonly osDisk?: OrchestratedVirtualMachineScaleSetOsDisk;
  /**
  * os_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#os_profile OrchestratedVirtualMachineScaleSet#os_profile}
  */
  readonly osProfile?: OrchestratedVirtualMachineScaleSetOsProfile;
  /**
  * plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#plan OrchestratedVirtualMachineScaleSet#plan}
  */
  readonly plan?: OrchestratedVirtualMachineScaleSetPlan;
  /**
  * source_image_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#source_image_reference OrchestratedVirtualMachineScaleSet#source_image_reference}
  */
  readonly sourceImageReference?: OrchestratedVirtualMachineScaleSetSourceImageReference;
  /**
  * termination_notification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#termination_notification OrchestratedVirtualMachineScaleSet#termination_notification}
  */
  readonly terminationNotification?: OrchestratedVirtualMachineScaleSetTerminationNotification;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#timeouts OrchestratedVirtualMachineScaleSet#timeouts}
  */
  readonly timeouts?: OrchestratedVirtualMachineScaleSetTimeouts;
}
export interface OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#enabled OrchestratedVirtualMachineScaleSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#grace_period OrchestratedVirtualMachineScaleSet#grace_period}
  */
  readonly gracePeriod?: string;
}

export function orchestratedVirtualMachineScaleSetAutomaticInstanceRepairToTerraform(struct?: OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference | OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
  }
}

export class OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._gracePeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._gracePeriod = value.gracePeriod;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: string; 
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }
  public set gracePeriod(value: string) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }
}
export interface OrchestratedVirtualMachineScaleSetBootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#storage_account_uri OrchestratedVirtualMachineScaleSet#storage_account_uri}
  */
  readonly storageAccountUri?: string;
}

export function orchestratedVirtualMachineScaleSetBootDiagnosticsToTerraform(struct?: OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference | OrchestratedVirtualMachineScaleSetBootDiagnostics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_account_uri: cdktf.stringToTerraform(struct!.storageAccountUri),
  }
}

export class OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrchestratedVirtualMachineScaleSetBootDiagnostics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageAccountUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountUri = this._storageAccountUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrchestratedVirtualMachineScaleSetBootDiagnostics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageAccountUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageAccountUri = value.storageAccountUri;
    }
  }

  // storage_account_uri - computed: false, optional: true, required: false
  private _storageAccountUri?: string; 
  public get storageAccountUri() {
    return this.getStringAttribute('storage_account_uri');
  }
  public set storageAccountUri(value: string) {
    this._storageAccountUri = value;
  }
  public resetStorageAccountUri() {
    this._storageAccountUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountUriInput() {
    return this._storageAccountUri;
  }
}
export interface OrchestratedVirtualMachineScaleSetDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#caching OrchestratedVirtualMachineScaleSet#caching}
  */
  readonly caching: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#create_option OrchestratedVirtualMachineScaleSet#create_option}
  */
  readonly createOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#disk_encryption_set_id OrchestratedVirtualMachineScaleSet#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#disk_iops_read_write OrchestratedVirtualMachineScaleSet#disk_iops_read_write}
  */
  readonly diskIopsReadWrite?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#disk_mbps_read_write OrchestratedVirtualMachineScaleSet#disk_mbps_read_write}
  */
  readonly diskMbpsReadWrite?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#disk_size_gb OrchestratedVirtualMachineScaleSet#disk_size_gb}
  */
  readonly diskSizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#lun OrchestratedVirtualMachineScaleSet#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#storage_account_type OrchestratedVirtualMachineScaleSet#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#write_accelerator_enabled OrchestratedVirtualMachineScaleSet#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
}

export function orchestratedVirtualMachineScaleSetDataDiskToTerraform(struct?: OrchestratedVirtualMachineScaleSetDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    disk_iops_read_write: cdktf.numberToTerraform(struct!.diskIopsReadWrite),
    disk_mbps_read_write: cdktf.numberToTerraform(struct!.diskMbpsReadWrite),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    lun: cdktf.numberToTerraform(struct!.lun),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
  }
}

export interface OrchestratedVirtualMachineScaleSetExtension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#auto_upgrade_minor_version_enabled OrchestratedVirtualMachineScaleSet#auto_upgrade_minor_version_enabled}
  */
  readonly autoUpgradeMinorVersionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#extensions_to_provision_after_vm_creation OrchestratedVirtualMachineScaleSet#extensions_to_provision_after_vm_creation}
  */
  readonly extensionsToProvisionAfterVmCreation?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#force_extension_execution_on_change OrchestratedVirtualMachineScaleSet#force_extension_execution_on_change}
  */
  readonly forceExtensionExecutionOnChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#protected_settings OrchestratedVirtualMachineScaleSet#protected_settings}
  */
  readonly protectedSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#publisher OrchestratedVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#settings OrchestratedVirtualMachineScaleSet#settings}
  */
  readonly settings?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#type OrchestratedVirtualMachineScaleSet#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#type_handler_version OrchestratedVirtualMachineScaleSet#type_handler_version}
  */
  readonly typeHandlerVersion: string;
}

export function orchestratedVirtualMachineScaleSetExtensionToTerraform(struct?: OrchestratedVirtualMachineScaleSetExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade_minor_version_enabled: cdktf.booleanToTerraform(struct!.autoUpgradeMinorVersionEnabled),
    extensions_to_provision_after_vm_creation: cdktf.listMapper(cdktf.stringToTerraform)(struct!.extensionsToProvisionAfterVmCreation),
    force_extension_execution_on_change: cdktf.stringToTerraform(struct!.forceExtensionExecutionOnChange),
    name: cdktf.stringToTerraform(struct!.name),
    protected_settings: cdktf.stringToTerraform(struct!.protectedSettings),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    settings: cdktf.stringToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
    type_handler_version: cdktf.stringToTerraform(struct!.typeHandlerVersion),
  }
}

export interface OrchestratedVirtualMachineScaleSetIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#identity_ids OrchestratedVirtualMachineScaleSet#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#type OrchestratedVirtualMachineScaleSet#type}
  */
  readonly type: string;
}

export function orchestratedVirtualMachineScaleSetIdentityToTerraform(struct?: OrchestratedVirtualMachineScaleSetIdentityOutputReference | OrchestratedVirtualMachineScaleSetIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class OrchestratedVirtualMachineScaleSetIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrchestratedVirtualMachineScaleSetIdentity | undefined {
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

  public set internalValue(value: OrchestratedVirtualMachineScaleSetIdentity | undefined) {
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

  // identity_ids - computed: false, optional: false, required: true
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
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
export interface OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#tag OrchestratedVirtualMachineScaleSet#tag}
  */
  readonly tag: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#type OrchestratedVirtualMachineScaleSet#type}
  */
  readonly type: string;
}

export function orchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToTerraform(struct?: OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#domain_name_label OrchestratedVirtualMachineScaleSet#domain_name_label}
  */
  readonly domainNameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#idle_timeout_in_minutes OrchestratedVirtualMachineScaleSet#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#public_ip_prefix_id OrchestratedVirtualMachineScaleSet#public_ip_prefix_id}
  */
  readonly publicIpPrefixId?: string;
  /**
  * ip_tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#ip_tag OrchestratedVirtualMachineScaleSet#ip_tag}
  */
  readonly ipTag?: OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag[] | cdktf.IResolvable;
}

export function orchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToTerraform(struct?: OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name_label: cdktf.stringToTerraform(struct!.domainNameLabel),
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    public_ip_prefix_id: cdktf.stringToTerraform(struct!.publicIpPrefixId),
    ip_tag: cdktf.listMapper(orchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToTerraform)(struct!.ipTag),
  }
}

export interface OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#application_gateway_backend_address_pool_ids OrchestratedVirtualMachineScaleSet#application_gateway_backend_address_pool_ids}
  */
  readonly applicationGatewayBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#application_security_group_ids OrchestratedVirtualMachineScaleSet#application_security_group_ids}
  */
  readonly applicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#load_balancer_backend_address_pool_ids OrchestratedVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}
  */
  readonly loadBalancerBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#primary OrchestratedVirtualMachineScaleSet#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#subnet_id OrchestratedVirtualMachineScaleSet#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#version OrchestratedVirtualMachineScaleSet#version}
  */
  readonly version?: string;
  /**
  * public_ip_address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#public_ip_address OrchestratedVirtualMachineScaleSet#public_ip_address}
  */
  readonly publicIpAddress?: OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress[] | cdktf.IResolvable;
}

export function orchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationToTerraform(struct?: OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_gateway_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.applicationGatewayBackendAddressPoolIds),
    application_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.applicationSecurityGroupIds),
    load_balancer_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.loadBalancerBackendAddressPoolIds),
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    version: cdktf.stringToTerraform(struct!.version),
    public_ip_address: cdktf.listMapper(orchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToTerraform)(struct!.publicIpAddress),
  }
}

export interface OrchestratedVirtualMachineScaleSetNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#dns_servers OrchestratedVirtualMachineScaleSet#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#enable_accelerated_networking OrchestratedVirtualMachineScaleSet#enable_accelerated_networking}
  */
  readonly enableAcceleratedNetworking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#enable_ip_forwarding OrchestratedVirtualMachineScaleSet#enable_ip_forwarding}
  */
  readonly enableIpForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#network_security_group_id OrchestratedVirtualMachineScaleSet#network_security_group_id}
  */
  readonly networkSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#primary OrchestratedVirtualMachineScaleSet#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#ip_configuration OrchestratedVirtualMachineScaleSet#ip_configuration}
  */
  readonly ipConfiguration: OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration[] | cdktf.IResolvable;
}

export function orchestratedVirtualMachineScaleSetNetworkInterfaceToTerraform(struct?: OrchestratedVirtualMachineScaleSetNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsServers),
    enable_accelerated_networking: cdktf.booleanToTerraform(struct!.enableAcceleratedNetworking),
    enable_ip_forwarding: cdktf.booleanToTerraform(struct!.enableIpForwarding),
    name: cdktf.stringToTerraform(struct!.name),
    network_security_group_id: cdktf.stringToTerraform(struct!.networkSecurityGroupId),
    primary: cdktf.booleanToTerraform(struct!.primary),
    ip_configuration: cdktf.listMapper(orchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationToTerraform)(struct!.ipConfiguration),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#option OrchestratedVirtualMachineScaleSet#option}
  */
  readonly option: string;
}

export function orchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference | OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.stringToTerraform(struct!.option),
  }
}

export class OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._option = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._option = value.option;
    }
  }

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }
}
export interface OrchestratedVirtualMachineScaleSetOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#caching OrchestratedVirtualMachineScaleSet#caching}
  */
  readonly caching: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#disk_encryption_set_id OrchestratedVirtualMachineScaleSet#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#disk_size_gb OrchestratedVirtualMachineScaleSet#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#storage_account_type OrchestratedVirtualMachineScaleSet#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#write_accelerator_enabled OrchestratedVirtualMachineScaleSet#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
  /**
  * diff_disk_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#diff_disk_settings OrchestratedVirtualMachineScaleSet#diff_disk_settings}
  */
  readonly diffDiskSettings?: OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings;
}

export function orchestratedVirtualMachineScaleSetOsDiskToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsDiskOutputReference | OrchestratedVirtualMachineScaleSetOsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
    diff_disk_settings: orchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsToTerraform(struct!.diffDiskSettings),
  }
}

export class OrchestratedVirtualMachineScaleSetOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrchestratedVirtualMachineScaleSetOsDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caching !== undefined) {
      hasAnyValues = true;
      internalValueResult.caching = this._caching;
    }
    if (this._diskEncryptionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetId = this._diskEncryptionSetId;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._storageAccountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountType = this._storageAccountType;
    }
    if (this._writeAcceleratorEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeAcceleratorEnabled = this._writeAcceleratorEnabled;
    }
    if (this._diffDiskSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diffDiskSettings = this._diffDiskSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrchestratedVirtualMachineScaleSetOsDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caching = undefined;
      this._diskEncryptionSetId = undefined;
      this._diskSizeGb = undefined;
      this._storageAccountType = undefined;
      this._writeAcceleratorEnabled = undefined;
      this._diffDiskSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caching = value.caching;
      this._diskEncryptionSetId = value.diskEncryptionSetId;
      this._diskSizeGb = value.diskSizeGb;
      this._storageAccountType = value.storageAccountType;
      this._writeAcceleratorEnabled = value.writeAcceleratorEnabled;
      this._diffDiskSettings.internalValue = value.diffDiskSettings;
    }
  }

  // caching - computed: false, optional: false, required: true
  private _caching?: string; 
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string) {
    this._caching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching;
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // storage_account_type - computed: false, optional: false, required: true
  private _storageAccountType?: string; 
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType;
  }

  // write_accelerator_enabled - computed: false, optional: true, required: false
  private _writeAcceleratorEnabled?: boolean | cdktf.IResolvable; 
  public get writeAcceleratorEnabled() {
    return this.getBooleanAttribute('write_accelerator_enabled');
  }
  public set writeAcceleratorEnabled(value: boolean | cdktf.IResolvable) {
    this._writeAcceleratorEnabled = value;
  }
  public resetWriteAcceleratorEnabled() {
    this._writeAcceleratorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAcceleratorEnabledInput() {
    return this._writeAcceleratorEnabled;
  }

  // diff_disk_settings - computed: false, optional: true, required: false
  private _diffDiskSettings = new OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference(this, "diff_disk_settings", true);
  public get diffDiskSettings() {
    return this._diffDiskSettings;
  }
  public putDiffDiskSettings(value: OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings) {
    this._diffDiskSettings.internalValue = value;
  }
  public resetDiffDiskSettings() {
    this._diffDiskSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffDiskSettingsInput() {
    return this._diffDiskSettings.internalValue;
  }
}
export interface OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#public_key OrchestratedVirtualMachineScaleSet#public_key}
  */
  readonly publicKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#username OrchestratedVirtualMachineScaleSet#username}
  */
  readonly username: string;
}

export function orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#url OrchestratedVirtualMachineScaleSet#url}
  */
  readonly url: string;
}

export function orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#key_vault_id OrchestratedVirtualMachineScaleSet#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#certificate OrchestratedVirtualMachineScaleSet#certificate}
  */
  readonly certificate: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificate[] | cdktf.IResolvable;
}

export function orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    certificate: cdktf.listMapper(orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateToTerraform)(struct!.certificate),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#admin_password OrchestratedVirtualMachineScaleSet#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#admin_username OrchestratedVirtualMachineScaleSet#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#computer_name_prefix OrchestratedVirtualMachineScaleSet#computer_name_prefix}
  */
  readonly computerNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#disable_password_authentication OrchestratedVirtualMachineScaleSet#disable_password_authentication}
  */
  readonly disablePasswordAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#patch_mode OrchestratedVirtualMachineScaleSet#patch_mode}
  */
  readonly patchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#provision_vm_agent OrchestratedVirtualMachineScaleSet#provision_vm_agent}
  */
  readonly provisionVmAgent?: boolean | cdktf.IResolvable;
  /**
  * admin_ssh_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#admin_ssh_key OrchestratedVirtualMachineScaleSet#admin_ssh_key}
  */
  readonly adminSshKey?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey[] | cdktf.IResolvable;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#secret OrchestratedVirtualMachineScaleSet#secret}
  */
  readonly secret?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret[] | cdktf.IResolvable;
}

export function orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference | OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    computer_name_prefix: cdktf.stringToTerraform(struct!.computerNamePrefix),
    disable_password_authentication: cdktf.booleanToTerraform(struct!.disablePasswordAuthentication),
    patch_mode: cdktf.stringToTerraform(struct!.patchMode),
    provision_vm_agent: cdktf.booleanToTerraform(struct!.provisionVmAgent),
    admin_ssh_key: cdktf.listMapper(orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyToTerraform)(struct!.adminSshKey),
    secret: cdktf.listMapper(orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretToTerraform)(struct!.secret),
  }
}

export class OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration | undefined {
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
    if (this._disablePasswordAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePasswordAuthentication = this._disablePasswordAuthentication;
    }
    if (this._patchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchMode = this._patchMode;
    }
    if (this._provisionVmAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionVmAgent = this._provisionVmAgent;
    }
    if (this._adminSshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminSshKey = this._adminSshKey;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._computerNamePrefix = undefined;
      this._disablePasswordAuthentication = undefined;
      this._patchMode = undefined;
      this._provisionVmAgent = undefined;
      this._adminSshKey = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._computerNamePrefix = value.computerNamePrefix;
      this._disablePasswordAuthentication = value.disablePasswordAuthentication;
      this._patchMode = value.patchMode;
      this._provisionVmAgent = value.provisionVmAgent;
      this._adminSshKey = value.adminSshKey;
      this._secret = value.secret;
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

  // computer_name_prefix - computed: true, optional: true, required: false
  private _computerNamePrefix?: string; 
  public get computerNamePrefix() {
    return this.getStringAttribute('computer_name_prefix');
  }
  public set computerNamePrefix(value: string) {
    this._computerNamePrefix = value;
  }
  public resetComputerNamePrefix() {
    this._computerNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNamePrefixInput() {
    return this._computerNamePrefix;
  }

  // disable_password_authentication - computed: false, optional: true, required: false
  private _disablePasswordAuthentication?: boolean | cdktf.IResolvable; 
  public get disablePasswordAuthentication() {
    return this.getBooleanAttribute('disable_password_authentication');
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

  // patch_mode - computed: false, optional: true, required: false
  private _patchMode?: string; 
  public get patchMode() {
    return this.getStringAttribute('patch_mode');
  }
  public set patchMode(value: string) {
    this._patchMode = value;
  }
  public resetPatchMode() {
    this._patchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchModeInput() {
    return this._patchMode;
  }

  // provision_vm_agent - computed: false, optional: true, required: false
  private _provisionVmAgent?: boolean | cdktf.IResolvable; 
  public get provisionVmAgent() {
    return this.getBooleanAttribute('provision_vm_agent');
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

  // admin_ssh_key - computed: false, optional: true, required: false
  private _adminSshKey?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey[] | cdktf.IResolvable; 
  public get adminSshKey() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('admin_ssh_key')));
  }
  public set adminSshKey(value: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey[] | cdktf.IResolvable) {
    this._adminSshKey = value;
  }
  public resetAdminSshKey() {
    this._adminSshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshKeyInput() {
    return this._adminSshKey;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret[] | cdktf.IResolvable; 
  public get secret() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret');
  }
  public set secret(value: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret[] | cdktf.IResolvable) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#store OrchestratedVirtualMachineScaleSet#store}
  */
  readonly store: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#url OrchestratedVirtualMachineScaleSet#url}
  */
  readonly url: string;
}

export function orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    store: cdktf.stringToTerraform(struct!.store),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#key_vault_id OrchestratedVirtualMachineScaleSet#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#certificate OrchestratedVirtualMachineScaleSet#certificate}
  */
  readonly certificate: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate[] | cdktf.IResolvable;
}

export function orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    certificate: cdktf.listMapper(orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateToTerraform)(struct!.certificate),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#certificate_url OrchestratedVirtualMachineScaleSet#certificate_url}
  */
  readonly certificateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#protocol OrchestratedVirtualMachineScaleSet#protocol}
  */
  readonly protocol: string;
}

export function orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#admin_password OrchestratedVirtualMachineScaleSet#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#admin_username OrchestratedVirtualMachineScaleSet#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#computer_name_prefix OrchestratedVirtualMachineScaleSet#computer_name_prefix}
  */
  readonly computerNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#enable_automatic_updates OrchestratedVirtualMachineScaleSet#enable_automatic_updates}
  */
  readonly enableAutomaticUpdates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#hotpatching_enabled OrchestratedVirtualMachineScaleSet#hotpatching_enabled}
  */
  readonly hotpatchingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#patch_mode OrchestratedVirtualMachineScaleSet#patch_mode}
  */
  readonly patchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#provision_vm_agent OrchestratedVirtualMachineScaleSet#provision_vm_agent}
  */
  readonly provisionVmAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#timezone OrchestratedVirtualMachineScaleSet#timezone}
  */
  readonly timezone?: string;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#secret OrchestratedVirtualMachineScaleSet#secret}
  */
  readonly secret?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret[] | cdktf.IResolvable;
  /**
  * winrm_listener block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#winrm_listener OrchestratedVirtualMachineScaleSet#winrm_listener}
  */
  readonly winrmListener?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener[] | cdktf.IResolvable;
}

export function orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference | OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    computer_name_prefix: cdktf.stringToTerraform(struct!.computerNamePrefix),
    enable_automatic_updates: cdktf.booleanToTerraform(struct!.enableAutomaticUpdates),
    hotpatching_enabled: cdktf.booleanToTerraform(struct!.hotpatchingEnabled),
    patch_mode: cdktf.stringToTerraform(struct!.patchMode),
    provision_vm_agent: cdktf.booleanToTerraform(struct!.provisionVmAgent),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    secret: cdktf.listMapper(orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretToTerraform)(struct!.secret),
    winrm_listener: cdktf.listMapper(orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerToTerraform)(struct!.winrmListener),
  }
}

export class OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration | undefined {
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
    if (this._enableAutomaticUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutomaticUpdates = this._enableAutomaticUpdates;
    }
    if (this._hotpatchingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotpatchingEnabled = this._hotpatchingEnabled;
    }
    if (this._patchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchMode = this._patchMode;
    }
    if (this._provisionVmAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionVmAgent = this._provisionVmAgent;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._winrmListener !== undefined) {
      hasAnyValues = true;
      internalValueResult.winrmListener = this._winrmListener;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._computerNamePrefix = undefined;
      this._enableAutomaticUpdates = undefined;
      this._hotpatchingEnabled = undefined;
      this._patchMode = undefined;
      this._provisionVmAgent = undefined;
      this._timezone = undefined;
      this._secret = undefined;
      this._winrmListener = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._computerNamePrefix = value.computerNamePrefix;
      this._enableAutomaticUpdates = value.enableAutomaticUpdates;
      this._hotpatchingEnabled = value.hotpatchingEnabled;
      this._patchMode = value.patchMode;
      this._provisionVmAgent = value.provisionVmAgent;
      this._timezone = value.timezone;
      this._secret = value.secret;
      this._winrmListener = value.winrmListener;
    }
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
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

  // computer_name_prefix - computed: true, optional: true, required: false
  private _computerNamePrefix?: string; 
  public get computerNamePrefix() {
    return this.getStringAttribute('computer_name_prefix');
  }
  public set computerNamePrefix(value: string) {
    this._computerNamePrefix = value;
  }
  public resetComputerNamePrefix() {
    this._computerNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNamePrefixInput() {
    return this._computerNamePrefix;
  }

  // enable_automatic_updates - computed: false, optional: true, required: false
  private _enableAutomaticUpdates?: boolean | cdktf.IResolvable; 
  public get enableAutomaticUpdates() {
    return this.getBooleanAttribute('enable_automatic_updates');
  }
  public set enableAutomaticUpdates(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticUpdates = value;
  }
  public resetEnableAutomaticUpdates() {
    this._enableAutomaticUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticUpdatesInput() {
    return this._enableAutomaticUpdates;
  }

  // hotpatching_enabled - computed: false, optional: true, required: false
  private _hotpatchingEnabled?: boolean | cdktf.IResolvable; 
  public get hotpatchingEnabled() {
    return this.getBooleanAttribute('hotpatching_enabled');
  }
  public set hotpatchingEnabled(value: boolean | cdktf.IResolvable) {
    this._hotpatchingEnabled = value;
  }
  public resetHotpatchingEnabled() {
    this._hotpatchingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotpatchingEnabledInput() {
    return this._hotpatchingEnabled;
  }

  // patch_mode - computed: false, optional: true, required: false
  private _patchMode?: string; 
  public get patchMode() {
    return this.getStringAttribute('patch_mode');
  }
  public set patchMode(value: string) {
    this._patchMode = value;
  }
  public resetPatchMode() {
    this._patchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchModeInput() {
    return this._patchMode;
  }

  // provision_vm_agent - computed: false, optional: true, required: false
  private _provisionVmAgent?: boolean | cdktf.IResolvable; 
  public get provisionVmAgent() {
    return this.getBooleanAttribute('provision_vm_agent');
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret[] | cdktf.IResolvable; 
  public get secret() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret');
  }
  public set secret(value: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret[] | cdktf.IResolvable) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // winrm_listener - computed: false, optional: true, required: false
  private _winrmListener?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener[] | cdktf.IResolvable; 
  public get winrmListener() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('winrm_listener')));
  }
  public set winrmListener(value: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener[] | cdktf.IResolvable) {
    this._winrmListener = value;
  }
  public resetWinrmListener() {
    this._winrmListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmListenerInput() {
    return this._winrmListener;
  }
}
export interface OrchestratedVirtualMachineScaleSetOsProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#custom_data OrchestratedVirtualMachineScaleSet#custom_data}
  */
  readonly customData?: string;
  /**
  * linux_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#linux_configuration OrchestratedVirtualMachineScaleSet#linux_configuration}
  */
  readonly linuxConfiguration?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration;
  /**
  * windows_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#windows_configuration OrchestratedVirtualMachineScaleSet#windows_configuration}
  */
  readonly windowsConfiguration?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration;
}

export function orchestratedVirtualMachineScaleSetOsProfileToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileOutputReference | OrchestratedVirtualMachineScaleSetOsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_data: cdktf.stringToTerraform(struct!.customData),
    linux_configuration: orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationToTerraform(struct!.linuxConfiguration),
    windows_configuration: orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationToTerraform(struct!.windowsConfiguration),
  }
}

export class OrchestratedVirtualMachineScaleSetOsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrchestratedVirtualMachineScaleSetOsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customData !== undefined) {
      hasAnyValues = true;
      internalValueResult.customData = this._customData;
    }
    if (this._linuxConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxConfiguration = this._linuxConfiguration?.internalValue;
    }
    if (this._windowsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsConfiguration = this._windowsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrchestratedVirtualMachineScaleSetOsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customData = undefined;
      this._linuxConfiguration.internalValue = undefined;
      this._windowsConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customData = value.customData;
      this._linuxConfiguration.internalValue = value.linuxConfiguration;
      this._windowsConfiguration.internalValue = value.windowsConfiguration;
    }
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

  // linux_configuration - computed: false, optional: true, required: false
  private _linuxConfiguration = new OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference(this, "linux_configuration", true);
  public get linuxConfiguration() {
    return this._linuxConfiguration;
  }
  public putLinuxConfiguration(value: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration) {
    this._linuxConfiguration.internalValue = value;
  }
  public resetLinuxConfiguration() {
    this._linuxConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxConfigurationInput() {
    return this._linuxConfiguration.internalValue;
  }

  // windows_configuration - computed: false, optional: true, required: false
  private _windowsConfiguration = new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference(this, "windows_configuration", true);
  public get windowsConfiguration() {
    return this._windowsConfiguration;
  }
  public putWindowsConfiguration(value: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration) {
    this._windowsConfiguration.internalValue = value;
  }
  public resetWindowsConfiguration() {
    this._windowsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsConfigurationInput() {
    return this._windowsConfiguration.internalValue;
  }
}
export interface OrchestratedVirtualMachineScaleSetPlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#product OrchestratedVirtualMachineScaleSet#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#publisher OrchestratedVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
}

export function orchestratedVirtualMachineScaleSetPlanToTerraform(struct?: OrchestratedVirtualMachineScaleSetPlanOutputReference | OrchestratedVirtualMachineScaleSetPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}

export class OrchestratedVirtualMachineScaleSetPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrchestratedVirtualMachineScaleSetPlan | undefined {
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

  public set internalValue(value: OrchestratedVirtualMachineScaleSetPlan | undefined) {
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
export interface OrchestratedVirtualMachineScaleSetSourceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#offer OrchestratedVirtualMachineScaleSet#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#publisher OrchestratedVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#sku OrchestratedVirtualMachineScaleSet#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#version OrchestratedVirtualMachineScaleSet#version}
  */
  readonly version: string;
}

export function orchestratedVirtualMachineScaleSetSourceImageReferenceToTerraform(struct?: OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference | OrchestratedVirtualMachineScaleSetSourceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrchestratedVirtualMachineScaleSetSourceImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: OrchestratedVirtualMachineScaleSetSourceImageReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
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

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface OrchestratedVirtualMachineScaleSetTerminationNotification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#enabled OrchestratedVirtualMachineScaleSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#timeout OrchestratedVirtualMachineScaleSet#timeout}
  */
  readonly timeout?: string;
}

export function orchestratedVirtualMachineScaleSetTerminationNotificationToTerraform(struct?: OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference | OrchestratedVirtualMachineScaleSetTerminationNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export class OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrchestratedVirtualMachineScaleSetTerminationNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrchestratedVirtualMachineScaleSetTerminationNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._timeout = value.timeout;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface OrchestratedVirtualMachineScaleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#create OrchestratedVirtualMachineScaleSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#delete OrchestratedVirtualMachineScaleSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#read OrchestratedVirtualMachineScaleSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set#update OrchestratedVirtualMachineScaleSet#update}
  */
  readonly update?: string;
}

export function orchestratedVirtualMachineScaleSetTimeoutsToTerraform(struct?: OrchestratedVirtualMachineScaleSetTimeoutsOutputReference | OrchestratedVirtualMachineScaleSetTimeouts | cdktf.IResolvable): any {
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

export class OrchestratedVirtualMachineScaleSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrchestratedVirtualMachineScaleSetTimeouts | undefined {
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

  public set internalValue(value: OrchestratedVirtualMachineScaleSetTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set azurerm_orchestrated_virtual_machine_scale_set}
*/
export class OrchestratedVirtualMachineScaleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_orchestrated_virtual_machine_scale_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set azurerm_orchestrated_virtual_machine_scale_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrchestratedVirtualMachineScaleSetConfig
  */
  public constructor(scope: Construct, id: string, config: OrchestratedVirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_orchestrated_virtual_machine_scale_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._encryptionAtHostEnabled = config.encryptionAtHostEnabled;
    this._evictionPolicy = config.evictionPolicy;
    this._extensionsTimeBudget = config.extensionsTimeBudget;
    this._instances = config.instances;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._maxBidPrice = config.maxBidPrice;
    this._name = config.name;
    this._platformFaultDomainCount = config.platformFaultDomainCount;
    this._priority = config.priority;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._sourceImageId = config.sourceImageId;
    this._tags = config.tags;
    this._zoneBalance = config.zoneBalance;
    this._zones = config.zones;
    this._automaticInstanceRepair.internalValue = config.automaticInstanceRepair;
    this._bootDiagnostics.internalValue = config.bootDiagnostics;
    this._dataDisk = config.dataDisk;
    this._extension = config.extension;
    this._identity.internalValue = config.identity;
    this._networkInterface = config.networkInterface;
    this._osDisk.internalValue = config.osDisk;
    this._osProfile.internalValue = config.osProfile;
    this._plan.internalValue = config.plan;
    this._sourceImageReference.internalValue = config.sourceImageReference;
    this._terminationNotification.internalValue = config.terminationNotification;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encryption_at_host_enabled - computed: false, optional: true, required: false
  private _encryptionAtHostEnabled?: boolean | cdktf.IResolvable; 
  public get encryptionAtHostEnabled() {
    return this.getBooleanAttribute('encryption_at_host_enabled');
  }
  public set encryptionAtHostEnabled(value: boolean | cdktf.IResolvable) {
    this._encryptionAtHostEnabled = value;
  }
  public resetEncryptionAtHostEnabled() {
    this._encryptionAtHostEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtHostEnabledInput() {
    return this._encryptionAtHostEnabled;
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

  // extensions_time_budget - computed: false, optional: true, required: false
  private _extensionsTimeBudget?: string; 
  public get extensionsTimeBudget() {
    return this.getStringAttribute('extensions_time_budget');
  }
  public set extensionsTimeBudget(value: string) {
    this._extensionsTimeBudget = value;
  }
  public resetExtensionsTimeBudget() {
    this._extensionsTimeBudget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsTimeBudgetInput() {
    return this._extensionsTimeBudget;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // license_type - computed: false, optional: true, required: false
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

  // max_bid_price - computed: false, optional: true, required: false
  private _maxBidPrice?: number; 
  public get maxBidPrice() {
    return this.getNumberAttribute('max_bid_price');
  }
  public set maxBidPrice(value: number) {
    this._maxBidPrice = value;
  }
  public resetMaxBidPrice() {
    this._maxBidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBidPriceInput() {
    return this._maxBidPrice;
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

  // platform_fault_domain_count - computed: false, optional: false, required: true
  private _platformFaultDomainCount?: number; 
  public get platformFaultDomainCount() {
    return this.getNumberAttribute('platform_fault_domain_count');
  }
  public set platformFaultDomainCount(value: number) {
    this._platformFaultDomainCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformFaultDomainCountInput() {
    return this._platformFaultDomainCount;
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

  // sku_name - computed: false, optional: true, required: false
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }

  // source_image_id - computed: false, optional: true, required: false
  private _sourceImageId?: string; 
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }
  public set sourceImageId(value: string) {
    this._sourceImageId = value;
  }
  public resetSourceImageId() {
    this._sourceImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageIdInput() {
    return this._sourceImageId;
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

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // zone_balance - computed: false, optional: true, required: false
  private _zoneBalance?: boolean | cdktf.IResolvable; 
  public get zoneBalance() {
    return this.getBooleanAttribute('zone_balance');
  }
  public set zoneBalance(value: boolean | cdktf.IResolvable) {
    this._zoneBalance = value;
  }
  public resetZoneBalance() {
    this._zoneBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneBalanceInput() {
    return this._zoneBalance;
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

  // automatic_instance_repair - computed: false, optional: true, required: false
  private _automaticInstanceRepair = new OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference(this, "automatic_instance_repair", true);
  public get automaticInstanceRepair() {
    return this._automaticInstanceRepair;
  }
  public putAutomaticInstanceRepair(value: OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair) {
    this._automaticInstanceRepair.internalValue = value;
  }
  public resetAutomaticInstanceRepair() {
    this._automaticInstanceRepair.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInstanceRepairInput() {
    return this._automaticInstanceRepair.internalValue;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics = new OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference(this, "boot_diagnostics", true);
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public putBootDiagnostics(value: OrchestratedVirtualMachineScaleSetBootDiagnostics) {
    this._bootDiagnostics.internalValue = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics.internalValue;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk?: OrchestratedVirtualMachineScaleSetDataDisk[] | cdktf.IResolvable; 
  public get dataDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('data_disk');
  }
  public set dataDisk(value: OrchestratedVirtualMachineScaleSetDataDisk[] | cdktf.IResolvable) {
    this._dataDisk = value;
  }
  public resetDataDisk() {
    this._dataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: OrchestratedVirtualMachineScaleSetExtension[] | cdktf.IResolvable; 
  public get extension() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('extension')));
  }
  public set extension(value: OrchestratedVirtualMachineScaleSetExtension[] | cdktf.IResolvable) {
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
  private _identity = new OrchestratedVirtualMachineScaleSetIdentityOutputReference(this, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: OrchestratedVirtualMachineScaleSetIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: OrchestratedVirtualMachineScaleSetNetworkInterface[] | cdktf.IResolvable; 
  public get networkInterface() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_interface');
  }
  public set networkInterface(value: OrchestratedVirtualMachineScaleSetNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface;
  }

  // os_disk - computed: false, optional: true, required: false
  private _osDisk = new OrchestratedVirtualMachineScaleSetOsDiskOutputReference(this, "os_disk", true);
  public get osDisk() {
    return this._osDisk;
  }
  public putOsDisk(value: OrchestratedVirtualMachineScaleSetOsDisk) {
    this._osDisk.internalValue = value;
  }
  public resetOsDisk() {
    this._osDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk.internalValue;
  }

  // os_profile - computed: false, optional: true, required: false
  private _osProfile = new OrchestratedVirtualMachineScaleSetOsProfileOutputReference(this, "os_profile", true);
  public get osProfile() {
    return this._osProfile;
  }
  public putOsProfile(value: OrchestratedVirtualMachineScaleSetOsProfile) {
    this._osProfile.internalValue = value;
  }
  public resetOsProfile() {
    this._osProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileInput() {
    return this._osProfile.internalValue;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new OrchestratedVirtualMachineScaleSetPlanOutputReference(this, "plan", true);
  public get plan() {
    return this._plan;
  }
  public putPlan(value: OrchestratedVirtualMachineScaleSetPlan) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // source_image_reference - computed: false, optional: true, required: false
  private _sourceImageReference = new OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference(this, "source_image_reference", true);
  public get sourceImageReference() {
    return this._sourceImageReference;
  }
  public putSourceImageReference(value: OrchestratedVirtualMachineScaleSetSourceImageReference) {
    this._sourceImageReference.internalValue = value;
  }
  public resetSourceImageReference() {
    this._sourceImageReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageReferenceInput() {
    return this._sourceImageReference.internalValue;
  }

  // termination_notification - computed: false, optional: true, required: false
  private _terminationNotification = new OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference(this, "termination_notification", true);
  public get terminationNotification() {
    return this._terminationNotification;
  }
  public putTerminationNotification(value: OrchestratedVirtualMachineScaleSetTerminationNotification) {
    this._terminationNotification.internalValue = value;
  }
  public resetTerminationNotification() {
    this._terminationNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationNotificationInput() {
    return this._terminationNotification.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrchestratedVirtualMachineScaleSetTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrchestratedVirtualMachineScaleSetTimeouts) {
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
      encryption_at_host_enabled: cdktf.booleanToTerraform(this._encryptionAtHostEnabled),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      extensions_time_budget: cdktf.stringToTerraform(this._extensionsTimeBudget),
      instances: cdktf.numberToTerraform(this._instances),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      max_bid_price: cdktf.numberToTerraform(this._maxBidPrice),
      name: cdktf.stringToTerraform(this._name),
      platform_fault_domain_count: cdktf.numberToTerraform(this._platformFaultDomainCount),
      priority: cdktf.stringToTerraform(this._priority),
      proximity_placement_group_id: cdktf.stringToTerraform(this._proximityPlacementGroupId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      source_image_id: cdktf.stringToTerraform(this._sourceImageId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone_balance: cdktf.booleanToTerraform(this._zoneBalance),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      automatic_instance_repair: orchestratedVirtualMachineScaleSetAutomaticInstanceRepairToTerraform(this._automaticInstanceRepair.internalValue),
      boot_diagnostics: orchestratedVirtualMachineScaleSetBootDiagnosticsToTerraform(this._bootDiagnostics.internalValue),
      data_disk: cdktf.listMapper(orchestratedVirtualMachineScaleSetDataDiskToTerraform)(this._dataDisk),
      extension: cdktf.listMapper(orchestratedVirtualMachineScaleSetExtensionToTerraform)(this._extension),
      identity: orchestratedVirtualMachineScaleSetIdentityToTerraform(this._identity.internalValue),
      network_interface: cdktf.listMapper(orchestratedVirtualMachineScaleSetNetworkInterfaceToTerraform)(this._networkInterface),
      os_disk: orchestratedVirtualMachineScaleSetOsDiskToTerraform(this._osDisk.internalValue),
      os_profile: orchestratedVirtualMachineScaleSetOsProfileToTerraform(this._osProfile.internalValue),
      plan: orchestratedVirtualMachineScaleSetPlanToTerraform(this._plan.internalValue),
      source_image_reference: orchestratedVirtualMachineScaleSetSourceImageReferenceToTerraform(this._sourceImageReference.internalValue),
      termination_notification: orchestratedVirtualMachineScaleSetTerminationNotificationToTerraform(this._terminationNotification.internalValue),
      timeouts: orchestratedVirtualMachineScaleSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
