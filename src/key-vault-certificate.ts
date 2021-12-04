// https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#key_vault_id KeyVaultCertificate#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#name KeyVaultCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#tags KeyVaultCertificate#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#certificate KeyVaultCertificate#certificate}
  */
  readonly certificate?: KeyVaultCertificateCertificate;
  /**
  * certificate_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#certificate_policy KeyVaultCertificate#certificate_policy}
  */
  readonly certificatePolicy?: KeyVaultCertificateCertificatePolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#timeouts KeyVaultCertificate#timeouts}
  */
  readonly timeouts?: KeyVaultCertificateTimeouts;
}
export class KeyVaultCertificateCertificateAttribute extends cdktf.ComplexComputedList {

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // recovery_level - computed: true, optional: false, required: false
  public get recoveryLevel() {
    return this.getStringAttribute('recovery_level');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }
}
export interface KeyVaultCertificateCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#contents KeyVaultCertificate#contents}
  */
  readonly contents: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#password KeyVaultCertificate#password}
  */
  readonly password?: string;
}

export function keyVaultCertificateCertificateToTerraform(struct?: KeyVaultCertificateCertificateOutputReference | KeyVaultCertificateCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.stringToTerraform(struct!.contents),
    password: cdktf.stringToTerraform(struct!.password),
  }
}

export class KeyVaultCertificateCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KeyVaultCertificateCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._password) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contents = undefined;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contents = value.contents;
      this._password = value.password;
    }
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface KeyVaultCertificateCertificatePolicyIssuerParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#name KeyVaultCertificate#name}
  */
  readonly name: string;
}

export function keyVaultCertificateCertificatePolicyIssuerParametersToTerraform(struct?: KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference | KeyVaultCertificateCertificatePolicyIssuerParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicyIssuerParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicyIssuerParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface KeyVaultCertificateCertificatePolicyKeyProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#curve KeyVaultCertificate#curve}
  */
  readonly curve?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#exportable KeyVaultCertificate#exportable}
  */
  readonly exportable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#key_size KeyVaultCertificate#key_size}
  */
  readonly keySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#key_type KeyVaultCertificate#key_type}
  */
  readonly keyType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#reuse_key KeyVaultCertificate#reuse_key}
  */
  readonly reuseKey: boolean | cdktf.IResolvable;
}

export function keyVaultCertificateCertificatePolicyKeyPropertiesToTerraform(struct?: KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference | KeyVaultCertificateCertificatePolicyKeyProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curve: cdktf.stringToTerraform(struct!.curve),
    exportable: cdktf.booleanToTerraform(struct!.exportable),
    key_size: cdktf.numberToTerraform(struct!.keySize),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    reuse_key: cdktf.booleanToTerraform(struct!.reuseKey),
  }
}

export class KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicyKeyProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curve) {
      hasAnyValues = true;
      internalValueResult.curve = this._curve;
    }
    if (this._exportable) {
      hasAnyValues = true;
      internalValueResult.exportable = this._exportable;
    }
    if (this._keySize) {
      hasAnyValues = true;
      internalValueResult.keySize = this._keySize;
    }
    if (this._keyType) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._reuseKey) {
      hasAnyValues = true;
      internalValueResult.reuseKey = this._reuseKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicyKeyProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._curve = undefined;
      this._exportable = undefined;
      this._keySize = undefined;
      this._keyType = undefined;
      this._reuseKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._curve = value.curve;
      this._exportable = value.exportable;
      this._keySize = value.keySize;
      this._keyType = value.keyType;
      this._reuseKey = value.reuseKey;
    }
  }

  // curve - computed: true, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }

  // exportable - computed: false, optional: false, required: true
  private _exportable?: boolean | cdktf.IResolvable; 
  public get exportable() {
    return this.getBooleanAttribute('exportable') as any;
  }
  public set exportable(value: boolean | cdktf.IResolvable) {
    this._exportable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportableInput() {
    return this._exportable;
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // reuse_key - computed: false, optional: false, required: true
  private _reuseKey?: boolean | cdktf.IResolvable; 
  public get reuseKey() {
    return this.getBooleanAttribute('reuse_key') as any;
  }
  public set reuseKey(value: boolean | cdktf.IResolvable) {
    this._reuseKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseKeyInput() {
    return this._reuseKey;
  }
}
export interface KeyVaultCertificateCertificatePolicyLifetimeActionAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#action_type KeyVaultCertificate#action_type}
  */
  readonly actionType: string;
}

export function keyVaultCertificateCertificatePolicyLifetimeActionActionToTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference | KeyVaultCertificateCertificatePolicyLifetimeActionAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
  }
}

export class KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicyLifetimeActionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicyLifetimeActionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
    }
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }
}
export interface KeyVaultCertificateCertificatePolicyLifetimeActionTrigger {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#days_before_expiry KeyVaultCertificate#days_before_expiry}
  */
  readonly daysBeforeExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#lifetime_percentage KeyVaultCertificate#lifetime_percentage}
  */
  readonly lifetimePercentage?: number;
}

export function keyVaultCertificateCertificatePolicyLifetimeActionTriggerToTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference | KeyVaultCertificateCertificatePolicyLifetimeActionTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_before_expiry: cdktf.numberToTerraform(struct!.daysBeforeExpiry),
    lifetime_percentage: cdktf.numberToTerraform(struct!.lifetimePercentage),
  }
}

export class KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicyLifetimeActionTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysBeforeExpiry) {
      hasAnyValues = true;
      internalValueResult.daysBeforeExpiry = this._daysBeforeExpiry;
    }
    if (this._lifetimePercentage) {
      hasAnyValues = true;
      internalValueResult.lifetimePercentage = this._lifetimePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicyLifetimeActionTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysBeforeExpiry = undefined;
      this._lifetimePercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysBeforeExpiry = value.daysBeforeExpiry;
      this._lifetimePercentage = value.lifetimePercentage;
    }
  }

  // days_before_expiry - computed: false, optional: true, required: false
  private _daysBeforeExpiry?: number; 
  public get daysBeforeExpiry() {
    return this.getNumberAttribute('days_before_expiry');
  }
  public set daysBeforeExpiry(value: number) {
    this._daysBeforeExpiry = value;
  }
  public resetDaysBeforeExpiry() {
    this._daysBeforeExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysBeforeExpiryInput() {
    return this._daysBeforeExpiry;
  }

  // lifetime_percentage - computed: false, optional: true, required: false
  private _lifetimePercentage?: number; 
  public get lifetimePercentage() {
    return this.getNumberAttribute('lifetime_percentage');
  }
  public set lifetimePercentage(value: number) {
    this._lifetimePercentage = value;
  }
  public resetLifetimePercentage() {
    this._lifetimePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimePercentageInput() {
    return this._lifetimePercentage;
  }
}
export interface KeyVaultCertificateCertificatePolicyLifetimeAction {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#action KeyVaultCertificate#action}
  */
  readonly action: KeyVaultCertificateCertificatePolicyLifetimeActionAction;
  /**
  * trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#trigger KeyVaultCertificate#trigger}
  */
  readonly trigger: KeyVaultCertificateCertificatePolicyLifetimeActionTrigger;
}

export function keyVaultCertificateCertificatePolicyLifetimeActionToTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: keyVaultCertificateCertificatePolicyLifetimeActionActionToTerraform(struct!.action),
    trigger: keyVaultCertificateCertificatePolicyLifetimeActionTriggerToTerraform(struct!.trigger),
  }
}

export interface KeyVaultCertificateCertificatePolicySecretProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#content_type KeyVaultCertificate#content_type}
  */
  readonly contentType: string;
}

export function keyVaultCertificateCertificatePolicySecretPropertiesToTerraform(struct?: KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference | KeyVaultCertificateCertificatePolicySecretProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
  }
}

export class KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicySecretProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicySecretProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentType = value.contentType;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }
}
export interface KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#dns_names KeyVaultCertificate#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#emails KeyVaultCertificate#emails}
  */
  readonly emails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#upns KeyVaultCertificate#upns}
  */
  readonly upns?: string[];
}

export function keyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesToTerraform(struct?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference | KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsNames),
    emails: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emails),
    upns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.upns),
  }
}

export class KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsNames) {
      hasAnyValues = true;
      internalValueResult.dnsNames = this._dnsNames;
    }
    if (this._emails) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    if (this._upns) {
      hasAnyValues = true;
      internalValueResult.upns = this._upns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsNames = undefined;
      this._emails = undefined;
      this._upns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsNames = value.dnsNames;
      this._emails = value.emails;
      this._upns = value.upns;
    }
  }

  // dns_names - computed: false, optional: true, required: false
  private _dnsNames?: string[]; 
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }
  public set dnsNames(value: string[]) {
    this._dnsNames = value;
  }
  public resetDnsNames() {
    this._dnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames;
  }

  // emails - computed: false, optional: true, required: false
  private _emails?: string[]; 
  public get emails() {
    return this.getListAttribute('emails');
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  public resetEmails() {
    this._emails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }

  // upns - computed: false, optional: true, required: false
  private _upns?: string[]; 
  public get upns() {
    return this.getListAttribute('upns');
  }
  public set upns(value: string[]) {
    this._upns = value;
  }
  public resetUpns() {
    this._upns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upnsInput() {
    return this._upns;
  }
}
export interface KeyVaultCertificateCertificatePolicyX509CertificateProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#extended_key_usage KeyVaultCertificate#extended_key_usage}
  */
  readonly extendedKeyUsage?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#key_usage KeyVaultCertificate#key_usage}
  */
  readonly keyUsage: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#subject KeyVaultCertificate#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#validity_in_months KeyVaultCertificate#validity_in_months}
  */
  readonly validityInMonths: number;
  /**
  * subject_alternative_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#subject_alternative_names KeyVaultCertificate#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames;
}

export function keyVaultCertificateCertificatePolicyX509CertificatePropertiesToTerraform(struct?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference | KeyVaultCertificateCertificatePolicyX509CertificateProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_key_usage: cdktf.listMapper(cdktf.stringToTerraform)(struct!.extendedKeyUsage),
    key_usage: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keyUsage),
    subject: cdktf.stringToTerraform(struct!.subject),
    validity_in_months: cdktf.numberToTerraform(struct!.validityInMonths),
    subject_alternative_names: keyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
  }
}

export class KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicyX509CertificateProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendedKeyUsage) {
      hasAnyValues = true;
      internalValueResult.extendedKeyUsage = this._extendedKeyUsage;
    }
    if (this._keyUsage) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage;
    }
    if (this._subject) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._validityInMonths) {
      hasAnyValues = true;
      internalValueResult.validityInMonths = this._validityInMonths;
    }
    if (this._subjectAlternativeNames?.internalValue) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicyX509CertificateProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extendedKeyUsage = undefined;
      this._keyUsage = undefined;
      this._subject = undefined;
      this._validityInMonths = undefined;
      this._subjectAlternativeNames.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extendedKeyUsage = value.extendedKeyUsage;
      this._keyUsage = value.keyUsage;
      this._subject = value.subject;
      this._validityInMonths = value.validityInMonths;
      this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
    }
  }

  // extended_key_usage - computed: true, optional: true, required: false
  private _extendedKeyUsage?: string[]; 
  public get extendedKeyUsage() {
    return this.getListAttribute('extended_key_usage');
  }
  public set extendedKeyUsage(value: string[]) {
    this._extendedKeyUsage = value;
  }
  public resetExtendedKeyUsage() {
    this._extendedKeyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage;
  }

  // key_usage - computed: false, optional: false, required: true
  private _keyUsage?: string[]; 
  public get keyUsage() {
    return this.getListAttribute('key_usage');
  }
  public set keyUsage(value: string[]) {
    this._keyUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // validity_in_months - computed: false, optional: false, required: true
  private _validityInMonths?: number; 
  public get validityInMonths() {
    return this.getNumberAttribute('validity_in_months');
  }
  public set validityInMonths(value: number) {
    this._validityInMonths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInMonthsInput() {
    return this._validityInMonths;
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames = new KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference(this as any, "subject_alternative_names", true);
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames) {
    this._subjectAlternativeNames.internalValue = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames.internalValue;
  }
}
export interface KeyVaultCertificateCertificatePolicy {
  /**
  * issuer_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#issuer_parameters KeyVaultCertificate#issuer_parameters}
  */
  readonly issuerParameters: KeyVaultCertificateCertificatePolicyIssuerParameters;
  /**
  * key_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#key_properties KeyVaultCertificate#key_properties}
  */
  readonly keyProperties: KeyVaultCertificateCertificatePolicyKeyProperties;
  /**
  * lifetime_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#lifetime_action KeyVaultCertificate#lifetime_action}
  */
  readonly lifetimeAction?: KeyVaultCertificateCertificatePolicyLifetimeAction[];
  /**
  * secret_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#secret_properties KeyVaultCertificate#secret_properties}
  */
  readonly secretProperties: KeyVaultCertificateCertificatePolicySecretProperties;
  /**
  * x509_certificate_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#x509_certificate_properties KeyVaultCertificate#x509_certificate_properties}
  */
  readonly x509CertificateProperties?: KeyVaultCertificateCertificatePolicyX509CertificateProperties;
}

export function keyVaultCertificateCertificatePolicyToTerraform(struct?: KeyVaultCertificateCertificatePolicyOutputReference | KeyVaultCertificateCertificatePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer_parameters: keyVaultCertificateCertificatePolicyIssuerParametersToTerraform(struct!.issuerParameters),
    key_properties: keyVaultCertificateCertificatePolicyKeyPropertiesToTerraform(struct!.keyProperties),
    lifetime_action: cdktf.listMapper(keyVaultCertificateCertificatePolicyLifetimeActionToTerraform)(struct!.lifetimeAction),
    secret_properties: keyVaultCertificateCertificatePolicySecretPropertiesToTerraform(struct!.secretProperties),
    x509_certificate_properties: keyVaultCertificateCertificatePolicyX509CertificatePropertiesToTerraform(struct!.x509CertificateProperties),
  }
}

export class KeyVaultCertificateCertificatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuerParameters?.internalValue) {
      hasAnyValues = true;
      internalValueResult.issuerParameters = this._issuerParameters?.internalValue;
    }
    if (this._keyProperties?.internalValue) {
      hasAnyValues = true;
      internalValueResult.keyProperties = this._keyProperties?.internalValue;
    }
    if (this._lifetimeAction) {
      hasAnyValues = true;
      internalValueResult.lifetimeAction = this._lifetimeAction;
    }
    if (this._secretProperties?.internalValue) {
      hasAnyValues = true;
      internalValueResult.secretProperties = this._secretProperties?.internalValue;
    }
    if (this._x509CertificateProperties?.internalValue) {
      hasAnyValues = true;
      internalValueResult.x509CertificateProperties = this._x509CertificateProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuerParameters.internalValue = undefined;
      this._keyProperties.internalValue = undefined;
      this._lifetimeAction = undefined;
      this._secretProperties.internalValue = undefined;
      this._x509CertificateProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuerParameters.internalValue = value.issuerParameters;
      this._keyProperties.internalValue = value.keyProperties;
      this._lifetimeAction = value.lifetimeAction;
      this._secretProperties.internalValue = value.secretProperties;
      this._x509CertificateProperties.internalValue = value.x509CertificateProperties;
    }
  }

  // issuer_parameters - computed: false, optional: false, required: true
  private _issuerParameters = new KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference(this as any, "issuer_parameters", true);
  public get issuerParameters() {
    return this._issuerParameters;
  }
  public putIssuerParameters(value: KeyVaultCertificateCertificatePolicyIssuerParameters) {
    this._issuerParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerParametersInput() {
    return this._issuerParameters.internalValue;
  }

  // key_properties - computed: false, optional: false, required: true
  private _keyProperties = new KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference(this as any, "key_properties", true);
  public get keyProperties() {
    return this._keyProperties;
  }
  public putKeyProperties(value: KeyVaultCertificateCertificatePolicyKeyProperties) {
    this._keyProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPropertiesInput() {
    return this._keyProperties.internalValue;
  }

  // lifetime_action - computed: false, optional: true, required: false
  private _lifetimeAction?: KeyVaultCertificateCertificatePolicyLifetimeAction[]; 
  public get lifetimeAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lifetime_action') as any;
  }
  public set lifetimeAction(value: KeyVaultCertificateCertificatePolicyLifetimeAction[]) {
    this._lifetimeAction = value;
  }
  public resetLifetimeAction() {
    this._lifetimeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeActionInput() {
    return this._lifetimeAction;
  }

  // secret_properties - computed: false, optional: false, required: true
  private _secretProperties = new KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference(this as any, "secret_properties", true);
  public get secretProperties() {
    return this._secretProperties;
  }
  public putSecretProperties(value: KeyVaultCertificateCertificatePolicySecretProperties) {
    this._secretProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPropertiesInput() {
    return this._secretProperties.internalValue;
  }

  // x509_certificate_properties - computed: false, optional: true, required: false
  private _x509CertificateProperties = new KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference(this as any, "x509_certificate_properties", true);
  public get x509CertificateProperties() {
    return this._x509CertificateProperties;
  }
  public putX509CertificateProperties(value: KeyVaultCertificateCertificatePolicyX509CertificateProperties) {
    this._x509CertificateProperties.internalValue = value;
  }
  public resetX509CertificateProperties() {
    this._x509CertificateProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509CertificatePropertiesInput() {
    return this._x509CertificateProperties.internalValue;
  }
}
export interface KeyVaultCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#create KeyVaultCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#delete KeyVaultCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#read KeyVaultCertificate#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#update KeyVaultCertificate#update}
  */
  readonly update?: string;
}

export function keyVaultCertificateTimeoutsToTerraform(struct?: KeyVaultCertificateTimeoutsOutputReference | KeyVaultCertificateTimeouts): any {
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

export class KeyVaultCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KeyVaultCertificateTimeouts | undefined {
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

  public set internalValue(value: KeyVaultCertificateTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html azurerm_key_vault_certificate}
*/
export class KeyVaultCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_key_vault_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html azurerm_key_vault_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._tags = config.tags;
    this._certificate.internalValue = config.certificate;
    this._certificatePolicy.internalValue = config.certificatePolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_attribute - computed: true, optional: false, required: false
  public certificateAttribute(index: string) {
    return new KeyVaultCertificateCertificateAttribute(this, 'certificate_attribute', index);
  }

  // certificate_data - computed: true, optional: false, required: false
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }

  // certificate_data_base64 - computed: true, optional: false, required: false
  public get certificateDataBase64() {
    return this.getStringAttribute('certificate_data_base64');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
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

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
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

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new KeyVaultCertificateCertificateOutputReference(this as any, "certificate", true);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: KeyVaultCertificateCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // certificate_policy - computed: false, optional: true, required: false
  private _certificatePolicy = new KeyVaultCertificateCertificatePolicyOutputReference(this as any, "certificate_policy", true);
  public get certificatePolicy() {
    return this._certificatePolicy;
  }
  public putCertificatePolicy(value: KeyVaultCertificateCertificatePolicy) {
    this._certificatePolicy.internalValue = value;
  }
  public resetCertificatePolicy() {
    this._certificatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePolicyInput() {
    return this._certificatePolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KeyVaultCertificateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KeyVaultCertificateTimeouts) {
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
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      certificate: keyVaultCertificateCertificateToTerraform(this._certificate.internalValue),
      certificate_policy: keyVaultCertificateCertificatePolicyToTerraform(this._certificatePolicy.internalValue),
      timeouts: keyVaultCertificateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
