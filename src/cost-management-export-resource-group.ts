// https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CostManagementExportResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#active CostManagementExportResourceGroup#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#name CostManagementExportResourceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#recurrence_period_end CostManagementExportResourceGroup#recurrence_period_end}
  */
  readonly recurrencePeriodEnd: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#recurrence_period_start CostManagementExportResourceGroup#recurrence_period_start}
  */
  readonly recurrencePeriodStart: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#recurrence_type CostManagementExportResourceGroup#recurrence_type}
  */
  readonly recurrenceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#resource_group_id CostManagementExportResourceGroup#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * delivery_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#delivery_info CostManagementExportResourceGroup#delivery_info}
  */
  readonly deliveryInfo: CostManagementExportResourceGroupDeliveryInfo;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#query CostManagementExportResourceGroup#query}
  */
  readonly query: CostManagementExportResourceGroupQuery;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#timeouts CostManagementExportResourceGroup#timeouts}
  */
  readonly timeouts?: CostManagementExportResourceGroupTimeouts;
}
export interface CostManagementExportResourceGroupDeliveryInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#container_name CostManagementExportResourceGroup#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#root_folder_path CostManagementExportResourceGroup#root_folder_path}
  */
  readonly rootFolderPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#storage_account_id CostManagementExportResourceGroup#storage_account_id}
  */
  readonly storageAccountId: string;
}

export function costManagementExportResourceGroupDeliveryInfoToTerraform(struct?: CostManagementExportResourceGroupDeliveryInfoOutputReference | CostManagementExportResourceGroupDeliveryInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    root_folder_path: cdktf.stringToTerraform(struct!.rootFolderPath),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}

export class CostManagementExportResourceGroupDeliveryInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CostManagementExportResourceGroupDeliveryInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._rootFolderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootFolderPath = this._rootFolderPath;
    }
    if (this._storageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostManagementExportResourceGroupDeliveryInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerName = undefined;
      this._rootFolderPath = undefined;
      this._storageAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerName = value.containerName;
      this._rootFolderPath = value.rootFolderPath;
      this._storageAccountId = value.storageAccountId;
    }
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

  // root_folder_path - computed: false, optional: false, required: true
  private _rootFolderPath?: string; 
  public get rootFolderPath() {
    return this.getStringAttribute('root_folder_path');
  }
  public set rootFolderPath(value: string) {
    this._rootFolderPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootFolderPathInput() {
    return this._rootFolderPath;
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
}
export interface CostManagementExportResourceGroupQuery {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#time_frame CostManagementExportResourceGroup#time_frame}
  */
  readonly timeFrame: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#type CostManagementExportResourceGroup#type}
  */
  readonly type: string;
}

export function costManagementExportResourceGroupQueryToTerraform(struct?: CostManagementExportResourceGroupQueryOutputReference | CostManagementExportResourceGroupQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_frame: cdktf.stringToTerraform(struct!.timeFrame),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class CostManagementExportResourceGroupQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CostManagementExportResourceGroupQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFrame = this._timeFrame;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostManagementExportResourceGroupQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeFrame = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeFrame = value.timeFrame;
      this._type = value.type;
    }
  }

  // time_frame - computed: false, optional: false, required: true
  private _timeFrame?: string; 
  public get timeFrame() {
    return this.getStringAttribute('time_frame');
  }
  public set timeFrame(value: string) {
    this._timeFrame = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFrameInput() {
    return this._timeFrame;
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
export interface CostManagementExportResourceGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#create CostManagementExportResourceGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#delete CostManagementExportResourceGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#read CostManagementExportResourceGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group#update CostManagementExportResourceGroup#update}
  */
  readonly update?: string;
}

export function costManagementExportResourceGroupTimeoutsToTerraform(struct?: CostManagementExportResourceGroupTimeoutsOutputReference | CostManagementExportResourceGroupTimeouts | cdktf.IResolvable): any {
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

export class CostManagementExportResourceGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CostManagementExportResourceGroupTimeouts | undefined {
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

  public set internalValue(value: CostManagementExportResourceGroupTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group azurerm_cost_management_export_resource_group}
*/
export class CostManagementExportResourceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_cost_management_export_resource_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group azurerm_cost_management_export_resource_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CostManagementExportResourceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CostManagementExportResourceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cost_management_export_resource_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._active = config.active;
    this._name = config.name;
    this._recurrencePeriodEnd = config.recurrencePeriodEnd;
    this._recurrencePeriodStart = config.recurrencePeriodStart;
    this._recurrenceType = config.recurrenceType;
    this._resourceGroupId = config.resourceGroupId;
    this._deliveryInfo.internalValue = config.deliveryInfo;
    this._query.internalValue = config.query;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // recurrence_period_end - computed: false, optional: false, required: true
  private _recurrencePeriodEnd?: string; 
  public get recurrencePeriodEnd() {
    return this.getStringAttribute('recurrence_period_end');
  }
  public set recurrencePeriodEnd(value: string) {
    this._recurrencePeriodEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrencePeriodEndInput() {
    return this._recurrencePeriodEnd;
  }

  // recurrence_period_start - computed: false, optional: false, required: true
  private _recurrencePeriodStart?: string; 
  public get recurrencePeriodStart() {
    return this.getStringAttribute('recurrence_period_start');
  }
  public set recurrencePeriodStart(value: string) {
    this._recurrencePeriodStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrencePeriodStartInput() {
    return this._recurrencePeriodStart;
  }

  // recurrence_type - computed: false, optional: false, required: true
  private _recurrenceType?: string; 
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }
  public set recurrenceType(value: string) {
    this._recurrenceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceTypeInput() {
    return this._recurrenceType;
  }

  // resource_group_id - computed: false, optional: false, required: true
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // delivery_info - computed: false, optional: false, required: true
  private _deliveryInfo = new CostManagementExportResourceGroupDeliveryInfoOutputReference(this, "delivery_info", true);
  public get deliveryInfo() {
    return this._deliveryInfo;
  }
  public putDeliveryInfo(value: CostManagementExportResourceGroupDeliveryInfo) {
    this._deliveryInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryInfoInput() {
    return this._deliveryInfo.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new CostManagementExportResourceGroupQueryOutputReference(this, "query", true);
  public get query() {
    return this._query;
  }
  public putQuery(value: CostManagementExportResourceGroupQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CostManagementExportResourceGroupTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CostManagementExportResourceGroupTimeouts) {
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
      active: cdktf.booleanToTerraform(this._active),
      name: cdktf.stringToTerraform(this._name),
      recurrence_period_end: cdktf.stringToTerraform(this._recurrencePeriodEnd),
      recurrence_period_start: cdktf.stringToTerraform(this._recurrencePeriodStart),
      recurrence_type: cdktf.stringToTerraform(this._recurrenceType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      delivery_info: costManagementExportResourceGroupDeliveryInfoToTerraform(this._deliveryInfo.internalValue),
      query: costManagementExportResourceGroupQueryToTerraform(this._query.internalValue),
      timeouts: costManagementExportResourceGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
