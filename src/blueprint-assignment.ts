// https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlueprintAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#location BlueprintAssignment#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#lock_exclude_principals BlueprintAssignment#lock_exclude_principals}
  */
  readonly lockExcludePrincipals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#lock_mode BlueprintAssignment#lock_mode}
  */
  readonly lockMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#name BlueprintAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#parameter_values BlueprintAssignment#parameter_values}
  */
  readonly parameterValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#resource_groups BlueprintAssignment#resource_groups}
  */
  readonly resourceGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#target_subscription_id BlueprintAssignment#target_subscription_id}
  */
  readonly targetSubscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#version_id BlueprintAssignment#version_id}
  */
  readonly versionId: string;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#identity BlueprintAssignment#identity}
  */
  readonly identity?: BlueprintAssignmentIdentity[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#timeouts BlueprintAssignment#timeouts}
  */
  readonly timeouts?: BlueprintAssignmentTimeouts;
}
export interface BlueprintAssignmentIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#identity_ids BlueprintAssignment#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#type BlueprintAssignment#type}
  */
  readonly type: string;
}

function blueprintAssignmentIdentityToTerraform(struct?: BlueprintAssignmentIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface BlueprintAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#create BlueprintAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#delete BlueprintAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#read BlueprintAssignment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html#update BlueprintAssignment#update}
  */
  readonly update?: string;
}

function blueprintAssignmentTimeoutsToTerraform(struct?: BlueprintAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html azurerm_blueprint_assignment}
*/
export class BlueprintAssignment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/blueprint_assignment.html azurerm_blueprint_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlueprintAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: BlueprintAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_blueprint_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._lockExcludePrincipals = config.lockExcludePrincipals;
    this._lockMode = config.lockMode;
    this._name = config.name;
    this._parameterValues = config.parameterValues;
    this._resourceGroups = config.resourceGroups;
    this._targetSubscriptionId = config.targetSubscriptionId;
    this._versionId = config.versionId;
    this._identity = config.identity;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_name - computed: true, optional: false, required: false
  public get blueprintName() {
    return this.getStringAttribute('blueprint_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // lock_exclude_principals - computed: false, optional: true, required: false
  private _lockExcludePrincipals?: string[];
  public get lockExcludePrincipals() {
    return this.getListAttribute('lock_exclude_principals');
  }
  public set lockExcludePrincipals(value: string[] ) {
    this._lockExcludePrincipals = value;
  }
  public resetLockExcludePrincipals() {
    this._lockExcludePrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockExcludePrincipalsInput() {
    return this._lockExcludePrincipals
  }

  // lock_mode - computed: false, optional: true, required: false
  private _lockMode?: string;
  public get lockMode() {
    return this.getStringAttribute('lock_mode');
  }
  public set lockMode(value: string ) {
    this._lockMode = value;
  }
  public resetLockMode() {
    this._lockMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockModeInput() {
    return this._lockMode
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parameter_values - computed: false, optional: true, required: false
  private _parameterValues?: string;
  public get parameterValues() {
    return this.getStringAttribute('parameter_values');
  }
  public set parameterValues(value: string ) {
    this._parameterValues = value;
  }
  public resetParameterValues() {
    this._parameterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValuesInput() {
    return this._parameterValues
  }

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string;
  public get resourceGroups() {
    return this.getStringAttribute('resource_groups');
  }
  public set resourceGroups(value: string ) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups
  }

  // target_subscription_id - computed: false, optional: false, required: true
  private _targetSubscriptionId: string;
  public get targetSubscriptionId() {
    return this.getStringAttribute('target_subscription_id');
  }
  public set targetSubscriptionId(value: string) {
    this._targetSubscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSubscriptionIdInput() {
    return this._targetSubscriptionId
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version_id - computed: false, optional: false, required: true
  private _versionId: string;
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: BlueprintAssignmentIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: BlueprintAssignmentIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BlueprintAssignmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BlueprintAssignmentTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      lock_exclude_principals: cdktf.listMapper(cdktf.stringToTerraform)(this._lockExcludePrincipals),
      lock_mode: cdktf.stringToTerraform(this._lockMode),
      name: cdktf.stringToTerraform(this._name),
      parameter_values: cdktf.stringToTerraform(this._parameterValues),
      resource_groups: cdktf.stringToTerraform(this._resourceGroups),
      target_subscription_id: cdktf.stringToTerraform(this._targetSubscriptionId),
      version_id: cdktf.stringToTerraform(this._versionId),
      identity: cdktf.listMapper(blueprintAssignmentIdentityToTerraform)(this._identity),
      timeouts: blueprintAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
