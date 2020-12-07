// https://www.terraform.io/docs/providers/azurerm/r/management_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementGroupConfig extends cdktf.TerraformMetaArguments {
  readonly displayName?: string;
  readonly groupId?: string;
  readonly name?: string;
  readonly parentManagementGroupId?: string;
  readonly subscriptionIds?: string[];
  /** timeouts block */
  readonly timeouts?: ManagementGroupTimeouts;
}
export interface ManagementGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function managementGroupTimeoutsToTerraform(struct?: ManagementGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ManagementGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ManagementGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurerm_management_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._groupId = config.groupId;
    this._name = config.name;
    this._parentManagementGroupId = config.parentManagementGroupId;
    this._subscriptionIds = config.subscriptionIds;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string;
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
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
    return this._name
  }

  // parent_management_group_id - computed: true, optional: true, required: false
  private _parentManagementGroupId?: string;
  public get parentManagementGroupId() {
    return this.getStringAttribute('parent_management_group_id');
  }
  public set parentManagementGroupId(value: string) {
    this._parentManagementGroupId = value;
  }
  public resetParentManagementGroupId() {
    this._parentManagementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentManagementGroupIdInput() {
    return this._parentManagementGroupId
  }

  // subscription_ids - computed: false, optional: true, required: false
  private _subscriptionIds?: string[];
  public get subscriptionIds() {
    return this.getListAttribute('subscription_ids');
  }
  public set subscriptionIds(value: string[] ) {
    this._subscriptionIds = value;
  }
  public resetSubscriptionIds() {
    this._subscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdsInput() {
    return this._subscriptionIds
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ManagementGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ManagementGroupTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      group_id: cdktf.stringToTerraform(this._groupId),
      name: cdktf.stringToTerraform(this._name),
      parent_management_group_id: cdktf.stringToTerraform(this._parentManagementGroupId),
      subscription_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subscriptionIds),
      timeouts: managementGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
