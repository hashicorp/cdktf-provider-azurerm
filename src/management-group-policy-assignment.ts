// https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementGroupPolicyAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#description ManagementGroupPolicyAssignment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#display_name ManagementGroupPolicyAssignment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#enforce ManagementGroupPolicyAssignment#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#location ManagementGroupPolicyAssignment#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#management_group_id ManagementGroupPolicyAssignment#management_group_id}
  */
  readonly managementGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#metadata ManagementGroupPolicyAssignment#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#name ManagementGroupPolicyAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#not_scopes ManagementGroupPolicyAssignment#not_scopes}
  */
  readonly notScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#parameters ManagementGroupPolicyAssignment#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#policy_definition_id ManagementGroupPolicyAssignment#policy_definition_id}
  */
  readonly policyDefinitionId: string;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#identity ManagementGroupPolicyAssignment#identity}
  */
  readonly identity?: ManagementGroupPolicyAssignmentIdentity[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#timeouts ManagementGroupPolicyAssignment#timeouts}
  */
  readonly timeouts?: ManagementGroupPolicyAssignmentTimeouts;
}
export interface ManagementGroupPolicyAssignmentIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#type ManagementGroupPolicyAssignment#type}
  */
  readonly type?: string;
}

function managementGroupPolicyAssignmentIdentityToTerraform(struct?: ManagementGroupPolicyAssignmentIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ManagementGroupPolicyAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#create ManagementGroupPolicyAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#delete ManagementGroupPolicyAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#read ManagementGroupPolicyAssignment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#update ManagementGroupPolicyAssignment#update}
  */
  readonly update?: string;
}

function managementGroupPolicyAssignmentTimeoutsToTerraform(struct?: ManagementGroupPolicyAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html azurerm_management_group_policy_assignment}
*/
export class ManagementGroupPolicyAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_management_group_policy_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html azurerm_management_group_policy_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementGroupPolicyAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementGroupPolicyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_management_group_policy_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._enforce = config.enforce;
    this._location = config.location;
    this._managementGroupId = config.managementGroupId;
    this._metadata = config.metadata;
    this._name = config.name;
    this._notScopes = config.notScopes;
    this._parameters = config.parameters;
    this._policyDefinitionId = config.policyDefinitionId;
    this._identity = config.identity;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable;
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable ) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string ) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // management_group_id - computed: false, optional: false, required: true
  private _managementGroupId: string;
  public get managementGroupId() {
    return this.getStringAttribute('management_group_id');
  }
  public set managementGroupId(value: string) {
    this._managementGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupIdInput() {
    return this._managementGroupId
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string;
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // not_scopes - computed: false, optional: true, required: false
  private _notScopes?: string[];
  public get notScopes() {
    return this.getListAttribute('not_scopes');
  }
  public set notScopes(value: string[] ) {
    this._notScopes = value;
  }
  public resetNotScopes() {
    this._notScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notScopesInput() {
    return this._notScopes
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string;
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // policy_definition_id - computed: false, optional: false, required: true
  private _policyDefinitionId: string;
  public get policyDefinitionId() {
    return this.getStringAttribute('policy_definition_id');
  }
  public set policyDefinitionId(value: string) {
    this._policyDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionIdInput() {
    return this._policyDefinitionId
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: ManagementGroupPolicyAssignmentIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: ManagementGroupPolicyAssignmentIdentity[] ) {
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
  private _timeouts?: ManagementGroupPolicyAssignmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ManagementGroupPolicyAssignmentTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enforce: cdktf.booleanToTerraform(this._enforce),
      location: cdktf.stringToTerraform(this._location),
      management_group_id: cdktf.stringToTerraform(this._managementGroupId),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      not_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._notScopes),
      parameters: cdktf.stringToTerraform(this._parameters),
      policy_definition_id: cdktf.stringToTerraform(this._policyDefinitionId),
      identity: cdktf.listMapper(managementGroupPolicyAssignmentIdentityToTerraform)(this._identity),
      timeouts: managementGroupPolicyAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
