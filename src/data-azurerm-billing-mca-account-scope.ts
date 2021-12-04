// https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermBillingMcaAccountScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}
  */
  readonly billingAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}
  */
  readonly billingProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}
  */
  readonly invoiceSectionName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html#timeouts DataAzurermBillingMcaAccountScope#timeouts}
  */
  readonly timeouts?: DataAzurermBillingMcaAccountScopeTimeouts;
}
export interface DataAzurermBillingMcaAccountScopeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html#read DataAzurermBillingMcaAccountScope#read}
  */
  readonly read?: string;
}

export function dataAzurermBillingMcaAccountScopeTimeoutsToTerraform(struct?: DataAzurermBillingMcaAccountScopeTimeoutsOutputReference | DataAzurermBillingMcaAccountScopeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermBillingMcaAccountScopeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermBillingMcaAccountScopeTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermBillingMcaAccountScopeTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html azurerm_billing_mca_account_scope}
*/
export class DataAzurermBillingMcaAccountScope extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_billing_mca_account_scope";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html azurerm_billing_mca_account_scope} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermBillingMcaAccountScopeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermBillingMcaAccountScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_billing_mca_account_scope',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._billingAccountName = config.billingAccountName;
    this._billingProfileName = config.billingProfileName;
    this._invoiceSectionName = config.invoiceSectionName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account_name - computed: false, optional: false, required: true
  private _billingAccountName?: string; 
  public get billingAccountName() {
    return this.getStringAttribute('billing_account_name');
  }
  public set billingAccountName(value: string) {
    this._billingAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountNameInput() {
    return this._billingAccountName;
  }

  // billing_profile_name - computed: false, optional: false, required: true
  private _billingProfileName?: string; 
  public get billingProfileName() {
    return this.getStringAttribute('billing_profile_name');
  }
  public set billingProfileName(value: string) {
    this._billingProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProfileNameInput() {
    return this._billingProfileName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invoice_section_name - computed: false, optional: false, required: true
  private _invoiceSectionName?: string; 
  public get invoiceSectionName() {
    return this.getStringAttribute('invoice_section_name');
  }
  public set invoiceSectionName(value: string) {
    this._invoiceSectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invoiceSectionNameInput() {
    return this._invoiceSectionName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermBillingMcaAccountScopeTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermBillingMcaAccountScopeTimeouts) {
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
      billing_account_name: cdktf.stringToTerraform(this._billingAccountName),
      billing_profile_name: cdktf.stringToTerraform(this._billingProfileName),
      invoice_section_name: cdktf.stringToTerraform(this._invoiceSectionName),
      timeouts: dataAzurermBillingMcaAccountScopeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
