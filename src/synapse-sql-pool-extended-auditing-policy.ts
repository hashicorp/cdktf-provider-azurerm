// https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseSqlPoolExtendedAuditingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#log_monitoring_enabled SynapseSqlPoolExtendedAuditingPolicy#log_monitoring_enabled}
  */
  readonly logMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#retention_in_days SynapseSqlPoolExtendedAuditingPolicy#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#sql_pool_id SynapseSqlPoolExtendedAuditingPolicy#sql_pool_id}
  */
  readonly sqlPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#storage_account_access_key SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#storage_account_access_key_is_secondary SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key_is_secondary}
  */
  readonly storageAccountAccessKeyIsSecondary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#storage_endpoint SynapseSqlPoolExtendedAuditingPolicy#storage_endpoint}
  */
  readonly storageEndpoint?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#timeouts SynapseSqlPoolExtendedAuditingPolicy#timeouts}
  */
  readonly timeouts?: SynapseSqlPoolExtendedAuditingPolicyTimeouts;
}
export interface SynapseSqlPoolExtendedAuditingPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#create SynapseSqlPoolExtendedAuditingPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#delete SynapseSqlPoolExtendedAuditingPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#read SynapseSqlPoolExtendedAuditingPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#update SynapseSqlPoolExtendedAuditingPolicy#update}
  */
  readonly update?: string;
}

function synapseSqlPoolExtendedAuditingPolicyTimeoutsToTerraform(struct?: SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference | SynapseSqlPoolExtendedAuditingPolicyTimeouts): any {
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

export class SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html azurerm_synapse_sql_pool_extended_auditing_policy}
*/
export class SynapseSqlPoolExtendedAuditingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_sql_pool_extended_auditing_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html azurerm_synapse_sql_pool_extended_auditing_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseSqlPoolExtendedAuditingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseSqlPoolExtendedAuditingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_sql_pool_extended_auditing_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._logMonitoringEnabled = config.logMonitoringEnabled;
    this._retentionInDays = config.retentionInDays;
    this._sqlPoolId = config.sqlPoolId;
    this._storageAccountAccessKey = config.storageAccountAccessKey;
    this._storageAccountAccessKeyIsSecondary = config.storageAccountAccessKeyIsSecondary;
    this._storageEndpoint = config.storageEndpoint;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_monitoring_enabled - computed: false, optional: true, required: false
  private _logMonitoringEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get logMonitoringEnabled() {
    return this.getBooleanAttribute('log_monitoring_enabled') as any;
  }
  public set logMonitoringEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._logMonitoringEnabled = value;
  }
  public resetLogMonitoringEnabled() {
    this._logMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMonitoringEnabledInput() {
    return this._logMonitoringEnabled
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number | undefined; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number | undefined) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays
  }

  // sql_pool_id - computed: false, optional: false, required: true
  private _sqlPoolId?: string; 
  public get sqlPoolId() {
    return this.getStringAttribute('sql_pool_id');
  }
  public set sqlPoolId(value: string) {
    this._sqlPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlPoolIdInput() {
    return this._sqlPoolId
  }

  // storage_account_access_key - computed: false, optional: true, required: false
  private _storageAccountAccessKey?: string | undefined; 
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }
  public set storageAccountAccessKey(value: string | undefined) {
    this._storageAccountAccessKey = value;
  }
  public resetStorageAccountAccessKey() {
    this._storageAccountAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyInput() {
    return this._storageAccountAccessKey
  }

  // storage_account_access_key_is_secondary - computed: false, optional: true, required: false
  private _storageAccountAccessKeyIsSecondary?: boolean | cdktf.IResolvable | undefined; 
  public get storageAccountAccessKeyIsSecondary() {
    return this.getBooleanAttribute('storage_account_access_key_is_secondary') as any;
  }
  public set storageAccountAccessKeyIsSecondary(value: boolean | cdktf.IResolvable | undefined) {
    this._storageAccountAccessKeyIsSecondary = value;
  }
  public resetStorageAccountAccessKeyIsSecondary() {
    this._storageAccountAccessKeyIsSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyIsSecondaryInput() {
    return this._storageAccountAccessKeyIsSecondary
  }

  // storage_endpoint - computed: false, optional: true, required: false
  private _storageEndpoint?: string | undefined; 
  public get storageEndpoint() {
    return this.getStringAttribute('storage_endpoint');
  }
  public set storageEndpoint(value: string | undefined) {
    this._storageEndpoint = value;
  }
  public resetStorageEndpoint() {
    this._storageEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEndpointInput() {
    return this._storageEndpoint
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SynapseSqlPoolExtendedAuditingPolicyTimeouts | undefined; 
  private __timeoutsOutput = new SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SynapseSqlPoolExtendedAuditingPolicyTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_monitoring_enabled: cdktf.booleanToTerraform(this._logMonitoringEnabled),
      retention_in_days: cdktf.numberToTerraform(this._retentionInDays),
      sql_pool_id: cdktf.stringToTerraform(this._sqlPoolId),
      storage_account_access_key: cdktf.stringToTerraform(this._storageAccountAccessKey),
      storage_account_access_key_is_secondary: cdktf.booleanToTerraform(this._storageAccountAccessKeyIsSecondary),
      storage_endpoint: cdktf.stringToTerraform(this._storageEndpoint),
      timeouts: synapseSqlPoolExtendedAuditingPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
