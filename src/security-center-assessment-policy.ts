// https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityCenterAssessmentPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly description: string;
  readonly displayName: string;
  readonly implementationEffort?: string;
  readonly remediationDescription?: string;
  readonly severity?: string;
  readonly threats?: string[];
  readonly userImpact?: string;
  /** timeouts block */
  readonly timeouts?: SecurityCenterAssessmentPolicyTimeouts;
}
export interface SecurityCenterAssessmentPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function securityCenterAssessmentPolicyTimeoutsToTerraform(struct?: SecurityCenterAssessmentPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SecurityCenterAssessmentPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._description = config.description;
    this._displayName = config.displayName;
    this._implementationEffort = config.implementationEffort;
    this._remediationDescription = config.remediationDescription;
    this._severity = config.severity;
    this._threats = config.threats;
    this._userImpact = config.userImpact;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
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
  public set implementationEffort(value: string ) {
    this._implementationEffort = value;
  }
  public resetImplementationEffort() {
    this._implementationEffort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implementationEffortInput() {
    return this._implementationEffort
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
  public set remediationDescription(value: string ) {
    this._remediationDescription = value;
  }
  public resetRemediationDescription() {
    this._remediationDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationDescriptionInput() {
    return this._remediationDescription
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string;
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string ) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity
  }

  // threats - computed: false, optional: true, required: false
  private _threats?: string[];
  public get threats() {
    return this.getListAttribute('threats');
  }
  public set threats(value: string[] ) {
    this._threats = value;
  }
  public resetThreats() {
    this._threats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatsInput() {
    return this._threats
  }

  // user_impact - computed: false, optional: true, required: false
  private _userImpact?: string;
  public get userImpact() {
    return this.getStringAttribute('user_impact');
  }
  public set userImpact(value: string ) {
    this._userImpact = value;
  }
  public resetUserImpact() {
    this._userImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userImpactInput() {
    return this._userImpact
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityCenterAssessmentPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SecurityCenterAssessmentPolicyTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      implementation_effort: cdktf.stringToTerraform(this._implementationEffort),
      remediation_description: cdktf.stringToTerraform(this._remediationDescription),
      severity: cdktf.stringToTerraform(this._severity),
      threats: cdktf.listMapper(cdktf.stringToTerraform)(this._threats),
      user_impact: cdktf.stringToTerraform(this._userImpact),
      timeouts: securityCenterAssessmentPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
