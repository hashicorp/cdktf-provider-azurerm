// https://www.terraform.io/docs/providers/azurerm/r/disk_pool_iscsi_target_lun
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskPoolIscsiTargetLunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_iscsi_target_lun#disk_pool_managed_disk_attachment_id DiskPoolIscsiTargetLun#disk_pool_managed_disk_attachment_id}
  */
  readonly diskPoolManagedDiskAttachmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_iscsi_target_lun#iscsi_target_id DiskPoolIscsiTargetLun#iscsi_target_id}
  */
  readonly iscsiTargetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_iscsi_target_lun#name DiskPoolIscsiTargetLun#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_iscsi_target_lun#timeouts DiskPoolIscsiTargetLun#timeouts}
  */
  readonly timeouts?: DiskPoolIscsiTargetLunTimeouts;
}
export interface DiskPoolIscsiTargetLunTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_iscsi_target_lun#create DiskPoolIscsiTargetLun#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_iscsi_target_lun#delete DiskPoolIscsiTargetLun#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_iscsi_target_lun#read DiskPoolIscsiTargetLun#read}
  */
  readonly read?: string;
}

export function diskPoolIscsiTargetLunTimeoutsToTerraform(struct?: DiskPoolIscsiTargetLunTimeoutsOutputReference | DiskPoolIscsiTargetLunTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DiskPoolIscsiTargetLunTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DiskPoolIscsiTargetLunTimeouts | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskPoolIscsiTargetLunTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_iscsi_target_lun azurerm_disk_pool_iscsi_target_lun}
*/
export class DiskPoolIscsiTargetLun extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_disk_pool_iscsi_target_lun";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_iscsi_target_lun azurerm_disk_pool_iscsi_target_lun} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskPoolIscsiTargetLunConfig
  */
  public constructor(scope: Construct, id: string, config: DiskPoolIscsiTargetLunConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_disk_pool_iscsi_target_lun',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._diskPoolManagedDiskAttachmentId = config.diskPoolManagedDiskAttachmentId;
    this._iscsiTargetId = config.iscsiTargetId;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_pool_managed_disk_attachment_id - computed: false, optional: false, required: true
  private _diskPoolManagedDiskAttachmentId?: string; 
  public get diskPoolManagedDiskAttachmentId() {
    return this.getStringAttribute('disk_pool_managed_disk_attachment_id');
  }
  public set diskPoolManagedDiskAttachmentId(value: string) {
    this._diskPoolManagedDiskAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPoolManagedDiskAttachmentIdInput() {
    return this._diskPoolManagedDiskAttachmentId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iscsi_target_id - computed: false, optional: false, required: true
  private _iscsiTargetId?: string; 
  public get iscsiTargetId() {
    return this.getStringAttribute('iscsi_target_id');
  }
  public set iscsiTargetId(value: string) {
    this._iscsiTargetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiTargetIdInput() {
    return this._iscsiTargetId;
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiskPoolIscsiTargetLunTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiskPoolIscsiTargetLunTimeouts) {
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
      disk_pool_managed_disk_attachment_id: cdktf.stringToTerraform(this._diskPoolManagedDiskAttachmentId),
      iscsi_target_id: cdktf.stringToTerraform(this._iscsiTargetId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: diskPoolIscsiTargetLunTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
