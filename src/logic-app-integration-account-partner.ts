// https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppIntegrationAccountPartnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html#integration_account_name LogicAppIntegrationAccountPartner#integration_account_name}
  */
  readonly integrationAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html#metadata LogicAppIntegrationAccountPartner#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html#name LogicAppIntegrationAccountPartner#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html#resource_group_name LogicAppIntegrationAccountPartner#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * business_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html#business_identity LogicAppIntegrationAccountPartner#business_identity}
  */
  readonly businessIdentity: LogicAppIntegrationAccountPartnerBusinessIdentity[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html#timeouts LogicAppIntegrationAccountPartner#timeouts}
  */
  readonly timeouts?: LogicAppIntegrationAccountPartnerTimeouts;
}
export interface LogicAppIntegrationAccountPartnerBusinessIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html#qualifier LogicAppIntegrationAccountPartner#qualifier}
  */
  readonly qualifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html#value LogicAppIntegrationAccountPartner#value}
  */
  readonly value: string;
}

export function logicAppIntegrationAccountPartnerBusinessIdentityToTerraform(struct?: LogicAppIntegrationAccountPartnerBusinessIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LogicAppIntegrationAccountPartnerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html#create LogicAppIntegrationAccountPartner#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html#delete LogicAppIntegrationAccountPartner#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html#read LogicAppIntegrationAccountPartner#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html#update LogicAppIntegrationAccountPartner#update}
  */
  readonly update?: string;
}

export function logicAppIntegrationAccountPartnerTimeoutsToTerraform(struct?: LogicAppIntegrationAccountPartnerTimeoutsOutputReference | LogicAppIntegrationAccountPartnerTimeouts): any {
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

export class LogicAppIntegrationAccountPartnerTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LogicAppIntegrationAccountPartnerTimeouts | undefined {
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

  public set internalValue(value: LogicAppIntegrationAccountPartnerTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html azurerm_logic_app_integration_account_partner}
*/
export class LogicAppIntegrationAccountPartner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logic_app_integration_account_partner";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_partner.html azurerm_logic_app_integration_account_partner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppIntegrationAccountPartnerConfig
  */
  public constructor(scope: Construct, id: string, config: LogicAppIntegrationAccountPartnerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_integration_account_partner',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._integrationAccountName = config.integrationAccountName;
    this._metadata = config.metadata;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._businessIdentity = config.businessIdentity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_account_name - computed: false, optional: false, required: true
  private _integrationAccountName?: string; 
  public get integrationAccountName() {
    return this.getStringAttribute('integration_account_name');
  }
  public set integrationAccountName(value: string) {
    this._integrationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationAccountNameInput() {
    return this._integrationAccountName;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // business_identity - computed: false, optional: false, required: true
  private _businessIdentity?: LogicAppIntegrationAccountPartnerBusinessIdentity[]; 
  public get businessIdentity() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('business_identity') as any;
  }
  public set businessIdentity(value: LogicAppIntegrationAccountPartnerBusinessIdentity[]) {
    this._businessIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessIdentityInput() {
    return this._businessIdentity;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogicAppIntegrationAccountPartnerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogicAppIntegrationAccountPartnerTimeouts) {
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
      integration_account_name: cdktf.stringToTerraform(this._integrationAccountName),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      business_identity: cdktf.listMapper(logicAppIntegrationAccountPartnerBusinessIdentityToTerraform)(this._businessIdentity),
      timeouts: logicAppIntegrationAccountPartnerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
