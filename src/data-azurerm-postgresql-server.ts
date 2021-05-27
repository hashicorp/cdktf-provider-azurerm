// https://www.terraform.io/docs/providers/azurerm/d/postgresql_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermPostgresqlServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/postgresql_server.html#name DataAzurermPostgresqlServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/postgresql_server.html#resource_group_name DataAzurermPostgresqlServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/postgresql_server.html#timeouts DataAzurermPostgresqlServer#timeouts}
  */
  readonly timeouts?: DataAzurermPostgresqlServerTimeouts;
}
export class DataAzurermPostgresqlServerIdentity extends cdktf.ComplexComputedList {

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAzurermPostgresqlServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/postgresql_server.html#read DataAzurermPostgresqlServer#read}
  */
  readonly read?: string;
}

function dataAzurermPostgresqlServerTimeoutsToTerraform(struct?: DataAzurermPostgresqlServerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/postgresql_server.html azurerm_postgresql_server}
*/
export class DataAzurermPostgresqlServer extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/postgresql_server.html azurerm_postgresql_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermPostgresqlServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermPostgresqlServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_postgresql_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: true, optional: false, required: false
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public identity(index: string) {
    return new DataAzurermPostgresqlServerIdentity(this, 'identity', index);
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPostgresqlServerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermPostgresqlServerTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermPostgresqlServerTimeoutsToTerraform(this._timeouts),
    };
  }
}
