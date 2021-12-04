// https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#access_policy_object_ids HealthcareService#access_policy_object_ids}
  */
  readonly accessPolicyObjectIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#cosmosdb_key_vault_key_versionless_id HealthcareService#cosmosdb_key_vault_key_versionless_id}
  */
  readonly cosmosdbKeyVaultKeyVersionlessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#cosmosdb_throughput HealthcareService#cosmosdb_throughput}
  */
  readonly cosmosdbThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#kind HealthcareService#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#location HealthcareService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#name HealthcareService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#public_network_access_enabled HealthcareService#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#resource_group_name HealthcareService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#tags HealthcareService#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * authentication_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#authentication_configuration HealthcareService#authentication_configuration}
  */
  readonly authenticationConfiguration?: HealthcareServiceAuthenticationConfiguration;
  /**
  * cors_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#cors_configuration HealthcareService#cors_configuration}
  */
  readonly corsConfiguration?: HealthcareServiceCorsConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#timeouts HealthcareService#timeouts}
  */
  readonly timeouts?: HealthcareServiceTimeouts;
}
export interface HealthcareServiceAuthenticationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#audience HealthcareService#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#authority HealthcareService#authority}
  */
  readonly authority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#smart_proxy_enabled HealthcareService#smart_proxy_enabled}
  */
  readonly smartProxyEnabled?: boolean | cdktf.IResolvable;
}

export function healthcareServiceAuthenticationConfigurationToTerraform(struct?: HealthcareServiceAuthenticationConfigurationOutputReference | HealthcareServiceAuthenticationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    authority: cdktf.stringToTerraform(struct!.authority),
    smart_proxy_enabled: cdktf.booleanToTerraform(struct!.smartProxyEnabled),
  }
}

export class HealthcareServiceAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HealthcareServiceAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._authority) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    if (this._smartProxyEnabled) {
      hasAnyValues = true;
      internalValueResult.smartProxyEnabled = this._smartProxyEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareServiceAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._authority = undefined;
      this._smartProxyEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._authority = value.authority;
      this._smartProxyEnabled = value.smartProxyEnabled;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // authority - computed: false, optional: true, required: false
  private _authority?: string; 
  public get authority() {
    return this.getStringAttribute('authority');
  }
  public set authority(value: string) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
  }

  // smart_proxy_enabled - computed: false, optional: true, required: false
  private _smartProxyEnabled?: boolean | cdktf.IResolvable; 
  public get smartProxyEnabled() {
    return this.getBooleanAttribute('smart_proxy_enabled') as any;
  }
  public set smartProxyEnabled(value: boolean | cdktf.IResolvable) {
    this._smartProxyEnabled = value;
  }
  public resetSmartProxyEnabled() {
    this._smartProxyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartProxyEnabledInput() {
    return this._smartProxyEnabled;
  }
}
export interface HealthcareServiceCorsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#allow_credentials HealthcareService#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#allowed_headers HealthcareService#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#allowed_methods HealthcareService#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#allowed_origins HealthcareService#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#max_age_in_seconds HealthcareService#max_age_in_seconds}
  */
  readonly maxAgeInSeconds?: number;
}

export function healthcareServiceCorsConfigurationToTerraform(struct?: HealthcareServiceCorsConfigurationOutputReference | HealthcareServiceCorsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}

export class HealthcareServiceCorsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HealthcareServiceCorsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowedHeaders) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._maxAgeInSeconds) {
      hasAnyValues = true;
      internalValueResult.maxAgeInSeconds = this._maxAgeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareServiceCorsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._maxAgeInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._maxAgeInSeconds = value.maxAgeInSeconds;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials') as any;
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allowed_headers - computed: false, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: false, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // max_age_in_seconds - computed: false, optional: true, required: false
  private _maxAgeInSeconds?: number; 
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
  public set maxAgeInSeconds(value: number) {
    this._maxAgeInSeconds = value;
  }
  public resetMaxAgeInSeconds() {
    this._maxAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInSecondsInput() {
    return this._maxAgeInSeconds;
  }
}
export interface HealthcareServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#create HealthcareService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#delete HealthcareService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#read HealthcareService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#update HealthcareService#update}
  */
  readonly update?: string;
}

export function healthcareServiceTimeoutsToTerraform(struct?: HealthcareServiceTimeoutsOutputReference | HealthcareServiceTimeouts): any {
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

export class HealthcareServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HealthcareServiceTimeouts | undefined {
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

  public set internalValue(value: HealthcareServiceTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html azurerm_healthcare_service}
*/
export class HealthcareService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_healthcare_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html azurerm_healthcare_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareServiceConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcareServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_healthcare_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPolicyObjectIds = config.accessPolicyObjectIds;
    this._cosmosdbKeyVaultKeyVersionlessId = config.cosmosdbKeyVaultKeyVersionlessId;
    this._cosmosdbThroughput = config.cosmosdbThroughput;
    this._kind = config.kind;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._authenticationConfiguration.internalValue = config.authenticationConfiguration;
    this._corsConfiguration.internalValue = config.corsConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_object_ids - computed: false, optional: true, required: false
  private _accessPolicyObjectIds?: string[]; 
  public get accessPolicyObjectIds() {
    return this.getListAttribute('access_policy_object_ids');
  }
  public set accessPolicyObjectIds(value: string[]) {
    this._accessPolicyObjectIds = value;
  }
  public resetAccessPolicyObjectIds() {
    this._accessPolicyObjectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyObjectIdsInput() {
    return this._accessPolicyObjectIds;
  }

  // cosmosdb_key_vault_key_versionless_id - computed: false, optional: true, required: false
  private _cosmosdbKeyVaultKeyVersionlessId?: string; 
  public get cosmosdbKeyVaultKeyVersionlessId() {
    return this.getStringAttribute('cosmosdb_key_vault_key_versionless_id');
  }
  public set cosmosdbKeyVaultKeyVersionlessId(value: string) {
    this._cosmosdbKeyVaultKeyVersionlessId = value;
  }
  public resetCosmosdbKeyVaultKeyVersionlessId() {
    this._cosmosdbKeyVaultKeyVersionlessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbKeyVaultKeyVersionlessIdInput() {
    return this._cosmosdbKeyVaultKeyVersionlessId;
  }

  // cosmosdb_throughput - computed: false, optional: true, required: false
  private _cosmosdbThroughput?: number; 
  public get cosmosdbThroughput() {
    return this.getNumberAttribute('cosmosdb_throughput');
  }
  public set cosmosdbThroughput(value: number) {
    this._cosmosdbThroughput = value;
  }
  public resetCosmosdbThroughput() {
    this._cosmosdbThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbThroughputInput() {
    return this._cosmosdbThroughput;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled') as any;
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // authentication_configuration - computed: false, optional: true, required: false
  private _authenticationConfiguration = new HealthcareServiceAuthenticationConfigurationOutputReference(this as any, "authentication_configuration", true);
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }
  public putAuthenticationConfiguration(value: HealthcareServiceAuthenticationConfiguration) {
    this._authenticationConfiguration.internalValue = value;
  }
  public resetAuthenticationConfiguration() {
    this._authenticationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigurationInput() {
    return this._authenticationConfiguration.internalValue;
  }

  // cors_configuration - computed: false, optional: true, required: false
  private _corsConfiguration = new HealthcareServiceCorsConfigurationOutputReference(this as any, "cors_configuration", true);
  public get corsConfiguration() {
    return this._corsConfiguration;
  }
  public putCorsConfiguration(value: HealthcareServiceCorsConfiguration) {
    this._corsConfiguration.internalValue = value;
  }
  public resetCorsConfiguration() {
    this._corsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigurationInput() {
    return this._corsConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HealthcareServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HealthcareServiceTimeouts) {
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
      access_policy_object_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._accessPolicyObjectIds),
      cosmosdb_key_vault_key_versionless_id: cdktf.stringToTerraform(this._cosmosdbKeyVaultKeyVersionlessId),
      cosmosdb_throughput: cdktf.numberToTerraform(this._cosmosdbThroughput),
      kind: cdktf.stringToTerraform(this._kind),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      authentication_configuration: healthcareServiceAuthenticationConfigurationToTerraform(this._authenticationConfiguration.internalValue),
      cors_configuration: healthcareServiceCorsConfigurationToTerraform(this._corsConfiguration.internalValue),
      timeouts: healthcareServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
