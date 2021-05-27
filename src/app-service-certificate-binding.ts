// https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceCertificateBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate_binding.html#certificate_id AppServiceCertificateBinding#certificate_id}
  */
  readonly certificateId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate_binding.html#hostname_binding_id AppServiceCertificateBinding#hostname_binding_id}
  */
  readonly hostnameBindingId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate_binding.html#ssl_state AppServiceCertificateBinding#ssl_state}
  */
  readonly sslState: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate_binding.html#timeouts AppServiceCertificateBinding#timeouts}
  */
  readonly timeouts?: AppServiceCertificateBindingTimeouts;
}
export interface AppServiceCertificateBindingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate_binding.html#create AppServiceCertificateBinding#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate_binding.html#delete AppServiceCertificateBinding#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate_binding.html#read AppServiceCertificateBinding#read}
  */
  readonly read?: string;
}

function appServiceCertificateBindingTimeoutsToTerraform(struct?: AppServiceCertificateBindingTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate_binding.html azurerm_app_service_certificate_binding}
*/
export class AppServiceCertificateBinding extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate_binding.html azurerm_app_service_certificate_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppServiceCertificateBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppServiceCertificateBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_certificate_binding',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateId = config.certificateId;
    this._hostnameBindingId = config.hostnameBindingId;
    this._sslState = config.sslState;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_name - computed: true, optional: false, required: false
  public get appServiceName() {
    return this.getStringAttribute('app_service_name');
  }

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId: string;
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // hostname_binding_id - computed: false, optional: false, required: true
  private _hostnameBindingId: string;
  public get hostnameBindingId() {
    return this.getStringAttribute('hostname_binding_id');
  }
  public set hostnameBindingId(value: string) {
    this._hostnameBindingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameBindingIdInput() {
    return this._hostnameBindingId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ssl_state - computed: false, optional: false, required: true
  private _sslState: string;
  public get sslState() {
    return this.getStringAttribute('ssl_state');
  }
  public set sslState(value: string) {
    this._sslState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslStateInput() {
    return this._sslState
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceCertificateBindingTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppServiceCertificateBindingTimeouts ) {
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
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      hostname_binding_id: cdktf.stringToTerraform(this._hostnameBindingId),
      ssl_state: cdktf.stringToTerraform(this._sslState),
      timeouts: appServiceCertificateBindingTimeoutsToTerraform(this._timeouts),
    };
  }
}
