// https://www.terraform.io/docs/providers/azurerm/r/storage_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#access_tier StorageAccount#access_tier}
  */
  readonly accessTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#account_kind StorageAccount#account_kind}
  */
  readonly accountKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#account_replication_type StorageAccount#account_replication_type}
  */
  readonly accountReplicationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#account_tier StorageAccount#account_tier}
  */
  readonly accountTier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allow_blob_public_access StorageAccount#allow_blob_public_access}
  */
  readonly allowBlobPublicAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#enable_https_traffic_only StorageAccount#enable_https_traffic_only}
  */
  readonly enableHttpsTrafficOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}
  */
  readonly infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#is_hns_enabled StorageAccount#is_hns_enabled}
  */
  readonly isHnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#large_file_share_enabled StorageAccount#large_file_share_enabled}
  */
  readonly largeFileShareEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#location StorageAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#min_tls_version StorageAccount#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#name StorageAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#nfsv3_enabled StorageAccount#nfsv3_enabled}
  */
  readonly nfsv3Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#queue_encryption_key_type StorageAccount#queue_encryption_key_type}
  */
  readonly queueEncryptionKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#resource_group_name StorageAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#shared_access_key_enabled StorageAccount#shared_access_key_enabled}
  */
  readonly sharedAccessKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#table_encryption_key_type StorageAccount#table_encryption_key_type}
  */
  readonly tableEncryptionKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#tags StorageAccount#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * azure_files_authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#azure_files_authentication StorageAccount#azure_files_authentication}
  */
  readonly azureFilesAuthentication?: StorageAccountAzureFilesAuthentication;
  /**
  * blob_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#blob_properties StorageAccount#blob_properties}
  */
  readonly blobProperties?: StorageAccountBlobProperties;
  /**
  * custom_domain block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#custom_domain StorageAccount#custom_domain}
  */
  readonly customDomain?: StorageAccountCustomDomain;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#identity StorageAccount#identity}
  */
  readonly identity?: StorageAccountIdentity;
  /**
  * network_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#network_rules StorageAccount#network_rules}
  */
  readonly networkRules?: StorageAccountNetworkRules;
  /**
  * queue_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#queue_properties StorageAccount#queue_properties}
  */
  readonly queueProperties?: StorageAccountQueueProperties;
  /**
  * routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#routing StorageAccount#routing}
  */
  readonly routing?: StorageAccountRouting;
  /**
  * share_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#share_properties StorageAccount#share_properties}
  */
  readonly shareProperties?: StorageAccountShareProperties;
  /**
  * static_website block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#static_website StorageAccount#static_website}
  */
  readonly staticWebsite?: StorageAccountStaticWebsite;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#timeouts StorageAccount#timeouts}
  */
  readonly timeouts?: StorageAccountTimeouts;
}
export interface StorageAccountAzureFilesAuthenticationActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#domain_guid StorageAccount#domain_guid}
  */
  readonly domainGuid: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#domain_name StorageAccount#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#domain_sid StorageAccount#domain_sid}
  */
  readonly domainSid: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#forest_name StorageAccount#forest_name}
  */
  readonly forestName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#netbios_domain_name StorageAccount#netbios_domain_name}
  */
  readonly netbiosDomainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#storage_sid StorageAccount#storage_sid}
  */
  readonly storageSid: string;
}

export function storageAccountAzureFilesAuthenticationActiveDirectoryToTerraform(struct?: StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference | StorageAccountAzureFilesAuthenticationActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_guid: cdktf.stringToTerraform(struct!.domainGuid),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_sid: cdktf.stringToTerraform(struct!.domainSid),
    forest_name: cdktf.stringToTerraform(struct!.forestName),
    netbios_domain_name: cdktf.stringToTerraform(struct!.netbiosDomainName),
    storage_sid: cdktf.stringToTerraform(struct!.storageSid),
  }
}

export class StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountAzureFilesAuthenticationActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainGuid = this._domainGuid;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainSid = this._domainSid;
    }
    if (this._forestName !== undefined) {
      hasAnyValues = true;
      internalValueResult.forestName = this._forestName;
    }
    if (this._netbiosDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.netbiosDomainName = this._netbiosDomainName;
    }
    if (this._storageSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSid = this._storageSid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountAzureFilesAuthenticationActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainGuid = undefined;
      this._domainName = undefined;
      this._domainSid = undefined;
      this._forestName = undefined;
      this._netbiosDomainName = undefined;
      this._storageSid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainGuid = value.domainGuid;
      this._domainName = value.domainName;
      this._domainSid = value.domainSid;
      this._forestName = value.forestName;
      this._netbiosDomainName = value.netbiosDomainName;
      this._storageSid = value.storageSid;
    }
  }

  // domain_guid - computed: false, optional: false, required: true
  private _domainGuid?: string; 
  public get domainGuid() {
    return this.getStringAttribute('domain_guid');
  }
  public set domainGuid(value: string) {
    this._domainGuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGuidInput() {
    return this._domainGuid;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_sid - computed: false, optional: false, required: true
  private _domainSid?: string; 
  public get domainSid() {
    return this.getStringAttribute('domain_sid');
  }
  public set domainSid(value: string) {
    this._domainSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSidInput() {
    return this._domainSid;
  }

  // forest_name - computed: false, optional: false, required: true
  private _forestName?: string; 
  public get forestName() {
    return this.getStringAttribute('forest_name');
  }
  public set forestName(value: string) {
    this._forestName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forestNameInput() {
    return this._forestName;
  }

  // netbios_domain_name - computed: false, optional: false, required: true
  private _netbiosDomainName?: string; 
  public get netbiosDomainName() {
    return this.getStringAttribute('netbios_domain_name');
  }
  public set netbiosDomainName(value: string) {
    this._netbiosDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosDomainNameInput() {
    return this._netbiosDomainName;
  }

  // storage_sid - computed: false, optional: false, required: true
  private _storageSid?: string; 
  public get storageSid() {
    return this.getStringAttribute('storage_sid');
  }
  public set storageSid(value: string) {
    this._storageSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSidInput() {
    return this._storageSid;
  }
}
export interface StorageAccountAzureFilesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#directory_type StorageAccount#directory_type}
  */
  readonly directoryType: string;
  /**
  * active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#active_directory StorageAccount#active_directory}
  */
  readonly activeDirectory?: StorageAccountAzureFilesAuthenticationActiveDirectory;
}

export function storageAccountAzureFilesAuthenticationToTerraform(struct?: StorageAccountAzureFilesAuthenticationOutputReference | StorageAccountAzureFilesAuthentication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory_type: cdktf.stringToTerraform(struct!.directoryType),
    active_directory: storageAccountAzureFilesAuthenticationActiveDirectoryToTerraform(struct!.activeDirectory),
  }
}

export class StorageAccountAzureFilesAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountAzureFilesAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryType = this._directoryType;
    }
    if (this._activeDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectory = this._activeDirectory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountAzureFilesAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directoryType = undefined;
      this._activeDirectory.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directoryType = value.directoryType;
      this._activeDirectory.internalValue = value.activeDirectory;
    }
  }

  // directory_type - computed: false, optional: false, required: true
  private _directoryType?: string; 
  public get directoryType() {
    return this.getStringAttribute('directory_type');
  }
  public set directoryType(value: string) {
    this._directoryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryTypeInput() {
    return this._directoryType;
  }

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory = new StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference(this as any, "active_directory", true);
  public get activeDirectory() {
    return this._activeDirectory;
  }
  public putActiveDirectory(value: StorageAccountAzureFilesAuthenticationActiveDirectory) {
    this._activeDirectory.internalValue = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory.internalValue;
  }
}
export interface StorageAccountBlobPropertiesContainerDeleteRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#days StorageAccount#days}
  */
  readonly days?: number;
}

export function storageAccountBlobPropertiesContainerDeleteRetentionPolicyToTerraform(struct?: StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference | StorageAccountBlobPropertiesContainerDeleteRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}

export class StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountBlobPropertiesContainerDeleteRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface StorageAccountBlobPropertiesCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_headers StorageAccount#allowed_headers}
  */
  readonly allowedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_methods StorageAccount#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_origins StorageAccount#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#exposed_headers StorageAccount#exposed_headers}
  */
  readonly exposedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#max_age_in_seconds StorageAccount#max_age_in_seconds}
  */
  readonly maxAgeInSeconds: number;
}

export function storageAccountBlobPropertiesCorsRuleToTerraform(struct?: StorageAccountBlobPropertiesCorsRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposedHeaders),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}

export interface StorageAccountBlobPropertiesDeleteRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#days StorageAccount#days}
  */
  readonly days?: number;
}

export function storageAccountBlobPropertiesDeleteRetentionPolicyToTerraform(struct?: StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference | StorageAccountBlobPropertiesDeleteRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}

export class StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountBlobPropertiesDeleteRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountBlobPropertiesDeleteRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface StorageAccountBlobProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#change_feed_enabled StorageAccount#change_feed_enabled}
  */
  readonly changeFeedEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#default_service_version StorageAccount#default_service_version}
  */
  readonly defaultServiceVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#last_access_time_enabled StorageAccount#last_access_time_enabled}
  */
  readonly lastAccessTimeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#versioning_enabled StorageAccount#versioning_enabled}
  */
  readonly versioningEnabled?: boolean | cdktf.IResolvable;
  /**
  * container_delete_retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#container_delete_retention_policy StorageAccount#container_delete_retention_policy}
  */
  readonly containerDeleteRetentionPolicy?: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy;
  /**
  * cors_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#cors_rule StorageAccount#cors_rule}
  */
  readonly corsRule?: StorageAccountBlobPropertiesCorsRule[];
  /**
  * delete_retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#delete_retention_policy StorageAccount#delete_retention_policy}
  */
  readonly deleteRetentionPolicy?: StorageAccountBlobPropertiesDeleteRetentionPolicy;
}

export function storageAccountBlobPropertiesToTerraform(struct?: StorageAccountBlobPropertiesOutputReference | StorageAccountBlobProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_feed_enabled: cdktf.booleanToTerraform(struct!.changeFeedEnabled),
    default_service_version: cdktf.stringToTerraform(struct!.defaultServiceVersion),
    last_access_time_enabled: cdktf.booleanToTerraform(struct!.lastAccessTimeEnabled),
    versioning_enabled: cdktf.booleanToTerraform(struct!.versioningEnabled),
    container_delete_retention_policy: storageAccountBlobPropertiesContainerDeleteRetentionPolicyToTerraform(struct!.containerDeleteRetentionPolicy),
    cors_rule: cdktf.listMapper(storageAccountBlobPropertiesCorsRuleToTerraform)(struct!.corsRule),
    delete_retention_policy: storageAccountBlobPropertiesDeleteRetentionPolicyToTerraform(struct!.deleteRetentionPolicy),
  }
}

export class StorageAccountBlobPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountBlobProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeFeedEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeFeedEnabled = this._changeFeedEnabled;
    }
    if (this._defaultServiceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultServiceVersion = this._defaultServiceVersion;
    }
    if (this._lastAccessTimeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAccessTimeEnabled = this._lastAccessTimeEnabled;
    }
    if (this._versioningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.versioningEnabled = this._versioningEnabled;
    }
    if (this._containerDeleteRetentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerDeleteRetentionPolicy = this._containerDeleteRetentionPolicy?.internalValue;
    }
    if (this._corsRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsRule = this._corsRule;
    }
    if (this._deleteRetentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetentionPolicy = this._deleteRetentionPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountBlobProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changeFeedEnabled = undefined;
      this._defaultServiceVersion = undefined;
      this._lastAccessTimeEnabled = undefined;
      this._versioningEnabled = undefined;
      this._containerDeleteRetentionPolicy.internalValue = undefined;
      this._corsRule = undefined;
      this._deleteRetentionPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changeFeedEnabled = value.changeFeedEnabled;
      this._defaultServiceVersion = value.defaultServiceVersion;
      this._lastAccessTimeEnabled = value.lastAccessTimeEnabled;
      this._versioningEnabled = value.versioningEnabled;
      this._containerDeleteRetentionPolicy.internalValue = value.containerDeleteRetentionPolicy;
      this._corsRule = value.corsRule;
      this._deleteRetentionPolicy.internalValue = value.deleteRetentionPolicy;
    }
  }

  // change_feed_enabled - computed: false, optional: true, required: false
  private _changeFeedEnabled?: boolean | cdktf.IResolvable; 
  public get changeFeedEnabled() {
    return this.getBooleanAttribute('change_feed_enabled') as any;
  }
  public set changeFeedEnabled(value: boolean | cdktf.IResolvable) {
    this._changeFeedEnabled = value;
  }
  public resetChangeFeedEnabled() {
    this._changeFeedEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeFeedEnabledInput() {
    return this._changeFeedEnabled;
  }

  // default_service_version - computed: true, optional: true, required: false
  private _defaultServiceVersion?: string; 
  public get defaultServiceVersion() {
    return this.getStringAttribute('default_service_version');
  }
  public set defaultServiceVersion(value: string) {
    this._defaultServiceVersion = value;
  }
  public resetDefaultServiceVersion() {
    this._defaultServiceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceVersionInput() {
    return this._defaultServiceVersion;
  }

  // last_access_time_enabled - computed: false, optional: true, required: false
  private _lastAccessTimeEnabled?: boolean | cdktf.IResolvable; 
  public get lastAccessTimeEnabled() {
    return this.getBooleanAttribute('last_access_time_enabled') as any;
  }
  public set lastAccessTimeEnabled(value: boolean | cdktf.IResolvable) {
    this._lastAccessTimeEnabled = value;
  }
  public resetLastAccessTimeEnabled() {
    this._lastAccessTimeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAccessTimeEnabledInput() {
    return this._lastAccessTimeEnabled;
  }

  // versioning_enabled - computed: false, optional: true, required: false
  private _versioningEnabled?: boolean | cdktf.IResolvable; 
  public get versioningEnabled() {
    return this.getBooleanAttribute('versioning_enabled') as any;
  }
  public set versioningEnabled(value: boolean | cdktf.IResolvable) {
    this._versioningEnabled = value;
  }
  public resetVersioningEnabled() {
    this._versioningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningEnabledInput() {
    return this._versioningEnabled;
  }

  // container_delete_retention_policy - computed: false, optional: true, required: false
  private _containerDeleteRetentionPolicy = new StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference(this as any, "container_delete_retention_policy", true);
  public get containerDeleteRetentionPolicy() {
    return this._containerDeleteRetentionPolicy;
  }
  public putContainerDeleteRetentionPolicy(value: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy) {
    this._containerDeleteRetentionPolicy.internalValue = value;
  }
  public resetContainerDeleteRetentionPolicy() {
    this._containerDeleteRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDeleteRetentionPolicyInput() {
    return this._containerDeleteRetentionPolicy.internalValue;
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule?: StorageAccountBlobPropertiesCorsRule[]; 
  public get corsRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cors_rule') as any;
  }
  public set corsRule(value: StorageAccountBlobPropertiesCorsRule[]) {
    this._corsRule = value;
  }
  public resetCorsRule() {
    this._corsRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule;
  }

  // delete_retention_policy - computed: false, optional: true, required: false
  private _deleteRetentionPolicy = new StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference(this as any, "delete_retention_policy", true);
  public get deleteRetentionPolicy() {
    return this._deleteRetentionPolicy;
  }
  public putDeleteRetentionPolicy(value: StorageAccountBlobPropertiesDeleteRetentionPolicy) {
    this._deleteRetentionPolicy.internalValue = value;
  }
  public resetDeleteRetentionPolicy() {
    this._deleteRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionPolicyInput() {
    return this._deleteRetentionPolicy.internalValue;
  }
}
export interface StorageAccountCustomDomain {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#name StorageAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#use_subdomain StorageAccount#use_subdomain}
  */
  readonly useSubdomain?: boolean | cdktf.IResolvable;
}

export function storageAccountCustomDomainToTerraform(struct?: StorageAccountCustomDomainOutputReference | StorageAccountCustomDomain): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    use_subdomain: cdktf.booleanToTerraform(struct!.useSubdomain),
  }
}

export class StorageAccountCustomDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountCustomDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useSubdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSubdomain = this._useSubdomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountCustomDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._useSubdomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._useSubdomain = value.useSubdomain;
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

  // use_subdomain - computed: false, optional: true, required: false
  private _useSubdomain?: boolean | cdktf.IResolvable; 
  public get useSubdomain() {
    return this.getBooleanAttribute('use_subdomain') as any;
  }
  public set useSubdomain(value: boolean | cdktf.IResolvable) {
    this._useSubdomain = value;
  }
  public resetUseSubdomain() {
    this._useSubdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSubdomainInput() {
    return this._useSubdomain;
  }
}
export interface StorageAccountIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#identity_ids StorageAccount#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#type StorageAccount#type}
  */
  readonly type: string;
}

export function storageAccountIdentityToTerraform(struct?: StorageAccountIdentityOutputReference | StorageAccountIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class StorageAccountIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountIdentity | undefined {
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

  public set internalValue(value: StorageAccountIdentity | undefined) {
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
export interface StorageAccountNetworkRulesPrivateLinkAccess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#endpoint_resource_id StorageAccount#endpoint_resource_id}
  */
  readonly endpointResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#endpoint_tenant_id StorageAccount#endpoint_tenant_id}
  */
  readonly endpointTenantId?: string;
}

export function storageAccountNetworkRulesPrivateLinkAccessToTerraform(struct?: StorageAccountNetworkRulesPrivateLinkAccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_resource_id: cdktf.stringToTerraform(struct!.endpointResourceId),
    endpoint_tenant_id: cdktf.stringToTerraform(struct!.endpointTenantId),
  }
}

export interface StorageAccountNetworkRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#bypass StorageAccount#bypass}
  */
  readonly bypass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#default_action StorageAccount#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#ip_rules StorageAccount#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}
  */
  readonly virtualNetworkSubnetIds?: string[];
  /**
  * private_link_access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#private_link_access StorageAccount#private_link_access}
  */
  readonly privateLinkAccess?: StorageAccountNetworkRulesPrivateLinkAccess[];
}

export function storageAccountNetworkRulesToTerraform(struct?: StorageAccountNetworkRulesOutputReference | StorageAccountNetworkRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass: cdktf.listMapper(cdktf.stringToTerraform)(struct!.bypass),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipRules),
    virtual_network_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.virtualNetworkSubnetIds),
    private_link_access: cdktf.listMapper(storageAccountNetworkRulesPrivateLinkAccessToTerraform)(struct!.privateLinkAccess),
  }
}

export class StorageAccountNetworkRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountNetworkRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._ipRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRules = this._ipRules;
    }
    if (this._virtualNetworkSubnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkSubnetIds = this._virtualNetworkSubnetIds;
    }
    if (this._privateLinkAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkAccess = this._privateLinkAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountNetworkRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypass = undefined;
      this._defaultAction = undefined;
      this._ipRules = undefined;
      this._virtualNetworkSubnetIds = undefined;
      this._privateLinkAccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypass = value.bypass;
      this._defaultAction = value.defaultAction;
      this._ipRules = value.ipRules;
      this._virtualNetworkSubnetIds = value.virtualNetworkSubnetIds;
      this._privateLinkAccess = value.privateLinkAccess;
    }
  }

  // bypass - computed: true, optional: true, required: false
  private _bypass?: string[]; 
  public get bypass() {
    return this.getListAttribute('bypass');
  }
  public set bypass(value: string[]) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // ip_rules - computed: true, optional: true, required: false
  private _ipRules?: string[]; 
  public get ipRules() {
    return this.getListAttribute('ip_rules');
  }
  public set ipRules(value: string[]) {
    this._ipRules = value;
  }
  public resetIpRules() {
    this._ipRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules;
  }

  // virtual_network_subnet_ids - computed: true, optional: true, required: false
  private _virtualNetworkSubnetIds?: string[]; 
  public get virtualNetworkSubnetIds() {
    return this.getListAttribute('virtual_network_subnet_ids');
  }
  public set virtualNetworkSubnetIds(value: string[]) {
    this._virtualNetworkSubnetIds = value;
  }
  public resetVirtualNetworkSubnetIds() {
    this._virtualNetworkSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdsInput() {
    return this._virtualNetworkSubnetIds;
  }

  // private_link_access - computed: false, optional: true, required: false
  private _privateLinkAccess?: StorageAccountNetworkRulesPrivateLinkAccess[]; 
  public get privateLinkAccess() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('private_link_access') as any;
  }
  public set privateLinkAccess(value: StorageAccountNetworkRulesPrivateLinkAccess[]) {
    this._privateLinkAccess = value;
  }
  public resetPrivateLinkAccess() {
    this._privateLinkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkAccessInput() {
    return this._privateLinkAccess;
  }
}
export interface StorageAccountQueuePropertiesCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_headers StorageAccount#allowed_headers}
  */
  readonly allowedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_methods StorageAccount#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_origins StorageAccount#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#exposed_headers StorageAccount#exposed_headers}
  */
  readonly exposedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#max_age_in_seconds StorageAccount#max_age_in_seconds}
  */
  readonly maxAgeInSeconds: number;
}

export function storageAccountQueuePropertiesCorsRuleToTerraform(struct?: StorageAccountQueuePropertiesCorsRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposedHeaders),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}

export interface StorageAccountQueuePropertiesHourMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#enabled StorageAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#include_apis StorageAccount#include_apis}
  */
  readonly includeApis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#retention_policy_days StorageAccount#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#version StorageAccount#version}
  */
  readonly version: string;
}

export function storageAccountQueuePropertiesHourMetricsToTerraform(struct?: StorageAccountQueuePropertiesHourMetricsOutputReference | StorageAccountQueuePropertiesHourMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    include_apis: cdktf.booleanToTerraform(struct!.includeApis),
    retention_policy_days: cdktf.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class StorageAccountQueuePropertiesHourMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountQueuePropertiesHourMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._includeApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeApis = this._includeApis;
    }
    if (this._retentionPolicyDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyDays = this._retentionPolicyDays;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesHourMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._includeApis = undefined;
      this._retentionPolicyDays = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._includeApis = value.includeApis;
      this._retentionPolicyDays = value.retentionPolicyDays;
      this._version = value.version;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // include_apis - computed: false, optional: true, required: false
  private _includeApis?: boolean | cdktf.IResolvable; 
  public get includeApis() {
    return this.getBooleanAttribute('include_apis') as any;
  }
  public set includeApis(value: boolean | cdktf.IResolvable) {
    this._includeApis = value;
  }
  public resetIncludeApis() {
    this._includeApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeApisInput() {
    return this._includeApis;
  }

  // retention_policy_days - computed: false, optional: true, required: false
  private _retentionPolicyDays?: number; 
  public get retentionPolicyDays() {
    return this.getNumberAttribute('retention_policy_days');
  }
  public set retentionPolicyDays(value: number) {
    this._retentionPolicyDays = value;
  }
  public resetRetentionPolicyDays() {
    this._retentionPolicyDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyDaysInput() {
    return this._retentionPolicyDays;
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
export interface StorageAccountQueuePropertiesLogging {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#delete StorageAccount#delete}
  */
  readonly delete: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#read StorageAccount#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#retention_policy_days StorageAccount#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#version StorageAccount#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#write StorageAccount#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function storageAccountQueuePropertiesLoggingToTerraform(struct?: StorageAccountQueuePropertiesLoggingOutputReference | StorageAccountQueuePropertiesLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.booleanToTerraform(struct!.delete),
    read: cdktf.booleanToTerraform(struct!.read),
    retention_policy_days: cdktf.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktf.stringToTerraform(struct!.version),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}

export class StorageAccountQueuePropertiesLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountQueuePropertiesLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._retentionPolicyDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyDays = this._retentionPolicyDays;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delete = undefined;
      this._read = undefined;
      this._retentionPolicyDays = undefined;
      this._version = undefined;
      this._write = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delete = value.delete;
      this._read = value.read;
      this._retentionPolicyDays = value.retentionPolicyDays;
      this._version = value.version;
      this._write = value.write;
    }
  }

  // delete - computed: false, optional: false, required: true
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete') as any;
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read') as any;
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // retention_policy_days - computed: false, optional: true, required: false
  private _retentionPolicyDays?: number; 
  public get retentionPolicyDays() {
    return this.getNumberAttribute('retention_policy_days');
  }
  public set retentionPolicyDays(value: number) {
    this._retentionPolicyDays = value;
  }
  public resetRetentionPolicyDays() {
    this._retentionPolicyDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyDaysInput() {
    return this._retentionPolicyDays;
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

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write') as any;
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface StorageAccountQueuePropertiesMinuteMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#enabled StorageAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#include_apis StorageAccount#include_apis}
  */
  readonly includeApis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#retention_policy_days StorageAccount#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#version StorageAccount#version}
  */
  readonly version: string;
}

export function storageAccountQueuePropertiesMinuteMetricsToTerraform(struct?: StorageAccountQueuePropertiesMinuteMetricsOutputReference | StorageAccountQueuePropertiesMinuteMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    include_apis: cdktf.booleanToTerraform(struct!.includeApis),
    retention_policy_days: cdktf.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class StorageAccountQueuePropertiesMinuteMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountQueuePropertiesMinuteMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._includeApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeApis = this._includeApis;
    }
    if (this._retentionPolicyDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyDays = this._retentionPolicyDays;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesMinuteMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._includeApis = undefined;
      this._retentionPolicyDays = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._includeApis = value.includeApis;
      this._retentionPolicyDays = value.retentionPolicyDays;
      this._version = value.version;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // include_apis - computed: false, optional: true, required: false
  private _includeApis?: boolean | cdktf.IResolvable; 
  public get includeApis() {
    return this.getBooleanAttribute('include_apis') as any;
  }
  public set includeApis(value: boolean | cdktf.IResolvable) {
    this._includeApis = value;
  }
  public resetIncludeApis() {
    this._includeApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeApisInput() {
    return this._includeApis;
  }

  // retention_policy_days - computed: false, optional: true, required: false
  private _retentionPolicyDays?: number; 
  public get retentionPolicyDays() {
    return this.getNumberAttribute('retention_policy_days');
  }
  public set retentionPolicyDays(value: number) {
    this._retentionPolicyDays = value;
  }
  public resetRetentionPolicyDays() {
    this._retentionPolicyDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyDaysInput() {
    return this._retentionPolicyDays;
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
export interface StorageAccountQueueProperties {
  /**
  * cors_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#cors_rule StorageAccount#cors_rule}
  */
  readonly corsRule?: StorageAccountQueuePropertiesCorsRule[];
  /**
  * hour_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#hour_metrics StorageAccount#hour_metrics}
  */
  readonly hourMetrics?: StorageAccountQueuePropertiesHourMetrics;
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#logging StorageAccount#logging}
  */
  readonly logging?: StorageAccountQueuePropertiesLogging;
  /**
  * minute_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#minute_metrics StorageAccount#minute_metrics}
  */
  readonly minuteMetrics?: StorageAccountQueuePropertiesMinuteMetrics;
}

export function storageAccountQueuePropertiesToTerraform(struct?: StorageAccountQueuePropertiesOutputReference | StorageAccountQueueProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_rule: cdktf.listMapper(storageAccountQueuePropertiesCorsRuleToTerraform)(struct!.corsRule),
    hour_metrics: storageAccountQueuePropertiesHourMetricsToTerraform(struct!.hourMetrics),
    logging: storageAccountQueuePropertiesLoggingToTerraform(struct!.logging),
    minute_metrics: storageAccountQueuePropertiesMinuteMetricsToTerraform(struct!.minuteMetrics),
  }
}

export class StorageAccountQueuePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountQueueProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corsRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsRule = this._corsRule;
    }
    if (this._hourMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourMetrics = this._hourMetrics?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._minuteMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteMetrics = this._minuteMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueueProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._corsRule = undefined;
      this._hourMetrics.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._minuteMetrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._corsRule = value.corsRule;
      this._hourMetrics.internalValue = value.hourMetrics;
      this._logging.internalValue = value.logging;
      this._minuteMetrics.internalValue = value.minuteMetrics;
    }
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule?: StorageAccountQueuePropertiesCorsRule[]; 
  public get corsRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cors_rule') as any;
  }
  public set corsRule(value: StorageAccountQueuePropertiesCorsRule[]) {
    this._corsRule = value;
  }
  public resetCorsRule() {
    this._corsRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule;
  }

  // hour_metrics - computed: false, optional: true, required: false
  private _hourMetrics = new StorageAccountQueuePropertiesHourMetricsOutputReference(this as any, "hour_metrics", true);
  public get hourMetrics() {
    return this._hourMetrics;
  }
  public putHourMetrics(value: StorageAccountQueuePropertiesHourMetrics) {
    this._hourMetrics.internalValue = value;
  }
  public resetHourMetrics() {
    this._hourMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourMetricsInput() {
    return this._hourMetrics.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new StorageAccountQueuePropertiesLoggingOutputReference(this as any, "logging", true);
  public get logging() {
    return this._logging;
  }
  public putLogging(value: StorageAccountQueuePropertiesLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // minute_metrics - computed: false, optional: true, required: false
  private _minuteMetrics = new StorageAccountQueuePropertiesMinuteMetricsOutputReference(this as any, "minute_metrics", true);
  public get minuteMetrics() {
    return this._minuteMetrics;
  }
  public putMinuteMetrics(value: StorageAccountQueuePropertiesMinuteMetrics) {
    this._minuteMetrics.internalValue = value;
  }
  public resetMinuteMetrics() {
    this._minuteMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteMetricsInput() {
    return this._minuteMetrics.internalValue;
  }
}
export interface StorageAccountRouting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#choice StorageAccount#choice}
  */
  readonly choice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#publish_internet_endpoints StorageAccount#publish_internet_endpoints}
  */
  readonly publishInternetEndpoints?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}
  */
  readonly publishMicrosoftEndpoints?: boolean | cdktf.IResolvable;
}

export function storageAccountRoutingToTerraform(struct?: StorageAccountRoutingOutputReference | StorageAccountRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    choice: cdktf.stringToTerraform(struct!.choice),
    publish_internet_endpoints: cdktf.booleanToTerraform(struct!.publishInternetEndpoints),
    publish_microsoft_endpoints: cdktf.booleanToTerraform(struct!.publishMicrosoftEndpoints),
  }
}

export class StorageAccountRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._choice !== undefined) {
      hasAnyValues = true;
      internalValueResult.choice = this._choice;
    }
    if (this._publishInternetEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishInternetEndpoints = this._publishInternetEndpoints;
    }
    if (this._publishMicrosoftEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishMicrosoftEndpoints = this._publishMicrosoftEndpoints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._choice = undefined;
      this._publishInternetEndpoints = undefined;
      this._publishMicrosoftEndpoints = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._choice = value.choice;
      this._publishInternetEndpoints = value.publishInternetEndpoints;
      this._publishMicrosoftEndpoints = value.publishMicrosoftEndpoints;
    }
  }

  // choice - computed: false, optional: true, required: false
  private _choice?: string; 
  public get choice() {
    return this.getStringAttribute('choice');
  }
  public set choice(value: string) {
    this._choice = value;
  }
  public resetChoice() {
    this._choice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get choiceInput() {
    return this._choice;
  }

  // publish_internet_endpoints - computed: false, optional: true, required: false
  private _publishInternetEndpoints?: boolean | cdktf.IResolvable; 
  public get publishInternetEndpoints() {
    return this.getBooleanAttribute('publish_internet_endpoints') as any;
  }
  public set publishInternetEndpoints(value: boolean | cdktf.IResolvable) {
    this._publishInternetEndpoints = value;
  }
  public resetPublishInternetEndpoints() {
    this._publishInternetEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInternetEndpointsInput() {
    return this._publishInternetEndpoints;
  }

  // publish_microsoft_endpoints - computed: false, optional: true, required: false
  private _publishMicrosoftEndpoints?: boolean | cdktf.IResolvable; 
  public get publishMicrosoftEndpoints() {
    return this.getBooleanAttribute('publish_microsoft_endpoints') as any;
  }
  public set publishMicrosoftEndpoints(value: boolean | cdktf.IResolvable) {
    this._publishMicrosoftEndpoints = value;
  }
  public resetPublishMicrosoftEndpoints() {
    this._publishMicrosoftEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishMicrosoftEndpointsInput() {
    return this._publishMicrosoftEndpoints;
  }
}
export interface StorageAccountSharePropertiesCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_headers StorageAccount#allowed_headers}
  */
  readonly allowedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_methods StorageAccount#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_origins StorageAccount#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#exposed_headers StorageAccount#exposed_headers}
  */
  readonly exposedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#max_age_in_seconds StorageAccount#max_age_in_seconds}
  */
  readonly maxAgeInSeconds: number;
}

export function storageAccountSharePropertiesCorsRuleToTerraform(struct?: StorageAccountSharePropertiesCorsRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposedHeaders),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}

export interface StorageAccountSharePropertiesRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#days StorageAccount#days}
  */
  readonly days?: number;
}

export function storageAccountSharePropertiesRetentionPolicyToTerraform(struct?: StorageAccountSharePropertiesRetentionPolicyOutputReference | StorageAccountSharePropertiesRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}

export class StorageAccountSharePropertiesRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountSharePropertiesRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountSharePropertiesRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface StorageAccountSharePropertiesSmb {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#authentication_types StorageAccount#authentication_types}
  */
  readonly authenticationTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#channel_encryption_type StorageAccount#channel_encryption_type}
  */
  readonly channelEncryptionType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#kerberos_ticket_encryption_type StorageAccount#kerberos_ticket_encryption_type}
  */
  readonly kerberosTicketEncryptionType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#versions StorageAccount#versions}
  */
  readonly versions?: string[];
}

export function storageAccountSharePropertiesSmbToTerraform(struct?: StorageAccountSharePropertiesSmbOutputReference | StorageAccountSharePropertiesSmb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.authenticationTypes),
    channel_encryption_type: cdktf.listMapper(cdktf.stringToTerraform)(struct!.channelEncryptionType),
    kerberos_ticket_encryption_type: cdktf.listMapper(cdktf.stringToTerraform)(struct!.kerberosTicketEncryptionType),
    versions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.versions),
  }
}

export class StorageAccountSharePropertiesSmbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountSharePropertiesSmb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTypes = this._authenticationTypes;
    }
    if (this._channelEncryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelEncryptionType = this._channelEncryptionType;
    }
    if (this._kerberosTicketEncryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosTicketEncryptionType = this._kerberosTicketEncryptionType;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountSharePropertiesSmb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationTypes = undefined;
      this._channelEncryptionType = undefined;
      this._kerberosTicketEncryptionType = undefined;
      this._versions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationTypes = value.authenticationTypes;
      this._channelEncryptionType = value.channelEncryptionType;
      this._kerberosTicketEncryptionType = value.kerberosTicketEncryptionType;
      this._versions = value.versions;
    }
  }

  // authentication_types - computed: false, optional: true, required: false
  private _authenticationTypes?: string[]; 
  public get authenticationTypes() {
    return this.getListAttribute('authentication_types');
  }
  public set authenticationTypes(value: string[]) {
    this._authenticationTypes = value;
  }
  public resetAuthenticationTypes() {
    this._authenticationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypesInput() {
    return this._authenticationTypes;
  }

  // channel_encryption_type - computed: false, optional: true, required: false
  private _channelEncryptionType?: string[]; 
  public get channelEncryptionType() {
    return this.getListAttribute('channel_encryption_type');
  }
  public set channelEncryptionType(value: string[]) {
    this._channelEncryptionType = value;
  }
  public resetChannelEncryptionType() {
    this._channelEncryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelEncryptionTypeInput() {
    return this._channelEncryptionType;
  }

  // kerberos_ticket_encryption_type - computed: false, optional: true, required: false
  private _kerberosTicketEncryptionType?: string[]; 
  public get kerberosTicketEncryptionType() {
    return this.getListAttribute('kerberos_ticket_encryption_type');
  }
  public set kerberosTicketEncryptionType(value: string[]) {
    this._kerberosTicketEncryptionType = value;
  }
  public resetKerberosTicketEncryptionType() {
    this._kerberosTicketEncryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosTicketEncryptionTypeInput() {
    return this._kerberosTicketEncryptionType;
  }

  // versions - computed: false, optional: true, required: false
  private _versions?: string[]; 
  public get versions() {
    return this.getListAttribute('versions');
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}
export interface StorageAccountShareProperties {
  /**
  * cors_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#cors_rule StorageAccount#cors_rule}
  */
  readonly corsRule?: StorageAccountSharePropertiesCorsRule[];
  /**
  * retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#retention_policy StorageAccount#retention_policy}
  */
  readonly retentionPolicy?: StorageAccountSharePropertiesRetentionPolicy;
  /**
  * smb block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#smb StorageAccount#smb}
  */
  readonly smb?: StorageAccountSharePropertiesSmb;
}

export function storageAccountSharePropertiesToTerraform(struct?: StorageAccountSharePropertiesOutputReference | StorageAccountShareProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_rule: cdktf.listMapper(storageAccountSharePropertiesCorsRuleToTerraform)(struct!.corsRule),
    retention_policy: storageAccountSharePropertiesRetentionPolicyToTerraform(struct!.retentionPolicy),
    smb: storageAccountSharePropertiesSmbToTerraform(struct!.smb),
  }
}

export class StorageAccountSharePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountShareProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corsRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsRule = this._corsRule;
    }
    if (this._retentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicy = this._retentionPolicy?.internalValue;
    }
    if (this._smb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smb = this._smb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountShareProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._corsRule = undefined;
      this._retentionPolicy.internalValue = undefined;
      this._smb.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._corsRule = value.corsRule;
      this._retentionPolicy.internalValue = value.retentionPolicy;
      this._smb.internalValue = value.smb;
    }
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule?: StorageAccountSharePropertiesCorsRule[]; 
  public get corsRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cors_rule') as any;
  }
  public set corsRule(value: StorageAccountSharePropertiesCorsRule[]) {
    this._corsRule = value;
  }
  public resetCorsRule() {
    this._corsRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new StorageAccountSharePropertiesRetentionPolicyOutputReference(this as any, "retention_policy", true);
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: StorageAccountSharePropertiesRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // smb - computed: false, optional: true, required: false
  private _smb = new StorageAccountSharePropertiesSmbOutputReference(this as any, "smb", true);
  public get smb() {
    return this._smb;
  }
  public putSmb(value: StorageAccountSharePropertiesSmb) {
    this._smb.internalValue = value;
  }
  public resetSmb() {
    this._smb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbInput() {
    return this._smb.internalValue;
  }
}
export interface StorageAccountStaticWebsite {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#error_404_document StorageAccount#error_404_document}
  */
  readonly error404Document?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#index_document StorageAccount#index_document}
  */
  readonly indexDocument?: string;
}

export function storageAccountStaticWebsiteToTerraform(struct?: StorageAccountStaticWebsiteOutputReference | StorageAccountStaticWebsite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_404_document: cdktf.stringToTerraform(struct!.error404Document),
    index_document: cdktf.stringToTerraform(struct!.indexDocument),
  }
}

export class StorageAccountStaticWebsiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountStaticWebsite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._error404Document !== undefined) {
      hasAnyValues = true;
      internalValueResult.error404Document = this._error404Document;
    }
    if (this._indexDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexDocument = this._indexDocument;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountStaticWebsite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._error404Document = undefined;
      this._indexDocument = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._error404Document = value.error404Document;
      this._indexDocument = value.indexDocument;
    }
  }

  // error_404_document - computed: false, optional: true, required: false
  private _error404Document?: string; 
  public get error404Document() {
    return this.getStringAttribute('error_404_document');
  }
  public set error404Document(value: string) {
    this._error404Document = value;
  }
  public resetError404Document() {
    this._error404Document = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get error404DocumentInput() {
    return this._error404Document;
  }

  // index_document - computed: false, optional: true, required: false
  private _indexDocument?: string; 
  public get indexDocument() {
    return this.getStringAttribute('index_document');
  }
  public set indexDocument(value: string) {
    this._indexDocument = value;
  }
  public resetIndexDocument() {
    this._indexDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDocumentInput() {
    return this._indexDocument;
  }
}
export interface StorageAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#create StorageAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#delete StorageAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#read StorageAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#update StorageAccount#update}
  */
  readonly update?: string;
}

export function storageAccountTimeoutsToTerraform(struct?: StorageAccountTimeoutsOutputReference | StorageAccountTimeouts): any {
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

export class StorageAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageAccountTimeouts | undefined {
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

  public set internalValue(value: StorageAccountTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html azurerm_storage_account}
*/
export class StorageAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html azurerm_storage_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageAccountConfig
  */
  public constructor(scope: Construct, id: string, config: StorageAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessTier = config.accessTier;
    this._accountKind = config.accountKind;
    this._accountReplicationType = config.accountReplicationType;
    this._accountTier = config.accountTier;
    this._allowBlobPublicAccess = config.allowBlobPublicAccess;
    this._enableHttpsTrafficOnly = config.enableHttpsTrafficOnly;
    this._infrastructureEncryptionEnabled = config.infrastructureEncryptionEnabled;
    this._isHnsEnabled = config.isHnsEnabled;
    this._largeFileShareEnabled = config.largeFileShareEnabled;
    this._location = config.location;
    this._minTlsVersion = config.minTlsVersion;
    this._name = config.name;
    this._nfsv3Enabled = config.nfsv3Enabled;
    this._queueEncryptionKeyType = config.queueEncryptionKeyType;
    this._resourceGroupName = config.resourceGroupName;
    this._sharedAccessKeyEnabled = config.sharedAccessKeyEnabled;
    this._tableEncryptionKeyType = config.tableEncryptionKeyType;
    this._tags = config.tags;
    this._azureFilesAuthentication.internalValue = config.azureFilesAuthentication;
    this._blobProperties.internalValue = config.blobProperties;
    this._customDomain.internalValue = config.customDomain;
    this._identity.internalValue = config.identity;
    this._networkRules.internalValue = config.networkRules;
    this._queueProperties.internalValue = config.queueProperties;
    this._routing.internalValue = config.routing;
    this._shareProperties.internalValue = config.shareProperties;
    this._staticWebsite.internalValue = config.staticWebsite;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_tier - computed: true, optional: true, required: false
  private _accessTier?: string; 
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }
  public set accessTier(value: string) {
    this._accessTier = value;
  }
  public resetAccessTier() {
    this._accessTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTierInput() {
    return this._accessTier;
  }

  // account_kind - computed: false, optional: true, required: false
  private _accountKind?: string; 
  public get accountKind() {
    return this.getStringAttribute('account_kind');
  }
  public set accountKind(value: string) {
    this._accountKind = value;
  }
  public resetAccountKind() {
    this._accountKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKindInput() {
    return this._accountKind;
  }

  // account_replication_type - computed: false, optional: false, required: true
  private _accountReplicationType?: string; 
  public get accountReplicationType() {
    return this.getStringAttribute('account_replication_type');
  }
  public set accountReplicationType(value: string) {
    this._accountReplicationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountReplicationTypeInput() {
    return this._accountReplicationType;
  }

  // account_tier - computed: false, optional: false, required: true
  private _accountTier?: string; 
  public get accountTier() {
    return this.getStringAttribute('account_tier');
  }
  public set accountTier(value: string) {
    this._accountTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTierInput() {
    return this._accountTier;
  }

  // allow_blob_public_access - computed: false, optional: true, required: false
  private _allowBlobPublicAccess?: boolean | cdktf.IResolvable; 
  public get allowBlobPublicAccess() {
    return this.getBooleanAttribute('allow_blob_public_access') as any;
  }
  public set allowBlobPublicAccess(value: boolean | cdktf.IResolvable) {
    this._allowBlobPublicAccess = value;
  }
  public resetAllowBlobPublicAccess() {
    this._allowBlobPublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBlobPublicAccessInput() {
    return this._allowBlobPublicAccess;
  }

  // enable_https_traffic_only - computed: false, optional: true, required: false
  private _enableHttpsTrafficOnly?: boolean | cdktf.IResolvable; 
  public get enableHttpsTrafficOnly() {
    return this.getBooleanAttribute('enable_https_traffic_only') as any;
  }
  public set enableHttpsTrafficOnly(value: boolean | cdktf.IResolvable) {
    this._enableHttpsTrafficOnly = value;
  }
  public resetEnableHttpsTrafficOnly() {
    this._enableHttpsTrafficOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpsTrafficOnlyInput() {
    return this._enableHttpsTrafficOnly;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure_encryption_enabled - computed: false, optional: true, required: false
  private _infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get infrastructureEncryptionEnabled() {
    return this.getBooleanAttribute('infrastructure_encryption_enabled') as any;
  }
  public set infrastructureEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._infrastructureEncryptionEnabled = value;
  }
  public resetInfrastructureEncryptionEnabled() {
    this._infrastructureEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureEncryptionEnabledInput() {
    return this._infrastructureEncryptionEnabled;
  }

  // is_hns_enabled - computed: false, optional: true, required: false
  private _isHnsEnabled?: boolean | cdktf.IResolvable; 
  public get isHnsEnabled() {
    return this.getBooleanAttribute('is_hns_enabled') as any;
  }
  public set isHnsEnabled(value: boolean | cdktf.IResolvable) {
    this._isHnsEnabled = value;
  }
  public resetIsHnsEnabled() {
    this._isHnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHnsEnabledInput() {
    return this._isHnsEnabled;
  }

  // large_file_share_enabled - computed: true, optional: true, required: false
  private _largeFileShareEnabled?: boolean | cdktf.IResolvable; 
  public get largeFileShareEnabled() {
    return this.getBooleanAttribute('large_file_share_enabled') as any;
  }
  public set largeFileShareEnabled(value: boolean | cdktf.IResolvable) {
    this._largeFileShareEnabled = value;
  }
  public resetLargeFileShareEnabled() {
    this._largeFileShareEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeFileShareEnabledInput() {
    return this._largeFileShareEnabled;
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

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
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

  // nfsv3_enabled - computed: false, optional: true, required: false
  private _nfsv3Enabled?: boolean | cdktf.IResolvable; 
  public get nfsv3Enabled() {
    return this.getBooleanAttribute('nfsv3_enabled') as any;
  }
  public set nfsv3Enabled(value: boolean | cdktf.IResolvable) {
    this._nfsv3Enabled = value;
  }
  public resetNfsv3Enabled() {
    this._nfsv3Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv3EnabledInput() {
    return this._nfsv3Enabled;
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // primary_blob_connection_string - computed: true, optional: false, required: false
  public get primaryBlobConnectionString() {
    return this.getStringAttribute('primary_blob_connection_string');
  }

  // primary_blob_endpoint - computed: true, optional: false, required: false
  public get primaryBlobEndpoint() {
    return this.getStringAttribute('primary_blob_endpoint');
  }

  // primary_blob_host - computed: true, optional: false, required: false
  public get primaryBlobHost() {
    return this.getStringAttribute('primary_blob_host');
  }

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_dfs_endpoint - computed: true, optional: false, required: false
  public get primaryDfsEndpoint() {
    return this.getStringAttribute('primary_dfs_endpoint');
  }

  // primary_dfs_host - computed: true, optional: false, required: false
  public get primaryDfsHost() {
    return this.getStringAttribute('primary_dfs_host');
  }

  // primary_file_endpoint - computed: true, optional: false, required: false
  public get primaryFileEndpoint() {
    return this.getStringAttribute('primary_file_endpoint');
  }

  // primary_file_host - computed: true, optional: false, required: false
  public get primaryFileHost() {
    return this.getStringAttribute('primary_file_host');
  }

  // primary_location - computed: true, optional: false, required: false
  public get primaryLocation() {
    return this.getStringAttribute('primary_location');
  }

  // primary_queue_endpoint - computed: true, optional: false, required: false
  public get primaryQueueEndpoint() {
    return this.getStringAttribute('primary_queue_endpoint');
  }

  // primary_queue_host - computed: true, optional: false, required: false
  public get primaryQueueHost() {
    return this.getStringAttribute('primary_queue_host');
  }

  // primary_table_endpoint - computed: true, optional: false, required: false
  public get primaryTableEndpoint() {
    return this.getStringAttribute('primary_table_endpoint');
  }

  // primary_table_host - computed: true, optional: false, required: false
  public get primaryTableHost() {
    return this.getStringAttribute('primary_table_host');
  }

  // primary_web_endpoint - computed: true, optional: false, required: false
  public get primaryWebEndpoint() {
    return this.getStringAttribute('primary_web_endpoint');
  }

  // primary_web_host - computed: true, optional: false, required: false
  public get primaryWebHost() {
    return this.getStringAttribute('primary_web_host');
  }

  // queue_encryption_key_type - computed: false, optional: true, required: false
  private _queueEncryptionKeyType?: string; 
  public get queueEncryptionKeyType() {
    return this.getStringAttribute('queue_encryption_key_type');
  }
  public set queueEncryptionKeyType(value: string) {
    this._queueEncryptionKeyType = value;
  }
  public resetQueueEncryptionKeyType() {
    this._queueEncryptionKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueEncryptionKeyTypeInput() {
    return this._queueEncryptionKeyType;
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // secondary_blob_connection_string - computed: true, optional: false, required: false
  public get secondaryBlobConnectionString() {
    return this.getStringAttribute('secondary_blob_connection_string');
  }

  // secondary_blob_endpoint - computed: true, optional: false, required: false
  public get secondaryBlobEndpoint() {
    return this.getStringAttribute('secondary_blob_endpoint');
  }

  // secondary_blob_host - computed: true, optional: false, required: false
  public get secondaryBlobHost() {
    return this.getStringAttribute('secondary_blob_host');
  }

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_dfs_endpoint - computed: true, optional: false, required: false
  public get secondaryDfsEndpoint() {
    return this.getStringAttribute('secondary_dfs_endpoint');
  }

  // secondary_dfs_host - computed: true, optional: false, required: false
  public get secondaryDfsHost() {
    return this.getStringAttribute('secondary_dfs_host');
  }

  // secondary_file_endpoint - computed: true, optional: false, required: false
  public get secondaryFileEndpoint() {
    return this.getStringAttribute('secondary_file_endpoint');
  }

  // secondary_file_host - computed: true, optional: false, required: false
  public get secondaryFileHost() {
    return this.getStringAttribute('secondary_file_host');
  }

  // secondary_location - computed: true, optional: false, required: false
  public get secondaryLocation() {
    return this.getStringAttribute('secondary_location');
  }

  // secondary_queue_endpoint - computed: true, optional: false, required: false
  public get secondaryQueueEndpoint() {
    return this.getStringAttribute('secondary_queue_endpoint');
  }

  // secondary_queue_host - computed: true, optional: false, required: false
  public get secondaryQueueHost() {
    return this.getStringAttribute('secondary_queue_host');
  }

  // secondary_table_endpoint - computed: true, optional: false, required: false
  public get secondaryTableEndpoint() {
    return this.getStringAttribute('secondary_table_endpoint');
  }

  // secondary_table_host - computed: true, optional: false, required: false
  public get secondaryTableHost() {
    return this.getStringAttribute('secondary_table_host');
  }

  // secondary_web_endpoint - computed: true, optional: false, required: false
  public get secondaryWebEndpoint() {
    return this.getStringAttribute('secondary_web_endpoint');
  }

  // secondary_web_host - computed: true, optional: false, required: false
  public get secondaryWebHost() {
    return this.getStringAttribute('secondary_web_host');
  }

  // shared_access_key_enabled - computed: false, optional: true, required: false
  private _sharedAccessKeyEnabled?: boolean | cdktf.IResolvable; 
  public get sharedAccessKeyEnabled() {
    return this.getBooleanAttribute('shared_access_key_enabled') as any;
  }
  public set sharedAccessKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._sharedAccessKeyEnabled = value;
  }
  public resetSharedAccessKeyEnabled() {
    this._sharedAccessKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessKeyEnabledInput() {
    return this._sharedAccessKeyEnabled;
  }

  // table_encryption_key_type - computed: false, optional: true, required: false
  private _tableEncryptionKeyType?: string; 
  public get tableEncryptionKeyType() {
    return this.getStringAttribute('table_encryption_key_type');
  }
  public set tableEncryptionKeyType(value: string) {
    this._tableEncryptionKeyType = value;
  }
  public resetTableEncryptionKeyType() {
    this._tableEncryptionKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableEncryptionKeyTypeInput() {
    return this._tableEncryptionKeyType;
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

  // azure_files_authentication - computed: false, optional: true, required: false
  private _azureFilesAuthentication = new StorageAccountAzureFilesAuthenticationOutputReference(this as any, "azure_files_authentication", true);
  public get azureFilesAuthentication() {
    return this._azureFilesAuthentication;
  }
  public putAzureFilesAuthentication(value: StorageAccountAzureFilesAuthentication) {
    this._azureFilesAuthentication.internalValue = value;
  }
  public resetAzureFilesAuthentication() {
    this._azureFilesAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFilesAuthenticationInput() {
    return this._azureFilesAuthentication.internalValue;
  }

  // blob_properties - computed: false, optional: true, required: false
  private _blobProperties = new StorageAccountBlobPropertiesOutputReference(this as any, "blob_properties", true);
  public get blobProperties() {
    return this._blobProperties;
  }
  public putBlobProperties(value: StorageAccountBlobProperties) {
    this._blobProperties.internalValue = value;
  }
  public resetBlobProperties() {
    this._blobProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobPropertiesInput() {
    return this._blobProperties.internalValue;
  }

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain = new StorageAccountCustomDomainOutputReference(this as any, "custom_domain", true);
  public get customDomain() {
    return this._customDomain;
  }
  public putCustomDomain(value: StorageAccountCustomDomain) {
    this._customDomain.internalValue = value;
  }
  public resetCustomDomain() {
    this._customDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new StorageAccountIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: StorageAccountIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // network_rules - computed: false, optional: true, required: false
  private _networkRules = new StorageAccountNetworkRulesOutputReference(this as any, "network_rules", true);
  public get networkRules() {
    return this._networkRules;
  }
  public putNetworkRules(value: StorageAccountNetworkRules) {
    this._networkRules.internalValue = value;
  }
  public resetNetworkRules() {
    this._networkRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRulesInput() {
    return this._networkRules.internalValue;
  }

  // queue_properties - computed: false, optional: true, required: false
  private _queueProperties = new StorageAccountQueuePropertiesOutputReference(this as any, "queue_properties", true);
  public get queueProperties() {
    return this._queueProperties;
  }
  public putQueueProperties(value: StorageAccountQueueProperties) {
    this._queueProperties.internalValue = value;
  }
  public resetQueueProperties() {
    this._queueProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuePropertiesInput() {
    return this._queueProperties.internalValue;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new StorageAccountRoutingOutputReference(this as any, "routing", true);
  public get routing() {
    return this._routing;
  }
  public putRouting(value: StorageAccountRouting) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }

  // share_properties - computed: false, optional: true, required: false
  private _shareProperties = new StorageAccountSharePropertiesOutputReference(this as any, "share_properties", true);
  public get shareProperties() {
    return this._shareProperties;
  }
  public putShareProperties(value: StorageAccountShareProperties) {
    this._shareProperties.internalValue = value;
  }
  public resetShareProperties() {
    this._shareProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharePropertiesInput() {
    return this._shareProperties.internalValue;
  }

  // static_website - computed: false, optional: true, required: false
  private _staticWebsite = new StorageAccountStaticWebsiteOutputReference(this as any, "static_website", true);
  public get staticWebsite() {
    return this._staticWebsite;
  }
  public putStaticWebsite(value: StorageAccountStaticWebsite) {
    this._staticWebsite.internalValue = value;
  }
  public resetStaticWebsite() {
    this._staticWebsite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticWebsiteInput() {
    return this._staticWebsite.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageAccountTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageAccountTimeouts) {
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
      access_tier: cdktf.stringToTerraform(this._accessTier),
      account_kind: cdktf.stringToTerraform(this._accountKind),
      account_replication_type: cdktf.stringToTerraform(this._accountReplicationType),
      account_tier: cdktf.stringToTerraform(this._accountTier),
      allow_blob_public_access: cdktf.booleanToTerraform(this._allowBlobPublicAccess),
      enable_https_traffic_only: cdktf.booleanToTerraform(this._enableHttpsTrafficOnly),
      infrastructure_encryption_enabled: cdktf.booleanToTerraform(this._infrastructureEncryptionEnabled),
      is_hns_enabled: cdktf.booleanToTerraform(this._isHnsEnabled),
      large_file_share_enabled: cdktf.booleanToTerraform(this._largeFileShareEnabled),
      location: cdktf.stringToTerraform(this._location),
      min_tls_version: cdktf.stringToTerraform(this._minTlsVersion),
      name: cdktf.stringToTerraform(this._name),
      nfsv3_enabled: cdktf.booleanToTerraform(this._nfsv3Enabled),
      queue_encryption_key_type: cdktf.stringToTerraform(this._queueEncryptionKeyType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      shared_access_key_enabled: cdktf.booleanToTerraform(this._sharedAccessKeyEnabled),
      table_encryption_key_type: cdktf.stringToTerraform(this._tableEncryptionKeyType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      azure_files_authentication: storageAccountAzureFilesAuthenticationToTerraform(this._azureFilesAuthentication.internalValue),
      blob_properties: storageAccountBlobPropertiesToTerraform(this._blobProperties.internalValue),
      custom_domain: storageAccountCustomDomainToTerraform(this._customDomain.internalValue),
      identity: storageAccountIdentityToTerraform(this._identity.internalValue),
      network_rules: storageAccountNetworkRulesToTerraform(this._networkRules.internalValue),
      queue_properties: storageAccountQueuePropertiesToTerraform(this._queueProperties.internalValue),
      routing: storageAccountRoutingToTerraform(this._routing.internalValue),
      share_properties: storageAccountSharePropertiesToTerraform(this._shareProperties.internalValue),
      static_website: storageAccountStaticWebsiteToTerraform(this._staticWebsite.internalValue),
      timeouts: storageAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
