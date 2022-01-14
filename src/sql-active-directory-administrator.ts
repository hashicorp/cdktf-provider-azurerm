// https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlActiveDirectoryAdministratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator#azuread_authentication_only SqlActiveDirectoryAdministrator#azuread_authentication_only}
  */
  readonly azureadAuthenticationOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator#login SqlActiveDirectoryAdministrator#login}
  */
  readonly login: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator#object_id SqlActiveDirectoryAdministrator#object_id}
  */
  readonly objectId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator#resource_group_name SqlActiveDirectoryAdministrator#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator#server_name SqlActiveDirectoryAdministrator#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator#tenant_id SqlActiveDirectoryAdministrator#tenant_id}
  */
  readonly tenantId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator#timeouts SqlActiveDirectoryAdministrator#timeouts}
  */
  readonly timeouts?: SqlActiveDirectoryAdministratorTimeouts;
}
export interface SqlActiveDirectoryAdministratorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator#create SqlActiveDirectoryAdministrator#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator#delete SqlActiveDirectoryAdministrator#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator#read SqlActiveDirectoryAdministrator#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator#update SqlActiveDirectoryAdministrator#update}
  */
  readonly update?: string;
}

export function sqlActiveDirectoryAdministratorTimeoutsToTerraform(struct?: SqlActiveDirectoryAdministratorTimeoutsOutputReference | SqlActiveDirectoryAdministratorTimeouts): any {
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

export class SqlActiveDirectoryAdministratorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SqlActiveDirectoryAdministratorTimeouts | undefined {
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

  public set internalValue(value: SqlActiveDirectoryAdministratorTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator azurerm_sql_active_directory_administrator}
*/
export class SqlActiveDirectoryAdministrator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_sql_active_directory_administrator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator azurerm_sql_active_directory_administrator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlActiveDirectoryAdministratorConfig
  */
  public constructor(scope: Construct, id: string, config: SqlActiveDirectoryAdministratorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_active_directory_administrator',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._azureadAuthenticationOnly = config.azureadAuthenticationOnly;
    this._login = config.login;
    this._objectId = config.objectId;
    this._resourceGroupName = config.resourceGroupName;
    this._serverName = config.serverName;
    this._tenantId = config.tenantId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azuread_authentication_only - computed: true, optional: true, required: false
  private _azureadAuthenticationOnly?: boolean | cdktf.IResolvable; 
  public get azureadAuthenticationOnly() {
    return this.getBooleanAttribute('azuread_authentication_only') as any;
  }
  public set azureadAuthenticationOnly(value: boolean | cdktf.IResolvable) {
    this._azureadAuthenticationOnly = value;
  }
  public resetAzureadAuthenticationOnly() {
    this._azureadAuthenticationOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureadAuthenticationOnlyInput() {
    return this._azureadAuthenticationOnly;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login - computed: false, optional: false, required: true
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
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

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SqlActiveDirectoryAdministratorTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SqlActiveDirectoryAdministratorTimeouts) {
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
      azuread_authentication_only: cdktf.booleanToTerraform(this._azureadAuthenticationOnly),
      login: cdktf.stringToTerraform(this._login),
      object_id: cdktf.stringToTerraform(this._objectId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server_name: cdktf.stringToTerraform(this._serverName),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: sqlActiveDirectoryAdministratorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
