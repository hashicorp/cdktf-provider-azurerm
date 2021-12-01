// https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontdoorCustomHttpsConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#custom_https_provisioning_enabled FrontdoorCustomHttpsConfiguration#custom_https_provisioning_enabled}
  */
  readonly customHttpsProvisioningEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#frontend_endpoint_id FrontdoorCustomHttpsConfiguration#frontend_endpoint_id}
  */
  readonly frontendEndpointId: string;
  /**
  * custom_https_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#custom_https_configuration FrontdoorCustomHttpsConfiguration#custom_https_configuration}
  */
  readonly customHttpsConfiguration?: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#timeouts FrontdoorCustomHttpsConfiguration#timeouts}
  */
  readonly timeouts?: FrontdoorCustomHttpsConfigurationTimeouts;
}
export interface FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#azure_key_vault_certificate_secret_name FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_name}
  */
  readonly azureKeyVaultCertificateSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#azure_key_vault_certificate_secret_version FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_version}
  */
  readonly azureKeyVaultCertificateSecretVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#azure_key_vault_certificate_vault_id FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_vault_id}
  */
  readonly azureKeyVaultCertificateVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#certificate_source FrontdoorCustomHttpsConfiguration#certificate_source}
  */
  readonly certificateSource?: string;
}

export function frontdoorCustomHttpsConfigurationCustomHttpsConfigurationToTerraform(struct?: FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference | FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_key_vault_certificate_secret_name: cdktf.stringToTerraform(struct!.azureKeyVaultCertificateSecretName),
    azure_key_vault_certificate_secret_version: cdktf.stringToTerraform(struct!.azureKeyVaultCertificateSecretVersion),
    azure_key_vault_certificate_vault_id: cdktf.stringToTerraform(struct!.azureKeyVaultCertificateVaultId),
    certificate_source: cdktf.stringToTerraform(struct!.certificateSource),
  }
}

export class FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._azureKeyVaultCertificateSecretName) {
      hasAnyValues = true;
      internalValueResult.azureKeyVaultCertificateSecretName = this._azureKeyVaultCertificateSecretName;
    }
    if (this._azureKeyVaultCertificateSecretVersion) {
      hasAnyValues = true;
      internalValueResult.azureKeyVaultCertificateSecretVersion = this._azureKeyVaultCertificateSecretVersion;
    }
    if (this._azureKeyVaultCertificateVaultId) {
      hasAnyValues = true;
      internalValueResult.azureKeyVaultCertificateVaultId = this._azureKeyVaultCertificateVaultId;
    }
    if (this._certificateSource) {
      hasAnyValues = true;
      internalValueResult.certificateSource = this._certificateSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration | undefined) {
    if (value === undefined) {
      this._azureKeyVaultCertificateSecretName = undefined;
      this._azureKeyVaultCertificateSecretVersion = undefined;
      this._azureKeyVaultCertificateVaultId = undefined;
      this._certificateSource = undefined;
    }
    else {
      this._azureKeyVaultCertificateSecretName = value.azureKeyVaultCertificateSecretName;
      this._azureKeyVaultCertificateSecretVersion = value.azureKeyVaultCertificateSecretVersion;
      this._azureKeyVaultCertificateVaultId = value.azureKeyVaultCertificateVaultId;
      this._certificateSource = value.certificateSource;
    }
  }

  // azure_key_vault_certificate_secret_name - computed: false, optional: true, required: false
  private _azureKeyVaultCertificateSecretName?: string; 
  public get azureKeyVaultCertificateSecretName() {
    return this.getStringAttribute('azure_key_vault_certificate_secret_name');
  }
  public set azureKeyVaultCertificateSecretName(value: string) {
    this._azureKeyVaultCertificateSecretName = value;
  }
  public resetAzureKeyVaultCertificateSecretName() {
    this._azureKeyVaultCertificateSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultCertificateSecretNameInput() {
    return this._azureKeyVaultCertificateSecretName;
  }

  // azure_key_vault_certificate_secret_version - computed: false, optional: true, required: false
  private _azureKeyVaultCertificateSecretVersion?: string; 
  public get azureKeyVaultCertificateSecretVersion() {
    return this.getStringAttribute('azure_key_vault_certificate_secret_version');
  }
  public set azureKeyVaultCertificateSecretVersion(value: string) {
    this._azureKeyVaultCertificateSecretVersion = value;
  }
  public resetAzureKeyVaultCertificateSecretVersion() {
    this._azureKeyVaultCertificateSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultCertificateSecretVersionInput() {
    return this._azureKeyVaultCertificateSecretVersion;
  }

  // azure_key_vault_certificate_vault_id - computed: false, optional: true, required: false
  private _azureKeyVaultCertificateVaultId?: string; 
  public get azureKeyVaultCertificateVaultId() {
    return this.getStringAttribute('azure_key_vault_certificate_vault_id');
  }
  public set azureKeyVaultCertificateVaultId(value: string) {
    this._azureKeyVaultCertificateVaultId = value;
  }
  public resetAzureKeyVaultCertificateVaultId() {
    this._azureKeyVaultCertificateVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultCertificateVaultIdInput() {
    return this._azureKeyVaultCertificateVaultId;
  }

  // certificate_source - computed: false, optional: true, required: false
  private _certificateSource?: string; 
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }
  public set certificateSource(value: string) {
    this._certificateSource = value;
  }
  public resetCertificateSource() {
    this._certificateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSourceInput() {
    return this._certificateSource;
  }
}
export interface FrontdoorCustomHttpsConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#create FrontdoorCustomHttpsConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#delete FrontdoorCustomHttpsConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#read FrontdoorCustomHttpsConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#update FrontdoorCustomHttpsConfiguration#update}
  */
  readonly update?: string;
}

export function frontdoorCustomHttpsConfigurationTimeoutsToTerraform(struct?: FrontdoorCustomHttpsConfigurationTimeoutsOutputReference | FrontdoorCustomHttpsConfigurationTimeouts): any {
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

export class FrontdoorCustomHttpsConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FrontdoorCustomHttpsConfigurationTimeouts | undefined {
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

  public set internalValue(value: FrontdoorCustomHttpsConfigurationTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html azurerm_frontdoor_custom_https_configuration}
*/
export class FrontdoorCustomHttpsConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_frontdoor_custom_https_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html azurerm_frontdoor_custom_https_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrontdoorCustomHttpsConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: FrontdoorCustomHttpsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_frontdoor_custom_https_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customHttpsProvisioningEnabled = config.customHttpsProvisioningEnabled;
    this._frontendEndpointId = config.frontendEndpointId;
    this._customHttpsConfiguration.internalValue = config.customHttpsConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_https_provisioning_enabled - computed: false, optional: false, required: true
  private _customHttpsProvisioningEnabled?: boolean | cdktf.IResolvable; 
  public get customHttpsProvisioningEnabled() {
    return this.getBooleanAttribute('custom_https_provisioning_enabled') as any;
  }
  public set customHttpsProvisioningEnabled(value: boolean | cdktf.IResolvable) {
    this._customHttpsProvisioningEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customHttpsProvisioningEnabledInput() {
    return this._customHttpsProvisioningEnabled;
  }

  // frontend_endpoint_id - computed: false, optional: false, required: true
  private _frontendEndpointId?: string; 
  public get frontendEndpointId() {
    return this.getStringAttribute('frontend_endpoint_id');
  }
  public set frontendEndpointId(value: string) {
    this._frontendEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendEndpointIdInput() {
    return this._frontendEndpointId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // custom_https_configuration - computed: false, optional: true, required: false
  private _customHttpsConfiguration = new FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference(this as any, "custom_https_configuration", true);
  public get customHttpsConfiguration() {
    return this._customHttpsConfiguration;
  }
  public putCustomHttpsConfiguration(value: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration) {
    this._customHttpsConfiguration.internalValue = value;
  }
  public resetCustomHttpsConfiguration() {
    this._customHttpsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHttpsConfigurationInput() {
    return this._customHttpsConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FrontdoorCustomHttpsConfigurationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FrontdoorCustomHttpsConfigurationTimeouts) {
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
      custom_https_provisioning_enabled: cdktf.booleanToTerraform(this._customHttpsProvisioningEnabled),
      frontend_endpoint_id: cdktf.stringToTerraform(this._frontendEndpointId),
      custom_https_configuration: frontdoorCustomHttpsConfigurationCustomHttpsConfigurationToTerraform(this._customHttpsConfiguration.internalValue),
      timeouts: frontdoorCustomHttpsConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
