// https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudAppRedisAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#name SpringCloudAppRedisAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#redis_access_key SpringCloudAppRedisAssociation#redis_access_key}
  */
  readonly redisAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#redis_cache_id SpringCloudAppRedisAssociation#redis_cache_id}
  */
  readonly redisCacheId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#spring_cloud_app_id SpringCloudAppRedisAssociation#spring_cloud_app_id}
  */
  readonly springCloudAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#ssl_enabled SpringCloudAppRedisAssociation#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#timeouts SpringCloudAppRedisAssociation#timeouts}
  */
  readonly timeouts?: SpringCloudAppRedisAssociationTimeouts;
}
export interface SpringCloudAppRedisAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#create SpringCloudAppRedisAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#delete SpringCloudAppRedisAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#read SpringCloudAppRedisAssociation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#update SpringCloudAppRedisAssociation#update}
  */
  readonly update?: string;
}

function springCloudAppRedisAssociationTimeoutsToTerraform(struct?: SpringCloudAppRedisAssociationTimeoutsOutputReference | SpringCloudAppRedisAssociationTimeouts): any {
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

export class SpringCloudAppRedisAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html azurerm_spring_cloud_app_redis_association}
*/
export class SpringCloudAppRedisAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_spring_cloud_app_redis_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html azurerm_spring_cloud_app_redis_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudAppRedisAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudAppRedisAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_app_redis_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._redisAccessKey = config.redisAccessKey;
    this._redisCacheId = config.redisCacheId;
    this._springCloudAppId = config.springCloudAppId;
    this._sslEnabled = config.sslEnabled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    return this._name
  }

  // redis_access_key - computed: false, optional: false, required: true
  private _redisAccessKey?: string; 
  public get redisAccessKey() {
    return this.getStringAttribute('redis_access_key');
  }
  public set redisAccessKey(value: string) {
    this._redisAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisAccessKeyInput() {
    return this._redisAccessKey
  }

  // redis_cache_id - computed: false, optional: false, required: true
  private _redisCacheId?: string; 
  public get redisCacheId() {
    return this.getStringAttribute('redis_cache_id');
  }
  public set redisCacheId(value: string) {
    this._redisCacheId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisCacheIdInput() {
    return this._redisCacheId
  }

  // spring_cloud_app_id - computed: false, optional: false, required: true
  private _springCloudAppId?: string; 
  public get springCloudAppId() {
    return this.getStringAttribute('spring_cloud_app_id');
  }
  public set springCloudAppId(value: string) {
    this._springCloudAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudAppIdInput() {
    return this._springCloudAppId
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled') as any;
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpringCloudAppRedisAssociationTimeouts | undefined; 
  private __timeoutsOutput = new SpringCloudAppRedisAssociationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SpringCloudAppRedisAssociationTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      redis_access_key: cdktf.stringToTerraform(this._redisAccessKey),
      redis_cache_id: cdktf.stringToTerraform(this._redisCacheId),
      spring_cloud_app_id: cdktf.stringToTerraform(this._springCloudAppId),
      ssl_enabled: cdktf.booleanToTerraform(this._sslEnabled),
      timeouts: springCloudAppRedisAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
