// https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html#end_ip RedisFirewallRule#end_ip}
  */
  readonly endIp: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html#name RedisFirewallRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html#redis_cache_name RedisFirewallRule#redis_cache_name}
  */
  readonly redisCacheName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html#resource_group_name RedisFirewallRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html#start_ip RedisFirewallRule#start_ip}
  */
  readonly startIp: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html#timeouts RedisFirewallRule#timeouts}
  */
  readonly timeouts?: RedisFirewallRuleTimeouts;
}
export interface RedisFirewallRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html#create RedisFirewallRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html#delete RedisFirewallRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html#read RedisFirewallRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html#update RedisFirewallRule#update}
  */
  readonly update?: string;
}

function redisFirewallRuleTimeoutsToTerraform(struct?: RedisFirewallRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html azurerm_redis_firewall_rule}
*/
export class RedisFirewallRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html azurerm_redis_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisFirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: RedisFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_redis_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endIp = config.endIp;
    this._name = config.name;
    this._redisCacheName = config.redisCacheName;
    this._resourceGroupName = config.resourceGroupName;
    this._startIp = config.startIp;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_ip - computed: false, optional: false, required: true
  private _endIp: string;
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // redis_cache_name - computed: false, optional: false, required: true
  private _redisCacheName: string;
  public get redisCacheName() {
    return this.getStringAttribute('redis_cache_name');
  }
  public set redisCacheName(value: string) {
    this._redisCacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisCacheNameInput() {
    return this._redisCacheName
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

  // start_ip - computed: false, optional: false, required: true
  private _startIp: string;
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RedisFirewallRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RedisFirewallRuleTimeouts ) {
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
      end_ip: cdktf.stringToTerraform(this._endIp),
      name: cdktf.stringToTerraform(this._name),
      redis_cache_name: cdktf.stringToTerraform(this._redisCacheName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      start_ip: cdktf.stringToTerraform(this._startIp),
      timeouts: redisFirewallRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
