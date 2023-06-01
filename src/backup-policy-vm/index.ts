/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupPolicyVmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#id BackupPolicyVm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#instant_restore_retention_days BackupPolicyVm#instant_restore_retention_days}
  */
  readonly instantRestoreRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#name BackupPolicyVm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#policy_type BackupPolicyVm#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#recovery_vault_name BackupPolicyVm#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#resource_group_name BackupPolicyVm#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#timezone BackupPolicyVm#timezone}
  */
  readonly timezone?: string;
  /**
  * backup block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#backup BackupPolicyVm#backup}
  */
  readonly backup: BackupPolicyVmBackup;
  /**
  * instant_restore_resource_group block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#instant_restore_resource_group BackupPolicyVm#instant_restore_resource_group}
  */
  readonly instantRestoreResourceGroup?: BackupPolicyVmInstantRestoreResourceGroup;
  /**
  * retention_daily block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#retention_daily BackupPolicyVm#retention_daily}
  */
  readonly retentionDaily?: BackupPolicyVmRetentionDaily;
  /**
  * retention_monthly block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#retention_monthly BackupPolicyVm#retention_monthly}
  */
  readonly retentionMonthly?: BackupPolicyVmRetentionMonthly;
  /**
  * retention_weekly block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#retention_weekly BackupPolicyVm#retention_weekly}
  */
  readonly retentionWeekly?: BackupPolicyVmRetentionWeekly;
  /**
  * retention_yearly block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#retention_yearly BackupPolicyVm#retention_yearly}
  */
  readonly retentionYearly?: BackupPolicyVmRetentionYearly;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#timeouts BackupPolicyVm#timeouts}
  */
  readonly timeouts?: BackupPolicyVmTimeouts;
}
export interface BackupPolicyVmBackup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#frequency BackupPolicyVm#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#hour_duration BackupPolicyVm#hour_duration}
  */
  readonly hourDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#hour_interval BackupPolicyVm#hour_interval}
  */
  readonly hourInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#time BackupPolicyVm#time}
  */
  readonly time: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}
  */
  readonly weekdays?: string[];
}

export function backupPolicyVmBackupToTerraform(struct?: BackupPolicyVmBackupOutputReference | BackupPolicyVmBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_duration: cdktf.numberToTerraform(struct!.hourDuration),
    hour_interval: cdktf.numberToTerraform(struct!.hourInterval),
    time: cdktf.stringToTerraform(struct!.time),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
  }
}

export class BackupPolicyVmBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourDuration = this._hourDuration;
    }
    if (this._hourInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourInterval = this._hourInterval;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._hourDuration = undefined;
      this._hourInterval = undefined;
      this._time = undefined;
      this._weekdays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._hourDuration = value.hourDuration;
      this._hourInterval = value.hourInterval;
      this._time = value.time;
      this._weekdays = value.weekdays;
    }
  }

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

  // hour_duration - computed: false, optional: true, required: false
  private _hourDuration?: number; 
  public get hourDuration() {
    return this.getNumberAttribute('hour_duration');
  }
  public set hourDuration(value: number) {
    this._hourDuration = value;
  }
  public resetHourDuration() {
    this._hourDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourDurationInput() {
    return this._hourDuration;
  }

  // hour_interval - computed: false, optional: true, required: false
  private _hourInterval?: number; 
  public get hourInterval() {
    return this.getNumberAttribute('hour_interval');
  }
  public set hourInterval(value: number) {
    this._hourInterval = value;
  }
  public resetHourInterval() {
    this._hourInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourIntervalInput() {
    return this._hourInterval;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }
}
export interface BackupPolicyVmInstantRestoreResourceGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#prefix BackupPolicyVm#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#suffix BackupPolicyVm#suffix}
  */
  readonly suffix?: string;
}

export function backupPolicyVmInstantRestoreResourceGroupToTerraform(struct?: BackupPolicyVmInstantRestoreResourceGroupOutputReference | BackupPolicyVmInstantRestoreResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}

export class BackupPolicyVmInstantRestoreResourceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmInstantRestoreResourceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmInstantRestoreResourceGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface BackupPolicyVmRetentionDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}
  */
  readonly count: number;
}

export function backupPolicyVmRetentionDailyToTerraform(struct?: BackupPolicyVmRetentionDailyOutputReference | BackupPolicyVmRetentionDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}

export class BackupPolicyVmRetentionDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmRetentionDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmRetentionDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}
export interface BackupPolicyVmRetentionMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}
  */
  readonly days?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}
  */
  readonly includeLastDays?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}
  */
  readonly weeks?: string[];
}

export function backupPolicyVmRetentionMonthlyToTerraform(struct?: BackupPolicyVmRetentionMonthlyOutputReference | BackupPolicyVmRetentionMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.days),
    include_last_days: cdktf.booleanToTerraform(struct!.includeLastDays),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    weeks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weeks),
  }
}

export class BackupPolicyVmRetentionMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmRetentionMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._includeLastDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLastDays = this._includeLastDays;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmRetentionMonthly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._days = undefined;
      this._includeLastDays = undefined;
      this._weekdays = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._days = value.days;
      this._includeLastDays = value.includeLastDays;
      this._weekdays = value.weekdays;
      this._weeks = value.weeks;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // days - computed: false, optional: true, required: false
  private _days?: number[]; 
  public get days() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days')));
  }
  public set days(value: number[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // include_last_days - computed: false, optional: true, required: false
  private _includeLastDays?: boolean | cdktf.IResolvable; 
  public get includeLastDays() {
    return this.getBooleanAttribute('include_last_days');
  }
  public set includeLastDays(value: boolean | cdktf.IResolvable) {
    this._includeLastDays = value;
  }
  public resetIncludeLastDays() {
    this._includeLastDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLastDaysInput() {
    return this._includeLastDays;
  }

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: string[]; 
  public get weeks() {
    return cdktf.Fn.tolist(this.getListAttribute('weeks'));
  }
  public set weeks(value: string[]) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface BackupPolicyVmRetentionWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}
  */
  readonly weekdays: string[];
}

export function backupPolicyVmRetentionWeeklyToTerraform(struct?: BackupPolicyVmRetentionWeeklyOutputReference | BackupPolicyVmRetentionWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
  }
}

export class BackupPolicyVmRetentionWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmRetentionWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmRetentionWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._weekdays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._weekdays = value.weekdays;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // weekdays - computed: false, optional: false, required: true
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }
}
export interface BackupPolicyVmRetentionYearly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}
  */
  readonly days?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}
  */
  readonly includeLastDays?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#months BackupPolicyVm#months}
  */
  readonly months: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}
  */
  readonly weeks?: string[];
}

export function backupPolicyVmRetentionYearlyToTerraform(struct?: BackupPolicyVmRetentionYearlyOutputReference | BackupPolicyVmRetentionYearly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.days),
    include_last_days: cdktf.booleanToTerraform(struct!.includeLastDays),
    months: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.months),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    weeks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weeks),
  }
}

export class BackupPolicyVmRetentionYearlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmRetentionYearly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._includeLastDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLastDays = this._includeLastDays;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmRetentionYearly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._days = undefined;
      this._includeLastDays = undefined;
      this._months = undefined;
      this._weekdays = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._days = value.days;
      this._includeLastDays = value.includeLastDays;
      this._months = value.months;
      this._weekdays = value.weekdays;
      this._weeks = value.weeks;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // days - computed: false, optional: true, required: false
  private _days?: number[]; 
  public get days() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days')));
  }
  public set days(value: number[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // include_last_days - computed: false, optional: true, required: false
  private _includeLastDays?: boolean | cdktf.IResolvable; 
  public get includeLastDays() {
    return this.getBooleanAttribute('include_last_days');
  }
  public set includeLastDays(value: boolean | cdktf.IResolvable) {
    this._includeLastDays = value;
  }
  public resetIncludeLastDays() {
    this._includeLastDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLastDaysInput() {
    return this._includeLastDays;
  }

  // months - computed: false, optional: false, required: true
  private _months?: string[]; 
  public get months() {
    return cdktf.Fn.tolist(this.getListAttribute('months'));
  }
  public set months(value: string[]) {
    this._months = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: string[]; 
  public get weeks() {
    return cdktf.Fn.tolist(this.getListAttribute('weeks'));
  }
  public set weeks(value: string[]) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface BackupPolicyVmTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#create BackupPolicyVm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#delete BackupPolicyVm#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#read BackupPolicyVm#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm#update BackupPolicyVm#update}
  */
  readonly update?: string;
}

export function backupPolicyVmTimeoutsToTerraform(struct?: BackupPolicyVmTimeouts | cdktf.IResolvable): any {
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

export class BackupPolicyVmTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupPolicyVmTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BackupPolicyVmTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm azurerm_backup_policy_vm}
*/
export class BackupPolicyVm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_backup_policy_vm";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/backup_policy_vm azurerm_backup_policy_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupPolicyVmConfig
  */
  public constructor(scope: Construct, id: string, config: BackupPolicyVmConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_backup_policy_vm',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.58.0',
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
    this._instantRestoreRetentionDays = config.instantRestoreRetentionDays;
    this._name = config.name;
    this._policyType = config.policyType;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._timezone = config.timezone;
    this._backup.internalValue = config.backup;
    this._instantRestoreResourceGroup.internalValue = config.instantRestoreResourceGroup;
    this._retentionDaily.internalValue = config.retentionDaily;
    this._retentionMonthly.internalValue = config.retentionMonthly;
    this._retentionWeekly.internalValue = config.retentionWeekly;
    this._retentionYearly.internalValue = config.retentionYearly;
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

  // instant_restore_retention_days - computed: true, optional: true, required: false
  private _instantRestoreRetentionDays?: number; 
  public get instantRestoreRetentionDays() {
    return this.getNumberAttribute('instant_restore_retention_days');
  }
  public set instantRestoreRetentionDays(value: number) {
    this._instantRestoreRetentionDays = value;
  }
  public resetInstantRestoreRetentionDays() {
    this._instantRestoreRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantRestoreRetentionDaysInput() {
    return this._instantRestoreRetentionDays;
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

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName?: string; 
  public get recoveryVaultName() {
    return this.getStringAttribute('recovery_vault_name');
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryVaultNameInput() {
    return this._recoveryVaultName;
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

  // backup - computed: false, optional: false, required: true
  private _backup = new BackupPolicyVmBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: BackupPolicyVmBackup) {
    this._backup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // instant_restore_resource_group - computed: false, optional: true, required: false
  private _instantRestoreResourceGroup = new BackupPolicyVmInstantRestoreResourceGroupOutputReference(this, "instant_restore_resource_group");
  public get instantRestoreResourceGroup() {
    return this._instantRestoreResourceGroup;
  }
  public putInstantRestoreResourceGroup(value: BackupPolicyVmInstantRestoreResourceGroup) {
    this._instantRestoreResourceGroup.internalValue = value;
  }
  public resetInstantRestoreResourceGroup() {
    this._instantRestoreResourceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantRestoreResourceGroupInput() {
    return this._instantRestoreResourceGroup.internalValue;
  }

  // retention_daily - computed: false, optional: true, required: false
  private _retentionDaily = new BackupPolicyVmRetentionDailyOutputReference(this, "retention_daily");
  public get retentionDaily() {
    return this._retentionDaily;
  }
  public putRetentionDaily(value: BackupPolicyVmRetentionDaily) {
    this._retentionDaily.internalValue = value;
  }
  public resetRetentionDaily() {
    this._retentionDaily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDailyInput() {
    return this._retentionDaily.internalValue;
  }

  // retention_monthly - computed: false, optional: true, required: false
  private _retentionMonthly = new BackupPolicyVmRetentionMonthlyOutputReference(this, "retention_monthly");
  public get retentionMonthly() {
    return this._retentionMonthly;
  }
  public putRetentionMonthly(value: BackupPolicyVmRetentionMonthly) {
    this._retentionMonthly.internalValue = value;
  }
  public resetRetentionMonthly() {
    this._retentionMonthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionMonthlyInput() {
    return this._retentionMonthly.internalValue;
  }

  // retention_weekly - computed: false, optional: true, required: false
  private _retentionWeekly = new BackupPolicyVmRetentionWeeklyOutputReference(this, "retention_weekly");
  public get retentionWeekly() {
    return this._retentionWeekly;
  }
  public putRetentionWeekly(value: BackupPolicyVmRetentionWeekly) {
    this._retentionWeekly.internalValue = value;
  }
  public resetRetentionWeekly() {
    this._retentionWeekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionWeeklyInput() {
    return this._retentionWeekly.internalValue;
  }

  // retention_yearly - computed: false, optional: true, required: false
  private _retentionYearly = new BackupPolicyVmRetentionYearlyOutputReference(this, "retention_yearly");
  public get retentionYearly() {
    return this._retentionYearly;
  }
  public putRetentionYearly(value: BackupPolicyVmRetentionYearly) {
    this._retentionYearly.internalValue = value;
  }
  public resetRetentionYearly() {
    this._retentionYearly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionYearlyInput() {
    return this._retentionYearly.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackupPolicyVmTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackupPolicyVmTimeouts) {
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
      instant_restore_retention_days: cdktf.numberToTerraform(this._instantRestoreRetentionDays),
      name: cdktf.stringToTerraform(this._name),
      policy_type: cdktf.stringToTerraform(this._policyType),
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timezone: cdktf.stringToTerraform(this._timezone),
      backup: backupPolicyVmBackupToTerraform(this._backup.internalValue),
      instant_restore_resource_group: backupPolicyVmInstantRestoreResourceGroupToTerraform(this._instantRestoreResourceGroup.internalValue),
      retention_daily: backupPolicyVmRetentionDailyToTerraform(this._retentionDaily.internalValue),
      retention_monthly: backupPolicyVmRetentionMonthlyToTerraform(this._retentionMonthly.internalValue),
      retention_weekly: backupPolicyVmRetentionWeeklyToTerraform(this._retentionWeekly.internalValue),
      retention_yearly: backupPolicyVmRetentionYearlyToTerraform(this._retentionYearly.internalValue),
      timeouts: backupPolicyVmTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
