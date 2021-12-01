// https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryTriggerScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#activated DataFactoryTriggerSchedule#activated}
  */
  readonly activated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#annotations DataFactoryTriggerSchedule#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#data_factory_name DataFactoryTriggerSchedule#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#description DataFactoryTriggerSchedule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#end_time DataFactoryTriggerSchedule#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#frequency DataFactoryTriggerSchedule#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#interval DataFactoryTriggerSchedule#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#name DataFactoryTriggerSchedule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#pipeline_name DataFactoryTriggerSchedule#pipeline_name}
  */
  readonly pipelineName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#pipeline_parameters DataFactoryTriggerSchedule#pipeline_parameters}
  */
  readonly pipelineParameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#resource_group_name DataFactoryTriggerSchedule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#start_time DataFactoryTriggerSchedule#start_time}
  */
  readonly startTime?: string;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#schedule DataFactoryTriggerSchedule#schedule}
  */
  readonly schedule?: DataFactoryTriggerScheduleSchedule;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#timeouts DataFactoryTriggerSchedule#timeouts}
  */
  readonly timeouts?: DataFactoryTriggerScheduleTimeouts;
}
export interface DataFactoryTriggerScheduleScheduleMonthly {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#week DataFactoryTriggerSchedule#week}
  */
  readonly week?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#weekday DataFactoryTriggerSchedule#weekday}
  */
  readonly weekday: string;
}

export function dataFactoryTriggerScheduleScheduleMonthlyToTerraform(struct?: DataFactoryTriggerScheduleScheduleMonthly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    week: cdktf.numberToTerraform(struct!.week),
    weekday: cdktf.stringToTerraform(struct!.weekday),
  }
}

export interface DataFactoryTriggerScheduleSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#days_of_month DataFactoryTriggerSchedule#days_of_month}
  */
  readonly daysOfMonth?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#days_of_week DataFactoryTriggerSchedule#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#hours DataFactoryTriggerSchedule#hours}
  */
  readonly hours?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#minutes DataFactoryTriggerSchedule#minutes}
  */
  readonly minutes?: number[];
  /**
  * monthly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#monthly DataFactoryTriggerSchedule#monthly}
  */
  readonly monthly?: DataFactoryTriggerScheduleScheduleMonthly[];
}

export function dataFactoryTriggerScheduleScheduleToTerraform(struct?: DataFactoryTriggerScheduleScheduleOutputReference | DataFactoryTriggerScheduleSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_month: cdktf.listMapper(cdktf.numberToTerraform)(struct!.daysOfMonth),
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform)(struct!.daysOfWeek),
    hours: cdktf.listMapper(cdktf.numberToTerraform)(struct!.hours),
    minutes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.minutes),
    monthly: cdktf.listMapper(dataFactoryTriggerScheduleScheduleMonthlyToTerraform)(struct!.monthly),
  }
}

export class DataFactoryTriggerScheduleScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryTriggerScheduleSchedule | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._daysOfMonth) {
      hasAnyValues = true;
      internalValueResult.daysOfMonth = this._daysOfMonth;
    }
    if (this._daysOfWeek) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._hours) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._monthly) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryTriggerScheduleSchedule | undefined) {
    if (value === undefined) {
      this._daysOfMonth = undefined;
      this._daysOfWeek = undefined;
      this._hours = undefined;
      this._minutes = undefined;
      this._monthly = undefined;
    }
    else {
      this._daysOfMonth = value.daysOfMonth;
      this._daysOfWeek = value.daysOfWeek;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._monthly = value.monthly;
    }
  }

  // days_of_month - computed: false, optional: true, required: false
  private _daysOfMonth?: number[]; 
  public get daysOfMonth() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('days_of_month') as any;
  }
  public set daysOfMonth(value: number[]) {
    this._daysOfMonth = value;
  }
  public resetDaysOfMonth() {
    this._daysOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfMonthInput() {
    return this._daysOfMonth;
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number[]; 
  public get hours() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('hours') as any;
  }
  public set hours(value: number[]) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number[]; 
  public get minutes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('minutes') as any;
  }
  public set minutes(value: number[]) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly?: DataFactoryTriggerScheduleScheduleMonthly[]; 
  public get monthly() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('monthly') as any;
  }
  public set monthly(value: DataFactoryTriggerScheduleScheduleMonthly[]) {
    this._monthly = value;
  }
  public resetMonthly() {
    this._monthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly;
  }
}
export interface DataFactoryTriggerScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#create DataFactoryTriggerSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#delete DataFactoryTriggerSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#read DataFactoryTriggerSchedule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html#update DataFactoryTriggerSchedule#update}
  */
  readonly update?: string;
}

export function dataFactoryTriggerScheduleTimeoutsToTerraform(struct?: DataFactoryTriggerScheduleTimeoutsOutputReference | DataFactoryTriggerScheduleTimeouts): any {
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

export class DataFactoryTriggerScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryTriggerScheduleTimeouts | undefined {
    let hasAnyValues = false;
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

  public set internalValue(value: DataFactoryTriggerScheduleTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html azurerm_data_factory_trigger_schedule}
*/
export class DataFactoryTriggerSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_trigger_schedule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html azurerm_data_factory_trigger_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryTriggerScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryTriggerScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_trigger_schedule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activated = config.activated;
    this._annotations = config.annotations;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._endTime = config.endTime;
    this._frequency = config.frequency;
    this._interval = config.interval;
    this._name = config.name;
    this._pipelineName = config.pipelineName;
    this._pipelineParameters = config.pipelineParameters;
    this._resourceGroupName = config.resourceGroupName;
    this._startTime = config.startTime;
    this._schedule.internalValue = config.schedule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated - computed: true, optional: true, required: false
  private _activated?: boolean | cdktf.IResolvable; 
  public get activated() {
    return this.getBooleanAttribute('activated') as any;
  }
  public set activated(value: boolean | cdktf.IResolvable) {
    this._activated = value;
  }
  public resetActivated() {
    this._activated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedInput() {
    return this._activated;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[]; 
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[]) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName?: string; 
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryNameInput() {
    return this._dataFactoryName;
  }

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

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // pipeline_name - computed: false, optional: false, required: true
  private _pipelineName?: string; 
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineNameInput() {
    return this._pipelineName;
  }

  // pipeline_parameters - computed: false, optional: true, required: false
  private _pipelineParameters?: { [key: string]: string } | cdktf.IResolvable; 
  public get pipelineParameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pipeline_parameters') as any;
  }
  public set pipelineParameters(value: { [key: string]: string } | cdktf.IResolvable) {
    this._pipelineParameters = value;
  }
  public resetPipelineParameters() {
    this._pipelineParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineParametersInput() {
    return this._pipelineParameters;
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

  // start_time - computed: true, optional: true, required: false
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

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DataFactoryTriggerScheduleScheduleOutputReference(this as any, "schedule", true);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataFactoryTriggerScheduleSchedule) {
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
  private _timeouts = new DataFactoryTriggerScheduleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryTriggerScheduleTimeouts) {
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
      activated: cdktf.booleanToTerraform(this._activated),
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      end_time: cdktf.stringToTerraform(this._endTime),
      frequency: cdktf.stringToTerraform(this._frequency),
      interval: cdktf.numberToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      pipeline_name: cdktf.stringToTerraform(this._pipelineName),
      pipeline_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._pipelineParameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      start_time: cdktf.stringToTerraform(this._startTime),
      schedule: dataFactoryTriggerScheduleScheduleToTerraform(this._schedule.internalValue),
      timeouts: dataFactoryTriggerScheduleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
