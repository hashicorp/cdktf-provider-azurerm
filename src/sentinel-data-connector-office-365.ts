// https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelDataConnectorOffice365Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#exchange_enabled SentinelDataConnectorOffice365#exchange_enabled}
  */
  readonly exchangeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#log_analytics_workspace_id SentinelDataConnectorOffice365#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#name SentinelDataConnectorOffice365#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#sharepoint_enabled SentinelDataConnectorOffice365#sharepoint_enabled}
  */
  readonly sharepointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#teams_enabled SentinelDataConnectorOffice365#teams_enabled}
  */
  readonly teamsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#tenant_id SentinelDataConnectorOffice365#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#timeouts SentinelDataConnectorOffice365#timeouts}
  */
  readonly timeouts?: SentinelDataConnectorOffice365Timeouts;
}
export interface SentinelDataConnectorOffice365Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#create SentinelDataConnectorOffice365#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#delete SentinelDataConnectorOffice365#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#read SentinelDataConnectorOffice365#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#update SentinelDataConnectorOffice365#update}
  */
  readonly update?: string;
}

export function sentinelDataConnectorOffice365TimeoutsToTerraform(struct?: SentinelDataConnectorOffice365TimeoutsOutputReference | SentinelDataConnectorOffice365Timeouts): any {
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

export class SentinelDataConnectorOffice365TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SentinelDataConnectorOffice365Timeouts | undefined {
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

  public set internalValue(value: SentinelDataConnectorOffice365Timeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html azurerm_sentinel_data_connector_office_365}
*/
export class SentinelDataConnectorOffice365 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_sentinel_data_connector_office_365";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html azurerm_sentinel_data_connector_office_365} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelDataConnectorOffice365Config
  */
  public constructor(scope: Construct, id: string, config: SentinelDataConnectorOffice365Config) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_data_connector_office_365',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._exchangeEnabled = config.exchangeEnabled;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._sharepointEnabled = config.sharepointEnabled;
    this._teamsEnabled = config.teamsEnabled;
    this._tenantId = config.tenantId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exchange_enabled - computed: false, optional: true, required: false
  private _exchangeEnabled?: boolean | cdktf.IResolvable; 
  public get exchangeEnabled() {
    return this.getBooleanAttribute('exchange_enabled') as any;
  }
  public set exchangeEnabled(value: boolean | cdktf.IResolvable) {
    this._exchangeEnabled = value;
  }
  public resetExchangeEnabled() {
    this._exchangeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeEnabledInput() {
    return this._exchangeEnabled;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
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

  // sharepoint_enabled - computed: false, optional: true, required: false
  private _sharepointEnabled?: boolean | cdktf.IResolvable; 
  public get sharepointEnabled() {
    return this.getBooleanAttribute('sharepoint_enabled') as any;
  }
  public set sharepointEnabled(value: boolean | cdktf.IResolvable) {
    this._sharepointEnabled = value;
  }
  public resetSharepointEnabled() {
    this._sharepointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharepointEnabledInput() {
    return this._sharepointEnabled;
  }

  // teams_enabled - computed: false, optional: true, required: false
  private _teamsEnabled?: boolean | cdktf.IResolvable; 
  public get teamsEnabled() {
    return this.getBooleanAttribute('teams_enabled') as any;
  }
  public set teamsEnabled(value: boolean | cdktf.IResolvable) {
    this._teamsEnabled = value;
  }
  public resetTeamsEnabled() {
    this._teamsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsEnabledInput() {
    return this._teamsEnabled;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SentinelDataConnectorOffice365TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SentinelDataConnectorOffice365Timeouts) {
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
      exchange_enabled: cdktf.booleanToTerraform(this._exchangeEnabled),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      sharepoint_enabled: cdktf.booleanToTerraform(this._sharepointEnabled),
      teams_enabled: cdktf.booleanToTerraform(this._teamsEnabled),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: sentinelDataConnectorOffice365TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
