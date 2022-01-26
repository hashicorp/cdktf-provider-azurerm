// https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageEncryptionScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope#infrastructure_encryption_required StorageEncryptionScope#infrastructure_encryption_required}
  */
  readonly infrastructureEncryptionRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope#key_vault_key_id StorageEncryptionScope#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope#name StorageEncryptionScope#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope#source StorageEncryptionScope#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope#storage_account_id StorageEncryptionScope#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope#timeouts StorageEncryptionScope#timeouts}
  */
  readonly timeouts?: StorageEncryptionScopeTimeouts;
}
export interface StorageEncryptionScopeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope#create StorageEncryptionScope#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope#delete StorageEncryptionScope#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope#read StorageEncryptionScope#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope#update StorageEncryptionScope#update}
  */
  readonly update?: string;
}

export function storageEncryptionScopeTimeoutsToTerraform(struct?: StorageEncryptionScopeTimeoutsOutputReference | StorageEncryptionScopeTimeouts | cdktf.IResolvable): any {
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

export class StorageEncryptionScopeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageEncryptionScopeTimeouts | undefined {
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

  public set internalValue(value: StorageEncryptionScopeTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope azurerm_storage_encryption_scope}
*/
export class StorageEncryptionScope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_encryption_scope";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope azurerm_storage_encryption_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageEncryptionScopeConfig
  */
  public constructor(scope: Construct, id: string, config: StorageEncryptionScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_encryption_scope',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._infrastructureEncryptionRequired = config.infrastructureEncryptionRequired;
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._name = config.name;
    this._source = config.source;
    this._storageAccountId = config.storageAccountId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure_encryption_required - computed: false, optional: true, required: false
  private _infrastructureEncryptionRequired?: boolean | cdktf.IResolvable; 
  public get infrastructureEncryptionRequired() {
    return this.getBooleanAttribute('infrastructure_encryption_required');
  }
  public set infrastructureEncryptionRequired(value: boolean | cdktf.IResolvable) {
    this._infrastructureEncryptionRequired = value;
  }
  public resetInfrastructureEncryptionRequired() {
    this._infrastructureEncryptionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureEncryptionRequiredInput() {
    return this._infrastructureEncryptionRequired;
  }

  // key_vault_key_id - computed: false, optional: true, required: false
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  public resetKeyVaultKeyId() {
    this._keyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageEncryptionScopeTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageEncryptionScopeTimeouts) {
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
      infrastructure_encryption_required: cdktf.booleanToTerraform(this._infrastructureEncryptionRequired),
      key_vault_key_id: cdktf.stringToTerraform(this._keyVaultKeyId),
      name: cdktf.stringToTerraform(this._name),
      source: cdktf.stringToTerraform(this._source),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      timeouts: storageEncryptionScopeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
