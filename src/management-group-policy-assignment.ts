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
  readonly identity?: ManagementGroupPolicyAssignmentIdentity;
  /**
  * non_compliance_message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#non_compliance_message ManagementGroupPolicyAssignment#non_compliance_message}
  */
  readonly nonComplianceMessage?: ManagementGroupPolicyAssignmentNonComplianceMessage[];
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

export function managementGroupPolicyAssignmentIdentityToTerraform(struct?: ManagementGroupPolicyAssignmentIdentityOutputReference | ManagementGroupPolicyAssignmentIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ManagementGroupPolicyAssignmentIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ManagementGroupPolicyAssignmentIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementGroupPolicyAssignmentIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ManagementGroupPolicyAssignmentNonComplianceMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#content ManagementGroupPolicyAssignment#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment.html#policy_definition_reference_id ManagementGroupPolicyAssignment#policy_definition_reference_id}
  */
  readonly policyDefinitionReferenceId?: string;
}

export function managementGroupPolicyAssignmentNonComplianceMessageToTerraform(struct?: ManagementGroupPolicyAssignmentNonComplianceMessage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    policy_definition_reference_id: cdktf.stringToTerraform(struct!.policyDefinitionReferenceId),
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

export function managementGroupPolicyAssignmentTimeoutsToTerraform(struct?: ManagementGroupPolicyAssignmentTimeoutsOutputReference | ManagementGroupPolicyAssignmentTimeouts): any {
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

export class ManagementGroupPolicyAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ManagementGroupPolicyAssignmentTimeouts | undefined {
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

  public set internalValue(value: ManagementGroupPolicyAssignmentTimeouts | undefined) {
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
    this._identity.internalValue = config.identity;
    this._nonComplianceMessage = config.nonComplianceMessage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: true, required: false
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
    return this._displayName;
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce') as any;
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
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
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // management_group_id - computed: false, optional: false, required: true
  private _managementGroupId?: string; 
  public get managementGroupId() {
    return this.getStringAttribute('management_group_id');
  }
  public set managementGroupId(value: string) {
    this._managementGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupIdInput() {
    return this._managementGroupId;
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
    return this._metadata;
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

  // not_scopes - computed: false, optional: true, required: false
  private _notScopes?: string[]; 
  public get notScopes() {
    return this.getListAttribute('not_scopes');
  }
  public set notScopes(value: string[]) {
    this._notScopes = value;
  }
  public resetNotScopes() {
    this._notScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notScopesInput() {
    return this._notScopes;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // policy_definition_id - computed: false, optional: false, required: true
  private _policyDefinitionId?: string; 
  public get policyDefinitionId() {
    return this.getStringAttribute('policy_definition_id');
  }
  public set policyDefinitionId(value: string) {
    this._policyDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionIdInput() {
    return this._policyDefinitionId;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ManagementGroupPolicyAssignmentIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ManagementGroupPolicyAssignmentIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // non_compliance_message - computed: false, optional: true, required: false
  private _nonComplianceMessage?: ManagementGroupPolicyAssignmentNonComplianceMessage[]; 
  public get nonComplianceMessage() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('non_compliance_message') as any;
  }
  public set nonComplianceMessage(value: ManagementGroupPolicyAssignmentNonComplianceMessage[]) {
    this._nonComplianceMessage = value;
  }
  public resetNonComplianceMessage() {
    this._nonComplianceMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonComplianceMessageInput() {
    return this._nonComplianceMessage;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManagementGroupPolicyAssignmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManagementGroupPolicyAssignmentTimeouts) {
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
      identity: managementGroupPolicyAssignmentIdentityToTerraform(this._identity.internalValue),
      non_compliance_message: cdktf.listMapper(managementGroupPolicyAssignmentNonComplianceMessageToTerraform)(this._nonComplianceMessage),
      timeouts: managementGroupPolicyAssignmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
