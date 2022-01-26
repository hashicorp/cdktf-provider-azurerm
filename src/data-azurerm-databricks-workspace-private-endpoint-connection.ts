// https://www.terraform.io/docs/providers/azurerm/d/databricks_workspace_private_endpoint_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/databricks_workspace_private_endpoint_connection#private_endpoint_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#private_endpoint_id}
  */
  readonly privateEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/databricks_workspace_private_endpoint_connection#workspace_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/databricks_workspace_private_endpoint_connection#timeouts DataAzurermDatabricksWorkspacePrivateEndpointConnection#timeouts}
  */
  readonly timeouts?: DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts;
}
export class DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections extends cdktf.ComplexComputedList {

  // action_required - computed: true, optional: false, required: false
  public get actionRequired() {
    return this.getStringAttribute('action_required');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // workspace_private_endpoint_id - computed: true, optional: false, required: false
  public get workspacePrivateEndpointId() {
    return this.getStringAttribute('workspace_private_endpoint_id');
  }
}
export interface DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/databricks_workspace_private_endpoint_connection#read DataAzurermDatabricksWorkspacePrivateEndpointConnection#read}
  */
  readonly read?: string;
}

export function dataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsToTerraform(struct?: DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference | DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._read = value.read;
    }
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/databricks_workspace_private_endpoint_connection azurerm_databricks_workspace_private_endpoint_connection}
*/
export class DataAzurermDatabricksWorkspacePrivateEndpointConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_databricks_workspace_private_endpoint_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/databricks_workspace_private_endpoint_connection azurerm_databricks_workspace_private_endpoint_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_databricks_workspace_private_endpoint_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._privateEndpointId = config.privateEndpointId;
    this._workspaceId = config.workspaceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connections - computed: true, optional: false, required: false
  public connections(index: string) {
    return new DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections(this, 'connections', index, false);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_endpoint_id - computed: false, optional: false, required: true
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts) {
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
      private_endpoint_id: cdktf.stringToTerraform(this._privateEndpointId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      timeouts: dataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
