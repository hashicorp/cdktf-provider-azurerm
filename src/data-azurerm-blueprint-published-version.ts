// https://www.terraform.io/docs/providers/azurerm/d/blueprint_published_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermBlueprintPublishedVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/blueprint_published_version#blueprint_name DataAzurermBlueprintPublishedVersion#blueprint_name}
  */
  readonly blueprintName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/blueprint_published_version#scope_id DataAzurermBlueprintPublishedVersion#scope_id}
  */
  readonly scopeId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/blueprint_published_version#version DataAzurermBlueprintPublishedVersion#version}
  */
  readonly version: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/blueprint_published_version#timeouts DataAzurermBlueprintPublishedVersion#timeouts}
  */
  readonly timeouts?: DataAzurermBlueprintPublishedVersionTimeouts;
}
export interface DataAzurermBlueprintPublishedVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/blueprint_published_version#read DataAzurermBlueprintPublishedVersion#read}
  */
  readonly read?: string;
}

export function dataAzurermBlueprintPublishedVersionTimeoutsToTerraform(struct?: DataAzurermBlueprintPublishedVersionTimeoutsOutputReference | DataAzurermBlueprintPublishedVersionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermBlueprintPublishedVersionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermBlueprintPublishedVersionTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermBlueprintPublishedVersionTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/blueprint_published_version azurerm_blueprint_published_version}
*/
export class DataAzurermBlueprintPublishedVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_blueprint_published_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/blueprint_published_version azurerm_blueprint_published_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermBlueprintPublishedVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermBlueprintPublishedVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_blueprint_published_version',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._blueprintName = config.blueprintName;
    this._scopeId = config.scopeId;
    this._version = config.version;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_name - computed: false, optional: false, required: true
  private _blueprintName?: string; 
  public get blueprintName() {
    return this.getStringAttribute('blueprint_name');
  }
  public set blueprintName(value: string) {
    this._blueprintName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintNameInput() {
    return this._blueprintName;
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

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // scope_id - computed: false, optional: false, required: true
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // target_scope - computed: true, optional: false, required: false
  public get targetScope() {
    return this.getStringAttribute('target_scope');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermBlueprintPublishedVersionTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermBlueprintPublishedVersionTimeouts) {
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
      blueprint_name: cdktf.stringToTerraform(this._blueprintName),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      version: cdktf.stringToTerraform(this._version),
      timeouts: dataAzurermBlueprintPublishedVersionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
