// https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlFlexibleServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#administrator_login MysqlFlexibleServer#administrator_login}
  */
  readonly administratorLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#administrator_password MysqlFlexibleServer#administrator_password}
  */
  readonly administratorPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#backup_retention_days MysqlFlexibleServer#backup_retention_days}
  */
  readonly backupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#create_mode MysqlFlexibleServer#create_mode}
  */
  readonly createMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#delegated_subnet_id MysqlFlexibleServer#delegated_subnet_id}
  */
  readonly delegatedSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#geo_redundant_backup_enabled MysqlFlexibleServer#geo_redundant_backup_enabled}
  */
  readonly geoRedundantBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#location MysqlFlexibleServer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#name MysqlFlexibleServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#point_in_time_restore_time_in_utc MysqlFlexibleServer#point_in_time_restore_time_in_utc}
  */
  readonly pointInTimeRestoreTimeInUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#private_dns_zone_id MysqlFlexibleServer#private_dns_zone_id}
  */
  readonly privateDnsZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#replication_role MysqlFlexibleServer#replication_role}
  */
  readonly replicationRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#resource_group_name MysqlFlexibleServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#sku_name MysqlFlexibleServer#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#source_server_id MysqlFlexibleServer#source_server_id}
  */
  readonly sourceServerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#tags MysqlFlexibleServer#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#version MysqlFlexibleServer#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#zone MysqlFlexibleServer#zone}
  */
  readonly zone?: string;
  /**
  * high_availability block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#high_availability MysqlFlexibleServer#high_availability}
  */
  readonly highAvailability?: MysqlFlexibleServerHighAvailability;
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#maintenance_window MysqlFlexibleServer#maintenance_window}
  */
  readonly maintenanceWindow?: MysqlFlexibleServerMaintenanceWindow;
  /**
  * storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#storage MysqlFlexibleServer#storage}
  */
  readonly storage?: MysqlFlexibleServerStorage;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#timeouts MysqlFlexibleServer#timeouts}
  */
  readonly timeouts?: MysqlFlexibleServerTimeouts;
}
export interface MysqlFlexibleServerHighAvailability {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#mode MysqlFlexibleServer#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#standby_availability_zone MysqlFlexibleServer#standby_availability_zone}
  */
  readonly standbyAvailabilityZone?: string;
}

export function mysqlFlexibleServerHighAvailabilityToTerraform(struct?: MysqlFlexibleServerHighAvailabilityOutputReference | MysqlFlexibleServerHighAvailability): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    standby_availability_zone: cdktf.stringToTerraform(struct!.standbyAvailabilityZone),
  }
}

export class MysqlFlexibleServerHighAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MysqlFlexibleServerHighAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._standbyAvailabilityZone) {
      hasAnyValues = true;
      internalValueResult.standbyAvailabilityZone = this._standbyAvailabilityZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlFlexibleServerHighAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._standbyAvailabilityZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._standbyAvailabilityZone = value.standbyAvailabilityZone;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // standby_availability_zone - computed: true, optional: true, required: false
  private _standbyAvailabilityZone?: string; 
  public get standbyAvailabilityZone() {
    return this.getStringAttribute('standby_availability_zone');
  }
  public set standbyAvailabilityZone(value: string) {
    this._standbyAvailabilityZone = value;
  }
  public resetStandbyAvailabilityZone() {
    this._standbyAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyAvailabilityZoneInput() {
    return this._standbyAvailabilityZone;
  }
}
export interface MysqlFlexibleServerMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#day_of_week MysqlFlexibleServer#day_of_week}
  */
  readonly dayOfWeek?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#start_hour MysqlFlexibleServer#start_hour}
  */
  readonly startHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#start_minute MysqlFlexibleServer#start_minute}
  */
  readonly startMinute?: number;
}

export function mysqlFlexibleServerMaintenanceWindowToTerraform(struct?: MysqlFlexibleServerMaintenanceWindowOutputReference | MysqlFlexibleServerMaintenanceWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.numberToTerraform(struct!.dayOfWeek),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    start_minute: cdktf.numberToTerraform(struct!.startMinute),
  }
}

export class MysqlFlexibleServerMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MysqlFlexibleServerMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._startHour) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._startMinute) {
      hasAnyValues = true;
      internalValueResult.startMinute = this._startMinute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlFlexibleServerMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._startHour = undefined;
      this._startMinute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._startHour = value.startHour;
      this._startMinute = value.startMinute;
    }
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: number; 
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }
  public set dayOfWeek(value: number) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // start_hour - computed: false, optional: true, required: false
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  public resetStartHour() {
    this._startHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // start_minute - computed: false, optional: true, required: false
  private _startMinute?: number; 
  public get startMinute() {
    return this.getNumberAttribute('start_minute');
  }
  public set startMinute(value: number) {
    this._startMinute = value;
  }
  public resetStartMinute() {
    this._startMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinuteInput() {
    return this._startMinute;
  }
}
export interface MysqlFlexibleServerStorage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#auto_grow_enabled MysqlFlexibleServer#auto_grow_enabled}
  */
  readonly autoGrowEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#iops MysqlFlexibleServer#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#size_gb MysqlFlexibleServer#size_gb}
  */
  readonly sizeGb?: number;
}

export function mysqlFlexibleServerStorageToTerraform(struct?: MysqlFlexibleServerStorageOutputReference | MysqlFlexibleServerStorage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_grow_enabled: cdktf.booleanToTerraform(struct!.autoGrowEnabled),
    iops: cdktf.numberToTerraform(struct!.iops),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
  }
}

export class MysqlFlexibleServerStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MysqlFlexibleServerStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoGrowEnabled) {
      hasAnyValues = true;
      internalValueResult.autoGrowEnabled = this._autoGrowEnabled;
    }
    if (this._iops) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._sizeGb) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlFlexibleServerStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoGrowEnabled = undefined;
      this._iops = undefined;
      this._sizeGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoGrowEnabled = value.autoGrowEnabled;
      this._iops = value.iops;
      this._sizeGb = value.sizeGb;
    }
  }

  // auto_grow_enabled - computed: false, optional: true, required: false
  private _autoGrowEnabled?: boolean | cdktf.IResolvable; 
  public get autoGrowEnabled() {
    return this.getBooleanAttribute('auto_grow_enabled') as any;
  }
  public set autoGrowEnabled(value: boolean | cdktf.IResolvable) {
    this._autoGrowEnabled = value;
  }
  public resetAutoGrowEnabled() {
    this._autoGrowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGrowEnabledInput() {
    return this._autoGrowEnabled;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // size_gb - computed: true, optional: true, required: false
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  public resetSizeGb() {
    this._sizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }
}
export interface MysqlFlexibleServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#create MysqlFlexibleServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#delete MysqlFlexibleServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#read MysqlFlexibleServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html#update MysqlFlexibleServer#update}
  */
  readonly update?: string;
}

export function mysqlFlexibleServerTimeoutsToTerraform(struct?: MysqlFlexibleServerTimeoutsOutputReference | MysqlFlexibleServerTimeouts): any {
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

export class MysqlFlexibleServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MysqlFlexibleServerTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
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

  public set internalValue(value: MysqlFlexibleServerTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html azurerm_mysql_flexible_server}
*/
export class MysqlFlexibleServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_mysql_flexible_server";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/mysql_flexible_server.html azurerm_mysql_flexible_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlFlexibleServerConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlFlexibleServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mysql_flexible_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._administratorLogin = config.administratorLogin;
    this._administratorPassword = config.administratorPassword;
    this._backupRetentionDays = config.backupRetentionDays;
    this._createMode = config.createMode;
    this._delegatedSubnetId = config.delegatedSubnetId;
    this._geoRedundantBackupEnabled = config.geoRedundantBackupEnabled;
    this._location = config.location;
    this._name = config.name;
    this._pointInTimeRestoreTimeInUtc = config.pointInTimeRestoreTimeInUtc;
    this._privateDnsZoneId = config.privateDnsZoneId;
    this._replicationRole = config.replicationRole;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._sourceServerId = config.sourceServerId;
    this._tags = config.tags;
    this._version = config.version;
    this._zone = config.zone;
    this._highAvailability.internalValue = config.highAvailability;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._storage.internalValue = config.storage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: true, optional: true, required: false
  private _administratorLogin?: string; 
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  public resetAdministratorLogin() {
    this._administratorLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin;
  }

  // administrator_password - computed: false, optional: true, required: false
  private _administratorPassword?: string; 
  public get administratorPassword() {
    return this.getStringAttribute('administrator_password');
  }
  public set administratorPassword(value: string) {
    this._administratorPassword = value;
  }
  public resetAdministratorPassword() {
    this._administratorPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorPasswordInput() {
    return this._administratorPassword;
  }

  // backup_retention_days - computed: false, optional: true, required: false
  private _backupRetentionDays?: number; 
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }
  public set backupRetentionDays(value: number) {
    this._backupRetentionDays = value;
  }
  public resetBackupRetentionDays() {
    this._backupRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionDaysInput() {
    return this._backupRetentionDays;
  }

  // create_mode - computed: false, optional: true, required: false
  private _createMode?: string; 
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }
  public set createMode(value: string) {
    this._createMode = value;
  }
  public resetCreateMode() {
    this._createMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createModeInput() {
    return this._createMode;
  }

  // delegated_subnet_id - computed: false, optional: true, required: false
  private _delegatedSubnetId?: string; 
  public get delegatedSubnetId() {
    return this.getStringAttribute('delegated_subnet_id');
  }
  public set delegatedSubnetId(value: string) {
    this._delegatedSubnetId = value;
  }
  public resetDelegatedSubnetId() {
    this._delegatedSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedSubnetIdInput() {
    return this._delegatedSubnetId;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // geo_redundant_backup_enabled - computed: false, optional: true, required: false
  private _geoRedundantBackupEnabled?: boolean | cdktf.IResolvable; 
  public get geoRedundantBackupEnabled() {
    return this.getBooleanAttribute('geo_redundant_backup_enabled') as any;
  }
  public set geoRedundantBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._geoRedundantBackupEnabled = value;
  }
  public resetGeoRedundantBackupEnabled() {
    this._geoRedundantBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRedundantBackupEnabledInput() {
    return this._geoRedundantBackupEnabled;
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

  // point_in_time_restore_time_in_utc - computed: false, optional: true, required: false
  private _pointInTimeRestoreTimeInUtc?: string; 
  public get pointInTimeRestoreTimeInUtc() {
    return this.getStringAttribute('point_in_time_restore_time_in_utc');
  }
  public set pointInTimeRestoreTimeInUtc(value: string) {
    this._pointInTimeRestoreTimeInUtc = value;
  }
  public resetPointInTimeRestoreTimeInUtc() {
    this._pointInTimeRestoreTimeInUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRestoreTimeInUtcInput() {
    return this._pointInTimeRestoreTimeInUtc;
  }

  // private_dns_zone_id - computed: false, optional: true, required: false
  private _privateDnsZoneId?: string; 
  public get privateDnsZoneId() {
    return this.getStringAttribute('private_dns_zone_id');
  }
  public set privateDnsZoneId(value: string) {
    this._privateDnsZoneId = value;
  }
  public resetPrivateDnsZoneId() {
    this._privateDnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneIdInput() {
    return this._privateDnsZoneId;
  }

  // public_network_access_enabled - computed: true, optional: false, required: false
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled') as any;
  }

  // replica_capacity - computed: true, optional: false, required: false
  public get replicaCapacity() {
    return this.getNumberAttribute('replica_capacity');
  }

  // replication_role - computed: true, optional: true, required: false
  private _replicationRole?: string; 
  public get replicationRole() {
    return this.getStringAttribute('replication_role');
  }
  public set replicationRole(value: string) {
    this._replicationRole = value;
  }
  public resetReplicationRole() {
    this._replicationRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRoleInput() {
    return this._replicationRole;
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

  // sku_name - computed: true, optional: true, required: false
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }

  // source_server_id - computed: false, optional: true, required: false
  private _sourceServerId?: string; 
  public get sourceServerId() {
    return this.getStringAttribute('source_server_id');
  }
  public set sourceServerId(value: string) {
    this._sourceServerId = value;
  }
  public resetSourceServerId() {
    this._sourceServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServerIdInput() {
    return this._sourceServerId;
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability = new MysqlFlexibleServerHighAvailabilityOutputReference(this as any, "high_availability", true);
  public get highAvailability() {
    return this._highAvailability;
  }
  public putHighAvailability(value: MysqlFlexibleServerHighAvailability) {
    this._highAvailability.internalValue = value;
  }
  public resetHighAvailability() {
    this._highAvailability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new MysqlFlexibleServerMaintenanceWindowOutputReference(this as any, "maintenance_window", true);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: MysqlFlexibleServerMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new MysqlFlexibleServerStorageOutputReference(this as any, "storage", true);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: MysqlFlexibleServerStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MysqlFlexibleServerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MysqlFlexibleServerTimeouts) {
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
      administrator_login: cdktf.stringToTerraform(this._administratorLogin),
      administrator_password: cdktf.stringToTerraform(this._administratorPassword),
      backup_retention_days: cdktf.numberToTerraform(this._backupRetentionDays),
      create_mode: cdktf.stringToTerraform(this._createMode),
      delegated_subnet_id: cdktf.stringToTerraform(this._delegatedSubnetId),
      geo_redundant_backup_enabled: cdktf.booleanToTerraform(this._geoRedundantBackupEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      point_in_time_restore_time_in_utc: cdktf.stringToTerraform(this._pointInTimeRestoreTimeInUtc),
      private_dns_zone_id: cdktf.stringToTerraform(this._privateDnsZoneId),
      replication_role: cdktf.stringToTerraform(this._replicationRole),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      source_server_id: cdktf.stringToTerraform(this._sourceServerId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      zone: cdktf.stringToTerraform(this._zone),
      high_availability: mysqlFlexibleServerHighAvailabilityToTerraform(this._highAvailability.internalValue),
      maintenance_window: mysqlFlexibleServerMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      storage: mysqlFlexibleServerStorageToTerraform(this._storage.internalValue),
      timeouts: mysqlFlexibleServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
