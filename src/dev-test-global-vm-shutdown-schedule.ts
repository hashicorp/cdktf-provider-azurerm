// https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevTestGlobalVmShutdownScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#daily_recurrence_time DevTestGlobalVmShutdownSchedule#daily_recurrence_time}
  */
  readonly dailyRecurrenceTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#enabled DevTestGlobalVmShutdownSchedule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#location DevTestGlobalVmShutdownSchedule#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#tags DevTestGlobalVmShutdownSchedule#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#timezone DevTestGlobalVmShutdownSchedule#timezone}
  */
  readonly timezone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#virtual_machine_id DevTestGlobalVmShutdownSchedule#virtual_machine_id}
  */
  readonly virtualMachineId: string;
  /**
  * notification_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#notification_settings DevTestGlobalVmShutdownSchedule#notification_settings}
  */
  readonly notificationSettings: DevTestGlobalVmShutdownScheduleNotificationSettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#timeouts DevTestGlobalVmShutdownSchedule#timeouts}
  */
  readonly timeouts?: DevTestGlobalVmShutdownScheduleTimeouts;
}
export interface DevTestGlobalVmShutdownScheduleNotificationSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#email DevTestGlobalVmShutdownSchedule#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#enabled DevTestGlobalVmShutdownSchedule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#time_in_minutes DevTestGlobalVmShutdownSchedule#time_in_minutes}
  */
  readonly timeInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#webhook_url DevTestGlobalVmShutdownSchedule#webhook_url}
  */
  readonly webhookUrl?: string;
}

export function devTestGlobalVmShutdownScheduleNotificationSettingsToTerraform(struct?: DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference | DevTestGlobalVmShutdownScheduleNotificationSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    time_in_minutes: cdktf.numberToTerraform(struct!.timeInMinutes),
    webhook_url: cdktf.stringToTerraform(struct!.webhookUrl),
  }
}

export class DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DevTestGlobalVmShutdownScheduleNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInMinutes = this._timeInMinutes;
    }
    if (this._webhookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookUrl = this._webhookUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevTestGlobalVmShutdownScheduleNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._enabled = undefined;
      this._timeInMinutes = undefined;
      this._webhookUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._enabled = value.enabled;
      this._timeInMinutes = value.timeInMinutes;
      this._webhookUrl = value.webhookUrl;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // time_in_minutes - computed: false, optional: true, required: false
  private _timeInMinutes?: number; 
  public get timeInMinutes() {
    return this.getNumberAttribute('time_in_minutes');
  }
  public set timeInMinutes(value: number) {
    this._timeInMinutes = value;
  }
  public resetTimeInMinutes() {
    this._timeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInMinutesInput() {
    return this._timeInMinutes;
  }

  // webhook_url - computed: false, optional: true, required: false
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  public resetWebhookUrl() {
    this._webhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }
}
export interface DevTestGlobalVmShutdownScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#create DevTestGlobalVmShutdownSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#delete DevTestGlobalVmShutdownSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#read DevTestGlobalVmShutdownSchedule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#update DevTestGlobalVmShutdownSchedule#update}
  */
  readonly update?: string;
}

export function devTestGlobalVmShutdownScheduleTimeoutsToTerraform(struct?: DevTestGlobalVmShutdownScheduleTimeoutsOutputReference | DevTestGlobalVmShutdownScheduleTimeouts): any {
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

export class DevTestGlobalVmShutdownScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DevTestGlobalVmShutdownScheduleTimeouts | undefined {
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

  public set internalValue(value: DevTestGlobalVmShutdownScheduleTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html azurerm_dev_test_global_vm_shutdown_schedule}
*/
export class DevTestGlobalVmShutdownSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_dev_test_global_vm_shutdown_schedule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html azurerm_dev_test_global_vm_shutdown_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevTestGlobalVmShutdownScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DevTestGlobalVmShutdownScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_test_global_vm_shutdown_schedule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dailyRecurrenceTime = config.dailyRecurrenceTime;
    this._enabled = config.enabled;
    this._location = config.location;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._virtualMachineId = config.virtualMachineId;
    this._notificationSettings.internalValue = config.notificationSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daily_recurrence_time - computed: false, optional: false, required: true
  private _dailyRecurrenceTime?: string; 
  public get dailyRecurrenceTime() {
    return this.getStringAttribute('daily_recurrence_time');
  }
  public set dailyRecurrenceTime(value: string) {
    this._dailyRecurrenceTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyRecurrenceTimeInput() {
    return this._dailyRecurrenceTime;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId?: string; 
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId;
  }

  // notification_settings - computed: false, optional: false, required: true
  private _notificationSettings = new DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference(this as any, "notification_settings", true);
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: DevTestGlobalVmShutdownScheduleNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevTestGlobalVmShutdownScheduleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevTestGlobalVmShutdownScheduleTimeouts) {
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
      daily_recurrence_time: cdktf.stringToTerraform(this._dailyRecurrenceTime),
      enabled: cdktf.booleanToTerraform(this._enabled),
      location: cdktf.stringToTerraform(this._location),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
      notification_settings: devTestGlobalVmShutdownScheduleNotificationSettingsToTerraform(this._notificationSettings.internalValue),
      timeouts: devTestGlobalVmShutdownScheduleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
