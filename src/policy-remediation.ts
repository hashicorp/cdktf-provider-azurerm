// https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRemediationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#location_filters PolicyRemediation#location_filters}
  */
  readonly locationFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#name PolicyRemediation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#policy_assignment_id PolicyRemediation#policy_assignment_id}
  */
  readonly policyAssignmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#policy_definition_reference_id PolicyRemediation#policy_definition_reference_id}
  */
  readonly policyDefinitionReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#resource_discovery_mode PolicyRemediation#resource_discovery_mode}
  */
  readonly resourceDiscoveryMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#scope PolicyRemediation#scope}
  */
  readonly scope: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#timeouts PolicyRemediation#timeouts}
  */
  readonly timeouts?: PolicyRemediationTimeouts;
}
export interface PolicyRemediationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#create PolicyRemediation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#delete PolicyRemediation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#read PolicyRemediation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#update PolicyRemediation#update}
  */
  readonly update?: string;
}

export function policyRemediationTimeoutsToTerraform(struct?: PolicyRemediationTimeoutsOutputReference | PolicyRemediationTimeouts): any {
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

export class PolicyRemediationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PolicyRemediationTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRemediationTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html azurerm_policy_remediation}
*/
export class PolicyRemediation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_policy_remediation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html azurerm_policy_remediation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRemediationConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRemediationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_policy_remediation',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._locationFilters = config.locationFilters;
    this._name = config.name;
    this._policyAssignmentId = config.policyAssignmentId;
    this._policyDefinitionReferenceId = config.policyDefinitionReferenceId;
    this._resourceDiscoveryMode = config.resourceDiscoveryMode;
    this._scope = config.scope;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_filters - computed: false, optional: true, required: false
  private _locationFilters?: string[]; 
  public get locationFilters() {
    return this.getListAttribute('location_filters');
  }
  public set locationFilters(value: string[]) {
    this._locationFilters = value;
  }
  public resetLocationFilters() {
    this._locationFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationFiltersInput() {
    return this._locationFilters;
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

  // policy_assignment_id - computed: false, optional: false, required: true
  private _policyAssignmentId?: string; 
  public get policyAssignmentId() {
    return this.getStringAttribute('policy_assignment_id');
  }
  public set policyAssignmentId(value: string) {
    this._policyAssignmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyAssignmentIdInput() {
    return this._policyAssignmentId;
  }

  // policy_definition_reference_id - computed: false, optional: true, required: false
  private _policyDefinitionReferenceId?: string; 
  public get policyDefinitionReferenceId() {
    return this.getStringAttribute('policy_definition_reference_id');
  }
  public set policyDefinitionReferenceId(value: string) {
    this._policyDefinitionReferenceId = value;
  }
  public resetPolicyDefinitionReferenceId() {
    this._policyDefinitionReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionReferenceIdInput() {
    return this._policyDefinitionReferenceId;
  }

  // resource_discovery_mode - computed: false, optional: true, required: false
  private _resourceDiscoveryMode?: string; 
  public get resourceDiscoveryMode() {
    return this.getStringAttribute('resource_discovery_mode');
  }
  public set resourceDiscoveryMode(value: string) {
    this._resourceDiscoveryMode = value;
  }
  public resetResourceDiscoveryMode() {
    this._resourceDiscoveryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDiscoveryModeInput() {
    return this._resourceDiscoveryMode;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PolicyRemediationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PolicyRemediationTimeouts) {
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
      location_filters: cdktf.listMapper(cdktf.stringToTerraform)(this._locationFilters),
      name: cdktf.stringToTerraform(this._name),
      policy_assignment_id: cdktf.stringToTerraform(this._policyAssignmentId),
      policy_definition_reference_id: cdktf.stringToTerraform(this._policyDefinitionReferenceId),
      resource_discovery_mode: cdktf.stringToTerraform(this._resourceDiscoveryMode),
      scope: cdktf.stringToTerraform(this._scope),
      timeouts: policyRemediationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
