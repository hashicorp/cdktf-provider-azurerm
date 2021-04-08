// https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudAppConfig extends cdktf.TerraformMetaArguments {
  readonly httpsOnly?: boolean;
  readonly isPublic?: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serviceName: string;
  readonly tlsEnabled?: boolean;
  /** identity block */
  readonly identity?: SpringCloudAppIdentity[];
  /** persistent_disk block */
  readonly persistentDisk?: SpringCloudAppPersistentDisk[];
  /** timeouts block */
  readonly timeouts?: SpringCloudAppTimeouts;
}
export interface SpringCloudAppIdentity {
  readonly type?: string;
}

function springCloudAppIdentityToTerraform(struct?: SpringCloudAppIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface SpringCloudAppPersistentDisk {
  readonly mountPath?: string;
  readonly sizeInGb: number;
}

function springCloudAppPersistentDiskToTerraform(struct?: SpringCloudAppPersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    size_in_gb: cdktf.numberToTerraform(struct!.sizeInGb),
  }
}

export interface SpringCloudAppTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function springCloudAppTimeoutsToTerraform(struct?: SpringCloudAppTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SpringCloudApp extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SpringCloudAppConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_app',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._httpsOnly = config.httpsOnly;
    this._isPublic = config.isPublic;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceName = config.serviceName;
    this._tlsEnabled = config.tlsEnabled;
    this._identity = config.identity;
    this._persistentDisk = config.persistentDisk;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // https_only - computed: false, optional: true, required: false
  private _httpsOnly?: boolean;
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only');
  }
  public set httpsOnly(value: boolean ) {
    this._httpsOnly = value;
  }
  public resetHttpsOnly() {
    this._httpsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsOnlyInput() {
    return this._httpsOnly
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean;
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean ) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // tls_enabled - computed: false, optional: true, required: false
  private _tlsEnabled?: boolean;
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean ) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: SpringCloudAppIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: SpringCloudAppIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // persistent_disk - computed: false, optional: true, required: false
  private _persistentDisk?: SpringCloudAppPersistentDisk[];
  public get persistentDisk() {
    return this.interpolationForAttribute('persistent_disk') as any;
  }
  public set persistentDisk(value: SpringCloudAppPersistentDisk[] ) {
    this._persistentDisk = value;
  }
  public resetPersistentDisk() {
    this._persistentDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentDiskInput() {
    return this._persistentDisk
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpringCloudAppTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SpringCloudAppTimeouts ) {
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
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_name: cdktf.stringToTerraform(this._serviceName),
      tls_enabled: cdktf.booleanToTerraform(this._tlsEnabled),
      identity: cdktf.listMapper(springCloudAppIdentityToTerraform)(this._identity),
      persistent_disk: cdktf.listMapper(springCloudAppPersistentDiskToTerraform)(this._persistentDisk),
      timeouts: springCloudAppTimeoutsToTerraform(this._timeouts),
    };
  }
}
