// https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceGroupPolicyRemediationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#failure_percentage ResourceGroupPolicyRemediation#failure_percentage}
  */
  readonly failurePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#id ResourceGroupPolicyRemediation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#location_filters ResourceGroupPolicyRemediation#location_filters}
  */
  readonly locationFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#name ResourceGroupPolicyRemediation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#parallel_deployments ResourceGroupPolicyRemediation#parallel_deployments}
  */
  readonly parallelDeployments?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#policy_assignment_id ResourceGroupPolicyRemediation#policy_assignment_id}
  */
  readonly policyAssignmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#policy_definition_id ResourceGroupPolicyRemediation#policy_definition_id}
  */
  readonly policyDefinitionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#policy_definition_reference_id ResourceGroupPolicyRemediation#policy_definition_reference_id}
  */
  readonly policyDefinitionReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#resource_count ResourceGroupPolicyRemediation#resource_count}
  */
  readonly resourceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#resource_discovery_mode ResourceGroupPolicyRemediation#resource_discovery_mode}
  */
  readonly resourceDiscoveryMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#resource_group_id ResourceGroupPolicyRemediation#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#timeouts ResourceGroupPolicyRemediation#timeouts}
  */
  readonly timeouts?: ResourceGroupPolicyRemediationTimeouts;
}
export interface ResourceGroupPolicyRemediationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#create ResourceGroupPolicyRemediation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#delete ResourceGroupPolicyRemediation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#read ResourceGroupPolicyRemediation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#update ResourceGroupPolicyRemediation#update}
  */
  readonly update?: string;
}

export function resourceGroupPolicyRemediationTimeoutsToTerraform(struct?: ResourceGroupPolicyRemediationTimeouts | cdktf.IResolvable): any {
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

export class ResourceGroupPolicyRemediationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceGroupPolicyRemediationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourceGroupPolicyRemediationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation azurerm_resource_group_policy_remediation}
*/
export class ResourceGroupPolicyRemediation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_resource_group_policy_remediation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation azurerm_resource_group_policy_remediation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceGroupPolicyRemediationConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceGroupPolicyRemediationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_resource_group_policy_remediation',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.62.1',
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
    this._failurePercentage = config.failurePercentage;
    this._id = config.id;
    this._locationFilters = config.locationFilters;
    this._name = config.name;
    this._parallelDeployments = config.parallelDeployments;
    this._policyAssignmentId = config.policyAssignmentId;
    this._policyDefinitionId = config.policyDefinitionId;
    this._policyDefinitionReferenceId = config.policyDefinitionReferenceId;
    this._resourceCount = config.resourceCount;
    this._resourceDiscoveryMode = config.resourceDiscoveryMode;
    this._resourceGroupId = config.resourceGroupId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // failure_percentage - computed: false, optional: true, required: false
  private _failurePercentage?: number; 
  public get failurePercentage() {
    return this.getNumberAttribute('failure_percentage');
  }
  public set failurePercentage(value: number) {
    this._failurePercentage = value;
  }
  public resetFailurePercentage() {
    this._failurePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePercentageInput() {
    return this._failurePercentage;
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

  // parallel_deployments - computed: false, optional: true, required: false
  private _parallelDeployments?: number; 
  public get parallelDeployments() {
    return this.getNumberAttribute('parallel_deployments');
  }
  public set parallelDeployments(value: number) {
    this._parallelDeployments = value;
  }
  public resetParallelDeployments() {
    this._parallelDeployments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelDeploymentsInput() {
    return this._parallelDeployments;
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

  // policy_definition_id - computed: false, optional: true, required: false
  private _policyDefinitionId?: string; 
  public get policyDefinitionId() {
    return this.getStringAttribute('policy_definition_id');
  }
  public set policyDefinitionId(value: string) {
    this._policyDefinitionId = value;
  }
  public resetPolicyDefinitionId() {
    this._policyDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionIdInput() {
    return this._policyDefinitionId;
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

  // resource_count - computed: false, optional: true, required: false
  private _resourceCount?: number; 
  public get resourceCount() {
    return this.getNumberAttribute('resource_count');
  }
  public set resourceCount(value: number) {
    this._resourceCount = value;
  }
  public resetResourceCount() {
    this._resourceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCountInput() {
    return this._resourceCount;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceGroupPolicyRemediationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceGroupPolicyRemediationTimeouts) {
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
      failure_percentage: cdktf.numberToTerraform(this._failurePercentage),
      id: cdktf.stringToTerraform(this._id),
      location_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locationFilters),
      name: cdktf.stringToTerraform(this._name),
      parallel_deployments: cdktf.numberToTerraform(this._parallelDeployments),
      policy_assignment_id: cdktf.stringToTerraform(this._policyAssignmentId),
      policy_definition_id: cdktf.stringToTerraform(this._policyDefinitionId),
      policy_definition_reference_id: cdktf.stringToTerraform(this._policyDefinitionReferenceId),
      resource_count: cdktf.numberToTerraform(this._resourceCount),
      resource_discovery_mode: cdktf.stringToTerraform(this._resourceDiscoveryMode),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      timeouts: resourceGroupPolicyRemediationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
