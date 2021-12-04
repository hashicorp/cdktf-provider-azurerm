// https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppIntegrationAccountAgreementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#agreement_type LogicAppIntegrationAccountAgreement#agreement_type}
  */
  readonly agreementType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#content LogicAppIntegrationAccountAgreement#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#guest_partner_name LogicAppIntegrationAccountAgreement#guest_partner_name}
  */
  readonly guestPartnerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#host_partner_name LogicAppIntegrationAccountAgreement#host_partner_name}
  */
  readonly hostPartnerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#integration_account_name LogicAppIntegrationAccountAgreement#integration_account_name}
  */
  readonly integrationAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#metadata LogicAppIntegrationAccountAgreement#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#name LogicAppIntegrationAccountAgreement#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#resource_group_name LogicAppIntegrationAccountAgreement#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * guest_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#guest_identity LogicAppIntegrationAccountAgreement#guest_identity}
  */
  readonly guestIdentity: LogicAppIntegrationAccountAgreementGuestIdentity;
  /**
  * host_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#host_identity LogicAppIntegrationAccountAgreement#host_identity}
  */
  readonly hostIdentity: LogicAppIntegrationAccountAgreementHostIdentity;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#timeouts LogicAppIntegrationAccountAgreement#timeouts}
  */
  readonly timeouts?: LogicAppIntegrationAccountAgreementTimeouts;
}
export interface LogicAppIntegrationAccountAgreementGuestIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#qualifier LogicAppIntegrationAccountAgreement#qualifier}
  */
  readonly qualifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#value LogicAppIntegrationAccountAgreement#value}
  */
  readonly value: string;
}

export function logicAppIntegrationAccountAgreementGuestIdentityToTerraform(struct?: LogicAppIntegrationAccountAgreementGuestIdentityOutputReference | LogicAppIntegrationAccountAgreementGuestIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class LogicAppIntegrationAccountAgreementGuestIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LogicAppIntegrationAccountAgreementGuestIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qualifier) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppIntegrationAccountAgreementGuestIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._qualifier = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._qualifier = value.qualifier;
      this._value = value.value;
    }
  }

  // qualifier - computed: false, optional: false, required: true
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface LogicAppIntegrationAccountAgreementHostIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#qualifier LogicAppIntegrationAccountAgreement#qualifier}
  */
  readonly qualifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#value LogicAppIntegrationAccountAgreement#value}
  */
  readonly value: string;
}

export function logicAppIntegrationAccountAgreementHostIdentityToTerraform(struct?: LogicAppIntegrationAccountAgreementHostIdentityOutputReference | LogicAppIntegrationAccountAgreementHostIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class LogicAppIntegrationAccountAgreementHostIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LogicAppIntegrationAccountAgreementHostIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qualifier) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppIntegrationAccountAgreementHostIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._qualifier = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._qualifier = value.qualifier;
      this._value = value.value;
    }
  }

  // qualifier - computed: false, optional: false, required: true
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface LogicAppIntegrationAccountAgreementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#create LogicAppIntegrationAccountAgreement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#delete LogicAppIntegrationAccountAgreement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#read LogicAppIntegrationAccountAgreement#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#update LogicAppIntegrationAccountAgreement#update}
  */
  readonly update?: string;
}

export function logicAppIntegrationAccountAgreementTimeoutsToTerraform(struct?: LogicAppIntegrationAccountAgreementTimeoutsOutputReference | LogicAppIntegrationAccountAgreementTimeouts): any {
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

export class LogicAppIntegrationAccountAgreementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LogicAppIntegrationAccountAgreementTimeouts | undefined {
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

  public set internalValue(value: LogicAppIntegrationAccountAgreementTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html azurerm_logic_app_integration_account_agreement}
*/
export class LogicAppIntegrationAccountAgreement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logic_app_integration_account_agreement";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html azurerm_logic_app_integration_account_agreement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppIntegrationAccountAgreementConfig
  */
  public constructor(scope: Construct, id: string, config: LogicAppIntegrationAccountAgreementConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_integration_account_agreement',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agreementType = config.agreementType;
    this._content = config.content;
    this._guestPartnerName = config.guestPartnerName;
    this._hostPartnerName = config.hostPartnerName;
    this._integrationAccountName = config.integrationAccountName;
    this._metadata = config.metadata;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._guestIdentity.internalValue = config.guestIdentity;
    this._hostIdentity.internalValue = config.hostIdentity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agreement_type - computed: false, optional: false, required: true
  private _agreementType?: string; 
  public get agreementType() {
    return this.getStringAttribute('agreement_type');
  }
  public set agreementType(value: string) {
    this._agreementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementTypeInput() {
    return this._agreementType;
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // guest_partner_name - computed: false, optional: false, required: true
  private _guestPartnerName?: string; 
  public get guestPartnerName() {
    return this.getStringAttribute('guest_partner_name');
  }
  public set guestPartnerName(value: string) {
    this._guestPartnerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guestPartnerNameInput() {
    return this._guestPartnerName;
  }

  // host_partner_name - computed: false, optional: false, required: true
  private _hostPartnerName?: string; 
  public get hostPartnerName() {
    return this.getStringAttribute('host_partner_name');
  }
  public set hostPartnerName(value: string) {
    this._hostPartnerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPartnerNameInput() {
    return this._hostPartnerName;
  }

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
  private _metadata?: { [key: string]: string } | cdktf.IResolvable; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable) {
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

  // guest_identity - computed: false, optional: false, required: true
  private _guestIdentity = new LogicAppIntegrationAccountAgreementGuestIdentityOutputReference(this as any, "guest_identity", true);
  public get guestIdentity() {
    return this._guestIdentity;
  }
  public putGuestIdentity(value: LogicAppIntegrationAccountAgreementGuestIdentity) {
    this._guestIdentity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guestIdentityInput() {
    return this._guestIdentity.internalValue;
  }

  // host_identity - computed: false, optional: false, required: true
  private _hostIdentity = new LogicAppIntegrationAccountAgreementHostIdentityOutputReference(this as any, "host_identity", true);
  public get hostIdentity() {
    return this._hostIdentity;
  }
  public putHostIdentity(value: LogicAppIntegrationAccountAgreementHostIdentity) {
    this._hostIdentity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdentityInput() {
    return this._hostIdentity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogicAppIntegrationAccountAgreementTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogicAppIntegrationAccountAgreementTimeouts) {
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
      agreement_type: cdktf.stringToTerraform(this._agreementType),
      content: cdktf.stringToTerraform(this._content),
      guest_partner_name: cdktf.stringToTerraform(this._guestPartnerName),
      host_partner_name: cdktf.stringToTerraform(this._hostPartnerName),
      integration_account_name: cdktf.stringToTerraform(this._integrationAccountName),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      guest_identity: logicAppIntegrationAccountAgreementGuestIdentityToTerraform(this._guestIdentity.internalValue),
      host_identity: logicAppIntegrationAccountAgreementHostIdentityToTerraform(this._hostIdentity.internalValue),
      timeouts: logicAppIntegrationAccountAgreementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
