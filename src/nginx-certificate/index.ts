/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/nginx_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NginxCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/nginx_certificate#certificate_virtual_path NginxCertificate#certificate_virtual_path}
  */
  readonly certificateVirtualPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/nginx_certificate#id NginxCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/nginx_certificate#key_vault_secret_id NginxCertificate#key_vault_secret_id}
  */
  readonly keyVaultSecretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/nginx_certificate#key_virtual_path NginxCertificate#key_virtual_path}
  */
  readonly keyVirtualPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/nginx_certificate#name NginxCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/nginx_certificate#nginx_deployment_id NginxCertificate#nginx_deployment_id}
  */
  readonly nginxDeploymentId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/nginx_certificate#timeouts NginxCertificate#timeouts}
  */
  readonly timeouts?: NginxCertificateTimeouts;
}
export interface NginxCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/nginx_certificate#create NginxCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/nginx_certificate#delete NginxCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/nginx_certificate#read NginxCertificate#read}
  */
  readonly read?: string;
}

export function nginxCertificateTimeoutsToTerraform(struct?: NginxCertificateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class NginxCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NginxCertificateTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NginxCertificateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/nginx_certificate azurerm_nginx_certificate}
*/
export class NginxCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_nginx_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/nginx_certificate azurerm_nginx_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NginxCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: NginxCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_nginx_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.58.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateVirtualPath = config.certificateVirtualPath;
    this._id = config.id;
    this._keyVaultSecretId = config.keyVaultSecretId;
    this._keyVirtualPath = config.keyVirtualPath;
    this._name = config.name;
    this._nginxDeploymentId = config.nginxDeploymentId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_virtual_path - computed: false, optional: false, required: true
  private _certificateVirtualPath?: string; 
  public get certificateVirtualPath() {
    return this.getStringAttribute('certificate_virtual_path');
  }
  public set certificateVirtualPath(value: string) {
    this._certificateVirtualPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateVirtualPathInput() {
    return this._certificateVirtualPath;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key_vault_secret_id - computed: false, optional: false, required: true
  private _keyVaultSecretId?: string; 
  public get keyVaultSecretId() {
    return this.getStringAttribute('key_vault_secret_id');
  }
  public set keyVaultSecretId(value: string) {
    this._keyVaultSecretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultSecretIdInput() {
    return this._keyVaultSecretId;
  }

  // key_virtual_path - computed: false, optional: false, required: true
  private _keyVirtualPath?: string; 
  public get keyVirtualPath() {
    return this.getStringAttribute('key_virtual_path');
  }
  public set keyVirtualPath(value: string) {
    this._keyVirtualPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVirtualPathInput() {
    return this._keyVirtualPath;
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

  // nginx_deployment_id - computed: false, optional: false, required: true
  private _nginxDeploymentId?: string; 
  public get nginxDeploymentId() {
    return this.getStringAttribute('nginx_deployment_id');
  }
  public set nginxDeploymentId(value: string) {
    this._nginxDeploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxDeploymentIdInput() {
    return this._nginxDeploymentId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NginxCertificateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NginxCertificateTimeouts) {
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
      certificate_virtual_path: cdktf.stringToTerraform(this._certificateVirtualPath),
      id: cdktf.stringToTerraform(this._id),
      key_vault_secret_id: cdktf.stringToTerraform(this._keyVaultSecretId),
      key_virtual_path: cdktf.stringToTerraform(this._keyVirtualPath),
      name: cdktf.stringToTerraform(this._name),
      nginx_deployment_id: cdktf.stringToTerraform(this._nginxDeploymentId),
      timeouts: nginxCertificateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
