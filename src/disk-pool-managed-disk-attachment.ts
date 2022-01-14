// https://www.terraform.io/docs/providers/azurerm/r/disk_pool_managed_disk_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskPoolManagedDiskAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_managed_disk_attachment.html#disk_pool_id DiskPoolManagedDiskAttachment#disk_pool_id}
  */
  readonly diskPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_managed_disk_attachment.html#managed_disk_id DiskPoolManagedDiskAttachment#managed_disk_id}
  */
  readonly managedDiskId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_managed_disk_attachment.html#timeouts DiskPoolManagedDiskAttachment#timeouts}
  */
  readonly timeouts?: DiskPoolManagedDiskAttachmentTimeouts;
}
export interface DiskPoolManagedDiskAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_managed_disk_attachment.html#create DiskPoolManagedDiskAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_managed_disk_attachment.html#delete DiskPoolManagedDiskAttachment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_managed_disk_attachment.html#read DiskPoolManagedDiskAttachment#read}
  */
  readonly read?: string;
}

export function diskPoolManagedDiskAttachmentTimeoutsToTerraform(struct?: DiskPoolManagedDiskAttachmentTimeoutsOutputReference | DiskPoolManagedDiskAttachmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DiskPoolManagedDiskAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DiskPoolManagedDiskAttachmentTimeouts | undefined {
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

  public set internalValue(value: DiskPoolManagedDiskAttachmentTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_managed_disk_attachment.html azurerm_disk_pool_managed_disk_attachment}
*/
export class DiskPoolManagedDiskAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_disk_pool_managed_disk_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/disk_pool_managed_disk_attachment.html azurerm_disk_pool_managed_disk_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskPoolManagedDiskAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DiskPoolManagedDiskAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_disk_pool_managed_disk_attachment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._diskPoolId = config.diskPoolId;
    this._managedDiskId = config.managedDiskId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_pool_id - computed: false, optional: false, required: true
  private _diskPoolId?: string; 
  public get diskPoolId() {
    return this.getStringAttribute('disk_pool_id');
  }
  public set diskPoolId(value: string) {
    this._diskPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPoolIdInput() {
    return this._diskPoolId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_disk_id - computed: false, optional: false, required: true
  private _managedDiskId?: string; 
  public get managedDiskId() {
    return this.getStringAttribute('managed_disk_id');
  }
  public set managedDiskId(value: string) {
    this._managedDiskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskIdInput() {
    return this._managedDiskId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiskPoolManagedDiskAttachmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiskPoolManagedDiskAttachmentTimeouts) {
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
      disk_pool_id: cdktf.stringToTerraform(this._diskPoolId),
      managed_disk_id: cdktf.stringToTerraform(this._managedDiskId),
      timeouts: diskPoolManagedDiskAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
