// https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppTriggerRecurrenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#frequency LogicAppTriggerRecurrence#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#interval LogicAppTriggerRecurrence#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#logic_app_id LogicAppTriggerRecurrence#logic_app_id}
  */
  readonly logicAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#name LogicAppTriggerRecurrence#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#start_time LogicAppTriggerRecurrence#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#time_zone LogicAppTriggerRecurrence#time_zone}
  */
  readonly timeZone?: string;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#schedule LogicAppTriggerRecurrence#schedule}
  */
  readonly schedule?: LogicAppTriggerRecurrenceSchedule;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#timeouts LogicAppTriggerRecurrence#timeouts}
  */
  readonly timeouts?: LogicAppTriggerRecurrenceTimeouts;
}
export interface LogicAppTriggerRecurrenceSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#at_these_hours LogicAppTriggerRecurrence#at_these_hours}
  */
  readonly atTheseHours?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#at_these_minutes LogicAppTriggerRecurrence#at_these_minutes}
  */
  readonly atTheseMinutes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#on_these_days LogicAppTriggerRecurrence#on_these_days}
  */
  readonly onTheseDays?: string[];
}

export function logicAppTriggerRecurrenceScheduleToTerraform(struct?: LogicAppTriggerRecurrenceScheduleOutputReference | LogicAppTriggerRecurrenceSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at_these_hours: cdktf.listMapper(cdktf.numberToTerraform)(struct!.atTheseHours),
    at_these_minutes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.atTheseMinutes),
    on_these_days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.onTheseDays),
  }
}

export class LogicAppTriggerRecurrenceScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LogicAppTriggerRecurrenceSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atTheseHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.atTheseHours = this._atTheseHours;
    }
    if (this._atTheseMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.atTheseMinutes = this._atTheseMinutes;
    }
    if (this._onTheseDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.onTheseDays = this._onTheseDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppTriggerRecurrenceSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._atTheseHours = undefined;
      this._atTheseMinutes = undefined;
      this._onTheseDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._atTheseHours = value.atTheseHours;
      this._atTheseMinutes = value.atTheseMinutes;
      this._onTheseDays = value.onTheseDays;
    }
  }

  // at_these_hours - computed: false, optional: true, required: false
  private _atTheseHours?: number[]; 
  public get atTheseHours() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('at_these_hours') as any;
  }
  public set atTheseHours(value: number[]) {
    this._atTheseHours = value;
  }
  public resetAtTheseHours() {
    this._atTheseHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atTheseHoursInput() {
    return this._atTheseHours;
  }

  // at_these_minutes - computed: false, optional: true, required: false
  private _atTheseMinutes?: number[]; 
  public get atTheseMinutes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('at_these_minutes') as any;
  }
  public set atTheseMinutes(value: number[]) {
    this._atTheseMinutes = value;
  }
  public resetAtTheseMinutes() {
    this._atTheseMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atTheseMinutesInput() {
    return this._atTheseMinutes;
  }

  // on_these_days - computed: false, optional: true, required: false
  private _onTheseDays?: string[]; 
  public get onTheseDays() {
    return this.getListAttribute('on_these_days');
  }
  public set onTheseDays(value: string[]) {
    this._onTheseDays = value;
  }
  public resetOnTheseDays() {
    this._onTheseDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTheseDaysInput() {
    return this._onTheseDays;
  }
}
export interface LogicAppTriggerRecurrenceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#create LogicAppTriggerRecurrence#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#delete LogicAppTriggerRecurrence#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#read LogicAppTriggerRecurrence#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#update LogicAppTriggerRecurrence#update}
  */
  readonly update?: string;
}

export function logicAppTriggerRecurrenceTimeoutsToTerraform(struct?: LogicAppTriggerRecurrenceTimeoutsOutputReference | LogicAppTriggerRecurrenceTimeouts): any {
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

export class LogicAppTriggerRecurrenceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LogicAppTriggerRecurrenceTimeouts | undefined {
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

  public set internalValue(value: LogicAppTriggerRecurrenceTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html azurerm_logic_app_trigger_recurrence}
*/
export class LogicAppTriggerRecurrence extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logic_app_trigger_recurrence";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html azurerm_logic_app_trigger_recurrence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppTriggerRecurrenceConfig
  */
  public constructor(scope: Construct, id: string, config: LogicAppTriggerRecurrenceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_trigger_recurrence',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._frequency = config.frequency;
    this._interval = config.interval;
    this._logicAppId = config.logicAppId;
    this._name = config.name;
    this._startTime = config.startTime;
    this._timeZone = config.timeZone;
    this._schedule.internalValue = config.schedule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // logic_app_id - computed: false, optional: false, required: true
  private _logicAppId?: string; 
  public get logicAppId() {
    return this.getStringAttribute('logic_app_id');
  }
  public set logicAppId(value: string) {
    this._logicAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicAppIdInput() {
    return this._logicAppId;
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

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new LogicAppTriggerRecurrenceScheduleOutputReference(this as any, "schedule", true);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: LogicAppTriggerRecurrenceSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogicAppTriggerRecurrenceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogicAppTriggerRecurrenceTimeouts) {
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
      frequency: cdktf.stringToTerraform(this._frequency),
      interval: cdktf.numberToTerraform(this._interval),
      logic_app_id: cdktf.stringToTerraform(this._logicAppId),
      name: cdktf.stringToTerraform(this._name),
      start_time: cdktf.stringToTerraform(this._startTime),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      schedule: logicAppTriggerRecurrenceScheduleToTerraform(this._schedule.internalValue),
      timeouts: logicAppTriggerRecurrenceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
