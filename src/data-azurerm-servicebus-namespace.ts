// https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermServicebusNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace#name DataAzurermServicebusNamespace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace#resource_group_name DataAzurermServicebusNamespace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace#timeouts DataAzurermServicebusNamespace#timeouts}
  */
  readonly timeouts?: DataAzurermServicebusNamespaceTimeouts;
}
export interface DataAzurermServicebusNamespaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace#read DataAzurermServicebusNamespace#read}
  */
  readonly read?: string;
}

export function dataAzurermServicebusNamespaceTimeoutsToTerraform(struct?: DataAzurermServicebusNamespaceTimeoutsOutputReference | DataAzurermServicebusNamespaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermServicebusNamespaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermServicebusNamespaceTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermServicebusNamespaceTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace azurerm_servicebus_namespace}
*/
export class DataAzurermServicebusNamespace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_servicebus_namespace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace azurerm_servicebus_namespace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermServicebusNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermServicebusNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_namespace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // default_primary_connection_string - computed: true, optional: false, required: false
  public get defaultPrimaryConnectionString() {
    return this.getStringAttribute('default_primary_connection_string');
  }

  // default_primary_key - computed: true, optional: false, required: false
  public get defaultPrimaryKey() {
    return this.getStringAttribute('default_primary_key');
  }

  // default_secondary_connection_string - computed: true, optional: false, required: false
  public get defaultSecondaryConnectionString() {
    return this.getStringAttribute('default_secondary_connection_string');
  }

  // default_secondary_key - computed: true, optional: false, required: false
  public get defaultSecondaryKey() {
    return this.getStringAttribute('default_secondary_key');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // zone_redundant - computed: true, optional: false, required: false
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermServicebusNamespaceTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermServicebusNamespaceTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermServicebusNamespaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
