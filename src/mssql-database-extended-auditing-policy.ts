// https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlDatabaseExtendedAuditingPolicyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html#database_id MssqlDatabaseExtendedAuditingPolicyA#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html#log_monitoring_enabled MssqlDatabaseExtendedAuditingPolicyA#log_monitoring_enabled}
  */
  readonly logMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html#retention_in_days MssqlDatabaseExtendedAuditingPolicyA#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html#storage_account_access_key MssqlDatabaseExtendedAuditingPolicyA#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html#storage_account_access_key_is_secondary MssqlDatabaseExtendedAuditingPolicyA#storage_account_access_key_is_secondary}
  */
  readonly storageAccountAccessKeyIsSecondary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html#storage_endpoint MssqlDatabaseExtendedAuditingPolicyA#storage_endpoint}
  */
  readonly storageEndpoint?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html#timeouts MssqlDatabaseExtendedAuditingPolicyA#timeouts}
  */
  readonly timeouts?: MssqlDatabaseExtendedAuditingPolicyTimeouts;
}
export interface MssqlDatabaseExtendedAuditingPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html#create MssqlDatabaseExtendedAuditingPolicyA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html#delete MssqlDatabaseExtendedAuditingPolicyA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html#read MssqlDatabaseExtendedAuditingPolicyA#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html#update MssqlDatabaseExtendedAuditingPolicyA#update}
  */
  readonly update?: string;
}

export function mssqlDatabaseExtendedAuditingPolicyTimeoutsToTerraform(struct?: MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference | MssqlDatabaseExtendedAuditingPolicyTimeouts): any {
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

export class MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MssqlDatabaseExtendedAuditingPolicyTimeouts | undefined {
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

  public set internalValue(value: MssqlDatabaseExtendedAuditingPolicyTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html azurerm_mssql_database_extended_auditing_policy}
*/
export class MssqlDatabaseExtendedAuditingPolicyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_mssql_database_extended_auditing_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy.html azurerm_mssql_database_extended_auditing_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlDatabaseExtendedAuditingPolicyAConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlDatabaseExtendedAuditingPolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_database_extended_auditing_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._databaseId = config.databaseId;
    this._logMonitoringEnabled = config.logMonitoringEnabled;
    this._retentionInDays = config.retentionInDays;
    this._storageAccountAccessKey = config.storageAccountAccessKey;
    this._storageAccountAccessKeyIsSecondary = config.storageAccountAccessKeyIsSecondary;
    this._storageEndpoint = config.storageEndpoint;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_monitoring_enabled - computed: false, optional: true, required: false
  private _logMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get logMonitoringEnabled() {
    return this.getBooleanAttribute('log_monitoring_enabled') as any;
  }
  public set logMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._logMonitoringEnabled = value;
  }
  public resetLogMonitoringEnabled() {
    this._logMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMonitoringEnabledInput() {
    return this._logMonitoringEnabled;
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
  }

  // storage_account_access_key - computed: false, optional: true, required: false
  private _storageAccountAccessKey?: string; 
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }
  public set storageAccountAccessKey(value: string) {
    this._storageAccountAccessKey = value;
  }
  public resetStorageAccountAccessKey() {
    this._storageAccountAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyInput() {
    return this._storageAccountAccessKey;
  }

  // storage_account_access_key_is_secondary - computed: false, optional: true, required: false
  private _storageAccountAccessKeyIsSecondary?: boolean | cdktf.IResolvable; 
  public get storageAccountAccessKeyIsSecondary() {
    return this.getBooleanAttribute('storage_account_access_key_is_secondary') as any;
  }
  public set storageAccountAccessKeyIsSecondary(value: boolean | cdktf.IResolvable) {
    this._storageAccountAccessKeyIsSecondary = value;
  }
  public resetStorageAccountAccessKeyIsSecondary() {
    this._storageAccountAccessKeyIsSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyIsSecondaryInput() {
    return this._storageAccountAccessKeyIsSecondary;
  }

  // storage_endpoint - computed: false, optional: true, required: false
  private _storageEndpoint?: string; 
  public get storageEndpoint() {
    return this.getStringAttribute('storage_endpoint');
  }
  public set storageEndpoint(value: string) {
    this._storageEndpoint = value;
  }
  public resetStorageEndpoint() {
    this._storageEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEndpointInput() {
    return this._storageEndpoint;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MssqlDatabaseExtendedAuditingPolicyTimeouts) {
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
      database_id: cdktf.stringToTerraform(this._databaseId),
      log_monitoring_enabled: cdktf.booleanToTerraform(this._logMonitoringEnabled),
      retention_in_days: cdktf.numberToTerraform(this._retentionInDays),
      storage_account_access_key: cdktf.stringToTerraform(this._storageAccountAccessKey),
      storage_account_access_key_is_secondary: cdktf.booleanToTerraform(this._storageAccountAccessKeyIsSecondary),
      storage_endpoint: cdktf.stringToTerraform(this._storageEndpoint),
      timeouts: mssqlDatabaseExtendedAuditingPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
