// https://www.terraform.io/docs/providers/azurerm/d/monitor_log_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermMonitorLogProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_log_profile#name DataAzurermMonitorLogProfile#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_log_profile#timeouts DataAzurermMonitorLogProfile#timeouts}
  */
  readonly timeouts?: DataAzurermMonitorLogProfileTimeouts;
}
export class DataAzurermMonitorLogProfileRetentionPolicy extends cdktf.ComplexComputedList {

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
}
export interface DataAzurermMonitorLogProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_log_profile#read DataAzurermMonitorLogProfile#read}
  */
  readonly read?: string;
}

export function dataAzurermMonitorLogProfileTimeoutsToTerraform(struct?: DataAzurermMonitorLogProfileTimeoutsOutputReference | DataAzurermMonitorLogProfileTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermMonitorLogProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermMonitorLogProfileTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermMonitorLogProfileTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_log_profile azurerm_monitor_log_profile}
*/
export class DataAzurermMonitorLogProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_log_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_log_profile azurerm_monitor_log_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermMonitorLogProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermMonitorLogProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_log_profile',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return this.getListAttribute('categories');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getListAttribute('locations');
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

  // retention_policy - computed: true, optional: false, required: false
  public retentionPolicy(index: string) {
    return new DataAzurermMonitorLogProfileRetentionPolicy(this, 'retention_policy', index);
  }

  // servicebus_rule_id - computed: true, optional: false, required: false
  public get servicebusRuleId() {
    return this.getStringAttribute('servicebus_rule_id');
  }

  // storage_account_id - computed: true, optional: false, required: false
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermMonitorLogProfileTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermMonitorLogProfileTimeouts) {
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
      timeouts: dataAzurermMonitorLogProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
