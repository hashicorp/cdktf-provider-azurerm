// https://www.terraform.io/docs/providers/azurerm/d/backup_policy_file_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermBackupPolicyFileShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/backup_policy_file_share.html#name DataAzurermBackupPolicyFileShare#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/backup_policy_file_share.html#recovery_vault_name DataAzurermBackupPolicyFileShare#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/backup_policy_file_share.html#resource_group_name DataAzurermBackupPolicyFileShare#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/backup_policy_file_share.html#timeouts DataAzurermBackupPolicyFileShare#timeouts}
  */
  readonly timeouts?: DataAzurermBackupPolicyFileShareTimeouts;
}
export interface DataAzurermBackupPolicyFileShareTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/backup_policy_file_share.html#read DataAzurermBackupPolicyFileShare#read}
  */
  readonly read?: string;
}

function dataAzurermBackupPolicyFileShareTimeoutsToTerraform(struct?: DataAzurermBackupPolicyFileShareTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/backup_policy_file_share.html azurerm_backup_policy_file_share}
*/
export class DataAzurermBackupPolicyFileShare extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_backup_policy_file_share";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/backup_policy_file_share.html azurerm_backup_policy_file_share} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermBackupPolicyFileShareConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermBackupPolicyFileShareConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_backup_policy_file_share',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName: string;
  public get recoveryVaultName() {
    return this.getStringAttribute('recovery_vault_name');
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryVaultNameInput() {
    return this._recoveryVaultName
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

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermBackupPolicyFileShareTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermBackupPolicyFileShareTimeouts ) {
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
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermBackupPolicyFileShareTimeoutsToTerraform(this._timeouts),
    };
  }
}
