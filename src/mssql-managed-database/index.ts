// https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlManagedDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#id MssqlManagedDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#managed_instance_id MssqlManagedDatabase#managed_instance_id}
  */
  readonly managedInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#name MssqlManagedDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#short_term_retention_days MssqlManagedDatabase#short_term_retention_days}
  */
  readonly shortTermRetentionDays?: number;
  /**
  * long_term_retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#long_term_retention_policy MssqlManagedDatabase#long_term_retention_policy}
  */
  readonly longTermRetentionPolicy?: MssqlManagedDatabaseLongTermRetentionPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#timeouts MssqlManagedDatabase#timeouts}
  */
  readonly timeouts?: MssqlManagedDatabaseTimeouts;
}
export interface MssqlManagedDatabaseLongTermRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#monthly_retention MssqlManagedDatabase#monthly_retention}
  */
  readonly monthlyRetention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#week_of_year MssqlManagedDatabase#week_of_year}
  */
  readonly weekOfYear?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#weekly_retention MssqlManagedDatabase#weekly_retention}
  */
  readonly weeklyRetention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#yearly_retention MssqlManagedDatabase#yearly_retention}
  */
  readonly yearlyRetention?: string;
}

export function mssqlManagedDatabaseLongTermRetentionPolicyToTerraform(struct?: MssqlManagedDatabaseLongTermRetentionPolicyOutputReference | MssqlManagedDatabaseLongTermRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monthly_retention: cdktf.stringToTerraform(struct!.monthlyRetention),
    week_of_year: cdktf.numberToTerraform(struct!.weekOfYear),
    weekly_retention: cdktf.stringToTerraform(struct!.weeklyRetention),
    yearly_retention: cdktf.stringToTerraform(struct!.yearlyRetention),
  }
}

export class MssqlManagedDatabaseLongTermRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlManagedDatabaseLongTermRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monthlyRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyRetention = this._monthlyRetention;
    }
    if (this._weekOfYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekOfYear = this._weekOfYear;
    }
    if (this._weeklyRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyRetention = this._weeklyRetention;
    }
    if (this._yearlyRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearlyRetention = this._yearlyRetention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlManagedDatabaseLongTermRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monthlyRetention = undefined;
      this._weekOfYear = undefined;
      this._weeklyRetention = undefined;
      this._yearlyRetention = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monthlyRetention = value.monthlyRetention;
      this._weekOfYear = value.weekOfYear;
      this._weeklyRetention = value.weeklyRetention;
      this._yearlyRetention = value.yearlyRetention;
    }
  }

  // monthly_retention - computed: true, optional: true, required: false
  private _monthlyRetention?: string; 
  public get monthlyRetention() {
    return this.getStringAttribute('monthly_retention');
  }
  public set monthlyRetention(value: string) {
    this._monthlyRetention = value;
  }
  public resetMonthlyRetention() {
    this._monthlyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyRetentionInput() {
    return this._monthlyRetention;
  }

  // week_of_year - computed: true, optional: true, required: false
  private _weekOfYear?: number; 
  public get weekOfYear() {
    return this.getNumberAttribute('week_of_year');
  }
  public set weekOfYear(value: number) {
    this._weekOfYear = value;
  }
  public resetWeekOfYear() {
    this._weekOfYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfYearInput() {
    return this._weekOfYear;
  }

  // weekly_retention - computed: true, optional: true, required: false
  private _weeklyRetention?: string; 
  public get weeklyRetention() {
    return this.getStringAttribute('weekly_retention');
  }
  public set weeklyRetention(value: string) {
    this._weeklyRetention = value;
  }
  public resetWeeklyRetention() {
    this._weeklyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyRetentionInput() {
    return this._weeklyRetention;
  }

  // yearly_retention - computed: true, optional: true, required: false
  private _yearlyRetention?: string; 
  public get yearlyRetention() {
    return this.getStringAttribute('yearly_retention');
  }
  public set yearlyRetention(value: string) {
    this._yearlyRetention = value;
  }
  public resetYearlyRetention() {
    this._yearlyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearlyRetentionInput() {
    return this._yearlyRetention;
  }
}
export interface MssqlManagedDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#create MssqlManagedDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#delete MssqlManagedDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#read MssqlManagedDatabase#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database#update MssqlManagedDatabase#update}
  */
  readonly update?: string;
}

export function mssqlManagedDatabaseTimeoutsToTerraform(struct?: MssqlManagedDatabaseTimeouts | cdktf.IResolvable): any {
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

export class MssqlManagedDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MssqlManagedDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MssqlManagedDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database azurerm_mssql_managed_database}
*/
export class MssqlManagedDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mssql_managed_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/mssql_managed_database azurerm_mssql_managed_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlManagedDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlManagedDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_managed_database',
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
    this._id = config.id;
    this._managedInstanceId = config.managedInstanceId;
    this._name = config.name;
    this._shortTermRetentionDays = config.shortTermRetentionDays;
    this._longTermRetentionPolicy.internalValue = config.longTermRetentionPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // managed_instance_id - computed: false, optional: false, required: true
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
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

  // short_term_retention_days - computed: false, optional: true, required: false
  private _shortTermRetentionDays?: number; 
  public get shortTermRetentionDays() {
    return this.getNumberAttribute('short_term_retention_days');
  }
  public set shortTermRetentionDays(value: number) {
    this._shortTermRetentionDays = value;
  }
  public resetShortTermRetentionDays() {
    this._shortTermRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortTermRetentionDaysInput() {
    return this._shortTermRetentionDays;
  }

  // long_term_retention_policy - computed: false, optional: true, required: false
  private _longTermRetentionPolicy = new MssqlManagedDatabaseLongTermRetentionPolicyOutputReference(this, "long_term_retention_policy");
  public get longTermRetentionPolicy() {
    return this._longTermRetentionPolicy;
  }
  public putLongTermRetentionPolicy(value: MssqlManagedDatabaseLongTermRetentionPolicy) {
    this._longTermRetentionPolicy.internalValue = value;
  }
  public resetLongTermRetentionPolicy() {
    this._longTermRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTermRetentionPolicyInput() {
    return this._longTermRetentionPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MssqlManagedDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MssqlManagedDatabaseTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      name: cdktf.stringToTerraform(this._name),
      short_term_retention_days: cdktf.numberToTerraform(this._shortTermRetentionDays),
      long_term_retention_policy: mssqlManagedDatabaseLongTermRetentionPolicyToTerraform(this._longTermRetentionPolicy.internalValue),
      timeouts: mssqlManagedDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
