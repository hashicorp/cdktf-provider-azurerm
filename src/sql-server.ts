// https://www.terraform.io/docs/providers/azurerm/r/sql_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#administrator_login SqlServer#administrator_login}
  */
  readonly administratorLogin: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#administrator_login_password SqlServer#administrator_login_password}
  */
  readonly administratorLoginPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#connection_policy SqlServer#connection_policy}
  */
  readonly connectionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#extended_auditing_policy SqlServer#extended_auditing_policy}
  */
  readonly extendedAuditingPolicy?: SqlServerExtendedAuditingPolicy[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#location SqlServer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#name SqlServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#resource_group_name SqlServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#tags SqlServer#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#version SqlServer#version}
  */
  readonly version: string;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#identity SqlServer#identity}
  */
  readonly identity?: SqlServerIdentity;
  /**
  * threat_detection_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#threat_detection_policy SqlServer#threat_detection_policy}
  */
  readonly threatDetectionPolicy?: SqlServerThreatDetectionPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#timeouts SqlServer#timeouts}
  */
  readonly timeouts?: SqlServerTimeouts;
}
export interface SqlServerExtendedAuditingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#log_monitoring_enabled SqlServer#log_monitoring_enabled}
  */
  readonly logMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#retention_in_days SqlServer#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#storage_account_access_key SqlServer#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#storage_account_access_key_is_secondary SqlServer#storage_account_access_key_is_secondary}
  */
  readonly storageAccountAccessKeyIsSecondary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#storage_endpoint SqlServer#storage_endpoint}
  */
  readonly storageEndpoint?: string;
}

export function sqlServerExtendedAuditingPolicyToTerraform(struct?: SqlServerExtendedAuditingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_monitoring_enabled: cdktf.booleanToTerraform(struct!.logMonitoringEnabled),
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    storage_account_access_key: cdktf.stringToTerraform(struct!.storageAccountAccessKey),
    storage_account_access_key_is_secondary: cdktf.booleanToTerraform(struct!.storageAccountAccessKeyIsSecondary),
    storage_endpoint: cdktf.stringToTerraform(struct!.storageEndpoint),
  }
}

export interface SqlServerIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#type SqlServer#type}
  */
  readonly type: string;
}

export function sqlServerIdentityToTerraform(struct?: SqlServerIdentityOutputReference | SqlServerIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class SqlServerIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SqlServerIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlServerIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
}
export interface SqlServerThreatDetectionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#disabled_alerts SqlServer#disabled_alerts}
  */
  readonly disabledAlerts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#email_account_admins SqlServer#email_account_admins}
  */
  readonly emailAccountAdmins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#email_addresses SqlServer#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#retention_days SqlServer#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#state SqlServer#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#storage_account_access_key SqlServer#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#storage_endpoint SqlServer#storage_endpoint}
  */
  readonly storageEndpoint?: string;
}

export function sqlServerThreatDetectionPolicyToTerraform(struct?: SqlServerThreatDetectionPolicyOutputReference | SqlServerThreatDetectionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_alerts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.disabledAlerts),
    email_account_admins: cdktf.booleanToTerraform(struct!.emailAccountAdmins),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailAddresses),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
    state: cdktf.stringToTerraform(struct!.state),
    storage_account_access_key: cdktf.stringToTerraform(struct!.storageAccountAccessKey),
    storage_endpoint: cdktf.stringToTerraform(struct!.storageEndpoint),
  }
}

export class SqlServerThreatDetectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SqlServerThreatDetectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledAlerts) {
      hasAnyValues = true;
      internalValueResult.disabledAlerts = this._disabledAlerts;
    }
    if (this._emailAccountAdmins) {
      hasAnyValues = true;
      internalValueResult.emailAccountAdmins = this._emailAccountAdmins;
    }
    if (this._emailAddresses) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    if (this._retentionDays) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    if (this._state) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._storageAccountAccessKey) {
      hasAnyValues = true;
      internalValueResult.storageAccountAccessKey = this._storageAccountAccessKey;
    }
    if (this._storageEndpoint) {
      hasAnyValues = true;
      internalValueResult.storageEndpoint = this._storageEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlServerThreatDetectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabledAlerts = undefined;
      this._emailAccountAdmins = undefined;
      this._emailAddresses = undefined;
      this._retentionDays = undefined;
      this._state = undefined;
      this._storageAccountAccessKey = undefined;
      this._storageEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabledAlerts = value.disabledAlerts;
      this._emailAccountAdmins = value.emailAccountAdmins;
      this._emailAddresses = value.emailAddresses;
      this._retentionDays = value.retentionDays;
      this._state = value.state;
      this._storageAccountAccessKey = value.storageAccountAccessKey;
      this._storageEndpoint = value.storageEndpoint;
    }
  }

  // disabled_alerts - computed: false, optional: true, required: false
  private _disabledAlerts?: string[]; 
  public get disabledAlerts() {
    return this.getListAttribute('disabled_alerts');
  }
  public set disabledAlerts(value: string[]) {
    this._disabledAlerts = value;
  }
  public resetDisabledAlerts() {
    this._disabledAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledAlertsInput() {
    return this._disabledAlerts;
  }

  // email_account_admins - computed: true, optional: true, required: false
  private _emailAccountAdmins?: boolean | cdktf.IResolvable; 
  public get emailAccountAdmins() {
    return this.getBooleanAttribute('email_account_admins') as any;
  }
  public set emailAccountAdmins(value: boolean | cdktf.IResolvable) {
    this._emailAccountAdmins = value;
  }
  public resetEmailAccountAdmins() {
    this._emailAccountAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAccountAdminsInput() {
    return this._emailAccountAdmins;
  }

  // email_addresses - computed: true, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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
}
export interface SqlServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#create SqlServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#delete SqlServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#read SqlServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html#update SqlServer#update}
  */
  readonly update?: string;
}

export function sqlServerTimeoutsToTerraform(struct?: SqlServerTimeoutsOutputReference | SqlServerTimeouts): any {
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

export class SqlServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SqlServerTimeouts | undefined {
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

  public set internalValue(value: SqlServerTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html azurerm_sql_server}
*/
export class SqlServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_sql_server";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sql_server.html azurerm_sql_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlServerConfig
  */
  public constructor(scope: Construct, id: string, config: SqlServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._administratorLogin = config.administratorLogin;
    this._administratorLoginPassword = config.administratorLoginPassword;
    this._connectionPolicy = config.connectionPolicy;
    this._extendedAuditingPolicy = config.extendedAuditingPolicy;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._version = config.version;
    this._identity.internalValue = config.identity;
    this._threatDetectionPolicy.internalValue = config.threatDetectionPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: false, optional: false, required: true
  private _administratorLogin?: string; 
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin;
  }

  // administrator_login_password - computed: false, optional: false, required: true
  private _administratorLoginPassword?: string; 
  public get administratorLoginPassword() {
    return this.getStringAttribute('administrator_login_password');
  }
  public set administratorLoginPassword(value: string) {
    this._administratorLoginPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginPasswordInput() {
    return this._administratorLoginPassword;
  }

  // connection_policy - computed: false, optional: true, required: false
  private _connectionPolicy?: string; 
  public get connectionPolicy() {
    return this.getStringAttribute('connection_policy');
  }
  public set connectionPolicy(value: string) {
    this._connectionPolicy = value;
  }
  public resetConnectionPolicy() {
    this._connectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPolicyInput() {
    return this._connectionPolicy;
  }

  // extended_auditing_policy - computed: true, optional: true, required: false
  private _extendedAuditingPolicy?: SqlServerExtendedAuditingPolicy[]; 
  public get extendedAuditingPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('extended_auditing_policy') as any;
  }
  public set extendedAuditingPolicy(value: SqlServerExtendedAuditingPolicy[]) {
    this._extendedAuditingPolicy = value;
  }
  public resetExtendedAuditingPolicy() {
    this._extendedAuditingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAuditingPolicyInput() {
    return this._extendedAuditingPolicy;
  }

  // fully_qualified_domain_name - computed: true, optional: false, required: false
  public get fullyQualifiedDomainName() {
    return this.getStringAttribute('fully_qualified_domain_name');
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new SqlServerIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: SqlServerIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // threat_detection_policy - computed: false, optional: true, required: false
  private _threatDetectionPolicy = new SqlServerThreatDetectionPolicyOutputReference(this as any, "threat_detection_policy", true);
  public get threatDetectionPolicy() {
    return this._threatDetectionPolicy;
  }
  public putThreatDetectionPolicy(value: SqlServerThreatDetectionPolicy) {
    this._threatDetectionPolicy.internalValue = value;
  }
  public resetThreatDetectionPolicy() {
    this._threatDetectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatDetectionPolicyInput() {
    return this._threatDetectionPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SqlServerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SqlServerTimeouts) {
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
      administrator_login_password: cdktf.stringToTerraform(this._administratorLoginPassword),
      connection_policy: cdktf.stringToTerraform(this._connectionPolicy),
      extended_auditing_policy: cdktf.listMapper(sqlServerExtendedAuditingPolicyToTerraform)(this._extendedAuditingPolicy),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      identity: sqlServerIdentityToTerraform(this._identity.internalValue),
      threat_detection_policy: sqlServerThreatDetectionPolicyToTerraform(this._threatDetectionPolicy.internalValue),
      timeouts: sqlServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
