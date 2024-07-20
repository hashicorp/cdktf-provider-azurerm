// https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningDatastoreBlobstorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#account_key MachineLearningDatastoreBlobstorage#account_key}
  */
  readonly accountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#description MachineLearningDatastoreBlobstorage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#id MachineLearningDatastoreBlobstorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#is_default MachineLearningDatastoreBlobstorage#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#name MachineLearningDatastoreBlobstorage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#service_data_auth_identity MachineLearningDatastoreBlobstorage#service_data_auth_identity}
  */
  readonly serviceDataAuthIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#shared_access_signature MachineLearningDatastoreBlobstorage#shared_access_signature}
  */
  readonly sharedAccessSignature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#storage_container_id MachineLearningDatastoreBlobstorage#storage_container_id}
  */
  readonly storageContainerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#tags MachineLearningDatastoreBlobstorage#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#workspace_id MachineLearningDatastoreBlobstorage#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#timeouts MachineLearningDatastoreBlobstorage#timeouts}
  */
  readonly timeouts?: MachineLearningDatastoreBlobstorageTimeouts;
}
export interface MachineLearningDatastoreBlobstorageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#create MachineLearningDatastoreBlobstorage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#delete MachineLearningDatastoreBlobstorage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#read MachineLearningDatastoreBlobstorage#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#update MachineLearningDatastoreBlobstorage#update}
  */
  readonly update?: string;
}

export function machineLearningDatastoreBlobstorageTimeoutsToTerraform(struct?: MachineLearningDatastoreBlobstorageTimeouts | cdktf.IResolvable): any {
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


export function machineLearningDatastoreBlobstorageTimeoutsToHclTerraform(struct?: MachineLearningDatastoreBlobstorageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineLearningDatastoreBlobstorageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineLearningDatastoreBlobstorageTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MachineLearningDatastoreBlobstorageTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage azurerm_machine_learning_datastore_blobstorage}
*/
export class MachineLearningDatastoreBlobstorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_machine_learning_datastore_blobstorage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachineLearningDatastoreBlobstorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachineLearningDatastoreBlobstorage to import
  * @param importFromId The id of the existing MachineLearningDatastoreBlobstorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachineLearningDatastoreBlobstorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_machine_learning_datastore_blobstorage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/machine_learning_datastore_blobstorage azurerm_machine_learning_datastore_blobstorage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningDatastoreBlobstorageConfig
  */
  public constructor(scope: Construct, id: string, config: MachineLearningDatastoreBlobstorageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_machine_learning_datastore_blobstorage',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.113.0',
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
    this._accountKey = config.accountKey;
    this._description = config.description;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._name = config.name;
    this._serviceDataAuthIdentity = config.serviceDataAuthIdentity;
    this._sharedAccessSignature = config.sharedAccessSignature;
    this._storageContainerId = config.storageContainerId;
    this._tags = config.tags;
    this._workspaceId = config.workspaceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_key - computed: false, optional: true, required: false
  private _accountKey?: string; 
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }
  public set accountKey(value: string) {
    this._accountKey = value;
  }
  public resetAccountKey() {
    this._accountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyInput() {
    return this._accountKey;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

  // service_data_auth_identity - computed: false, optional: true, required: false
  private _serviceDataAuthIdentity?: string; 
  public get serviceDataAuthIdentity() {
    return this.getStringAttribute('service_data_auth_identity');
  }
  public set serviceDataAuthIdentity(value: string) {
    this._serviceDataAuthIdentity = value;
  }
  public resetServiceDataAuthIdentity() {
    this._serviceDataAuthIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDataAuthIdentityInput() {
    return this._serviceDataAuthIdentity;
  }

  // shared_access_signature - computed: false, optional: true, required: false
  private _sharedAccessSignature?: string; 
  public get sharedAccessSignature() {
    return this.getStringAttribute('shared_access_signature');
  }
  public set sharedAccessSignature(value: string) {
    this._sharedAccessSignature = value;
  }
  public resetSharedAccessSignature() {
    this._sharedAccessSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessSignatureInput() {
    return this._sharedAccessSignature;
  }

  // storage_container_id - computed: false, optional: false, required: true
  private _storageContainerId?: string; 
  public get storageContainerId() {
    return this.getStringAttribute('storage_container_id');
  }
  public set storageContainerId(value: string) {
    this._storageContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerIdInput() {
    return this._storageContainerId;
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

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MachineLearningDatastoreBlobstorageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MachineLearningDatastoreBlobstorageTimeouts) {
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
      account_key: cdktf.stringToTerraform(this._accountKey),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      name: cdktf.stringToTerraform(this._name),
      service_data_auth_identity: cdktf.stringToTerraform(this._serviceDataAuthIdentity),
      shared_access_signature: cdktf.stringToTerraform(this._sharedAccessSignature),
      storage_container_id: cdktf.stringToTerraform(this._storageContainerId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      timeouts: machineLearningDatastoreBlobstorageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_key: {
        value: cdktf.stringToHclTerraform(this._accountKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_data_auth_identity: {
        value: cdktf.stringToHclTerraform(this._serviceDataAuthIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_access_signature: {
        value: cdktf.stringToHclTerraform(this._sharedAccessSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_container_id: {
        value: cdktf.stringToHclTerraform(this._storageContainerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: machineLearningDatastoreBlobstorageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineLearningDatastoreBlobstorageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
