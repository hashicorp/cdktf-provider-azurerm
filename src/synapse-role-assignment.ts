// https://www.terraform.io/docs/providers/azurerm/r/synapse_role_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseRoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_role_assignment#principal_id SynapseRoleAssignment#principal_id}
  */
  readonly principalId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_role_assignment#role_name SynapseRoleAssignment#role_name}
  */
  readonly roleName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_role_assignment#synapse_spark_pool_id SynapseRoleAssignment#synapse_spark_pool_id}
  */
  readonly synapseSparkPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_role_assignment#synapse_workspace_id SynapseRoleAssignment#synapse_workspace_id}
  */
  readonly synapseWorkspaceId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_role_assignment#timeouts SynapseRoleAssignment#timeouts}
  */
  readonly timeouts?: SynapseRoleAssignmentTimeouts;
}
export interface SynapseRoleAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_role_assignment#create SynapseRoleAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_role_assignment#delete SynapseRoleAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_role_assignment#read SynapseRoleAssignment#read}
  */
  readonly read?: string;
}

export function synapseRoleAssignmentTimeoutsToTerraform(struct?: SynapseRoleAssignmentTimeoutsOutputReference | SynapseRoleAssignmentTimeouts | cdktf.IResolvable): any {
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

export class SynapseRoleAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SynapseRoleAssignmentTimeouts | undefined {
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

  public set internalValue(value: SynapseRoleAssignmentTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_role_assignment azurerm_synapse_role_assignment}
*/
export class SynapseRoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_role_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_role_assignment azurerm_synapse_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseRoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseRoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._principalId = config.principalId;
    this._roleName = config.roleName;
    this._synapseSparkPoolId = config.synapseSparkPoolId;
    this._synapseWorkspaceId = config.synapseWorkspaceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // synapse_spark_pool_id - computed: false, optional: true, required: false
  private _synapseSparkPoolId?: string; 
  public get synapseSparkPoolId() {
    return this.getStringAttribute('synapse_spark_pool_id');
  }
  public set synapseSparkPoolId(value: string) {
    this._synapseSparkPoolId = value;
  }
  public resetSynapseSparkPoolId() {
    this._synapseSparkPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synapseSparkPoolIdInput() {
    return this._synapseSparkPoolId;
  }

  // synapse_workspace_id - computed: false, optional: true, required: false
  private _synapseWorkspaceId?: string; 
  public get synapseWorkspaceId() {
    return this.getStringAttribute('synapse_workspace_id');
  }
  public set synapseWorkspaceId(value: string) {
    this._synapseWorkspaceId = value;
  }
  public resetSynapseWorkspaceId() {
    this._synapseWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synapseWorkspaceIdInput() {
    return this._synapseWorkspaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SynapseRoleAssignmentTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SynapseRoleAssignmentTimeouts) {
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
      principal_id: cdktf.stringToTerraform(this._principalId),
      role_name: cdktf.stringToTerraform(this._roleName),
      synapse_spark_pool_id: cdktf.stringToTerraform(this._synapseSparkPoolId),
      synapse_workspace_id: cdktf.stringToTerraform(this._synapseWorkspaceId),
      timeouts: synapseRoleAssignmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
