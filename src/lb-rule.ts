// https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#backend_address_pool_id LbRule#backend_address_pool_id}
  */
  readonly backendAddressPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#backend_address_pool_ids LbRule#backend_address_pool_ids}
  */
  readonly backendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#backend_port LbRule#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#disable_outbound_snat LbRule#disable_outbound_snat}
  */
  readonly disableOutboundSnat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#enable_floating_ip LbRule#enable_floating_ip}
  */
  readonly enableFloatingIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#enable_tcp_reset LbRule#enable_tcp_reset}
  */
  readonly enableTcpReset?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#frontend_ip_configuration_name LbRule#frontend_ip_configuration_name}
  */
  readonly frontendIpConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#frontend_port LbRule#frontend_port}
  */
  readonly frontendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#idle_timeout_in_minutes LbRule#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#load_distribution LbRule#load_distribution}
  */
  readonly loadDistribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#loadbalancer_id LbRule#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#name LbRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#probe_id LbRule#probe_id}
  */
  readonly probeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#protocol LbRule#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#resource_group_name LbRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#timeouts LbRule#timeouts}
  */
  readonly timeouts?: LbRuleTimeouts;
}
export interface LbRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#create LbRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#delete LbRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#read LbRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html#update LbRule#update}
  */
  readonly update?: string;
}

export function lbRuleTimeoutsToTerraform(struct?: LbRuleTimeoutsOutputReference | LbRuleTimeouts): any {
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

export class LbRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LbRuleTimeouts | undefined {
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

  public set internalValue(value: LbRuleTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html azurerm_lb_rule}
*/
export class LbRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_lb_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html azurerm_lb_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbRuleConfig
  */
  public constructor(scope: Construct, id: string, config: LbRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lb_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendAddressPoolId = config.backendAddressPoolId;
    this._backendAddressPoolIds = config.backendAddressPoolIds;
    this._backendPort = config.backendPort;
    this._disableOutboundSnat = config.disableOutboundSnat;
    this._enableFloatingIp = config.enableFloatingIp;
    this._enableTcpReset = config.enableTcpReset;
    this._frontendIpConfigurationName = config.frontendIpConfigurationName;
    this._frontendPort = config.frontendPort;
    this._idleTimeoutInMinutes = config.idleTimeoutInMinutes;
    this._loadDistribution = config.loadDistribution;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._probeId = config.probeId;
    this._protocol = config.protocol;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_address_pool_id - computed: true, optional: true, required: false
  private _backendAddressPoolId?: string; 
  public get backendAddressPoolId() {
    return this.getStringAttribute('backend_address_pool_id');
  }
  public set backendAddressPoolId(value: string) {
    this._backendAddressPoolId = value;
  }
  public resetBackendAddressPoolId() {
    this._backendAddressPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressPoolIdInput() {
    return this._backendAddressPoolId;
  }

  // backend_address_pool_ids - computed: true, optional: true, required: false
  private _backendAddressPoolIds?: string[]; 
  public get backendAddressPoolIds() {
    return this.getListAttribute('backend_address_pool_ids');
  }
  public set backendAddressPoolIds(value: string[]) {
    this._backendAddressPoolIds = value;
  }
  public resetBackendAddressPoolIds() {
    this._backendAddressPoolIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressPoolIdsInput() {
    return this._backendAddressPoolIds;
  }

  // backend_port - computed: false, optional: false, required: true
  private _backendPort?: number; 
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPortInput() {
    return this._backendPort;
  }

  // disable_outbound_snat - computed: false, optional: true, required: false
  private _disableOutboundSnat?: boolean | cdktf.IResolvable; 
  public get disableOutboundSnat() {
    return this.getBooleanAttribute('disable_outbound_snat') as any;
  }
  public set disableOutboundSnat(value: boolean | cdktf.IResolvable) {
    this._disableOutboundSnat = value;
  }
  public resetDisableOutboundSnat() {
    this._disableOutboundSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOutboundSnatInput() {
    return this._disableOutboundSnat;
  }

  // enable_floating_ip - computed: false, optional: true, required: false
  private _enableFloatingIp?: boolean | cdktf.IResolvable; 
  public get enableFloatingIp() {
    return this.getBooleanAttribute('enable_floating_ip') as any;
  }
  public set enableFloatingIp(value: boolean | cdktf.IResolvable) {
    this._enableFloatingIp = value;
  }
  public resetEnableFloatingIp() {
    this._enableFloatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFloatingIpInput() {
    return this._enableFloatingIp;
  }

  // enable_tcp_reset - computed: false, optional: true, required: false
  private _enableTcpReset?: boolean | cdktf.IResolvable; 
  public get enableTcpReset() {
    return this.getBooleanAttribute('enable_tcp_reset') as any;
  }
  public set enableTcpReset(value: boolean | cdktf.IResolvable) {
    this._enableTcpReset = value;
  }
  public resetEnableTcpReset() {
    this._enableTcpReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTcpResetInput() {
    return this._enableTcpReset;
  }

  // frontend_ip_configuration_id - computed: true, optional: false, required: false
  public get frontendIpConfigurationId() {
    return this.getStringAttribute('frontend_ip_configuration_id');
  }

  // frontend_ip_configuration_name - computed: false, optional: false, required: true
  private _frontendIpConfigurationName?: string; 
  public get frontendIpConfigurationName() {
    return this.getStringAttribute('frontend_ip_configuration_name');
  }
  public set frontendIpConfigurationName(value: string) {
    this._frontendIpConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendIpConfigurationNameInput() {
    return this._frontendIpConfigurationName;
  }

  // frontend_port - computed: false, optional: false, required: true
  private _frontendPort?: number; 
  public get frontendPort() {
    return this.getNumberAttribute('frontend_port');
  }
  public set frontendPort(value: number) {
    this._frontendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortInput() {
    return this._frontendPort;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout_in_minutes - computed: true, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // load_distribution - computed: true, optional: true, required: false
  private _loadDistribution?: string; 
  public get loadDistribution() {
    return this.getStringAttribute('load_distribution');
  }
  public set loadDistribution(value: string) {
    this._loadDistribution = value;
  }
  public resetLoadDistribution() {
    this._loadDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadDistributionInput() {
    return this._loadDistribution;
  }

  // loadbalancer_id - computed: false, optional: false, required: true
  private _loadbalancerId?: string; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId;
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

  // probe_id - computed: true, optional: true, required: false
  private _probeId?: string; 
  public get probeId() {
    return this.getStringAttribute('probe_id');
  }
  public set probeId(value: string) {
    this._probeId = value;
  }
  public resetProbeId() {
    this._probeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeIdInput() {
    return this._probeId;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LbRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LbRuleTimeouts) {
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
      backend_address_pool_id: cdktf.stringToTerraform(this._backendAddressPoolId),
      backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._backendAddressPoolIds),
      backend_port: cdktf.numberToTerraform(this._backendPort),
      disable_outbound_snat: cdktf.booleanToTerraform(this._disableOutboundSnat),
      enable_floating_ip: cdktf.booleanToTerraform(this._enableFloatingIp),
      enable_tcp_reset: cdktf.booleanToTerraform(this._enableTcpReset),
      frontend_ip_configuration_name: cdktf.stringToTerraform(this._frontendIpConfigurationName),
      frontend_port: cdktf.numberToTerraform(this._frontendPort),
      idle_timeout_in_minutes: cdktf.numberToTerraform(this._idleTimeoutInMinutes),
      load_distribution: cdktf.stringToTerraform(this._loadDistribution),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      probe_id: cdktf.stringToTerraform(this._probeId),
      protocol: cdktf.stringToTerraform(this._protocol),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: lbRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
