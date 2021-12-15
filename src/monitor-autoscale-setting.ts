// https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorAutoscaleSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#enabled MonitorAutoscaleSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#location MonitorAutoscaleSetting#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#name MonitorAutoscaleSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#resource_group_name MonitorAutoscaleSetting#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#tags MonitorAutoscaleSetting#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#target_resource_id MonitorAutoscaleSetting#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * notification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#notification MonitorAutoscaleSetting#notification}
  */
  readonly notification?: MonitorAutoscaleSettingNotification;
  /**
  * profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#profile MonitorAutoscaleSetting#profile}
  */
  readonly profile: MonitorAutoscaleSettingProfile[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#timeouts MonitorAutoscaleSetting#timeouts}
  */
  readonly timeouts?: MonitorAutoscaleSettingTimeouts;
}
export interface MonitorAutoscaleSettingNotificationEmail {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#custom_emails MonitorAutoscaleSetting#custom_emails}
  */
  readonly customEmails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#send_to_subscription_administrator MonitorAutoscaleSetting#send_to_subscription_administrator}
  */
  readonly sendToSubscriptionAdministrator?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#send_to_subscription_co_administrator MonitorAutoscaleSetting#send_to_subscription_co_administrator}
  */
  readonly sendToSubscriptionCoAdministrator?: boolean | cdktf.IResolvable;
}

export function monitorAutoscaleSettingNotificationEmailToTerraform(struct?: MonitorAutoscaleSettingNotificationEmailOutputReference | MonitorAutoscaleSettingNotificationEmail): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_emails: cdktf.listMapper(cdktf.stringToTerraform)(struct!.customEmails),
    send_to_subscription_administrator: cdktf.booleanToTerraform(struct!.sendToSubscriptionAdministrator),
    send_to_subscription_co_administrator: cdktf.booleanToTerraform(struct!.sendToSubscriptionCoAdministrator),
  }
}

export class MonitorAutoscaleSettingNotificationEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorAutoscaleSettingNotificationEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEmails = this._customEmails;
    }
    if (this._sendToSubscriptionAdministrator !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToSubscriptionAdministrator = this._sendToSubscriptionAdministrator;
    }
    if (this._sendToSubscriptionCoAdministrator !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToSubscriptionCoAdministrator = this._sendToSubscriptionCoAdministrator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingNotificationEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customEmails = undefined;
      this._sendToSubscriptionAdministrator = undefined;
      this._sendToSubscriptionCoAdministrator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customEmails = value.customEmails;
      this._sendToSubscriptionAdministrator = value.sendToSubscriptionAdministrator;
      this._sendToSubscriptionCoAdministrator = value.sendToSubscriptionCoAdministrator;
    }
  }

  // custom_emails - computed: false, optional: true, required: false
  private _customEmails?: string[]; 
  public get customEmails() {
    return this.getListAttribute('custom_emails');
  }
  public set customEmails(value: string[]) {
    this._customEmails = value;
  }
  public resetCustomEmails() {
    this._customEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEmailsInput() {
    return this._customEmails;
  }

  // send_to_subscription_administrator - computed: false, optional: true, required: false
  private _sendToSubscriptionAdministrator?: boolean | cdktf.IResolvable; 
  public get sendToSubscriptionAdministrator() {
    return this.getBooleanAttribute('send_to_subscription_administrator') as any;
  }
  public set sendToSubscriptionAdministrator(value: boolean | cdktf.IResolvable) {
    this._sendToSubscriptionAdministrator = value;
  }
  public resetSendToSubscriptionAdministrator() {
    this._sendToSubscriptionAdministrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToSubscriptionAdministratorInput() {
    return this._sendToSubscriptionAdministrator;
  }

  // send_to_subscription_co_administrator - computed: false, optional: true, required: false
  private _sendToSubscriptionCoAdministrator?: boolean | cdktf.IResolvable; 
  public get sendToSubscriptionCoAdministrator() {
    return this.getBooleanAttribute('send_to_subscription_co_administrator') as any;
  }
  public set sendToSubscriptionCoAdministrator(value: boolean | cdktf.IResolvable) {
    this._sendToSubscriptionCoAdministrator = value;
  }
  public resetSendToSubscriptionCoAdministrator() {
    this._sendToSubscriptionCoAdministrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToSubscriptionCoAdministratorInput() {
    return this._sendToSubscriptionCoAdministrator;
  }
}
export interface MonitorAutoscaleSettingNotificationWebhook {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#properties MonitorAutoscaleSetting#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#service_uri MonitorAutoscaleSetting#service_uri}
  */
  readonly serviceUri: string;
}

export function monitorAutoscaleSettingNotificationWebhookToTerraform(struct?: MonitorAutoscaleSettingNotificationWebhook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    service_uri: cdktf.stringToTerraform(struct!.serviceUri),
  }
}

export interface MonitorAutoscaleSettingNotification {
  /**
  * email block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#email MonitorAutoscaleSetting#email}
  */
  readonly email?: MonitorAutoscaleSettingNotificationEmail;
  /**
  * webhook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#webhook MonitorAutoscaleSetting#webhook}
  */
  readonly webhook?: MonitorAutoscaleSettingNotificationWebhook[];
}

export function monitorAutoscaleSettingNotificationToTerraform(struct?: MonitorAutoscaleSettingNotificationOutputReference | MonitorAutoscaleSettingNotification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: monitorAutoscaleSettingNotificationEmailToTerraform(struct!.email),
    webhook: cdktf.listMapper(monitorAutoscaleSettingNotificationWebhookToTerraform)(struct!.webhook),
  }
}

export class MonitorAutoscaleSettingNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorAutoscaleSettingNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._webhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email.internalValue = undefined;
      this._webhook = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email.internalValue = value.email;
      this._webhook = value.webhook;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email = new MonitorAutoscaleSettingNotificationEmailOutputReference(this as any, "email", true);
  public get email() {
    return this._email;
  }
  public putEmail(value: MonitorAutoscaleSettingNotificationEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook?: MonitorAutoscaleSettingNotificationWebhook[]; 
  public get webhook() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('webhook') as any;
  }
  public set webhook(value: MonitorAutoscaleSettingNotificationWebhook[]) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook;
  }
}
export interface MonitorAutoscaleSettingProfileCapacity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#default MonitorAutoscaleSetting#default}
  */
  readonly default: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#maximum MonitorAutoscaleSetting#maximum}
  */
  readonly maximum: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#minimum MonitorAutoscaleSetting#minimum}
  */
  readonly minimum: number;
}

export function monitorAutoscaleSettingProfileCapacityToTerraform(struct?: MonitorAutoscaleSettingProfileCapacityOutputReference | MonitorAutoscaleSettingProfileCapacity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.numberToTerraform(struct!.default),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
  }
}

export class MonitorAutoscaleSettingProfileCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorAutoscaleSettingProfileCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingProfileCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
    }
  }

  // default - computed: false, optional: false, required: true
  private _default?: number; 
  public get default() {
    return this.getNumberAttribute('default');
  }
  public set default(value: number) {
    this._default = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // maximum - computed: false, optional: false, required: true
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: false, required: true
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}
export interface MonitorAutoscaleSettingProfileFixedDate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#end MonitorAutoscaleSetting#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#start MonitorAutoscaleSetting#start}
  */
  readonly start: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#timezone MonitorAutoscaleSetting#timezone}
  */
  readonly timezone?: string;
}

export function monitorAutoscaleSettingProfileFixedDateToTerraform(struct?: MonitorAutoscaleSettingProfileFixedDateOutputReference | MonitorAutoscaleSettingProfileFixedDate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}

export class MonitorAutoscaleSettingProfileFixedDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorAutoscaleSettingProfileFixedDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingProfileFixedDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
      this._timezone = value.timezone;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface MonitorAutoscaleSettingProfileRecurrence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#days MonitorAutoscaleSetting#days}
  */
  readonly days: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#hours MonitorAutoscaleSetting#hours}
  */
  readonly hours: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#minutes MonitorAutoscaleSetting#minutes}
  */
  readonly minutes: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#timezone MonitorAutoscaleSetting#timezone}
  */
  readonly timezone?: string;
}

export function monitorAutoscaleSettingProfileRecurrenceToTerraform(struct?: MonitorAutoscaleSettingProfileRecurrenceOutputReference | MonitorAutoscaleSettingProfileRecurrence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.days),
    hours: cdktf.listMapper(cdktf.numberToTerraform)(struct!.hours),
    minutes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.minutes),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}

export class MonitorAutoscaleSettingProfileRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorAutoscaleSettingProfileRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingProfileRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._minutes = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._timezone = value.timezone;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: false, required: true
  private _hours?: number[]; 
  public get hours() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('hours') as any;
  }
  public set hours(value: number[]) {
    this._hours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: false, required: true
  private _minutes?: number[]; 
  public get minutes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('minutes') as any;
  }
  public set minutes(value: number[]) {
    this._minutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#name MonitorAutoscaleSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#operator MonitorAutoscaleSetting#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#values MonitorAutoscaleSetting#values}
  */
  readonly values: string[];
}

export function monitorAutoscaleSettingProfileRuleMetricTriggerDimensionsToTerraform(struct?: MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorAutoscaleSettingProfileRuleMetricTrigger {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#divide_by_instance_count MonitorAutoscaleSetting#divide_by_instance_count}
  */
  readonly divideByInstanceCount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#metric_name MonitorAutoscaleSetting#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#metric_namespace MonitorAutoscaleSetting#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#metric_resource_id MonitorAutoscaleSetting#metric_resource_id}
  */
  readonly metricResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#operator MonitorAutoscaleSetting#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#statistic MonitorAutoscaleSetting#statistic}
  */
  readonly statistic: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#threshold MonitorAutoscaleSetting#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#time_aggregation MonitorAutoscaleSetting#time_aggregation}
  */
  readonly timeAggregation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#time_grain MonitorAutoscaleSetting#time_grain}
  */
  readonly timeGrain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#time_window MonitorAutoscaleSetting#time_window}
  */
  readonly timeWindow: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#dimensions MonitorAutoscaleSetting#dimensions}
  */
  readonly dimensions?: MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions[];
}

export function monitorAutoscaleSettingProfileRuleMetricTriggerToTerraform(struct?: MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference | MonitorAutoscaleSettingProfileRuleMetricTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    divide_by_instance_count: cdktf.booleanToTerraform(struct!.divideByInstanceCount),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    metric_resource_id: cdktf.stringToTerraform(struct!.metricResourceId),
    operator: cdktf.stringToTerraform(struct!.operator),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    time_aggregation: cdktf.stringToTerraform(struct!.timeAggregation),
    time_grain: cdktf.stringToTerraform(struct!.timeGrain),
    time_window: cdktf.stringToTerraform(struct!.timeWindow),
    dimensions: cdktf.listMapper(monitorAutoscaleSettingProfileRuleMetricTriggerDimensionsToTerraform)(struct!.dimensions),
  }
}

export class MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorAutoscaleSettingProfileRuleMetricTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._divideByInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.divideByInstanceCount = this._divideByInstanceCount;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._metricResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricResourceId = this._metricResourceId;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._timeAggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAggregation = this._timeAggregation;
    }
    if (this._timeGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGrain = this._timeGrain;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingProfileRuleMetricTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._divideByInstanceCount = undefined;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._metricResourceId = undefined;
      this._operator = undefined;
      this._statistic = undefined;
      this._threshold = undefined;
      this._timeAggregation = undefined;
      this._timeGrain = undefined;
      this._timeWindow = undefined;
      this._dimensions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._divideByInstanceCount = value.divideByInstanceCount;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._metricResourceId = value.metricResourceId;
      this._operator = value.operator;
      this._statistic = value.statistic;
      this._threshold = value.threshold;
      this._timeAggregation = value.timeAggregation;
      this._timeGrain = value.timeGrain;
      this._timeWindow = value.timeWindow;
      this._dimensions = value.dimensions;
    }
  }

  // divide_by_instance_count - computed: false, optional: true, required: false
  private _divideByInstanceCount?: boolean | cdktf.IResolvable; 
  public get divideByInstanceCount() {
    return this.getBooleanAttribute('divide_by_instance_count') as any;
  }
  public set divideByInstanceCount(value: boolean | cdktf.IResolvable) {
    this._divideByInstanceCount = value;
  }
  public resetDivideByInstanceCount() {
    this._divideByInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divideByInstanceCountInput() {
    return this._divideByInstanceCount;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: false, optional: true, required: false
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  public resetMetricNamespace() {
    this._metricNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // metric_resource_id - computed: false, optional: false, required: true
  private _metricResourceId?: string; 
  public get metricResourceId() {
    return this.getStringAttribute('metric_resource_id');
  }
  public set metricResourceId(value: string) {
    this._metricResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricResourceIdInput() {
    return this._metricResourceId;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // statistic - computed: false, optional: false, required: true
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // time_aggregation - computed: false, optional: false, required: true
  private _timeAggregation?: string; 
  public get timeAggregation() {
    return this.getStringAttribute('time_aggregation');
  }
  public set timeAggregation(value: string) {
    this._timeAggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAggregationInput() {
    return this._timeAggregation;
  }

  // time_grain - computed: false, optional: false, required: true
  private _timeGrain?: string; 
  public get timeGrain() {
    return this.getStringAttribute('time_grain');
  }
  public set timeGrain(value: string) {
    this._timeGrain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGrainInput() {
    return this._timeGrain;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions[]; 
  public get dimensions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dimensions') as any;
  }
  public set dimensions(value: MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions[]) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }
}
export interface MonitorAutoscaleSettingProfileRuleScaleAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#cooldown MonitorAutoscaleSetting#cooldown}
  */
  readonly cooldown: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#direction MonitorAutoscaleSetting#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#type MonitorAutoscaleSetting#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#value MonitorAutoscaleSetting#value}
  */
  readonly value: number;
}

export function monitorAutoscaleSettingProfileRuleScaleActionToTerraform(struct?: MonitorAutoscaleSettingProfileRuleScaleActionOutputReference | MonitorAutoscaleSettingProfileRuleScaleAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown: cdktf.stringToTerraform(struct!.cooldown),
    direction: cdktf.stringToTerraform(struct!.direction),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class MonitorAutoscaleSettingProfileRuleScaleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorAutoscaleSettingProfileRuleScaleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingProfileRuleScaleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cooldown = undefined;
      this._direction = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cooldown = value.cooldown;
      this._direction = value.direction;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // cooldown - computed: false, optional: false, required: true
  private _cooldown?: string; 
  public get cooldown() {
    return this.getStringAttribute('cooldown');
  }
  public set cooldown(value: string) {
    this._cooldown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface MonitorAutoscaleSettingProfileRule {
  /**
  * metric_trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#metric_trigger MonitorAutoscaleSetting#metric_trigger}
  */
  readonly metricTrigger: MonitorAutoscaleSettingProfileRuleMetricTrigger;
  /**
  * scale_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#scale_action MonitorAutoscaleSetting#scale_action}
  */
  readonly scaleAction: MonitorAutoscaleSettingProfileRuleScaleAction;
}

export function monitorAutoscaleSettingProfileRuleToTerraform(struct?: MonitorAutoscaleSettingProfileRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_trigger: monitorAutoscaleSettingProfileRuleMetricTriggerToTerraform(struct!.metricTrigger),
    scale_action: monitorAutoscaleSettingProfileRuleScaleActionToTerraform(struct!.scaleAction),
  }
}

export interface MonitorAutoscaleSettingProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#name MonitorAutoscaleSetting#name}
  */
  readonly name: string;
  /**
  * capacity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#capacity MonitorAutoscaleSetting#capacity}
  */
  readonly capacity: MonitorAutoscaleSettingProfileCapacity;
  /**
  * fixed_date block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#fixed_date MonitorAutoscaleSetting#fixed_date}
  */
  readonly fixedDate?: MonitorAutoscaleSettingProfileFixedDate;
  /**
  * recurrence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#recurrence MonitorAutoscaleSetting#recurrence}
  */
  readonly recurrence?: MonitorAutoscaleSettingProfileRecurrence;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#rule MonitorAutoscaleSetting#rule}
  */
  readonly rule?: MonitorAutoscaleSettingProfileRule[];
}

export function monitorAutoscaleSettingProfileToTerraform(struct?: MonitorAutoscaleSettingProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    capacity: monitorAutoscaleSettingProfileCapacityToTerraform(struct!.capacity),
    fixed_date: monitorAutoscaleSettingProfileFixedDateToTerraform(struct!.fixedDate),
    recurrence: monitorAutoscaleSettingProfileRecurrenceToTerraform(struct!.recurrence),
    rule: cdktf.listMapper(monitorAutoscaleSettingProfileRuleToTerraform)(struct!.rule),
  }
}

export interface MonitorAutoscaleSettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#create MonitorAutoscaleSetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#delete MonitorAutoscaleSetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#read MonitorAutoscaleSetting#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html#update MonitorAutoscaleSetting#update}
  */
  readonly update?: string;
}

export function monitorAutoscaleSettingTimeoutsToTerraform(struct?: MonitorAutoscaleSettingTimeoutsOutputReference | MonitorAutoscaleSettingTimeouts): any {
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

export class MonitorAutoscaleSettingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorAutoscaleSettingTimeouts | undefined {
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

  public set internalValue(value: MonitorAutoscaleSettingTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html azurerm_monitor_autoscale_setting}
*/
export class MonitorAutoscaleSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_autoscale_setting";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html azurerm_monitor_autoscale_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorAutoscaleSettingConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorAutoscaleSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_autoscale_setting',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._targetResourceId = config.targetResourceId;
    this._notification.internalValue = config.notification;
    this._profile = config.profile;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new MonitorAutoscaleSettingNotificationOutputReference(this as any, "notification", true);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: MonitorAutoscaleSettingNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: MonitorAutoscaleSettingProfile[]; 
  public get profile() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('profile') as any;
  }
  public set profile(value: MonitorAutoscaleSettingProfile[]) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorAutoscaleSettingTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorAutoscaleSettingTimeouts) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      notification: monitorAutoscaleSettingNotificationToTerraform(this._notification.internalValue),
      profile: cdktf.listMapper(monitorAutoscaleSettingProfileToTerraform)(this._profile),
      timeouts: monitorAutoscaleSettingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
