// https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermStorageAccountBlobContainerSasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#cache_control DataAzurermStorageAccountBlobContainerSas#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#connection_string DataAzurermStorageAccountBlobContainerSas#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#container_name DataAzurermStorageAccountBlobContainerSas#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#content_disposition DataAzurermStorageAccountBlobContainerSas#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#content_encoding DataAzurermStorageAccountBlobContainerSas#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#content_language DataAzurermStorageAccountBlobContainerSas#content_language}
  */
  readonly contentLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#content_type DataAzurermStorageAccountBlobContainerSas#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#expiry DataAzurermStorageAccountBlobContainerSas#expiry}
  */
  readonly expiry: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#https_only DataAzurermStorageAccountBlobContainerSas#https_only}
  */
  readonly httpsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#ip_address DataAzurermStorageAccountBlobContainerSas#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#start DataAzurermStorageAccountBlobContainerSas#start}
  */
  readonly start: string;
  /**
  * permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#permissions DataAzurermStorageAccountBlobContainerSas#permissions}
  */
  readonly permissions: DataAzurermStorageAccountBlobContainerSasPermissions;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#timeouts DataAzurermStorageAccountBlobContainerSas#timeouts}
  */
  readonly timeouts?: DataAzurermStorageAccountBlobContainerSasTimeouts;
}
export interface DataAzurermStorageAccountBlobContainerSasPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#add DataAzurermStorageAccountBlobContainerSas#add}
  */
  readonly add: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#create DataAzurermStorageAccountBlobContainerSas#create}
  */
  readonly create: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#delete DataAzurermStorageAccountBlobContainerSas#delete}
  */
  readonly delete: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#list DataAzurermStorageAccountBlobContainerSas#list}
  */
  readonly list: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#write DataAzurermStorageAccountBlobContainerSas#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function dataAzurermStorageAccountBlobContainerSasPermissionsToTerraform(struct?: DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference | DataAzurermStorageAccountBlobContainerSasPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.booleanToTerraform(struct!.add),
    create: cdktf.booleanToTerraform(struct!.create),
    delete: cdktf.booleanToTerraform(struct!.delete),
    list: cdktf.booleanToTerraform(struct!.list),
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}

export class DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermStorageAccountBlobContainerSasPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageAccountBlobContainerSasPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._add = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._list = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._add = value.add;
      this._create = value.create;
      this._delete = value.delete;
      this._list = value.list;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // add - computed: false, optional: false, required: true
  private _add?: boolean | cdktf.IResolvable; 
  public get add() {
    return this.getBooleanAttribute('add') as any;
  }
  public set add(value: boolean | cdktf.IResolvable) {
    this._add = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // create - computed: false, optional: false, required: true
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create') as any;
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
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

  // list - computed: false, optional: false, required: true
  private _list?: boolean | cdktf.IResolvable; 
  public get list() {
    return this.getBooleanAttribute('list') as any;
  }
  public set list(value: boolean | cdktf.IResolvable) {
    this._list = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
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
export interface DataAzurermStorageAccountBlobContainerSasTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}
  */
  readonly read?: string;
}

export function dataAzurermStorageAccountBlobContainerSasTimeoutsToTerraform(struct?: DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference | DataAzurermStorageAccountBlobContainerSasTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermStorageAccountBlobContainerSasTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageAccountBlobContainerSasTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas azurerm_storage_account_blob_container_sas}
*/
export class DataAzurermStorageAccountBlobContainerSas extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_account_blob_container_sas";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_blob_container_sas azurerm_storage_account_blob_container_sas} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermStorageAccountBlobContainerSasConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermStorageAccountBlobContainerSasConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account_blob_container_sas',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cacheControl = config.cacheControl;
    this._connectionString = config.connectionString;
    this._containerName = config.containerName;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._expiry = config.expiry;
    this._httpsOnly = config.httpsOnly;
    this._ipAddress = config.ipAddress;
    this._start = config.start;
    this._permissions.internalValue = config.permissions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl;
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string; 
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // expiry - computed: false, optional: false, required: true
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // https_only - computed: false, optional: true, required: false
  private _httpsOnly?: boolean | cdktf.IResolvable; 
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only') as any;
  }
  public set httpsOnly(value: boolean | cdktf.IResolvable) {
    this._httpsOnly = value;
  }
  public resetHttpsOnly() {
    this._httpsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsOnlyInput() {
    return this._httpsOnly;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // sas - computed: true, optional: false, required: false
  public get sas() {
    return this.getStringAttribute('sas');
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions = new DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference(this as any, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DataAzurermStorageAccountBlobContainerSasPermissions) {
    this._permissions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermStorageAccountBlobContainerSasTimeouts) {
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
      cache_control: cdktf.stringToTerraform(this._cacheControl),
      connection_string: cdktf.stringToTerraform(this._connectionString),
      container_name: cdktf.stringToTerraform(this._containerName),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_language: cdktf.stringToTerraform(this._contentLanguage),
      content_type: cdktf.stringToTerraform(this._contentType),
      expiry: cdktf.stringToTerraform(this._expiry),
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      start: cdktf.stringToTerraform(this._start),
      permissions: dataAzurermStorageAccountBlobContainerSasPermissionsToTerraform(this._permissions.internalValue),
      timeouts: dataAzurermStorageAccountBlobContainerSasTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
