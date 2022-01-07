// https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnEndpointCustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#cdn_endpoint_id CdnEndpointCustomDomain#cdn_endpoint_id}
  */
  readonly cdnEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#host_name CdnEndpointCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#name CdnEndpointCustomDomain#name}
  */
  readonly name: string;
  /**
  * cdn_managed_https block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#cdn_managed_https CdnEndpointCustomDomain#cdn_managed_https}
  */
  readonly cdnManagedHttps?: CdnEndpointCustomDomainCdnManagedHttps;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#timeouts CdnEndpointCustomDomain#timeouts}
  */
  readonly timeouts?: CdnEndpointCustomDomainTimeouts;
  /**
  * user_managed_https block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#user_managed_https CdnEndpointCustomDomain#user_managed_https}
  */
  readonly userManagedHttps?: CdnEndpointCustomDomainUserManagedHttps;
}
export interface CdnEndpointCustomDomainCdnManagedHttps {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#certificate_type CdnEndpointCustomDomain#certificate_type}
  */
  readonly certificateType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#protocol_type CdnEndpointCustomDomain#protocol_type}
  */
  readonly protocolType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#tls_version CdnEndpointCustomDomain#tls_version}
  */
  readonly tlsVersion?: string;
}

export function cdnEndpointCustomDomainCdnManagedHttpsToTerraform(struct?: CdnEndpointCustomDomainCdnManagedHttpsOutputReference | CdnEndpointCustomDomainCdnManagedHttps): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_type: cdktf.stringToTerraform(struct!.certificateType),
    protocol_type: cdktf.stringToTerraform(struct!.protocolType),
    tls_version: cdktf.stringToTerraform(struct!.tlsVersion),
  }
}

export class CdnEndpointCustomDomainCdnManagedHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CdnEndpointCustomDomainCdnManagedHttps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateType = this._certificateType;
    }
    if (this._protocolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolType = this._protocolType;
    }
    if (this._tlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersion = this._tlsVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointCustomDomainCdnManagedHttps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateType = undefined;
      this._protocolType = undefined;
      this._tlsVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateType = value.certificateType;
      this._protocolType = value.protocolType;
      this._tlsVersion = value.tlsVersion;
    }
  }

  // certificate_type - computed: false, optional: false, required: true
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }

  // protocol_type - computed: false, optional: false, required: true
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // tls_version - computed: false, optional: true, required: false
  private _tlsVersion?: string; 
  public get tlsVersion() {
    return this.getStringAttribute('tls_version');
  }
  public set tlsVersion(value: string) {
    this._tlsVersion = value;
  }
  public resetTlsVersion() {
    this._tlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }
}
export interface CdnEndpointCustomDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#create CdnEndpointCustomDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#delete CdnEndpointCustomDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#read CdnEndpointCustomDomain#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#update CdnEndpointCustomDomain#update}
  */
  readonly update?: string;
}

export function cdnEndpointCustomDomainTimeoutsToTerraform(struct?: CdnEndpointCustomDomainTimeoutsOutputReference | CdnEndpointCustomDomainTimeouts): any {
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

export class CdnEndpointCustomDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CdnEndpointCustomDomainTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointCustomDomainTimeouts | undefined) {
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
export interface CdnEndpointCustomDomainUserManagedHttps {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#key_vault_certificate_id CdnEndpointCustomDomain#key_vault_certificate_id}
  */
  readonly keyVaultCertificateId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#tls_version CdnEndpointCustomDomain#tls_version}
  */
  readonly tlsVersion?: string;
}

export function cdnEndpointCustomDomainUserManagedHttpsToTerraform(struct?: CdnEndpointCustomDomainUserManagedHttpsOutputReference | CdnEndpointCustomDomainUserManagedHttps): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_certificate_id: cdktf.stringToTerraform(struct!.keyVaultCertificateId),
    tls_version: cdktf.stringToTerraform(struct!.tlsVersion),
  }
}

export class CdnEndpointCustomDomainUserManagedHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CdnEndpointCustomDomainUserManagedHttps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyVaultCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultCertificateId = this._keyVaultCertificateId;
    }
    if (this._tlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersion = this._tlsVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointCustomDomainUserManagedHttps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyVaultCertificateId = undefined;
      this._tlsVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyVaultCertificateId = value.keyVaultCertificateId;
      this._tlsVersion = value.tlsVersion;
    }
  }

  // key_vault_certificate_id - computed: false, optional: false, required: true
  private _keyVaultCertificateId?: string; 
  public get keyVaultCertificateId() {
    return this.getStringAttribute('key_vault_certificate_id');
  }
  public set keyVaultCertificateId(value: string) {
    this._keyVaultCertificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultCertificateIdInput() {
    return this._keyVaultCertificateId;
  }

  // tls_version - computed: false, optional: true, required: false
  private _tlsVersion?: string; 
  public get tlsVersion() {
    return this.getStringAttribute('tls_version');
  }
  public set tlsVersion(value: string) {
    this._tlsVersion = value;
  }
  public resetTlsVersion() {
    this._tlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html azurerm_cdn_endpoint_custom_domain}
*/
export class CdnEndpointCustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_cdn_endpoint_custom_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html azurerm_cdn_endpoint_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnEndpointCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CdnEndpointCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_endpoint_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cdnEndpointId = config.cdnEndpointId;
    this._hostName = config.hostName;
    this._name = config.name;
    this._cdnManagedHttps.internalValue = config.cdnManagedHttps;
    this._timeouts.internalValue = config.timeouts;
    this._userManagedHttps.internalValue = config.userManagedHttps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdn_endpoint_id - computed: false, optional: false, required: true
  private _cdnEndpointId?: string; 
  public get cdnEndpointId() {
    return this.getStringAttribute('cdn_endpoint_id');
  }
  public set cdnEndpointId(value: string) {
    this._cdnEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnEndpointIdInput() {
    return this._cdnEndpointId;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // cdn_managed_https - computed: false, optional: true, required: false
  private _cdnManagedHttps = new CdnEndpointCustomDomainCdnManagedHttpsOutputReference(this as any, "cdn_managed_https", true);
  public get cdnManagedHttps() {
    return this._cdnManagedHttps;
  }
  public putCdnManagedHttps(value: CdnEndpointCustomDomainCdnManagedHttps) {
    this._cdnManagedHttps.internalValue = value;
  }
  public resetCdnManagedHttps() {
    this._cdnManagedHttps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnManagedHttpsInput() {
    return this._cdnManagedHttps.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnEndpointCustomDomainTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnEndpointCustomDomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_managed_https - computed: false, optional: true, required: false
  private _userManagedHttps = new CdnEndpointCustomDomainUserManagedHttpsOutputReference(this as any, "user_managed_https", true);
  public get userManagedHttps() {
    return this._userManagedHttps;
  }
  public putUserManagedHttps(value: CdnEndpointCustomDomainUserManagedHttps) {
    this._userManagedHttps.internalValue = value;
  }
  public resetUserManagedHttps() {
    this._userManagedHttps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userManagedHttpsInput() {
    return this._userManagedHttps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdn_endpoint_id: cdktf.stringToTerraform(this._cdnEndpointId),
      host_name: cdktf.stringToTerraform(this._hostName),
      name: cdktf.stringToTerraform(this._name),
      cdn_managed_https: cdnEndpointCustomDomainCdnManagedHttpsToTerraform(this._cdnManagedHttps.internalValue),
      timeouts: cdnEndpointCustomDomainTimeoutsToTerraform(this._timeouts.internalValue),
      user_managed_https: cdnEndpointCustomDomainUserManagedHttpsToTerraform(this._userManagedHttps.internalValue),
    };
  }
}
