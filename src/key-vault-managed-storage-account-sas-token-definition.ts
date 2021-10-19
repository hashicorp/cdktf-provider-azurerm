// https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultManagedStorageAccountSasTokenDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html#managed_storage_account_id KeyVaultManagedStorageAccountSasTokenDefinition#managed_storage_account_id}
  */
  readonly managedStorageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html#name KeyVaultManagedStorageAccountSasTokenDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html#sas_template_uri KeyVaultManagedStorageAccountSasTokenDefinition#sas_template_uri}
  */
  readonly sasTemplateUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html#sas_type KeyVaultManagedStorageAccountSasTokenDefinition#sas_type}
  */
  readonly sasType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html#tags KeyVaultManagedStorageAccountSasTokenDefinition#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html#validity_period KeyVaultManagedStorageAccountSasTokenDefinition#validity_period}
  */
  readonly validityPeriod: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html#timeouts KeyVaultManagedStorageAccountSasTokenDefinition#timeouts}
  */
  readonly timeouts?: KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts;
}
export interface KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html#create KeyVaultManagedStorageAccountSasTokenDefinition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html#delete KeyVaultManagedStorageAccountSasTokenDefinition#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html#read KeyVaultManagedStorageAccountSasTokenDefinition#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html#update KeyVaultManagedStorageAccountSasTokenDefinition#update}
  */
  readonly update?: string;
}

function keyVaultManagedStorageAccountSasTokenDefinitionTimeoutsToTerraform(struct?: KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference | KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts): any {
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

export class KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html azurerm_key_vault_managed_storage_account_sas_token_definition}
*/
export class KeyVaultManagedStorageAccountSasTokenDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_key_vault_managed_storage_account_sas_token_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account_sas_token_definition.html azurerm_key_vault_managed_storage_account_sas_token_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultManagedStorageAccountSasTokenDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultManagedStorageAccountSasTokenDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_managed_storage_account_sas_token_definition',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._managedStorageAccountId = config.managedStorageAccountId;
    this._name = config.name;
    this._sasTemplateUri = config.sasTemplateUri;
    this._sasType = config.sasType;
    this._tags = config.tags;
    this._validityPeriod = config.validityPeriod;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_storage_account_id - computed: false, optional: false, required: true
  private _managedStorageAccountId?: string; 
  public get managedStorageAccountId() {
    return this.getStringAttribute('managed_storage_account_id');
  }
  public set managedStorageAccountId(value: string) {
    this._managedStorageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedStorageAccountIdInput() {
    return this._managedStorageAccountId
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
    return this._name
  }

  // sas_template_uri - computed: false, optional: false, required: true
  private _sasTemplateUri?: string; 
  public get sasTemplateUri() {
    return this.getStringAttribute('sas_template_uri');
  }
  public set sasTemplateUri(value: string) {
    this._sasTemplateUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTemplateUriInput() {
    return this._sasTemplateUri
  }

  // sas_type - computed: false, optional: false, required: true
  private _sasType?: string; 
  public get sasType() {
    return this.getStringAttribute('sas_type');
  }
  public set sasType(value: string) {
    this._sasType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTypeInput() {
    return this._sasType
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // validity_period - computed: false, optional: false, required: true
  private _validityPeriod?: string; 
  public get validityPeriod() {
    return this.getStringAttribute('validity_period');
  }
  public set validityPeriod(value: string) {
    this._validityPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validityPeriodInput() {
    return this._validityPeriod
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts | undefined; 
  private __timeoutsOutput = new KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts | undefined) {
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
      managed_storage_account_id: cdktf.stringToTerraform(this._managedStorageAccountId),
      name: cdktf.stringToTerraform(this._name),
      sas_template_uri: cdktf.stringToTerraform(this._sasTemplateUri),
      sas_type: cdktf.stringToTerraform(this._sasType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      validity_period: cdktf.stringToTerraform(this._validityPeriod),
      timeouts: keyVaultManagedStorageAccountSasTokenDefinitionTimeoutsToTerraform(this._timeouts),
    };
  }
}
