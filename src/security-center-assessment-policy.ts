// https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityCenterAssessmentPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#categories SecurityCenterAssessmentPolicy#categories}
  */
  readonly categories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#description SecurityCenterAssessmentPolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#display_name SecurityCenterAssessmentPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#implementation_effort SecurityCenterAssessmentPolicy#implementation_effort}
  */
  readonly implementationEffort?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#remediation_description SecurityCenterAssessmentPolicy#remediation_description}
  */
  readonly remediationDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#severity SecurityCenterAssessmentPolicy#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#threats SecurityCenterAssessmentPolicy#threats}
  */
  readonly threats?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#user_impact SecurityCenterAssessmentPolicy#user_impact}
  */
  readonly userImpact?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#timeouts SecurityCenterAssessmentPolicy#timeouts}
  */
  readonly timeouts?: SecurityCenterAssessmentPolicyTimeouts;
}
export interface SecurityCenterAssessmentPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#create SecurityCenterAssessmentPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#delete SecurityCenterAssessmentPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#read SecurityCenterAssessmentPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#update SecurityCenterAssessmentPolicy#update}
  */
  readonly update?: string;
}

export function securityCenterAssessmentPolicyTimeoutsToTerraform(struct?: SecurityCenterAssessmentPolicyTimeoutsOutputReference | SecurityCenterAssessmentPolicyTimeouts): any {
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

export class SecurityCenterAssessmentPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecurityCenterAssessmentPolicyTimeouts | undefined {
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

  public set internalValue(value: SecurityCenterAssessmentPolicyTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html azurerm_security_center_assessment_policy}
*/
export class SecurityCenterAssessmentPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_security_center_assessment_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html azurerm_security_center_assessment_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityCenterAssessmentPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityCenterAssessmentPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_security_center_assessment_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._categories = config.categories;
    this._description = config.description;
    this._displayName = config.displayName;
    this._implementationEffort = config.implementationEffort;
    this._remediationDescription = config.remediationDescription;
    this._severity = config.severity;
    this._threats = config.threats;
    this._userImpact = config.userImpact;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: true, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // implementation_effort - computed: false, optional: true, required: false
  private _implementationEffort?: string; 
  public get implementationEffort() {
    return this.getStringAttribute('implementation_effort');
  }
  public set implementationEffort(value: string) {
    this._implementationEffort = value;
  }
  public resetImplementationEffort() {
    this._implementationEffort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implementationEffortInput() {
    return this._implementationEffort;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remediation_description - computed: false, optional: true, required: false
  private _remediationDescription?: string; 
  public get remediationDescription() {
    return this.getStringAttribute('remediation_description');
  }
  public set remediationDescription(value: string) {
    this._remediationDescription = value;
  }
  public resetRemediationDescription() {
    this._remediationDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationDescriptionInput() {
    return this._remediationDescription;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // threats - computed: false, optional: true, required: false
  private _threats?: string[]; 
  public get threats() {
    return this.getListAttribute('threats');
  }
  public set threats(value: string[]) {
    this._threats = value;
  }
  public resetThreats() {
    this._threats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatsInput() {
    return this._threats;
  }

  // user_impact - computed: false, optional: true, required: false
  private _userImpact?: string; 
  public get userImpact() {
    return this.getStringAttribute('user_impact');
  }
  public set userImpact(value: string) {
    this._userImpact = value;
  }
  public resetUserImpact() {
    this._userImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userImpactInput() {
    return this._userImpact;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecurityCenterAssessmentPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecurityCenterAssessmentPolicyTimeouts) {
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
      categories: cdktf.listMapper(cdktf.stringToTerraform)(this._categories),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      implementation_effort: cdktf.stringToTerraform(this._implementationEffort),
      remediation_description: cdktf.stringToTerraform(this._remediationDescription),
      severity: cdktf.stringToTerraform(this._severity),
      threats: cdktf.listMapper(cdktf.stringToTerraform)(this._threats),
      user_impact: cdktf.stringToTerraform(this._userImpact),
      timeouts: securityCenterAssessmentPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
